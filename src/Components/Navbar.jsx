import React from "react";
import logo from "../../public/logo.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleButton() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="flex justify-between items-center z-10 relative p-4 md:mx-[5rem] md:items-center">
       <NavLink to='/'> <img src={logo} alt="website logo" className="w-[150px] h-[50px] cursor-pointer" /></NavLink>
        <ul className="hidden md:flex md:gap-5 md:font-semibold md:text-xl">
        <li className="hover:text-yellow-500">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="hover:text-yellow-500">
                <NavLink to="/Performance_Test">Performance Test</NavLink>
              </li>
              <li className="hover:text-yellow-500">
                <NavLink to="/About">About</NavLink>
              </li>
              <li className="hover:text-yellow-500">
                <NavLink to="/Contact">Contact</NavLink>
              </li>
        </ul>
        {isOpen ? (
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-7 h-7 cursor-pointer z-30 relative md:hidden"
              onClick={handleToggleButton}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>

            {/* Fullscreen Menu */}
            <ul
              onClick={handleToggleButton}
              className="fixed inset-0 bg-white flex flex-col items-center justify-center z-20 text-3xl gap-6 font-semibold"
            >
              <li className="hover:text-yellow-500">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="hover:text-yellow-500">
                <NavLink to="/Performance_Test">Performance Test</NavLink>
              </li>
              <li className="hover:text-yellow-500">
                <NavLink to="/About">About</NavLink>
              </li>
              <li className="hover:text-yellow-500">
                <NavLink to="/Contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7 cursor-pointer md:hidden"
            onClick={handleToggleButton}
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
