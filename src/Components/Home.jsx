import "../index.css";
import { FaFacebook, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";
import SocialIcons from "./Home/SocialIcons";

export default function Home() {
  // Animation variants for different text elements
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  // animation for doodle images
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

  // Set a staggered delay based on the index
  const getStaggeredDelay = (index) => index * 0.5; // Adjust multiplier as needed

  return (
    <div className="w-full relative h-[90vh] flex pt-32 justify-center gap-5">
      <motion.div
        className="w-full flex flex-col items-center space-y-3 text-slate-300 "
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-xl" variants={itemVariants}>
          Hello! I&apos;m John Adrian.
        </motion.div>

        <motion.div className="text-2xl tracking-wider" variants={itemVariants}>
          A passionate <br />
          <motion.span
            className="text-custom-cyan ml-10 pt-5 text-[80px] leading-none font-bold"
            variants={itemVariants}
          >
            Web Developer
          </motion.span>
          specializing in
          <motion.div
            className="text-custom-cyan ml-10 text-nowrap mb-1 text-[80px] leading-none font-bold"
            variants={itemVariants}
          >
            Front-End Development.
          </motion.div>
          <motion.div
            className="mt-3 text-xl text-center tracking-normal"
            variants={itemVariants}
          >
            Creating engaging, responsive, and user-friendly websites with
            modern technologies.
          </motion.div>
        </motion.div>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-3">
          <SocialIcons
            Icon={FaFacebook}
            link="https://www.facebook.com/profile.php?id=100082782967903"
            label="Facebook Profile"
          />
          <SocialIcons
            Icon={SiGmail}
            link="mailto:bontojohnadrian@gmail.com"
            label="Send Email"
          />
          <SocialIcons
            Icon={FaGithub}
            link="https://github.com/Adrian9502"
            label="GitHub Profile"
          />
          <SocialIcons
            Icon={FaLinkedinIn}
            link="https://www.linkedin.com/in/john-adrian-bonto-a65704283/"
            label="LinkedIn Profile"
          />
        </div>

        {/* Logos and explore button */}
        <div className="flex flex-col items-center justify-center w-full gap-40 pt-7">
          {[
            // top section
            {
              src: "/Home/doodle2.png",
              className: "w-40 opacity-20 rotate-12 top-12 left-[60%]",
              alt: "doodle2",
            },
            {
              src: "/Home/doodle3.png",
              className: "w-40 opacity-20 rotate-12 top-8 left-32",
              alt: "doodle3",
            },
            {
              src: "/Home/doodle6.png",
              className: "w-40 opacity-20 -rotate-45 top-2 right-32",
              alt: "doodle6",
            },
            {
              src: "/Home/doodle5.png",
              className: "w-32 opacity-20 rotate-12 top-10 left-[25%]",
              alt: "doodle5",
            },
            // sides
            {
              src: "/Home/doodle13.png",
              className: "w-32 opacity-20 left-20 top-[40%]",
              alt: "doodle13",
            },
            {
              src: "/Home/doodle10.png",
              className: "w-28 opacity-20 right-20 top-[40%]",
              alt: "doodle10",
            },
            // bottom section
            // left side
            {
              src: "/Home/doodle11.png",
              className: "w-48 opacity-20 left-20 top-[80%]",
              alt: "doodle11",
            },
            {
              src: "/Home/doodle9.png",
              className: "w-32 opacity-20 -rotate-45 top-[57%] left-72",
              alt: "doodle9",
            },
            {
              src: "/Home/doodle4.png",
              className: "w-32 opacity-20 -rotate-45 top-[70%] left-[34%]",
              alt: "doodle4",
            },
            // right side
            {
              src: "/Home/doodle7.png",
              className: "opacity-20 rotate-12 right-20 top-[73%]",
              alt: "doodle1",
            },
            {
              src: "/Home/doodle8.png",
              className: "w-32 opacity-20 rotate-12 top-[57%] right-72",
              alt: "doodle9",
            },
            {
              src: "/Home/doodle12.png",
              className: "w-32 opacity-20 rotate-45 top-[70%] right-[34%]",
              alt: "doodle10",
            },
          ].map((logo, index) => (
            <motion.img
              key={index}
              src={logo.src}
              className={`absolute pointer-events-none ${logo.className}`}
              alt={logo.alt}
              variants={doodleVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: getStaggeredDelay(index) }} // Staggered delay based on index
            />
          ))}

          <span className="flex items-center gap-5 justify-center px-7 py-3 text-xl cursor-pointer rounded-lg border border-custom-cyan hover:bg-slate-950 transition">
            Explore
            <img src="/Home/biking gif.gif" className="w-10" alt="biking gif" />
          </span>

          <iframe
            className="w-14"
            src="https://lottie.host/embed/7bf3af0d-e1bb-4e60-b2db-ca4493a39c41/9ZvnnjxxxB.json"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
}
