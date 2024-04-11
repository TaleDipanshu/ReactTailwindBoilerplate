import React, { useState } from "react";
import BrowserNotification from "./components/BrowserNotification";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Main from "./components/Main";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`h-screen ${theme === "dark" ? "dark" : ""}`}>
      <BrowserNotification />
      <div className="flex h-auto">
        <div className="md:w-1/5"></div>
        <div className={`w-full md:w-4/5 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}`}>
          <Main />
        </div>
      </div>
      <button className="fixed bottom-4 right-4 bg-gray-800 dark:bg-blue-400 text-white px-4 py-2 rounded" onClick={toggleTheme}>
        {theme === "light" ? <FontAwesomeIcon icon={faMoon} className="text-white ml-1 text-lg" /> : <FontAwesomeIcon icon={faSun} className="text-white ml-1 text-lg" />}
      </button>
    </div>
  );
}

export default App;
