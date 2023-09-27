import magicBox from "../../assets/magicBox.png";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import LinkedInLogo from "../../assets/LinkedInLogo.png";
import LinkedInLogoHover from "../../assets/LinkedInLogoHover.png";

function ContactInfoLight() {
  // For emailjs
  const form = useRef();

  const openPopup = () => {
    alert("Email Sent!");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dokf8mn",
        "template_f443ai4",
        form.current,
        "eLRFDbpH-SkWvxaZ3"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          openPopup();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // For LinkedIn logo hover
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="bg-background2 flex flex-col justify-center items-center">
      <div className="text-center max-w-[80%]">
        <h1 className="text-background1 font-title font-bold text-6xl m-5">
          Contact
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
        <div className="mb-2 text-center max-w-[80%] xl:max-w-[60%] mx-auto">
          <p className="text-background1 font-body font-bold text-lg">
            For any inquiries, suggestions for enhancement, or concerns, please
            reach out to me!
          </p>
          <div className="text-center mt-10">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-4 flex items-center">
                {/* <label className="text-background2 font-bold text-sm uppercase m-2">
                  Name
                </label> */}
                <input
                  type="text"
                  placeholder="Your name"
                  name="from_name"
                  className="w-full md:w-full border rounded-md py-2 px-3 text-body"
                />
              </div>
              <div className="mb-4 flex items-center">
                {/* <label className="text-background2 font-bold text-sm uppercase m-2">
                  Email
                </label> */}
                <input
                  type="email"
                  placeholder="Your email address"
                  name="user_email"
                  className="w-full md:w-full border rounded-md py-2 px-3 text-body"
                />
              </div>
              <div className="mb-4 flex items-center">
                {/* <label className="text-background2 font-bold text-sm uppercase m-2">
                  Message
                </label> */}
                <textarea
                  name="message"
                  placeholder="Your message"
                  className="w-full md:w-full border rounded-md py-2 px-3 text-body"
                />
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="bg-secondaryT hover:bg-tertiaryT mt-2 mr-5 font-links font-bold uppercase
                            text-sm sm:text-md md:text-l lg:text-xl text-background2 py-2 px-4 rounded-md items-center mx-auto"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="align-top text-center mx-auto">
          <img src={magicBox} alt="magic box" className="w-[200px] mx-auto" />
          <p className="text-background1 font-body font-bold text-lg max-w-[80%] xl:max-w-[60%] mx-auto mt-5">
            If you’ve had a positive and smooth experience using the app, I
            would greatly appreciate it if you could consider leaving a
            recommendation on my LinkedIn profile below.
          </p>
          <div className="text-center mt-3 mx-auto w-[50px] mb-5">
            <a
              href="https://www.linkedin.com/in/anastasiaadamoudi89/"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={isHovered ? LinkedInLogoHover : LinkedInLogo}
                alt="clickable LinkedIn logo"
                className="mt-4"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfoLight;
