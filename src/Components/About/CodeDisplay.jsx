import { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Helper function for indenting text
const indent = (spaces) => " ".repeat(spaces);

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
    { text: "{\n", color: "text-lime-400" },
    { text: indent(4) + "role: ", color: "text-sky-400" },
    { text: `"Web Developer",\n`, color: "text-lime-400" },
    { text: indent(4) + "hobbies: ", color: "text-sky-400" },
    { text: `"Cycling, Exploring",\n`, color: "text-lime-400" },
    { text: indent(4) + "passion: ", color: "text-sky-400" },
    {
      text: `"I'm a web developer with a degree in \n`,
      color: "text-lime-400",
    },
    {
      text: indent(6) + "Computer Science, focused on building intuitive,\n",
      color: "text-lime-400",
    },
    {
      text: indent(6) + "responsive web applications. Outside of coding,\n",
      color: "text-lime-400",
    },
    {
      text: indent(6) + "I love cycling and exploring, which fuel my \n",
      color: "text-lime-400",
    },
    {
      text: indent(6) + "creativity and help with problem-solving. \n",
      color: "text-lime-400",
    },
    {
      text: indent(6) + "I'm passionate about working on meaningful\n",
      color: "text-lime-400",
    },
    {
      text: indent(6) + "projects and am always eager to learn new \n",
      color: "text-lime-400",
    },
    {
      text: indent(6) + "technologies.\n",
      color: "text-lime-400",
    },
    { text: "};", color: "text-lime-400" },
  ];

  const { typedWords, currentText } = useTypingAnimation(words);

  return (
    <div className="flex flex-col items-center transition-all p-4">
      <div className="w-full bg-slate-200 h-7 rounded-tl-lg rounded-tr-lg flex items-center pl-2 gap-1">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-orange-500"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
      </div>
      <div className="text-lg p-3 bg-slate-900/80 border rounded-bl-lg rounded-br-lg w-full h-full text-slate-100 overflow-hidden ">
        <div className="jetbrains w-full h-full sm:w-[538px] sm:h-[306px] text-wrap text-sm sm:text-base p-1 whitespace-pre-line sm:whitespace-pre">
          <ColorfulText
            words={[
              ...typedWords,
              { text: currentText, color: "text-sky-600" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
