import Image from "next/image"
import LogoR from "./Logo"
export const partner=[
    "/images/our-partners/1.png",
    "/images/our-partners/2.png",
    "/images/our-partners/3.jpeg",
    "/images/our-partners/4.png",
    "/images/our-partners/5.png",
    "/images/our-partners/6.png",
    "/images/our-partners/7.svg",
    "/images/our-partners/8.jfif",
    "/images/our-partners/10.png",
    "/images/our-partners/11.jpeg",
    "/images/our-partners/12.jpeg",
    "/images/our-partners/13.png",
    
]

export default function Partners(){
    return(
        <div className="grid lg:grid-cols-5 py-5 px-5 grid-cols-3 gap-3 lg:gap-8 lg:px-40 bg-orange-100 lg:py-5">
            {partner.map((par) => (
                <div key={par}>
                    <LogoR ImgLoc={par}/>
                </div>
            ))}
        </div>
    )
}