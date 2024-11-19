import React from "react";
import MainBanner from "./Topsection.jsx/page";
import ContactHome from "./homeContact/page";
import Navbar from "../navbar/page";
import Footer from "../footer/page";
import Topsection from "./Topsection.jsx/page";

function HomePage() {
  return (
    <>
      <Topsection />
      <ContactHome />
    </>
  );
}

export default HomePage;
