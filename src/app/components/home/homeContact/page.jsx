import "@fortawesome/fontawesome-free/css/all.min.css";

export default function ContactHome() {
  return (
    <div className=" p-5">
      <div className="text-center pb-5">
        <h1 className="text-3xl font-medium tracking-wide">
          Our Contact Address
        </h1>
      </div>
      <div className="grid justify-center mx-auto gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5">
        <div className="bg-custombg-black text-white text-center p-5 rounded-lg max-w-xs mx-auto w-96">
          <i className="fa-solid fa-phone text-custombg-blue text-3xl mb-3"></i>
          <h3 className="py-2">Our Contact Number</h3>
          <hr className="border-t border-gray-500" />
          <p className="mt-3">+91 9666 001 192</p>
        </div>
        <div className="bg-custombg-black text-white text-center p-5 rounded-lg max-w-xs min-w-7 mx-auto w-96">
          <i className="fa-solid fa-envelope text-custombg-blue text-3xl mb-3"></i>
          <h3 className="py-2">Our Email Address</h3>
          <hr className="border-t border-gray-500" />
          <p className="mt-3">info@vidyardi.com</p>
        </div>
        <div className="bg-custombg-black text-white text-center p-5 rounded-lg max-w-xs min-w-7 mx-auto w-96 ">
          <i className="fa-solid fa-location-dot text-custombg-blue text-3xl mb-3"></i>
          <h3 className="py-2">Our Location</h3>
          <hr className="border-t border-gray-500" />
          <p className="mt-3">
            Ektha Towers, White Field Rd, HITEC City, kondapur, Hyderabad,
            Telangana, 500081
          </p>
        </div>
      </div>
      <div className=" w-full h-auto">
        <div className=" mx-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d444.8951815489932!2d78.36413403152693!3d17.454033846025293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93c7b5299b7b%3A0xa6e7e79d255d7cdf!2sEktha%20Towers%2C%20White%20Field%20Rd%2C%20Ashok%20Nagar%2C%20Golden%20Habitat%2C%20Whitefields%2C%20HITEC%20City%2C%20Kondapur%2C%20Telangana%20500084!5e0!3m2!1sen!2sin!4v1722946094513!5m2!1sen!2sin"
            width="100%"
            height="450"
            className="border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
        <div
          style={{ border: "1px solid black" }}
          className="  w-3/5  bg-white  lg:flex justify-center align-middle items-centergap-5 ml-[15%] p-10 "
        >
          <div className="">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Contact our Support Team Or Make Appointment
              <br />
              With <span className="text-custombg-blue">Our Consultant</span>
            </h3>
            <p className="text-gray-700 mb-3 text-sm">
              Please contact us using the information below. For additional
              information on our management consultant services, please visit
              the appropriate page on our site.
            </p>
            <hr className="w-1/2 mx-auto bg-black my-5" />
            <div>
              <h3 className="text-lg font-medium">Send Message</h3>
              <div className="flex flex-col items-center mt-5 space-y-3">
                <input
                  placeholder="FullName"
                  className="w-full max-w-md h-10 bg-custombg-lightgray rounded px-3 text-black"
                />
                <input
                  placeholder="Email"
                  className="w-full max-w-md h-10 bg-custombg-lightgray rounded px-3 text-black"
                />
                <textarea
                  placeholder="Write here"
                  className="w-full max-w-md h-20 bg-custombg-lightgray rounded px-3 text-black"
                ></textarea>
                <button className="bg-custombg-navy text-white w-20 h-10 rounded hover:bg-custombg-hovernavy">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src="canvaimg.png" alt="img" className="w-56" />
          </div>
        </div>
      </div>
    </div>
  );
}
