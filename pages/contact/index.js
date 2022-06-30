import ContactForms from "../../component/Contacts/ContactF";
import ContactDetails from "../../component/social";
export default function ContactPage() {
    return (
    <div>
        <div>
            <img src="/images/Group_pic.jpg" className="w-full lg:h-screen" />
        </div>
        <div className="lg:grid lg:grid-cols-2 flex flex-col-reverse lg:mx-20 my-10 items-center lg:text-lg">
            <ContactDetails className="w-2/4"/>
            <ContactForms className="lg:rounded-lg"/>
        </div>
    </div>
    )
}