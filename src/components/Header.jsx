import React, { useState } from "react";
import TestLogo from "../assets/TestLogo.svg";
import home_FILL0_wght300_GRAD0_opsz24 from "../assets/home_FILL0_wght300_GRAD0_opsz24.svg";
import group_FILL0_wght300_GRAD0_opsz24 from "../assets/group_FILL0_wght300_GRAD0_opsz24.svg";
import calendar_today_FILL0_wght300_GRAD0_opsz24 from "../assets/calendar_today_FILL0_wght300_GRAD0_opsz24.svg";
import chat_bubble_FILL0_wght300_GRAD0_opsz24 from "../assets/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg";
import credit_card_FILL0_wght300_GRAD0_opsz24 from "../assets/credit_card_FILL0_wght300_GRAD0_opsz24.svg";
import settings_FILL0_wght300_GRAD0_opsz24 from "../assets/settings_FILL0_wght300_GRAD0_opsz24.svg";
import more_vert_FILL0_wght300_GRAD0_opsz24 from "../assets/more_vert_FILL0_wght300_GRAD0_opsz24.svg";
import seniorWomanImage from "../assets/seniorWomanImage.png";
import { RxHamburgerMenu } from "react-icons/rx";
const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-50 transition-transform transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
        onClick={toggleSidebar}
      >
        <div
          className="w-64 bg-white h-full p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <nav className="flex flex-col space-y-6 font-medium">
            <a
              href="#"
              className="text-txtColor hover:bg-btnColor rounded-full px-3 py-2 flex items-center space-x-2"
            >
              <img
                src={home_FILL0_wght300_GRAD0_opsz24}
                alt="Overview"
                className="h-5 w-5"
              />
              <span>Overview</span>
            </a>
            <a
              href="#"
              className="text-txtColor bg-btnColor rounded-full px-3 py-2 flex items-center space-x-2"
            >
              <img
                src={group_FILL0_wght300_GRAD0_opsz24}
                alt="Patients"
                className="h-5 w-5"
              />
              <span>Patients</span>
            </a>
            <a
              href="#"
              className="text-txtColor hover:bg-btnColor rounded-full px-3 py-2 flex items-center space-x-2"
            >
              <img
                src={calendar_today_FILL0_wght300_GRAD0_opsz24}
                alt="Schedule"
                className="h-5 w-5"
              />
              <span>Schedule</span>
            </a>
            <a
              href="#"
              className="text-txtColor hover:bg-btnColor rounded-full px-3 py-2 flex items-center space-x-2"
            >
              <img
                src={chat_bubble_FILL0_wght300_GRAD0_opsz24}
                alt="Message"
                className="h-5 w-5"
              />
              <span>Message</span>
            </a>
            <a
              href="#"
              className="text-txtColor hover:bg-btnColor rounded-full px-3 py-2 flex items-center space-x-2"
            >
              <img
                src={credit_card_FILL0_wght300_GRAD0_opsz24}
                alt="Transactions"
                className="h-5 w-5"
              />
              <span>Transactions</span>
            </a>
          </nav>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md rounded-full px-4 py-3 flex justify-between items-center mx-[9px] my-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={TestLogo} alt="Tech.Care Logo" className="h-4 sm:h-10" />
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden flex items-center">
          <button className="text-txtColor" onClick={toggleSidebar}>
            <RxHamburgerMenu />
          </button>
        </div>

        {/* Navigation (Desktop) */}
        <nav className="hidden md:flex space-x-6 font-medium">
          <a
            href="#"
            className="text-txtColor hover:bg-btnColor rounded-full px-3 py-2 flex items-center space-x-2"
          >
            <img
              src={home_FILL0_wght300_GRAD0_opsz24}
              alt="Overview"
              className="h-5 w-5"
            />
            <span>Overview</span>
          </a>
          <a
            href="#"
            className="text-txtColor bg-btnColor rounded-full px-3 py-2 flex items-center space-x-2"
          >
            <img
              src={group_FILL0_wght300_GRAD0_opsz24}
              alt="Patients"
              className="h-5 w-5"
            />
            <span>Patients</span>
          </a>
          <a
            href="#"
            className="text-txtColor hover:bg-btnColor rounded-full px-3 py-2 flex items-center space-x-2"
          >
            <img
              src={calendar_today_FILL0_wght300_GRAD0_opsz24}
              alt="Schedule"
              className="h-5 w-5"
            />
            <span>Schedule</span>
          </a>
          <a
            href="#"
            className="text-txtColor hover:bg-btnColor rounded-full px-3 py-2 flex items-center space-x-2"
          >
            <img
              src={chat_bubble_FILL0_wght300_GRAD0_opsz24}
              alt="Message"
              className="h-5 w-5"
            />
            <span>Message</span>
          </a>
          <a
            href="#"
            className="text-txtColor hover:bg-btnColor rounded-full px-3 py-2 flex items-center space-x-2"
          >
            <img
              src={credit_card_FILL0_wght300_GRAD0_opsz24}
              alt="Transactions"
              className="h-5 w-5"
            />
            <span>Transactions</span>
          </a>
        </nav>

        {/* Profile */}
        {/* Profile */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            {/* Profile Image */}
            <img
              src={seniorWomanImage}
              alt="Dr. Jose Simmons"
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover"
            />
            <div>
              {/* Doctor Name */}
              <span className="block text-txtColor font-medium text-xs sm:text-sm">
                Dr. Jose Simmons
              </span>
              {/* Doctor Tagline */}
              <small className="block text-gray-500 text-xs sm:text-sm">
                General Practitioner
              </small>
            </div>
          </div>

          {/* Divider (visible only on larger screens) */}
          <div className="border-l-2 border-gray-300 h-8 mx-4 hidden sm:block"></div>

          {/* Settings and Menu Icons */}
          <button className="flex items-center space-x-2 text-txtColor focus:outline-none">
            <img
              src={settings_FILL0_wght300_GRAD0_opsz24}
              alt="Settings"
              className="h-5 w-5"
            />
            <img
              src={more_vert_FILL0_wght300_GRAD0_opsz24}
              alt="Menu"
              className="h-5 w-5"
            />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
