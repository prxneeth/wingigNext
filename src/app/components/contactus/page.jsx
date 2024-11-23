"use client";
import React from "react";
import Image from "next/image";

const ContactPage = () => {
  return (
    <div>
      <div className="relative w-full h-[370px] bg-cover bg-[url('/contactbanner.png')]  bg-no-repeat bg-center">
        <h1 className="relative float-right pr-[20px] md:pr-[175px] pt-[50px] md:pt-[100px] text-[28px] md:text-[47px] text-white">
          Get In Touch
          <br /> With <span className="text-[#44bbeb]">Us</span>
        </h1>
        <hr className="absolute rotate-90 bg-white w-[110px] h-[4px] top-[160px] lg:translate-x-[350px] translate-y-3 lg:block md:hidden right-[765px] border-none" />
      </div>

      <div className="flex w-full">
        <div className="w-full lg:w-1/2 bg-[#edf3f9] p-4 md:p-[50px]">
          <div className="pb-6">
            <h1 className="text-[#1d3140] text-[18px] md:text-[23px]">
              Contact Our Support Team Or Make Appointment With <br />
              <span className="text-[#12b6df]">Our Consultant</span>
            </h1>
            <p className="text-[#1d3140] text-[14px] md:text-[16px] pt-1">
              Please contact us using the information below. For additional
              information on our management consulting services, please visit
              the appropriate page on our site.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            <div className="text-[#1d3140] text-center">
              <Image
                src="/contact1.png"
                alt="email"
                className="w-[40px] h-10 mx-auto my-[10px] md:my-[25px]"
                height={30}
                width={40}
              />
              <p className="text-[14px]">harinadh@wingig.com</p>
              <p className="text-[14px]">contact@wingig.com</p>
            </div>
            <div className="text-[#1d3140] text-center">
              <Image
                src="/contact2.png"
                alt="address"
                className="w-[40px] h-10 mx-auto my-[10px] md:my-[25px]"
                height={30}
                width={40}
              />
              <p className="text-[14px]">
                Ektha Towers, White Field Rd, HITEC City, Kondapur, Hyderabad,
                Telangana, 500081
              </p>
            </div>
            <div className="text-[#1d3140] text-center">
              <Image
                src="/contact3.png"
                alt="phone"
                className="w-[40px] h-10 mx-auto my-[10px] md:my-[25px]"
                height={30}
                width={50}
              />
              <p className="text-[14px]">+91 888 659 9438</p>
            </div>
          </div>

          <div className="pt-6">
            <hr className="bg-black h-[3px] mb-5 hidden sm:block" />
            <p className="text-[16px] md:text-[18px] font-medium mb-2 text-[#1d3140]">
              Send Message
            </p>
            <div className="flex flex-wrap gap-5 mb-4 ">
              <input
                placeholder="FullName"
                className=" placeholder-slate-950 w-full sm:w-[calc(50%-10px)] lg:w-[240px] h-[30px] bg-[#a0aeb9] text-center text-black rounded-[5px] border-none"
              />
              <input
                placeholder="Email"
                className=" placeholder-slate-950 w-full sm:w-[calc(50%-10px)] lg:w-[240px] h-[30px] bg-[#a0aeb9] text-center text-black rounded-[5px] border-none"
              />
            </div>
            <div className="flex flex-col">
              <textarea
                placeholder="Write here"
                className=" placeholder-slate-950 w-full lg:w-[515px] h-[150px] bg-[#a0aeb9] p-[10px] rounded-[5px] mb-3"
              ></textarea>
              <button
                type="submit"
                className="w-full sm:w-[100px] h-[30px] bg-[#1d3140] text-white rounded-[5px] hover:bg-[#265870] mx-auto lg:ml-[200px]"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <iframe
            className="w-full h-[300px] md:h-[500px] lg:h-[800px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d444.8951815489932!2d78.36413403152693!3d17.454033846025293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93c7b5299b7b%3A0xa6e7e79d255d7cdf!2sEktha%20Towers%2C%20White%20Field%20Rd%2C%20Ashok%20Nagar%2C%20Golden%20Habitat%2C%20Whitefields%2C%20HITEC%20City%2C%20Kondapur%2C%20Telangana%20500084!5e0!3m2!1sen!2sin!4v1722946094513!5m2!1sen!2sin"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
