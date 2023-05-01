import { AiTwotoneStar } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="bg-purple-200 text-center py-4">
      <p className="tracking-wider">
        If you find our project useful, please consider giving it a{" "}
        <span>
          <a
            href="https://github.com/jayk-gupta/Code-Nexus"
            target="_blank"
            rel="noreferrer"
          >
            <AiTwotoneStar className="text-purple-700 text-2xl inline-block mx-2" />
          </a>
        </span>
        on
        <a
          href="https://github.com/jayk-gupta/Code-Nexus"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineGithub className="text-purple-700 text-2xl inline-block ml-2" />
        </a>
        <p>Copyright © 2023 Code Nexus | All rights reserved | MIT License</p>
      </p>
    </div>
  );
};

export default Footer;

