import React, { useState, useEffect } from "react";

function TypingText() {
  const text = "Aspiring AI Engineer & Full Stack Developer🚀";

  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && displayText.length < text.length) {
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, 100);
    } 
    else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length - 1));
      }, 50);
    } 
    else if (displayText.length === text.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } 
    else if (displayText.length === 0) {
      timeout = setTimeout(() => setIsDeleting(false), 300);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]); // 🔥 text hata diya

  return (
    <h2 className="typing-text">
      {displayText}
      <span className="cursor">|</span>
    </h2>
  );
}

export default TypingText;