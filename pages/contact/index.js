import ContactForms from "../../component/Contacts/ContactF";
import ContactDetails from "../../component/social";
export default function ContactPage() {
  return (
    <div>
<<<<<<< HEAD
        <div>
            <img src="/images/Group_pic.jpg" className="w-full lg:h-screen" />
        </div>
        <div className="lg:grid lg:grid-cols-2 flex flex-col-reverse lg:mx-20 my-10 items-center lg:text-lg">
            <ContactDetails className="w-2/4"/>
            <ContactForms className="lg:rounded-lg"/>
        </div>
=======
      <div>
        <img src="/images/Group_pic.jpg" />
      </div>
      <div className="flex flex-col-reverse lg:mx-10 my-10">
        <ContactDetails />
        <ContactForms className="lg:rounded-lg" />
      </div>
>>>>>>> 970ab8e240899c38507e4dfc7b93ba8bd78f6e7e
    </div>
  );
}
ContactPage.title = "Contacts";
