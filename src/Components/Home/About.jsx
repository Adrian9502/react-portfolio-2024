import React from "react";
import { motion } from "framer-motion";
import Titles from "../Titles";
import CodeDisplay from "../About/CodeDisplay";
import { useInView } from "framer-motion";

// Define the animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 }, // Start slightly below and transparent
  visible: { opacity: 1, y: 0 }, // Animate to original position
};

export default function About() {
  // Create refs for in-view detection
  const nameRef = React.useRef(null);
  const descriptionRef = React.useRef(null);
  const isNameInView = useInView(nameRef, { once: true });
  const isDescriptionInView = useInView(descriptionRef, { once: true });

  return (
    <div id="About" className="flex relative flex-col sm:p-14 mb-20">
      {/* Titles Component */}
      <Titles title={"Discover more about my passions and interests."} />

      <div className="flex flex-col 2xl:flex-row pointer-events-none items-center justify-around mt-10">
        <div className="p-10 relative text-center text-base sm:text-base md:text-lg lg:text-xl text-slate-300">
          {/* Animate the name */}
          <motion.div
            ref={nameRef}
            initial="hidden"
            animate={isNameInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }} // Delay for the name
          >
            My name is <br />
            <span className="text-custom-cyan text-3xl sm:text-4xl lg:text-6xl font-bold">
              John Adrian Bonto
            </span>
          </motion.div>

          {/* Animate the description */}
          <motion.div
            ref={descriptionRef}
            initial="hidden"
            animate={isDescriptionInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.4 }} // Delay for the description
            className="text-sm lg:text-base"
          >
            Passionate about coding, web design and development, with a keen
            interest in cycling.
          </motion.div>
        </div>

        {/* CodeDisplay Component */}
        <CodeDisplay />
      </div>
    </div>
  );
}
