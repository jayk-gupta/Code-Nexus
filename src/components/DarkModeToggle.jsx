import { useEffect, useState } from "react";
import { BsSun } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeClass = "dark";
    const isDarkModeEnabled = localStorage.getItem("darkModeEnabled");
    setIsDarkMode(isDarkModeEnabled === "true");

    if (isDarkModeEnabled === "true") {
      document.documentElement.classList.add(darkModeClass);
    } else {
      document.documentElement.classList.remove(darkModeClass);
    }
  }, []);

  const toggleDarkMode = () => {
    const darkModeClass = "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("darkModeEnabled", !isDarkMode);
    document.documentElement.classList.toggle(darkModeClass);
  };

  return (
    <button
      className="p-2 rounded-full bg-transparent border border-purple-800 dark:bg-transparent dark:border-2 dark:rounded-full dark:border-[#ffffff14] dark:text-[#acacac]"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? <BsSun className="w-5 h-5" /> : <MdDarkMode className="w-5 h-5" />}
    </button>
  );
};

export default DarkModeToggle;
