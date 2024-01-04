import React from "react";

export default function SectionHeader({ children, position }) {

    
  const WrapWordsInSpan = (text) => {
    const wordsArray = text.split(" ");

    const wrappedText = wordsArray.map((word, index) => (
      <span key={"headers_span" + index}>
        {word}
        {index !== wordsArray.length - 1 && " "}{" "}
      </span>
    ));
    return wrappedText
  };

  return (
    <header style={{textAlign: position}} className="section-header">
      {WrapWordsInSpan(children)}
    </header>
  );
}
