import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import logo from "../assets/logoimage.jpg";
import {Link} from 'react-scroll'

const Navbar = () => {
  const [navbar, SetNavBar] = useState(false);
  const handleClick = () => SetNavBar(!navbar);

  return (
    <div
      className="fixed w-full h-[80px] flex justify-between items-center 
    px-4 bg-black text-gray-400"
    >
      <div>
        <img src={logo} alt="logo" style={{ width: "80px" }} />
      </div>

      <ul className="hidden md:flex">
        <li className="hover:text-white">
        <Link to="home" smooth={true} duration={500}>
          Home
        </Link></li>
        <li className="hover:text-white">
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
        </li>
        <li className="hover:text-white">
        <Link to="skills" smooth={true} duration={500}>
          Skills
        </Link>
        </li>
        <li className="hover:text-white">
        <Link to="work" smooth={true} duration={500}>
          Projects
        </Link>
        </li>
        <li className="hover:text-white">
        <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
        </li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        {!navbar ? (
          <FaBars className="cursor-pointer" />
        ) : (
          <FaTimes className="cursor-pointer" />
        )}
      </div>

      <ul
        className={
          !navbar
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-slate-800 flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl hover:text-white">
        <Link onClick={handleClick} to="home" smooth={true} duration={500}>
          Home
        </Link>
        </li>
        <li className="py-6 text-4xl hover:text-white">
        <Link onClick={handleClick} to="about" smooth={true} duration={500}>
          About
        </Link>
        </li>
        <li className="py-6 text-4xl hover:text-white">
        <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
          Skills
        </Link>
        </li>
        <li className="py-6 text-4xl hover:text-white">
        <Link onClick={handleClick} to="work" smooth={true} duration={500}>
          Projects
        </Link>
        </li>
        <li className="py-6 text-4xl hover:text-white">
        <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
          Contact
        </Link>
        </li>
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li
            className="w-[160px] h-[60px] flex justify-between items-center 
  ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600"
          >
            <a
              className="flex w-full justify-between items-center text-white"
              href="https://www.linkedin.com/in/raghavendran-g-62681726b/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li
            className="w-[160px] h-[60px] flex justify-between items-center 
  ml-[-100px] hover:ml-[-10px] duration-300 bg-black"
          >
            <a
              className="flex w-full justify-between items-center text-white"
              href="https://github.com/RaghavendranG"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li
            className="w-[160px] h-[60px] flex justify-between items-center 
  ml-[-100px] hover:ml-[-10px] duration-300 bg-red-500"
          >
            <a
              className="flex w-full justify-between items-center text-white"
              href="/"
            >
              Mail <HiOutlineMail size={30} />
            </a>
          </li>
          <li
            className="w-[160px] h-[60px] flex justify-between items-center 
  ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-400"
          >
            <a
              className="flex w-full justify-between items-center text-white"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
