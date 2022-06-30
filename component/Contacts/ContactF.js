import { BsEnvelopeFill } from "react-icons/bs";
export default function ContactForms(){
    return(
        <div className="w-full ">
            <h1 className="text-center font-md lg:font-extrabold text-lg lg:text-4xl mt-4">Contact Us</h1>
            <form className="m-5 px-8 py-5 flex flex-col text-sm border border-[#EEEEEE] bg-[#EAEACC] gap-2 lg:rounded-xl lg:text-xl lh:mx-12 rounded-md justify-center items-center">
                <label className="w-full">
                <span className="font-thin">Name</span>
                    <input type="text" placeholder="Enter your Name" className="mt-1 px-2 py-1 w-full rounded-md"/>
                </label>
                <label className="w-full mt-3">
                <span className="font-thin">Email Address</span>
                    <input type="email" placeholder="Enter a valid email address" className="mt-1 px-2 py-1 w-full rounded-md"/>    
                </label>
                <label className="w-full mt-3">   
                <span className="font-thin">Message</span>
                    <textarea placeholder="Enter your message" className="mt-1 px-2 py-1 w-full rounded-md h-40 lg:h-20"></textarea>
                </label>
                <div className="flex justify-center items-center sm:flex-row p-2 rounded-lg  bg-[#52A511] hover:bg-[#44890f] text-white transition ease-linear duration-100 w-full mt-10 md:h-14 md:text-2xl md:rounded-lg lg:bg-red-500">
                    <BsEnvelopeFill className="h-4 w-4 md:h-8 md:w-8 mr-4" /> Send
                 </div>
            </form>
        </div>
    )
}
