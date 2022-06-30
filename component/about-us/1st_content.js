import Image from "next/image";
export default function Content1(){
    return(
        <div className="lg:m-8">
            <div className="lg:flex lg:flex-row lg:p-10 lg:mx-20 items-center mt-14 p-3 bg-[#fffde9]    border lg:rounded-xl" >
                <div className="lg:w-6/12 h-full">
                    <div className="lg:w-full lg:px-10">
                        <Image
                        src={"/images/about-us/history.JPG"}
                        layout="responsive"
                        width="100"
                        height="60"
                        alt="History Image"
                        className="center"
                        />
                    </div>
                </div>
                <div  className="lg:w-6/12">
                    <h1 className="font-medium text-xl mb-2  text-center">History</h1>
                    <div className="text-justify">
                        <p className="mb-3 indent-10 lg:indent-14">
                        We started out as COVID-19 donation drive and immediate response initiative to help farmers and fisherfolks who were greatly affected by the pandemic. With the initial funding provided by the US Embassy through the Young Southeast Asian Leaders Initiative, we were able to transition into a youth-led non-stock non-profit organization. Realizing that even before the pandemic, farmers are already the poorest of the poor in the country, our team is committed to helping and assisting farmers and fisherfolks through sustainable and inclusive projects.

                        </p>
                        <p className="mb-3 indent-10 lg:indent-14">
                            Realizing that even before the pandemic, farmers are already the poorest of the poor in the country, our team is committed in helping and assisting farmers and fisherfolks through sustainable and inclusive projects. 
                        </p>
                    </div>
                </div>
            </div>
            <div className="lg:flex lg:flex-row-reverse lg:p-10 lg:mx-20 items-center mt-14 p-3 bg-[#fffde9]    border lg:rounded-xl mb-8">
                <div className="lg:w-6/12">
                    <Image
                    src={"/images/about-us/Why.jpeg"}
                    width={550}
                    height={300}
                    alt="Why Image"
                    className="center object-contain"
                    />
                </div>
                <div  className="lg:w-6/12">
                    <h1 className="font-medium text-xl mb-2  text-center">Our Why and Philosophy</h1>
                    <div className="text-justify">
                        <p className="mb-3 indent-10">
                            We strongly believe that the people who till the land and feed us should never go hungry.
                        </p>
                        <p className="mb-3 indent-10">
                            We believe that we can achieve bigger things through working hand-in-hand with partner individuals, organizations and businesses. With collaborative partnerships, we were able to extend our help to more farmers all over the Philippines.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}