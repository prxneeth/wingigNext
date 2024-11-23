"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ApplyJob from "./applyjob";

const JobPortal = () => {
  const [jobField, setJobField] = useState("select");
  const [location, setLocation] = useState("select");
  const [jobPostings, setJobPostings] = useState([]);
  const [filteredPostings, setFilteredPostings] = useState([]);
  const [applyModal, setApplyModal] = useState(false);

  const [tempJobField, setTempJobField] = useState("select");
  const [tempLocation, setTempLocation] = useState("select");

  useEffect(() => {
    const fetchJobPostings = async () => {
      try {
        const response = await axios.get("/jobsData.json");
        setJobPostings(response.data);
        setFilteredPostings(response.data);
      } catch (error) {
        console.error("Error fetching job postings:", error);
      }
    };

    fetchJobPostings();
  }, []);

  const handleSearch = () => {
    setJobField(tempJobField);
    setLocation(tempLocation);

    let filtered = jobPostings;

    if (tempJobField && tempJobField !== "select") {
      filtered = filtered.filter((job) => job.title.includes(tempJobField));
    }

    if (tempLocation && tempLocation !== "select") {
      filtered = filtered.filter((job) => job.location.includes(tempLocation));
    }

    setFilteredPostings(filtered);
  };

  const handleJobChange = (e) => {
    setTempJobField(e.target.value);
  };

  const handleLocationChange = (e) => {
    setTempLocation(e.target.value);
  };

  return (
    <div className="min-h-screen p-6" id="__next">
      <h1
        style={{ fontFamily: "Degular Bold" }}
        className="text-4xl text-black"
      >
        Search for jobs
      </h1>
      <div
        style={{ border: "1px solid black" }}
        className="flex justify-center border border-gray-900 mt-5 p-2 rounded-xl"
      >
        <form className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row gap-3 lg:space-x-28 p-2">
          <div>
            <label className="text-2xl font-bold mb-6 " htmlFor="jobfield">
              Choose a field:
            </label>
            <select
              className=" mt-0 border border-gray-300 p-1 rounded justify-center text-xl w-full h-9"
              name="jobfield"
              id="jobfield"
              value={tempJobField}
              onChange={handleJobChange}
            >
              <option value="select">select</option>
              <option value="Software Engineer">Software Engineer</option>
              <option value="Engineering Manager">Engineering Manager</option>
              <option value="Artificial Engineer">Artificial Engineer</option>
              <option value="Machine Learning">Machine Learning</option>
              <option value="Backend Engineer">Backend Engineer</option>
              <option value="Frontend Engineer">Frontend Engineer</option>
            </select>
          </div>

          <div>
            <label className="text-2xl font-bold block" htmlFor="location">
              Location:
            </label>
            <select
              className="mt-0 border border-gray-300 p-1 rounded justify-center text-xl lg:w-96 md:w-96 h-9 xs:w-full"
              name="location"
              id="location"
              value={tempLocation}
              onChange={handleLocationChange}
            >
              <option value="select">select</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Chennai">Chennai</option>
            </select>
          </div>
          <div className="flex flex-col xs:justify-center">
            <button
              style={{ backgroundColor: "rgb(29, 59, 59)" }}
              className="text-white xs:mb-5 lg:w-44 font-semibold px-5 py-2 translate-y-7 lg:ml-5 xs:ml-0 rounded shadow"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <div className="p-5 ">
        <p className="mt-5 ml-2 text-3xl font-bold text-gray-700">
          {jobField !== "select" ? `${jobField} Jobs` : "All Jobs"} in{" "}
          {location !== "select" ? location : "all locations"}
        </p>
        <p className="mt-1 ml-2 text-lg font-bold text-gray-500">
          {filteredPostings.length} results found
        </p>
      </div>

      <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-0">
        {filteredPostings.map((job, index) => (
          <div key={index} className="bg-blue-100 p-5 rounded shadow-lg">
            <h3 className="text-xl font-bold mb-2">{job.title}</h3>
            <p className="text-gray-600">
              <i className="fa-regular fa-building p-1 mb-1"></i> {job.company}
            </p>
            <p className="text-gray-600">
              <i className="fa-solid fa-location-dot p-1 mb-1"></i>{" "}
              {job.location}
            </p>
            <p className="text-gray-600">
              <i className="fa-solid fa-indian-rupee-sign p-1"></i> {job.salary}
            </p>
            <button
              style={{ backgroundColor: "rgb(29, 59, 59)" }}
              className="text-white px-4 py-2 mt-4 rounded cursor-pointer "
              onClick={() => setApplyModal(!applyModal)}
            >
              Apply
            </button>
          </div>
        ))}
      </div>

      {applyModal && (
        <div>
          <ApplyJob applymodal={applyModal} setapplymodal={setApplyModal} />
        </div>
      )}
    </div>
  );
};

export default JobPortal;
