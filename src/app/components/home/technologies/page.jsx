"use client";
import React, { useState } from "react";
import Image from "next/image";

const Technologies = () => {
  const technologies = [
    { imgSrc: "/techImages/ai.png", name: "Artificial Intelligence" },
    { imgSrc: "/techImages/cybersecurity.png", name: "Cyber Security" },
    { imgSrc: "/techImages/augmentedreality.png", name: "Augmented Reality" },
    { imgSrc: "/techImages/java.png", name: "Java" },
    { imgSrc: "/techImages/dotnet.png", name: ".NET" },
    { imgSrc: "/techImages/devops.png", name: "DevOps" },
    { imgSrc: "/techImages/sap.png", name: "SAP" },
    { imgSrc: "/techImages/testingsoftware.png", name: "Testing Software" },
    {
      imgSrc: "/techImages/identitymanagement.png",
      name: "Identity Management",
    },
    { imgSrc: "/techImages/group.png", name: "Group" },
    { imgSrc: "/techImages/servicenow.png", name: "Service Now" },
    { imgSrc: "/techImages/mulesoft.png", name: "MuleSoft" },
    { imgSrc: "/techImages/react.png", name: "React" },
    { imgSrc: "/techImages/ios.png", name: "iOS" },
    { imgSrc: "/techImages/intelligentapps.png", name: "Intelligent Apps" },
    { imgSrc: "/techImages/angular.png", name: "Angular" },
    { imgSrc: "/techImages/android.png", name: "Android" },
    { imgSrc: "/techImages/machinelearning.png", name: "Machine Learning" },
  ];

  const [visibleCount, setVisibleCount] = useState(8);
  const [showMore, setShowMore] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedTech, setSelectedTech] = useState(null);

  const handleShowMore = () => {
    setShowMore(!showMore);
    setVisibleCount(showMore ? 8 : technologies.length);
  };

  const handleKnowMoreClick = (tech) => {
    setSelectedTech(tech);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="w-full">
      <h1
        className="text-center text-5xl tracking-wide text-gray-800 py-7 mb-2"
        style={{ fontFamily: "Degular Bold" }}
      >
        Top Trending Technologies
      </h1>
      <div className="">
        <section className="grid xs:grid-cols-3 xs:ml-5 xs:mr-5 lg:ml-52 lg:mr-40 md:mr-16 md:ml-36 sm:ml-20 sm:mr-10 lg:grid-cols-4 lg:gap-10 md:10 sm:10 xs:gap-5 md:grid-cols-3 sm:grid-cols-3  ">
          {technologies.slice(0, visibleCount).map((tech, index) => (
            <div
              style={{ border: "hover: 1px solid green" }}
              key={index}
              className="bg-gray-200 text-gray-800 flex flex-col items-center justify-center lg:w-[170px] md:w-[150px] sm:w-[115px] lg:h-[180px] md:h-[160px] sm:h-[140px] rounded-md relative overflow-hidden shadow-md transition-transform duration-300 hover:scale-110 hover:border-2 border-black group  mb-4"
            >
              <Image
                className="w-[80px] p-2  transition-transform duration-300 group-hover:scale-115 group-hover:mb-7"
                src={tech.imgSrc}
                alt={tech.name}
                width={80}
                height={80}
              />
              <p className="text-center font-medium text-sm group-hover:hidden mt-3 ">
                {tech.name}
              </p>
              <button
                className="hidden absolute bottom-4 w-[90px] bg-gray-100 text-gray-800 text-sm py-1 px-2 rounded-md border  hover:bg-gray-300 transition-transform duration-500 group-hover:block"
                onClick={() => handleKnowMoreClick(tech)}
              >
                Know More
              </button>
            </div>
          ))}
        </section>
        <button
          className="block w-32 mx-auto mt-8 mb-4 py-2 px-4 bg-white text-gray-800 border border-blue-300 rounded-md text-center font-medium hover:bg-gray-200"
          onClick={handleShowMore}
        >
          {showMore ? "Show Less" : "More..."}
        </button>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white w-11/12 max-w-4xl max-h-[95%] p-4 overflow-y-auto rounded-lg relative "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-700 text-2xl hover:text-red-600"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <p className="text-center text-lg font-medium">
              {selectedTech?.name} information will be here.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Technologies;
