import ContactForms from "../../component/Contacts/ContactF";
import ContactDetails from "../../component/social";
export default function ContactPage() {
  return (
    <div>
      <div className="relative flex items-center justify-center">
        <img
          src="/images/Group_pic.jpg"
          className="brightness-50 contrast-75 lg:h-screen w-full "
        />
        <div className="absolute ">
          <h1
            className=" text-white text-4xl text-center font-poppins drop-shadow-md lg:text-7xl"
            style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.4)" }}
          >
            Contact Us
          </h1>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:mx-10 my-10 lg:grid lg:grid-cols-2 items-center">
        <ContactDetails />
        <ContactForms />
      </div>
    </div>
  );
}
ContactPage.title = "Contacts";
