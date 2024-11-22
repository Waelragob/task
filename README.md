# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
<!-- د  .

1. Section Component
هذا هو المكون الرئيسي الذي يحتوي على كل المنطق والواجهة.

المتغيرات المستخدمة:
isRecording: حالة تحدد ما إذا كان التسجيل جارٍ أم لا.
transcript: النص الناتج عن التعرف على الصوت.
step: يحدد المرحلة الحالية في عملية التسجيل (مثل الاستعداد، إدخال اللغة الأم، إلخ).
currentImage: الصورة الحالية المعروضة بناءً على الحالة (استماع، نجاح، خطأ، إلخ).
nativeLanguage: اللغة الأم للمستخدم.
2. handleRecord
هذه الدالة تبدأ عملية التسجيل باستخدام واجهة SpeechRecognition.

setIsRecording(true): تعيين حالة التسجيل إلى true.
setCurrentImage(listening): تعيين الصورة الحالية إلى صورة الاستماع.
recognition.onstart: تعيين حدث يتم تنفيذه عند بدء التعرف على الصوت، حيث يتم التحدث إلى المستخدم.
recognition.onresult: تعيين حدث يتم تنفيذه عند الحصول على نتيجة من التعرف على الصوت. هنا يتم معالجة النص الناتج وتحديث الحالة بناءً على المرحلة الحالية.
recognition.onend: تعيين حدث يتم تنفيذه عند انتهاء التعرف على الصوت، حيث يتم تعيين حالة التسجيل إلى false.
recognition.onerror: تعيين حدث يتم تنفيذه عند حدوث خطأ في التعرف على الصوت، حيث يتم إظهار رسالة خطأ.
recognition.start(): بدء عملية التعرف على الصوت.
3. speak
هذه الدالة تستخدم لتحويل النص إلى كلام.

const utterance = new SpeechSynthesisUtterance(text): إنشاء كائن جديد لتحويل النص إلى كلام.
window.speechSynthesis.speak(utterance): تشغيل الصوت.
4. highlightErrors
هذه الدالة تسلط الضوء على الكلمات الخاطئة في النص الناتج.

const userWords = transcript.split(' '): تقسيم النص الناتج إلى كلمات.
const correctWords = correctText.split(' '): تقسيم النص الصحيح إلى كلمات.
highlightedText: يتم إنشاء مصفوفة جديدة تحتوي على الكلمات مع تسليط الضوء على الأخطاء (باللون الأحمر) إذا لم تتطابق مع الكلمات الصحيحة.
return highlightedText: إرجاع النص المميز.
5. handleStop
هذه الدالة مخصصة لإيقاف التسجيل. حاليًا، لا تحتوي على أي منطق، ولكن يمكن استخدامها لإيقاف عملية التعرف على الصوت إذا تم تنفيذ ذلك.

6. useEffect
تستخدم هذه الدالة لمراقبة حالة isRecording.

if (isRecording): إذا كانت حالة التسجيل true، يتم تعيين الصورة الحالية إلى صورة الاستماع.
7. JSX Return
يحتوي على واجهة المستخدم:

Row و Col: يستخدمان من مكتبة react-bootstrap لتخطيط الصفحة.
motion.img: صورة متحركة تستخدم مكتبة framer-motion لتطبيق تأثيرات التلاشي.
Button: زران، واحد لتسجيل الشهادة وآخر لإيقاف التسجيل.
highlightErrors(): يتم استدعاؤها لعرض النص الناتج مع تسليط الضوء على الأخطاء.
step === 1: إذا كانت المرحلة الحالية هي 1، يتم عرض اللغة الأم المدخلة. -->
<!-- تشغيل الكود ننتقل الى ملف  عن طريق محرر التيرمنال ونكتب  cd my-react-app  ثم نكتب  npm run dev 
اولا نضغط على الزر ثم يجاوب النظام عندما ينتهي برسالة هل انت مستعد لنطق الشهادة يرجى الرد ب نعم اذا كنت مستعد يتم النقر على الزر مرة اخرى يتم القول نعم ثم النقر مرة اخرى يتم نطق الشهادة من قبل النظام ثم ننقر الزر ويلفظها المستخدم ويتم عرض الغلط 
ملاحظة يجب تحميل قبل بدأ تنفيذ الكود ملف  node-modules  عن طريق تعليمة  npm i


 -->