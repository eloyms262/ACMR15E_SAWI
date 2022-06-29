import ContactForms from "../../component/Contacts/ContactF";
import ContactDetails from "../../component/social";
export default function ContactPage() {
    return (
    <div>
        <div>
            <img src="/images/Group_pic.jpg" />
        </div>
        <div className="flex flex-col-reverse lg:mx-10 my-10">
            <ContactDetails/>
            <ContactForms className="lg:rounded-lg"/>
        </div>
    </div>
    )
}