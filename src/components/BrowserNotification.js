import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faBell } from "@fortawesome/free-solid-svg-icons";
import DashBoard from "./DashBoard";

function BrowserNotification() {
  const [isDashboardVisible, setIsDashboardVisible] = useState(true);

  const toggleDashboard = () => {
    setIsDashboardVisible(!isDashboardVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsDashboardVisible(false);
      } else {
        setIsDashboardVisible(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex justify-between items-center bg-[#4588ec] w-full h-16 md:h-14 p-4">
      <div className="block md:hidden" onClick={toggleDashboard}>
        <FontAwesomeIcon icon={isDashboardVisible ? faTimes : faBars} className="text-white" />
      </div>
      <h4 className="text-white md:text-s hidden sm:block m-auto px-2">Enable browser notifications to avoid missing out on important activity</h4>
      <div className="flex items-center">
        <button className="bg-[#1467e1] rounded-md text-white px-4 py-1 md:py-2">
          <FontAwesomeIcon icon={faBell} className="text-white ml-2  px-1 " />
          Enable notifications
        </button>
        <FontAwesomeIcon icon={faTimes} className="text-white ml-1 text-lg" />
      </div>
      {isDashboardVisible && (
        <div className="absolute top-0 left-0 h-full w-3/5 md:w-[20%] mt-16 md:mt-14">
          <DashBoard />
        </div>
      )}
    </div>
  );
}

export default BrowserNotification;
