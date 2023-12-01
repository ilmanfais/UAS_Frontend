import { Link } from "react-router-dom";
import IconGithub from "./icons/IconGithub";

const footer = {
  site: {
    name: "Quran Web",
    github: "https://github.com/ilmanfais",
  },
};


const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <span className="text-xs">
          &copy; {new Date().getFullYear()}{" "}
          <Link
            to="/"
            className="font-semibold hover:text-primary transition-colors"
          >
            {footer.site.name}
          </Link>{" "}
          All Rights Reserved.
        </span>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={footer.site.github}
          className="hover:text-primary transition-colors"
        >
          <IconGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
