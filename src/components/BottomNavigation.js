import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaQuran, FaClock, FaInfoCircle, FaBook } from 'react-icons/fa';

const BottomNavigation = () => {
  const location = useLocation();

  const isActive = (navPath) => {
    return location.pathname === navPath;
  };

  return (
    <nav className="bg-opacity-30 bg-black w-max block p-4 md:p-6 z-10 fixed left-1/2 transform -translate-x-1/2 bottom-3 flex gap-2 rounded-full backdrop-blur-md">
      <Link
        to="/"
        className={`${isActive('/') ? 'bg-gray-100 text-bg' : 'hover:bg-opacity-30'} p-3 rounded-full flex items-center`}
      >
        <FaHome />
      </Link>
      <Link
        to="/quran"
        className={`${isActive('/quran') ? 'bg-gray-100 text-bg' : 'hover:bg-opacity-30'} p-3 rounded-full flex items-center`}
      >
        <FaQuran />
      </Link>
      <Link
        to="/prayer"
        className={`${isActive('/prayer') ? 'bg-gray-100 text-bg' : 'hover:bg-opacity-30'} p-3 rounded-full flex items-center`}
      >
        <FaClock />
      </Link>
      <Link
        to="/asmaallah"
        className={`${isActive('/asmaallah') ? 'bg-gray-100 text-bg' : 'hover:bg-opacity-30'} p-3 rounded-full flex items-center`}
      >
        <FaBook />
      </Link>
      <Link
        to="/about"
        className={`${isActive('/about') ? 'bg-gray-100 text-bg' : 'hover:bg-opacity-30'} p-3 rounded-full flex items-center`}
      >
        <FaInfoCircle />
      </Link>
    </nav>
  );
};

export default BottomNavigation;
