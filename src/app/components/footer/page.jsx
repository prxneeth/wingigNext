import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <section className=" py-10  bg-custombg-base ">
      <div className="  ">
        <div className=" flex justify-center">
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <ul className="list-none text-start">
                <li className=" mb-5 text-lg uppercase text-white"> Company</li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-300 hover:text-white"
                    href="/"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-300 hover:text-white"
                    href="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-300 hover:text-white"
                    href="/"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-gray-300 hover:text-white"
                    href="/"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <ul className="list-none">
                <li className="mb-5 text-lg uppercase text-white">Support</li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-300 hover:text-white"
                    href="/"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-300 hover:text-white"
                    href="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-300 hover:text-white"
                    href="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-gray-300 hover:text-white"
                    href="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <ul className="list-none">
                <li className="mb-5 text-lg uppercase text-white">Legals</li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-300 hover:text-white"
                    href="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-300 hover:text-white"
                    href="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-gray-300 hover:text-white"
                    href="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className=" flex justify-center ">
            <img
              src="/wingigWhite.png"
              alt="Logo"
              className="w-28 flex items-center mb-5"
            />
          </div>
          <p className="text-sm text-center text-white">
            &copy; Copyright 2024. All Rights Reserved by YOU.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
