import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from "react-icons/fa";

const Darkmode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative">
      {theme === "dark" ? (
        <FaSun
          onClick={() => setTheme("light")}
          className="w-8 h-8 text-orange-400 cursor-pointer transition-all duration-300"
        />
      ) : (
        <FaMoon
          onClick={() => setTheme("dark")}
          className="w-8 h-8 text-orange-400 dark:text-white cursor-pointer transition-all duration-300"
        />
      )}
    </div>
  );
};

export default Darkmode;
