import React from 'react';
// highlightErrors
export const highlightErrors = (transcript, correctText) => {
  const userWords = transcript.split(' ');
  const correctWords = correctText.split(' ');

  const highlightedText = userWords.map((word, index) => {
    if (correctWords[index] !== word) {
      return <span key={index} style={{ color: 'red' }}>{word} </span>;
    }
    return <span key={index}>{word} </span>;
  });

  return highlightedText;
};