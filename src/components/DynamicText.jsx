import React, { useState, useEffect } from "react";

const TypingEffectComponent = () => {
  const strings = [
    "React Web Developer",
    "Mobile App Developer",
    ".Net Desktop App Developer",
    "Half Computer Scientist",
  ]; // Array of strings
  const [typedText, setTypedText] = useState(""); // State to hold typed text
  const [currentIndex, setCurrentIndex] = useState(0); // State to track current string index

  useEffect(() => {
    const interval = setInterval(() => {
      const currentString = strings[currentIndex];

      // Reset typedText state
      setTypedText("");

      // Type out each character with delay
      currentString.split("").forEach((char, index) => {
        setTimeout(() => {
          setTypedText((prevText) => prevText + char);
        }, index * 100); // Adjust the delay as needed (100 milliseconds here)
      });

      // Move to next string after typing current one
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % strings.length);
      }, currentString.length * 100 + 1000); // Additional delay after typing each string
    }, strings.length * 100 + 1000); // Interval between typing each string set

    // Clear interval on component unmount to prevent memory leaks
    return () => clearInterval(interval);
  }, [currentIndex, strings]);

  return (
    <div>
      <h1 className="dynamic-text ">{typedText}</h1>
    </div>
  );
};

export default TypingEffectComponent;
