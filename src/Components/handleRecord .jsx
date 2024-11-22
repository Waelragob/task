import { speak } from './speak';
import listening from '../assets/img/listening.png';
import talking from '../assets/img/talking.png'; 
import success from '../assets/img/success.png'; 
import wrong from '../assets/img/wrong.png'; 

const correctText = "أشهد أنه لا إله إلا الله. وأشهد أنه محمدا رسول الله.";
const correctTextLatin = "Ashhadu an la ilaha illa Allah wa ashhadu anna Muhammadur rasul Allah";
// handleRecord
export const handleRecord = (recognition, setIsRecording, setCurrentImage, setStep, setTranscript, setNativeLanguage, step) => {
  setIsRecording(true);
  setCurrentImage(listening);

  recognition.onstart = () => {
    console.log('Voice recognition started. Try speaking into the microphone.');
    if (step === 0) {
      speak("هل انت مستعد لنطق الشهادة؟");
    } else if (step === 1) {
      speak("ما هي لغتك الأم؟");
    }
  };

  recognition.onresult = (event) => {
    const result = event.results[0][0].transcript;
    setTranscript(result);
    console.log('You said: ', result);
    
    if (step === 0) {
      if (result.includes("نعم")) {
        setStep(1);
        setCurrentImage(talking);
        speak("أشهد أنه لا إله إلا الله. وأشهد أنه  محمدا رسول الله.");
      } else {
        speak("يرجى الرد بنعم إذا كنت مستعدًا.");
      }
    } else if (step === 1) {
      setNativeLanguage(result);
      speak(`حسنًا، لنبدأ بتلقين الشهادة بلغتك الأم: ${correctText}`);
      setStep(2);
    } else if (step === 2) {
      // يتم التحقق من النطق الصحيح هنا
      if (result.trim() === correctText) {
        setCurrentImage(success);
        speak("أحسنت، نطقك صحيح!");
        setStep(3); // الانتقال إلى خطوة النطق باللغة اللاتينية
      } else {
        setCurrentImage(wrong);
        speak("هناك أخطاء في النطق، دعني أساعدك.");
      }
    } else if (step === 3) {
      // تحقق من النطق باللغة اللاتينية
      if (result.trim() === correctTextLatin) {
        setCurrentImage(success);
        speak("أحسنت، نطقك باللغة اللاتينية صحيح!");
      } else {
        setCurrentImage(wrong);
        speak("هناك أخطاء في النطق باللغة اللاتينية، دعني أساعدك.");
      }
    }
  };

  recognition.onend = () => {
    console.log('Voice recognition ended.');
    setIsRecording(false);
  };

  recognition.onerror = (event) => {
    console.error('Error occurred in recognition: ' + event.error);
    setIsRecording(false);
    setCurrentImage(wrong);
    speak("حدث خطأ أثناء التعرف على الصوت. حاول مرة أخرى.");
  };

  // بدء التعرف على الصوت
  recognition.start();
};