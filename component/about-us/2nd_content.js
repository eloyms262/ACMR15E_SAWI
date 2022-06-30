import Tadena from "./member";

export const details =[
    {

        ImgLoc: "/images/about-us/anj.jpg",
        name: "ANJANETTE S. TADENA",
        title: "Founder and Head of Operations - Pangasinan",
        describe:"Anjanette is a BS Agriculture graduate from the University of the Philippines Los Baños. She is a licensed agriculturist and she used to work at the Department of Agriculture before she started “For our Farmers PH”.  She is also the founder of MYCO PH, a social enterprise which aims to help farmers have additional sources of income through the promotion of mushroom production technology. Last March 06, 2020, she won and secured a 10,000 USD seed funding for her social enterprise - MYCO PH during the Young Southeast Asian Leaders Initiative Agribusiness Incubator Workshop held at Pakse, Lao PDR, which was participated by 50 delegates from all over ASEAN. She is also an author of several books published by Arcler Education Incorporated. "
    },
    {
        ImgLoc: "/images/about-us/jordan.jpg",
        name: "JORDAN G. CALURA",
        title: "Head of Operations - Tarlac",
        describe:"Jordan is a BS Agriculture graduate from Central Luzon State University. He ranked 8th during the 2015 Agriculture Licensure Exam. He is currently taking up his Masters Degree in Soil Science at the University of the Philippines Los Baños under the DOST-ASTHRDP Scholarship Program. He is affiliated with the Bureau of Soils and Water Management. His expertise is agricultural land-suitability evaluation. "
    },
    {
        ImgLoc: "/images/about-us/rez.jpg",
        name: "REZYL JUMAWID",
        title: "Head of Operations - Misamis Oriental",
        describe:"Rezyl is a BS Agriculture graduate from the University of Science and Technology of Southern Philippines - Claveria campus. She is also the co-founder of Damzyl, an art business dedicated in providing art to clothing brand companies. Last March 06, 2020, she attended the Young Southeast Asian Leaders Initiative Agribusiness Incubator Workshop held at Pakse, Lao PDR which was participated by 50 delegates from all over ASEAN and through that workshop, she met Anjanette."
    },
    {
        ImgLoc: "/images/about-us/aileen.jpg",
        name: "AILEEN S. TADENA",
        title: "Head - Digital & Social Department",
        describe:"An advocate of change, Aileen lives by the principles of purposiveness, pragmatism, and value-laden judgment. She is a people-person and spent several years in Employee Engagement, Performance Management, Human Resource Development, and Marketing Research."
    },
    {
        ImgLoc: "/images/about-us/isa.jpg",
        name: "ISA GARCIA",
        title: "Focal Person, CBIG",
        describe:"Isa Garcia is the focal person of the Country Bankers Insurance Group which is the main and key partner of For our Farmers PH in giving term life insurance to farmers and fisherfolks.  "
    },
    {
        ImgLoc: "/images/about-us/rej.jpg",
        name: "REJINA TARNATE",
        title: "Head of Finance",
        describe:"Rejina is a BS Accountancy graduate from Polytechnic University of the Philippines. She became a Certified Public Accountant in May 2015. She was a former auditor from one of the Big 4 Auditing firms in the country. She is now a financial accountant in an Australian company under a BPO firm here in the Philippines and directly reporting to the CFO of the Australian company and is the Head of Finance of For our Farmers PH. "
    },
    {
        ImgLoc: "/images/about-us/tonette.jpg",
        name: "ANTONETTE TADENA",
        title: "Member, Digital & Social Department",
        describe:"Antonette Tadena is a graduate of Bachelor of Technology major in Nutrition and Food Technology from Technological University of the Philippines. Aside from being a member of the Digital & Social Department of Bayanihan para sa Magsasaka, she’s also the focal person of For our Farmers’ Scholarship in Pangasinan Province. "
    },
    {
        ImgLoc: "/images/about-us/gwyns.jpg",
        name: "GWYNETH CRISTO",
        title: "Member, Digital & Social Department",
        describe:"Gwyneth is a member of the Digital and Social Team. Aims to help any cause through her skills and talent for a greater cause. An Information Technology graduate of MFI Polytechnic Institute Inc. (formerly Meralco Foundation). She is also currently a graphic and web designer for an offshore software development company in Ortigas, Pasig City. She is an experienced designer when designing publicity materials and websites. And won a silver medal in the field of Web Design and Development for the TESDA 2019 NCR Regional Skills Competition last April 10, 2019. "
    },
    {
        ImgLoc: "/images/about-us/Engr  .jpg",
        name: "ENGR. MELANIE LORENZO",
        title: "Board of Directors",
        describe:"Engr. Melanie Lorenzo is an Agricultural and Biosystems Engineer. She currently works as an Engineer at the Department of Agriculture  - Bureau of Agricultural and Fisheries Engineering and is affiliated as one of the Board of Directors of For our Farmers PH. She is also one of the technical working members of several Philippines Agriculture and Engineering Standards. Her advocacies include sustainable agriculture and food security. "
    }
]
export default function Content2(){
    return(
    <div className="bg-slate-50 pt-10">
        <h1 className="text-center font-bold mb-5">MEET THE TEAM</h1>
        <div className="lg:p-10 lg:mx-20 grid lg:grid-cols-3 sm:grid-cols-1 gap-5 sm:px-10 sm:mx-10">
            {details.map((d) => (
                <div key={d.title} className="">
                    <Tadena ImgLoc={d.ImgLoc}
                    name={d.name}
                    title={d.title}
                    describe={d.describe}/>
                </div>
            ))}
        </div>
    </div>
    )
}
