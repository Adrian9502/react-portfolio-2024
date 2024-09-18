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
      <div className="p-3 rounded-lg transition hover:bg-slate-950">
        <Icon
          size={30}
          className="transition-colors duration-300 group-hover:text-custom-cyan"
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
