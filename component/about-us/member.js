import Image from "next/image";
export default function MemberDetails(props){
    return(
        <div className="divide-y divide-dashed mx-2 text-center p-1 flex-col items-center mb-10 w-full">
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
            <div className="inline-block align-middle italic h-20 w-full  my-auto">{props.title}</div>
            <div className="text-justify indent-10 pt-4 w-full h-64 overflow-hidden">
                {props.describe}
            </div>
        </div>
    )
}