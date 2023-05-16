import { AiTwotoneStar } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="bg-purple-200 text-center py-4 px-4 dark:bg-[#24243557]">
      <p className="md:tracking-wider dark:text-[#acacac]">
        If you find our project useful, please consider giving it a{" "}
        <span>
          <a
            href="https://github.com/jayk-gupta/Code-Nexus"
            target="_blank"
            rel="noreferrer"
          >
            <AiTwotoneStar className="text-purple-700 dark:text-[#00a3ff] text-2xl inline-block mx-2" />
          </a>
        </span>
        on
        <a
          href="https://github.com/jayk-gupta/Code-Nexus"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineGithub className="text-purple-700 dark:text-[#00a3ff] text-2xl inline-block ml-2" />
        </a>
        <p className="mt-2 dark:text-[#acacac]">Copyright © 2023 Code Nexus | All rights reserved | MIT License</p>
      </p>
    </div>
  );
};

export default Footer;

