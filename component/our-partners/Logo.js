import Image from "next/image";
export default function LogoR(Imahe){
    return(
        <Image
                src={Imahe.ImgLoc}
                width={1000}
                height={1000}
                alt={Imahe.ImgLoc}
                className="center object-contain rounded-full bg-white"
                />
    )
}