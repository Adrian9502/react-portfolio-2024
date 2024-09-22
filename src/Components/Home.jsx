import "../index.css";
import { FaFacebook, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";
import SocialIcons from "./Home/SocialIcons";
import { useState } from "react";
export default function Home({ scrollToAbout }) {
  // state for hovering in bicycle
  const [imageSrc, setImageSrc] = useState("/biking-static.png");
  const [isHovered, setIsHovered] = useState(false);

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

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
        "w-28 opacity-20 rotate-12 top-[6%] left-[50%] lg:top-[5%] lg:w-40",
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

  return (
    <div className="w-full relative border-cyan-300 flex pt-32 justify-center gap-5">
      <motion.div
        className="w-full flex text-center flex-col items-center space-y-3 justify-center text-slate-300"
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="text-base rounded-lg p-2 md:text-lg lg:text-xl"
          variants={itemVariants}
        >
          Hello! I&apos;m John Adrian.
        </motion.div>

        <motion.div
          className="text-xl md:text-2xl lg:text-2xl  flex flex-col items-center lg:items-stretch"
          variants={itemVariants}
        >
          A passionate
          <motion.span
            className="text-custom-cyan lg:py-3 text-5xl lg:text-[85px] md:text-6xl lg:font-semibold font-bold"
            variants={itemVariants}
          >
            Web Developer
          </motion.span>
          specializing in
          <motion.div
            className="text-custom-cyan text-wrap mb-3 lg:mb-0 lg:py-3 text-5xl md:text-6xl lg:text-[85px] lg:font-semibold font-bold"
            variants={itemVariants}
          >
            Front-End Development.
          </motion.div>
          <motion.div
            className="text-sm md:text-base lg:text-xl text-center tracking-normal"
            variants={itemVariants}
          >
            Creating engaging, responsive, and user-friendly websites with
            modern technologies.
          </motion.div>
        </motion.div>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-3">
          {socialLinks.map((social, index) => (
            <SocialIcons
              key={index}
              Icon={social.Icon}
              link={social.link}
              label={social.label}
            />
          ))}
        </div>

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

          <span
            onClick={() => {
              const aboutSection = document.getElementById("about");
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            onMouseEnter={() => {
              setImageSrc("/biking gif.gif"); // Set GIF when hovered
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setImageSrc("/biking-static.png"); // Set PNG when not hovered
              setIsHovered(false);
            }}
            className="flex items-center mt-20 gap-5 justify-center text-base px-4 py-2 md:px-5 md:py-3 lg:px-7 lg:py-3 lg:text-xl cursor-pointer rounded-lg border border-custom-cyan hover:bg-slate-950 transition"
          >
            Explore
            <img
              src={imageSrc}
              className="w-7 lg:w-10 pointer-events-none transition-all"
              alt="biking gif"
            />
          </span>
          <iframe
            className="w-20"
            src="https://lottie.host/embed/7bf3af0d-e1bb-4e60-b2db-ca4493a39c41/9ZvnnjxxxB.json"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
}
