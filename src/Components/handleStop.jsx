// handleStop
export const handleStop = (recognition, setIsRecording, setCurrentImage) => {
    recognition.stop(); 
    setIsRecording(false); 
    setCurrentImage(success); 
  };