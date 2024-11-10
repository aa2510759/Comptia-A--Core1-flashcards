import React from 'react';

function Flashcard({ frontText, backText }) {
  return (
    <div className="flashcard">
      <div className="flashcard-inner">
        <div className="flashcard-front">
          {frontText}
        </div>
        <div className="flashcard-back">
          {backText}
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
