import "../../index.css";
import { FaFacebook, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";
import SocialIcons from "./SocialIcons";
import { useState } from "react";
export default function Introduction() {
  // state for hovering in bicycle
  const [imageSrc, setImageSrc] = useState("/biking-static.png");

  // Animation for doodle images
  const doodleVariants = {
    hidden: { y: 0 },
    visible: {
      y: [0, -12, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  // Staggered delay for doodles
  const getStaggeredDelay = (index) => index * 0.5;

  const socialLinks = [
    {
      Icon: FaFacebook,
      link: "https://www.facebook.com/profile.php?id=100082782967903",
      label: "Facebook Profile",
    },
    {
      Icon: SiGmail,
      link: "mailto:bontojohnadrian@gmail.com",
      label: "Send Email",
    },
    {
      Icon: FaGithub,
      link: "https://github.com/Adrian9502",
      label: "GitHub Profile",
    },
    {
      Icon: FaLinkedinIn,
      link: "https://www.linkedin.com/in/john-adrian-bonto-a65704283/",
      label: "LinkedIn Profile",
    },
  ];

  const doodles = [
    {
      // top side
      // cyclist
      src: "/Home/doodle2.png",
      className:
        "w-28 opacity-20 rotate-12 top-[12%] left-[50%] lg:top-[5%] lg:w-40",
      alt: "doodle2",
    },
    {
      // thinker
      src: "/Home/doodle3.png",
      className:
        "w-28 opacity-20 rotate-12 top-14 lg:top-[7%] left-[5%] lg:left-[8%] lg:w-40",
      alt: "doodle3",
    },
    {
      // programmer
      src: "/Home/doodle6.png",
      className:
        "w-40 opacity-20 -rotate-45 top-2 right-8 lg:right-[10%] lg:top-20",
      alt: "doodle6",
    },
    {
      // coder
      src: "/Home/doodle5.png",
      className:
        "w-20 lg:w-32 opacity-20 rotate-12 top-16 lg:top-12 left-[28%]",
      alt: "doodle5",
    },
    // bottom side
    {
      // BICYCLE LEFT
      src: "/Home/doodle13.png",
      className:
        "w-20 lg:w-32 opacity-20 left-2 top-[30%] lg:left-[3%] lg:top-[55%]",
      alt: "doodle13",
    },
    {
      // REACT
      src: "/Home/doodle10.png",
      className:
        "w-20 lg:w-28 opacity-20 right-3 top-[30%] lg:top-[55%] lg:right-[7%]",
      alt: "doodle10",
    },
    {
      // DOODLE LINE
      src: "/Home/doodle11.png",
      className: "w-32 lg:w-48 opacity-20 left-20 bottom-[10%] lg:left-[10%]",
      alt: "doodle11",
    },
    {
      // CODE
      src: "/Home/doodle9.png",
      className:
        "w-32 opacity-20 -rotate-45 top-[60%] lg:top-[60%] left-20 lg:left-[25%]",
      alt: "doodle9",
    },
    {
      // MIDDLE BICYCLE
      src: "/Home/doodle4.png",
      className:
        "w-20 lg:w-32 opacity-20 -rotate-45 bottom-[10%] right-[12%] lg:right-[2%]",
      alt: "doodle4",
    },
    {
      // PC
      src: "/Home/doodle7.png",
      className:
        "w-32 opacity-20 rotate-12 right-20 top-[58%] right-[10%] lg:right-[20%] lg:top-[70%]",
      alt: "doodle7",
    },
  ];
  // Animation for text
  // Variants for the animation
  const fadeFromCenter = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const fadeFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    // main container
    <section id="Introduction" className="relative flex pt-32 justify-center">
      {/* container for text introduction */}
      <motion.div
        className="flex text-center flex-col items-center space-y-3 justify-center text-slate-300"
        initial="hidden"
        animate="visible"
      >
        {/* Hello! I'm John Adrian. */}
        <motion.div
          className="text-base md:text-lg lg:text-xl"
          variants={fadeFromCenter}
          transition={{ duration: 2, delay: 0 }} // no delay
        >
          Hello! I&apos;m John Adrian.
        </motion.div>

        {/* A passionate */}
        <motion.div
          className="text-lg sm:text-xl md:text-2xl lg:text-2xl flex flex-col items-center lg:items-stretch"
          variants={fadeFromCenter}
          transition={{ duration: 2, delay: 0.6 }} // .3sec delay
        >
          A passionate
        </motion.div>

        {/* Web Developer */}
        <motion.div
          className="text-custom-cyan lg:py-3 text-4xl sm:text-6xl md:text-7xl lg:text-[85px] font-bold"
          variants={fadeFromLeft}
          transition={{ duration: 2, delay: 0.9 }} // .6sec delay
        >
          Web Developer
        </motion.div>

        {/* specializing in */}
        <motion.div
          className="text-lg sm:text-xl md:text-2xl lg:text-2xl flex flex-col items-center lg:items-stretch"
          variants={fadeFromCenter}
          transition={{ duration: 2, delay: 1.2 }} // .9sec delay
        >
          specializing in
        </motion.div>

        {/* Front-End Development */}
        <motion.div
          className="text-custom-cyan py-2 lg:py-3 text-4xl sm:text-6xl md:text-7xl lg:text-[85px] font-bold"
          variants={fadeFromRight}
          transition={{ duration: 2, delay: 1.3 }} // 1.2sec delay
        >
          Front-End Development.
        </motion.div>

        {/* Creating engaging... */}
        <motion.div
          className="text-sm sm:text-base md:text-lg lg:text-xl text-center tracking-normal"
          variants={fadeFromBottom}
          transition={{ duration: 2, delay: 1.8 }}
        >
          Creating engaging, responsive, and user-friendly websites with modern
          technologies.
        </motion.div>

        {/* Social icons */}
        <motion.div
          className="flex items-center justify-center gap-3"
          initial="hidden"
          animate="visible"
          variants={fadeFromBottom}
          transition={{ duration: 2, delay: 2.1 }}
        >
          {socialLinks.map((social, index) => (
            <SocialIcons
              key={index}
              Icon={social.Icon}
              link={social.link}
              label={social.label}
            />
          ))}
        </motion.div>

        {/* doodle and Explore button */}
        <div className="flex flex-col items-center justify-center w-full lg:gap-40 ">
          {doodles.map((doodle, index) => (
            <motion.img
              key={index}
              src={doodle.src}
              className={`absolute pointer-events-none ${doodle.className}`}
              alt={doodle.alt}
              variants={doodleVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: getStaggeredDelay(index) }}
            />
          ))}

          <motion.a
            initial="hidden"
            animate="visible"
            variants={fadeFromCenter}
            transition={{ duration: 1, delay: 1.6 }}
            href="#About"
            className="mt-20"
          >
            <span
              onMouseEnter={() => {
                setImageSrc("/biking gif.gif"); // Set GIF when hovered
              }}
              onMouseLeave={() => {
                setImageSrc("/biking-static.png"); // Set PNG when not hovered
              }}
              className="flex items-center  gap-5 justify-center text-base px-4 py-2 md:px-5 md:py-3 lg:px-7 lg:py-3 lg:text-xl cursor-pointer rounded-lg border border-custom-cyan hover:bg-slate-950 transition"
            >
              Explore
              <img
                src={imageSrc}
                className="w-7 lg:w-10 pointer-events-none transition-all"
                alt="biking gif"
              />
            </span>
          </motion.a>
          <iframe
            className="w-20"
            src="https://lottie.host/embed/7bf3af0d-e1bb-4e60-b2db-ca4493a39c41/9ZvnnjxxxB.json"
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
}
