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

// Animation variants for container and items
const containerVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      staggerChildren: 0.1, // Stagger the appearance of each word
      duration: 2, // Duration of the transition
      ease: "easeInOut", // Smooth easing function
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 }, // Start from below and scaled down
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1, ease: "easeInOut" }, // Smooth ease-in-out transition
  },
};

export default function CodeDisplay() {
  const words = [
    { text: "const ", color: "text-indigo-400" },
    { text: "aboutMe ", color: "text-gray-300" },
    { text: "= ", color: "text-orange-500" },
    { text: "{\n", color: "text-lime-400" },
    { text: indent(4) + "role: ", color: "text-sky-400" },
    { text: `"Aspiring Web Developer",\n`, color: "text-lime-400" },
    { text: indent(4) + "hobbies: ", color: "text-sky-400" },
    { text: `"Coding, Cycling",\n`, color: "text-lime-400" },
    { text: indent(4) + "goals: ", color: "text-sky-400" },
    {
      text: `"To become a Senior Software Engineer.",\n`,
      color: "text-lime-400",
    },
    { text: indent(4) + "passion: ", color: "text-sky-400" },
    {
      text: `"Improve coding and continuous learning.",\n`,
      color: "text-lime-400",
    },
    { text: indent(4) + "profileSummary: ", color: "text-sky-400" },
    {
      text: `"A web developer and Computer Science\n`,
      color: "text-lime-400",
    },
    {
      text: indent(7) + " student specializing in front-end development. I \n",
      color: "text-lime-400",
    },
    {
      text: indent(8) + "focus on building intuitive, responsive web \n",
      color: "text-lime-400",
    },
    {
      text: indent(8) + "applications. Outside of coding, I enjoy cycling \n",
      color: "text-lime-400",
    },
    {
      text: indent(8) + "and exploring, which fuels my creativity and \n",
      color: "text-lime-400",
    },
    {
      text: indent(8) + "problem-solving. My goal is to become a senior \n",
      color: "text-lime-400",
    },
    {
      text: indent(8) + "software engineer, leading impactful projects and \n",
      color: "text-lime-400",
    },
    {
      text: indent(8) + "embracing new technologies.\n",
      color: "text-lime-400",
    },
    { text: "};", color: "text-lime-400" },
  ];

  const { typedWords, currentText } = useTypingAnimation(words);

  return (
    <div className="z-20 flex h-fit flex-col items-center transition-all">
      <div className="w-full bg-slate-200 h-7 rounded-tl-lg rounded-tr-lg border flex items-center pl-2 gap-1">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-orange-500"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
      </div>
      <div className="text-lg p-1 w-[571.93px] h-[354.1px] bg-slate-900/80 border rounded-bl-lg rounded-br-lg whitespace-pre-wrap text-slate-100">
        <div className="jetbrains w-full h-full text-wrap text-base p-1">
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
