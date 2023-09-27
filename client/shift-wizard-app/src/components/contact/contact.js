import ContactInfoLight from "./contact-info-light";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";

function Contact() {
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
    <ContactInfoLight />
          <Footer />
    </div>
  );
}

export default Contact;
