export default function ContactForms(){
    return(
        <form className="lg:grid lg:grid-cols-3">
            <label></label>
            <label className="">
                <span className="">Name</span>
                <input type="text" value="Name" className="mt-1 w-full px-2 py-1 border rounded-lg lg:rounded-2xl"/>
            </label>
            <label></label>
            <label></label>
            <label className="">
                <span className="">Email</span>
                <input type="email" value="Email *" className="mt-1 w-full px-2 py-1 border rounded-lg lg:rounded-2xl"/>    
            </label>
            <label></label>
            <label></label>
            <label className="">
                <span className="">Message</span>
                <textarea value="Message" className="mt-1 w-full px-2 py-1 border rounded-lg lg:rounded-2xl resize-none"></textarea>
            </label>
            <label></label>
            <label></label>
            <input type="submit" value="SEND" className="my-2 py-1 border rounded-md bg-white hover:bg-[#52A511] hover:text-white transition ease-linear duration-100 "></input>
        </form>
    )
}