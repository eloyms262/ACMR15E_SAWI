import Content1 from "./1st_content"
import Content2 from "./2nd_content"

export default function AboutUs(){
    return(
        <div className="w-full">
            <img src="/images/all-projects/hero.JPG" className="w-full lg:h-screen brightness-50 contrast-75"/>
            <Content1/>
            <Content2/>
        </div>
    )
}