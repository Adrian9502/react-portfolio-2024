import { FaFacebook, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  const socialLinks = [
    {
      Icon: FaFacebook,
      link: "https://www.facebook.com/profile.php?id=100082782967903",
      label: "Facebook Profile",
      text: "Facebook",
    },
    {
      Icon: SiGmail,
      link: "mailto:bontojohnadrian@gmail.com",
      label: "Send Email",
      text: "Gmail",
    },
    {
      Icon: FaGithub,
      link: "https://github.com/Adrian9502",
      label: "GitHub Profile",
      text: "GitHub",
    },
    {
      Icon: FaLinkedinIn,
      link: "https://www.linkedin.com/in/john-adrian-bonto-a65704283/",
      label: "LinkedIn Profile",
      text: "LinkedIn",
    },
  ];

  return (
    <footer className="p-8 border-t border-custom-cyan text-slate-300 flex flex-col lg:flex-row items-center justify-between gap-8">
      {/* Left section*/}
      <div className="flex flex-col items-start">
        <div className="mb-3 text-lg">My Socials</div>
        <div className="flex flex-wrap items-start justify-start gap-3">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              <div className="p-2 flex border border-slate-500 rounded-md items-center gap-2 hover:text-custom-cyan hover:bg-slate-950/80 transition-all duration-300">
                <social.Icon size={20} />
                <span className="text-xs">{social.text}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex flex-col justify-center items-center text-center p-1.5">
        <div className="text-slate-300 p-1 flex justify-center gap-2 mb-3">
          <span>Made with </span>
          <div className="flex gap-2">
            <img src="/Vite.js.png" className="w-6" alt="Vite.js" />
            <img src="/React.png" className="w-6" alt="React" />
            <img src="/Tailwind CSS.png" className="w-6" alt="Tailwind CSS" />
          </div>
        </div>
        <p className="text-sm text-slate-500 mt-2">
          Made by{" "}
          <span className="hover:text-custom-cyan cursor-default transition-colors">
            John Adrian Bonto
          </span>
          . All rights reserved.
          <br />
          {/* <span className="text-xs">
            This design was inspired by{" "}
            <a
              href="https://braydentw.io"
              target="_blank"
              className="hover:text-custom-cyan"
            >
              Brayden TW
            </a>{" "}
            and fully coded by me.
          </span> */}
        </p>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-end">
        <div className="text-lg text-slate-300 mb-3">Quick Links</div>
        <div className="flex flex-wrap gap-4 text-slate-400">
          <a
            href="#Introduction"
            className="hover:text-custom-cyan transition-colors"
          >
            Home
          </a>
          <a href="#about" className="hover:text-custom-cyan transition-colors">
            About
          </a>
          <a
            href="#certification"
            className="hover:text-custom-cyan transition-colors"
          >
            Certification
          </a>
          <a
            href="#projects"
            className="hover:text-custom-cyan transition-colors"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="hover:text-custom-cyan transition-colors"
          >
            Skills
          </a>
        </div>
      </div>
    </footer>
  );
}
