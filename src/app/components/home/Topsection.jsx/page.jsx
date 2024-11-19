import Image from "next/image";
// import MiniNav from '../navbar/mininav';

const Topsection = () => {
  return (
    <div className="relative  w-full min-h-[600px] pt-7">
      <Image
        className="absolute inset-0 w-full h-full object-cover z-40"
        src="/mainBannerBg.png"
        alt="Background"
        layout="fill"
      />
      <div className="relative z-40">
        <Image
          className="absolute top-[-95] left-0 "
          src="/stringd.png"
          alt="String Design"
          width={400}
          height={420}
        />

        <Image
          className="absolute top-48 left-32"
          src="/Vector-1.png"
          alt="Vector 1"
          width={200}
          height={200}
        />
        <Image
          className="lg:flex md:hidden sm:hidden xs:hidden absolute top-20 left-[70%]"
          src="/Vector-1.png"
          alt="Vector 1"
          width={200}
          height={200}
        />
        <div className="absolute flex flex-col lg:left-[24%] md:left-[20%] p-5">
          <h1
            style={{ fontFamily: "Degular Bold" }}
            className="text-[3.2rem] text-custombg-base2 p-3  mb-0"
          >
            TECH JOBS YOU WANT,
            <br />
            AT COMPANIES YOU ADMIRE
            {/* <br /> */}
            {/* <span className="text-[1rem] text mt-0">
              Build the tech career that's right for you.
            </span> */}
            <p
              style={{ fontFamily: "Degular Thin" }}
              className="text-custombg-base2 text-xl "
            >
              Build the tech career that's right for you.
            </p>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Topsection;
