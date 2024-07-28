import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const Links = [
    { name: "Home", path: "Home" },
    { name: "Categories", path: "Categories" },
    { name: "Recipes", path: "Recipes" },
    { name: "About", path: "About" },
  ];

  return (
    <div className="shadow-md fixed w-full top-0  bg-slate-50  z-50 left-0">
      <div className="md:flex items-center justify-between py-3 md:px-10 px-7">
        <div className="font-bold text-3xl cursor-pointer font-serif text-lime-500">
          Tastify
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl absolute right-8 top-5 cursor-pointer md:hidden"
        >
          <ion-icon name={isOpen ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12  bg bg-white absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            isOpen ? "top-20 " : "top-[-490px] opacity-0 md:opacity-100"
          }`}
        >
          {Links.map((link) => (
            <li key={link} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.path}
                className="text-gray-800  font-semibold hover:text-lime-400 duration-500"
              >
                {link.path}
              </a>
            </li>
          ))}
          <Button />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
