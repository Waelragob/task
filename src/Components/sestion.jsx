import React, { useState, useEffect, useContext } from 'react'; // إضافة useContext
import { Button, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
// import img
import success from "../assets/img/success.png";
import listening from "../assets/img/listening.png";
import talking from "../assets/img/talking.png";
import wrong from "../assets/img/wrong.png";
// import function help
import { handleRecord } from './handleRecord ';
import { handleStop } from './handleStop';
import { highlightErrors } from './highlightErrors';
import { ThemeContext } from '../Conteex/ThemeContext';

function Section() {
  // hooks
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [step, setStep] = useState(0);
  const [currentImage, setCurrentImage] = useState(success);
  const [nativeLanguage, setNativeLanguage] = useState('');

  const correctText = "أشهد أنه لا إله إلا الله. وأشهد انه محمدا رسول الله.";
  // context 
  const { theme, toggleTheme } = useContext(ThemeContext);

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = 'ar-SA';

  const handleStartRecord = () => {
    handleRecord(recognition, setIsRecording, setCurrentImage, setStep, setTranscript, setNativeLanguage, step);
  };

  const handleStopRecord = () => {
    handleStop(recognition, setIsRecording, setCurrentImage);
  };

  useEffect(() => {
    if (isRecording) {
      setCurrentImage(listening);
    } else {
      setCurrentImage(success);
    }
  }, [isRecording]);

  return (
    <Row className="mt-5 pt-5 m-auto">
      <Col md={12} className="text-center">
        <h1 className="display-4 mb-4">SHAHADA</h1>
        <p className="lead mb-5">Welcome To The New Phase Of Your Life</p>
        
        <motion.img 
           src={currentImage} 
           alt="Current State" 
           style={{ width: "237px", height: "188px" , padding:"10px", gap:"10px" , borderreduse:"20px" ,  }} 
           initial={{ opacity: 0 }} 
           animate={{ opacity: 1 }} 
           transition={{ duration: 0.5 }} 
           className='mb-3'
        />
        <div className='button'>
          <Button 
            variant={theme === 'dark' ? "light" : "dark"} // تغيير اللون بناءً على الوضع
            className="mb-3 btn-voice"  
            onClick={handleStartRecord} 
            disabled={isRecording}
          >
            Record Your Certificate
          </Button>
          <Button 
            variant={theme === 'dark' ? "outline-light" : "outline-dark"} // تغيير اللون بناءً على الوضع
            className="mb-3 btn-more"     
            onClick={handleStopRecord} 
            disabled={!isRecording}
          >
            Stop Recording
          </Button>
        </div>

        <div className="transcript mt-3">
          <p>{highlightErrors(transcript, correctText)}</p>
        </div>

        {step === 1 && (
          <div className="native-language mt-3">
            <p>لغتك الأم: {nativeLanguage}</p>
          </div>
        )}
      </Col>
    </Row>
  );
}

export default Section;