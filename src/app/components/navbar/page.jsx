"use client";
import "@fortawesome/fontawesome-free/css/all.min.css";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`flex justify-between w-full left-0  lg:bg-white md:bg-white sm:bg-custombg-base xs:bg-custombg-base text-white fixed top-0 z-50 `}
    >
      <div className="lg:w-1/6 sm:w-1/5">
        <img
          src="/WinGigLogo.png"
          alt="Logo"
          className="w-28"
          style={{ transform: "translateX(35px) translateY(10px)" }}
        />
      </div>

      <nav
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 100%)" }}
        className="hidden md:flex items-center justify-center w-5/6 bg-custombg-base p-1"
      >
        <ul className="flex list-none lg:space-x-7 md:space-x-2 sm:space-x-3">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/aboutUsPage/aboutusPage">About Us</Link>
          </li>
          <li>
            <Link href="/seekerLogin">
              <i className="fas fa-user mr-2"></i>Jobseeker
            </Link>
          </li>
          <li>
            <Link href="/authh/login/page">
              <i className="fas fa-briefcase mr-2"></i>Recruiter
            </Link>
          </li>
          <li>
            <Link href="/login/Login">
              <i className="fas fa-users mr-2"></i>Partner
            </Link>
          </li>
          <li>
            <Link href="/jobPortal/jobPortal">Jobs</Link>
          </li>
          <li>
            <Link href="/contactpage/contactpage">Contact Us</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>

      <button
        className="md:hidden flex flex-col bg-inherit m-3 p-3 items-center border-none  justify-center space-y-1"
        onClick={toggleMenu}
      >
        <span className="w-6 h-1 bg-black"></span>
        <span className="w-6 h-1 bg-black"></span>
        <span className="w-6 h-1 bg-black"></span>
      </button>

      <nav
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-16 right-0 text-white w-3/4  flex flex-col items-center justify-center transition-transform transform bg-custombg-base md:hidden`}
      >
        <ul className="space-y-6 text-center list-none">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/aboutUsPage/aboutusPage">About Us</Link>
          </li>
          <li>
            <Link href="/login/Login">
              <i className="fas fa-user mr-2"></i>Jobseeker
            </Link>
          </li>
          <li>
            <Link href="/authh/login/page">
              <i className="fas fa-briefcase mr-2"></i>Recruiter
            </Link>
          </li>
          <li>
            <Link href="/login/Login">
              <i className="fas fa-users mr-2"></i>Partner
            </Link>
          </li>
          <li>
            <Link href="/jobPortal/jobPortal">Jobs</Link>
          </li>
          <li>
            <Link href="/contactpage/contactpage">Contact Us</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
