"use client";
import { useState } from "react";
import Link from "next/link";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden flex flex-col bg-inherit m-5 align-middle hover:bg-slate-400 duration-300 border-none cursor-pointer right-4 z-50 text-white rounded-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="p-6 mt-12 bg-custombg-base">
          <ul className="space-y-6 text-center list-none hover:text-green-300">
            <li>
              <Link href="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/aboutUsPage/aboutusPage" onClick={closeMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/jobPortal/jobPortal" onClick={closeMenu}>
                Jobs
              </Link>
            </li>
            <li>
              <Link href="/contactpage/contactpage" onClick={closeMenu}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/blog" onClick={closeMenu}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/seekerLogin" onClick={closeMenu}>
                <i className="fas fa-user mr-2"></i>Jobseeker
              </Link>
            </li>
            <li>
              <Link href="/authh/login/page" onClick={closeMenu}>
                <i className="fas fa-briefcase mr-2"></i>Recruiter
              </Link>
            </li>
            <li>
              <Link href="/login/Login" onClick={closeMenu}>
                <i className="fas fa-users mr-2"></i>Partner
              </Link>
            </li>
          </ul>
        </div>
      )}

      <button
        onClick={closeMenu}
        className="absolute m-4 border-none hover:bg-slate-400 bg-inherit text-white duration-300 rounded-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default MobileNavbar;
