import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import Link from "next/link";
import { getUserMeLoader } from "@/app/services/get-user-me-loader";
import { LogoutButton } from "@/custom/LogoutBtn";
// import MobileNavbar from "./MobileNavbar"; // Import the mobile navbar
import MobileNavbar from "./mobilenav/page";

const Navbar = async () => {
  const user = await getUserMeLoader();

  return (
    <div
      style={{}}
      className={`flex justify-between w-full left-0 lg:bg-transparent md:bg-transparent sm:bg-custombg-base xs:bg-custombg-base text-white top-0 z-50 shadow shadow-black`}
    >
      <div className="lg:w-1/6 sm:w-1/5">
        <img
          src="/WinGigLogo.png"
          alt="Logo"
          className="w-28"
          style={{ transform: "translateX(35px) translateY(7px)" }}
        />
      </div>

      <nav
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 100%)",
          fontFamily: "Degular Thin",
          fontWeight: "bold",
        }}
        className="hidden md:flex items-center justify-end w-5/6 bg-custombg-base p-1 pr-10 pl-3"
      >
        <ul className="flex list-none lg:space-x-72 md:space-x-14 sm:space-x-2 ">
          <div className="flex gap-5 p-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/components/aboutus">About Us</Link>
            </li>
            <li>
              <Link href="/components/jobportal">Jobs</Link>
            </li>
            <li>
              <Link href="/components/contactus">Contact Us</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </div>
          {user.ok ? (
            <div className="flex gap-2 mt-1">
              <Link href="/dashboard"> Welcome, {user.data.username}</Link>

              <span>
                <LogoutButton />
              </span>
            </div>
          ) : (
            <div className="flex gap-5 p-1">
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
            </div>
          )}
        </ul>
      </nav>

      <MobileNavbar />
    </div>
  );
};

export default Navbar;
