import ContactForms from "../../component/Contacts/ContactF";
import ContactDetails from "../../component/social";
export default function ContactPage() {
  return (
    <div>
      <div>
        <img src="/images/Group_pic.jpg" className="brightness-50 contrast-75 lg:w-full lg:h-screen"/>
      </div>
      <div className="flex flex-col-reverse lg:mx-10 my-10 lg:grid lg:grid-cols-2 items-center">
        <ContactDetails />
        <ContactForms />
      </div>
    </div>
  );
}
ContactPage.title = "Contacts";
