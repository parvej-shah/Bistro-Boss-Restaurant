import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const isLoggedIn = false;
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Shop", path: "/shop" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-primaryText/50 opacity-80 fixed top-0 z-10 w-full">
    <div className="flex justify-between items-center container py-2 mx-auto">
      <div className="">
        <h1 className="text-3xl font-black text-white uppercase">Bistro Boss</h1>
      </div>

      <div className="">
        <div className="">
          <ul className="menu menu-horizontal px-1 hidden md:flex space-x-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-lg btn btn-sm hover:bg-transparent bg-transparent shadow-none border-none font-extrabold transition duration-200 text-white ${isActive ? "text-navText" : "hover:text-navText"}`
              }
            >
              <li> {item.name}</li>
            </NavLink>
          ))}
          {isLoggedIn ? (
            <NavLink
              to="/logout"
              className={({ isActive }) =>
                `text-lg btn btn-sm hover:bg-transparent bg-transparent shadow-none border-none font-extrabold transition duration-200 text-white ${isActive ? "text-navText" : "hover:text-navText"}`
              }
            >
              Logout
            </NavLink>) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `text-lg btn btn-sm hover:bg-transparent bg-transparent shadow-none border-none font-extrabold transition duration-200 text-white ${isActive ? "text-navText" : "hover:text-navText"}`
              }
            >
              Login
            </NavLink>
          )}
          </ul>
        </div>
        <div className="dropdown dropdown-end block md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-primaryText/50 opacity-50 rounded-box z-[50] mt-3 w-fit p-2 mr-2 shadow"
          >
            {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-lg btn btn-sm hover:bg-transparent bg-transparent shadow-none border-none font-extrabold transition duration-200 text-white ${isActive ? "text-navText" : "hover:text-navText"}`
              }
            >
              <li> {item.name}</li>
            </NavLink>
          ))}
          {isLoggedIn ? (
            <NavLink
              to="/logout"
              className={({ isActive }) =>
                `text-lg font-extrabold btn btn-sm hover:bg-transparent bg-transparent shadow-none border-none transition duration-200 text-white ${isActive ? "text-navText" : "hover:text-navText"}`
              }
            >
              Logout
            </NavLink>) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `text-lg font-extrabold btn btn-sm hover:bg-transparent bg-transparent shadow-none border-none transition duration-200 text-white ${isActive ? "text-navText" : "hover:text-navText"}`
              }
            >
              Login
            </NavLink>
          )}
          </ul>
        </div>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
