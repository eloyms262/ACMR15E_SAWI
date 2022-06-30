import Image from "next/image";
import { useState } from "react";

export default function MemberDetails(props){
    const [isClicked,setIsClicked] = useState(false)
    return(
        <div className="divide-y divide-dashed mx-2 text-center p-1 lg:p-4 flex-col items-center mb-10 w-full border bg-orange-100 rounded-t-xl">
            <div className="m-3 px-8">
            <Image
                    src={props.ImgLoc}
                    width={1000}
                    height={1000}
                    alt={"Image of "+props.name +", "+ props.title}
                    className="center object-contain rounded-full"
                    />
            </div>
            <div className="font-bold h-10 w-full my-auto"><span>{props.name}</span></div>
            <div className="inline-block align-middle italic h-12 w-full  py-auto">{props.title}</div>
            <div className="text-justify indent-10 pt-4 w-full ">
                {props.describe1}
                {isClicked ? (
                props.describe2
            ) : null}
                <button
                className="text-white bg-red-500 w-2/5 h-7 mx-auto rounded-xl mt-2 p-4 flex items-center justify-center"
                onClick={() => setIsClicked(!isClicked)}
                >
                {isClicked ? "Showless" : "Showmore"}
                </button>
            </div>
        </div>
    )
}