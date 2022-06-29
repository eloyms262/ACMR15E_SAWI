import Image from "next/image";
export default function LogoR(Imahe){
    return(
        <Image
                src={Imahe.ImgLoc}
                width={1000}
                height={1000}
                alt="Image of ANJANETTE S. TADENA"
                className="center object-contain rounded-full bg-white"
                />
    )
}