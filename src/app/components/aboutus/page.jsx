"use client";
import { useState } from "react";
import Image from "next/image";

const AboutUsPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    setIsPlaying(true);
    const iframe = document.getElementById("yt-video");
    iframe.contentWindow.postMessage(
      '{"event":"command","func":"playVideo","args":""}',
      "*"
    );
  };

  return (
    <div>
      <div
        className="bg-cover bg-center h-[300px]"
        style={{ backgroundImage: `url('/aboutpicmain.png')` }}
      ></div>

      <div className="flex flex-col md:flex-row w-full min-h-[450px]">
        <div
          className="w-full md:w-2/5 bg-cover h-[300px] md:h-auto"
          style={{ backgroundImage: `url('/aboutinfopic.png')` }}
        ></div>

        <div className="w-full md:w-3/5 bg-[#23425A] text-white p-6 md:p-10">
          <h2 className="text-xl md:text-2xl font-light leading-[30px] md:leading-[35px] mb-4">
            We Are Here To Manage Your Requirements <br />
            With <span className="text-[#51A1D6]">Experience</span>
          </h2>
          <h4 className="text-base md:text-lg font-light mb-4">
            WinGIG Is A Staffing, Selecting and Culture Firm.
          </h4>
          <p className="text-sm md:text-base leading-[24px] md:leading-[26px] text-justify">
            WinGIG Was Begun In 2018, Under The Conviction That On the Off
            Chance That We Employed Extraordinary Individuals, And Prepared And
            Created Them, The Final Product Would Be Exceptional Support Of Our
            Hopefuls And Customers. Having Developed Each And Every Year Since
            Origin, Including Through Two Retreats, We've Understood One Thing
            To Be Valid: An Extraordinary Culture Brings About Remarkable
            Conveyance. As Our Business Has Developed, We've Expanded To New
            Markets And New Administration Contributions. We Proceed To Change
            And Improve So We Can Enable Our Customers To Accomplish Their
            Objectives And Their Vision.
          </p>
        </div>
      </div>

      <div
        className="relative w-full bg-cover bg-center flex flex-col md:flex-row items-center justify-center py-10"
        style={{ backgroundImage: `url('/aboutusfooterimg.png')` }}
      >
        <div className="w-[260px] h-[260px] mb-6 md:mb-0 lg:ml-96">
          {!isPlaying ? (
            <div className="relative w-full h-full rounded-lg bg-black">
              <Image
                src="/Union-1.png"
                alt="Video Cover"
                className="object-cover w-full h-full rounded-lg"
                width={260}
                height={260}
              />
              <button
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-2xl rounded-full w-16 h-16 flex items-center justify-center hover:bg-black"
                onClick={playVideo}
              >
                &#9658;
              </button>
            </div>
          ) : (
            <iframe
              id="yt-video"
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/7HgJIAUtICU?si=UNoicmYE92t_MZJ7"
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          )}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-[-2] ">
          <hr className="md:block border-black transform  md:rotate-90 lg:rotate-90 w-[160px] border-[1.5px]" />

          <p className="text-lg md:text-xl font-bold text-center md:text-left xs:mt-4 sm:mt-4">
            See How We Work <br />
            With Touch Of <br />
            <span className="text-[#55B1EA]">Experience</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
