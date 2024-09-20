import PropTypes from "prop-types";

export default function SocialIcons({ Icon, link, label }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group"
    >
      <div className="p-2 border border-custom-cyan lg:p-4 rounded-lg transition hover:bg-slate-950">
        <Icon
          className="transition-colors duration-300 group-hover:text-custom-cyan"
          size={20}
          style={{
            fontSize: "1.25rem",
            sm: { fontSize: "2rem" },
            lg: { fontSize: "3rem" },
          }}
        />
      </div>
    </a>
  );
}

SocialIcons.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
