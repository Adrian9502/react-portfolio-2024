import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "../index.css";

// Custom hook for typing animation
function useTypingAnimation(words, typingSpeedInitial = 20) {
  const [typedWords, setTypedWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    if (currentWordIndex >= words.length) return;

    const currentWord = words[currentWordIndex].text;
    let typingTimeout;

    // Typing effect
    if (text.length < currentWord.length) {
      typingTimeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
      }, typingSpeedInitial);
    } else {
      // Word fully typed, add to typedWords and move to the next word
      setTypedWords((prev) => [...prev, words[currentWordIndex]]);
      setText(""); // Reset text for the next word
      setCurrentWordIndex((prev) => prev + 1); // Move to the next word
    }

    return () => clearTimeout(typingTimeout);
  }, [text, typingSpeedInitial, currentWordIndex, words]);

  return { typedWords, currentText: text };
}

// Colorful Text Component
function ColorfulText({ words }) {
  return (
    <div>
      {words.map((word, index) => (
        <span key={index} className={word.color}>
          {word.text}
        </span>
      ))}
    </div>
  );
}

ColorfulText.propTypes = {
  words: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default function CodeDisplay() {
  const words = [
    { text: "const ", color: "text-indigo-400" },
    { text: "aboutMe ", color: "text-gray-300" },
    { text: "= ", color: "text-orange-500" },
    { text: " {\n", color: "text-lime-400" },
    { text: `${" "}${" "}${" "}role : `, color: "text-sky-400" },
    { text: `"Aspiring Web Developer", \n`, color: "text-lime-400" },
    { text: `${" "}${" "}${" "}hobbies : `, color: "text-sky-400" },
    { text: `"Coding, Cycling", \n`, color: "text-lime-400" },
    { text: `${" "}${" "}${" "}education : \n`, color: "text-sky-400" },
    { text: `${" "}${" "}${" "}{ \n`, color: "text-lime-400" },
    {
      text: `${" "}${" "}${" "}${" "}${" "}${" "}degree : `,
      color: "text-sky-400",
    },
    { text: `"BS in Computer Science", \n`, color: "text-lime-400" },
    {
      text: `${" "}${" "}${" "}${" "}${" "}${" "}university : `,
      color: "text-sky-400",
    },
    { text: `"City College of Calamba",\n`, color: "text-lime-400" },
    {
      text: `${" "}${" "}${" "}${" "}${" "}${" "}year : `,
      color: "text-sky-400",
    },
    { text: `"2022 - 2026" \n`, color: "text-lime-400" },
    { text: `${" "}${" "}${" "}}\n`, color: "text-lime-400" },
    { text: "};", color: "text-lime-400" },
  ];

  const { typedWords, currentText } = useTypingAnimation(words);
  const hiddenTextRef = useRef(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [isContainerMeasured, setIsContainerMeasured] = useState(false);

  // Measure full content size once before the animation starts
  useEffect(() => {
    if (hiddenTextRef.current && !isContainerMeasured) {
      const { offsetWidth: width, offsetHeight: height } =
        hiddenTextRef.current;
      setContainerSize({ width, height });
      setIsContainerMeasured(true); // Only measure once
    }
  }, [isContainerMeasured]);

  return (
    <div className="border w-full px-10 py-32 gap-5 relative h-[90vh] flex mb-44 items-center">
      {/* Typing Animation Container */}
      <div
        className="text-base bg-slate-900/80 border rounded-lg whitespace-pre-wrap text-slate-100 flex  flex-col shadow-lg"
        style={{
          minWidth: containerSize.width,
          minHeight: containerSize.height,
        }} // Set min-width and min-height based on hidden text size
      >
        <div className="w-full bg-slate-200 border h-6 rounded-tl-lg rounded-tr-lg flex items-center pl-2 gap-1">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-orange-500"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>
        <div className="jetbrains p-3">
          <ColorfulText
            words={[
              ...typedWords,
              { text: currentText, color: "text-sky-300" },
            ]}
          />
        </div>
      </div>

      {/* Hidden Element to Measure Full Text Size */}
      {!isContainerMeasured && (
        <div
          ref={hiddenTextRef}
          className="invisible absolute z-[-1] jetbrains p-3 whitespace-pre-wrap"
        >
          <ColorfulText words={words} />
        </div>
      )}
    </div>
  );
}
