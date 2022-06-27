import Link from "next/link";

export default function ProjDetails(props) {
  return (
    <div className="flex flex-col left-1/2 rounded-b-md">
      <h1 className="font-inter text-md font-bold mx-4 p-2 mt-1 text-green-600">
        {props.title}
      </h1>
      <div className="w-11/12 mx-auto">
        <p className="text-sm break-words indent-7 h-32">{props.content}</p>
      </div>
      <div className="flex justify-end mb-8 mr-8">
        <Link href={"/about"}>
          <p className="font-roboto text-sm p-2 font-bold bg-[#E9ED37] rounded-xl">
            Find out more
          </p>
        </Link>
      </div>
    </div>
  );
}
