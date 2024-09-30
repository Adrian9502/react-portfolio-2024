import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

// Define the animation variant for sliding from the left
const slideFromLeft = {
  hidden: { opacity: 0, x: -100 }, // Start from the left
  visible: { opacity: 1, x: 0 }, // Animate to the original position
};

export default function Titles({ title }) {
  // Create a ref to check if the component is in view
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true }); // Set to true to animate only once

  return (
    <div
      ref={ref}
      className="flex flex-col items-center px-2 py-2 justify-center gap-5 font-semibold text-slate-300"
    >
      {/* Title text with animation */}
      <motion.div
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={slideFromLeft}
        transition={{ duration: 1.5 }}
      >
        {title}
      </motion.div>

      {/* Cyan divider with responsive width */}
      <motion.div
        className="h-1.5 md:h-2 rounded-lg bg-custom-cyan w-full"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={slideFromLeft}
        transition={{ duration: 2.5, delay: 0.5 }} // Slight delay for the divider
      />
    </div>
  );
}

Titles.propTypes = {
  title: PropTypes.string.isRequired,
};
