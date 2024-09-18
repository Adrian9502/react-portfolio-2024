import "../index.css";
import { FaFacebook, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import CodeDisplay from "./Home/CodeDisplay";
import { motion } from "framer-motion";
import SocialIcons from "./Home/SocialIcons";
import { RxDoubleArrowDown } from "react-icons/rx";

export default function Home() {
  // Animation variants for different text elements
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 1, // reduces the delay between child animations for a smoother feel
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2, ease: "easeInOut" }, // 2 seconds smooth transition
    },
  };

  return (
    <div className="w-full h-[95vh] flex pt-60 justify-center gap-5">
      <motion.div
        className="w-2/3 h-fit text-3xl space-y-3 text-slate-300"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="text-2xl" variants={itemVariants}>
          Hello! I&apos;m John Adrian
        </motion.div>

        <motion.div className="tracking-wider" variants={itemVariants}>
          A passionate <br />
          <motion.span
            className="text-custom-cyan ml-10 text-7xl font-bold"
            variants={itemVariants}
          >
            Web Developer{" "}
          </motion.span>
          specializing in
          <motion.div
            className="text-custom-cyan ml-10 text-nowrap mb-1 text-7xl font-bold"
            variants={itemVariants}
          >
            {" "}
            Front-End Development.
          </motion.div>
          <motion.span
            className="mt-1 text-2xl text-center"
            variants={itemVariants}
          >
            Creating engaging, responsive, and user-friendly websites with
            modern technologies.
          </motion.span>
        </motion.div>

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
        <div className="flex items-center pt-5  justify-center">
          <span className="flex rounded-lg border border-custom-cyan hover:bg-slate-950/80 px-5 transition items-center justify-center text-xl cursor-pointer">
            Explore{" "}
            <iframe
              className="w-12 h-12"
              src="https://lottie.host/embed/7bf3af0d-e1bb-4e60-b2db-ca4493a39c41/9ZvnnjxxxB.json"
            ></iframe>
          </span>
        </div>
      </motion.div>
      <CodeDisplay />
    </div>
  );
}
