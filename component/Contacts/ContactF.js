export default function ContactForms(){
    return(
        <div className="w-full">
            <h1 className="text-center font-md   mt-4">Contact Us</h1>
            <form className="m-5 px-8 py-5 flex flex-col text-sm border border-[#EEEEEE] bg-[#E5E5BC] gap-2 lg:rounded-xl">
                <label className="">
                    <input type="text" placeholder="Enter your Name" className="mt-1 px-2 py-1 w-full rounded-md"/>
                </label>
                <label className="">
                    <input type="email" placeholder="Enter a valid email address" className="mt-1 px-2 py-1 w-full rounded-md"/>    
                </label>
                <label className="">    
                    <textarea placeholder="Enter your message" className="mt-1 px-2 py-1 resize-none w-full rounded-md h-40"></textarea>
                </label>
                <input type="submit" value="SEND" className="my-2 py-1 rounded-md bg-white hover:bg-[#52A511] hover:text-white transition ease-linear duration-100 w-30"></input>
            </form>
        </div>
    )
}
