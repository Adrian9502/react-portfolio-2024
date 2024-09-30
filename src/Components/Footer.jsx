export default function Footer() {
  const socialLinks = [
    {
      // Facebook
      image:
        "https://cdn-icons-png.freepik.com/256/5968/5968764.png?semt=ais_hybrid",
      link: "https://www.facebook.com/profile.php?id=100082782967903",
      label: "Facebook Profile",
      name: "John Adrian Bonto",
      text: "Facebook",
    },
    {
      // Email
      image:
        "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-256.png",
      link: "mailto:bontojohnadrian@gmail.com",
      label: "Send Email",
      name: "bontojohnadrian@gmail.com",
      text: "Gmail",
    },
    {
      // github
      image:
        "https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Github-256.png",
      link: "https://github.com/Adrian9502",
      label: "GitHub Profile",
      name: "Adrian9502",
      text: "GitHub",
    },
    // linkedin
    {
      image:
        "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-256.png",
      link: "https://www.linkedin.com/in/john-adrian-bonto-a65704283/",
      label: "LinkedIn Profile",
      name: "John Adrian Bonto",
      text: "LinkedIn",
    },
  ];

  return (
    <footer className="p-3 sm:p-8 mb-12 border-t border-custom-cyan text-slate-300 flex flex-col lg:flex-row items-center justify-between gap-8">
      {/* Left section*/}
      <div className="flex flex-col justify-center items-center text-center p-1.5">
        <div className="text-slate-300 p-1 flex justify-center gap-2 mb-3">
          <span>Made with </span>
          <div className="flex gap-2 pointer-events-none">
            <img
              src="/Vite.js.png"
              className="w-6"
              alt="Vite.js"
              title="Vite.js"
            />
            <img
              src="/React.png"
              className="w-6"
              alt="ReactJS"
              title="ReactJS"
            />
            <img
              src="/Tailwind CSS.png"
              className="w-6"
              alt="Tailwind CSS"
              title="Tailwind CSS"
            />
          </div>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 mt-2">
          Made by John Adrian Bonto.
          <br />
          <span className="text-xs">
            This design was inspired by{" "}
            <a
              href="https://braydentw.io"
              target="_blank"
              className="hover:text-custom-cyan"
            >
              Brayden TW
            </a>{" "}
            and fully coded by me.
          </span>
        </p>
        <span className="text-xs sm:text-sm text-slate-500 mt-2">
          Copyright © {new Date().getFullYear()} - All rights reserved
        </span>
      </div>

      {/* Middle Section */}
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
              <div className="p-2 flex rounded-md items-center gap-2 bg-slate-900 shadow-lg duration-300">
                <img src={social.image} alt={social.label} className="w-6" />
                <span className="text-xs">{social.name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex cursor-pointer flex-col items-center text-sm border border-custom-cyan p-3 rounded-md text-slate-300 mb-3"
      >
        Back to top
      </div>
    </footer>
  );
}
