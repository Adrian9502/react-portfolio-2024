{
  /* Name Container */
}
{
  /* <div className="border flex-col z-10 ">
        <div className="text-6xl font-bold text-slate-300">
          <GlowCapture>
            <Glow color="white">
              <div className="glow:text-white px-4">John Adrian Bonto</div>
            </Glow>
          </GlowCapture>
        </div>
      </div> */
}

{
  /* Social Media Icons */
}
{
  /* <div className="border flex space-x-3">
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
      </div> */
}

// Social Icons component
function SocialIcons({ Icon, link, label }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" aria-label={label}>
      <Glow color="cyan">
        <div className="p-2 rounded-lg border-2 border-transparent glow:border-indigo-600 transition">
          <Icon size={25} color="white" />
        </div>
      </Glow>
    </a>
  );
}

SocialIcons.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
