import { GiHairStrands } from "react-icons/gi";
import { GiBeard } from "react-icons/gi";
import { TbBlade } from "react-icons/tb";
import { GiComb } from "react-icons/gi";
import { MdArrowForwardIos } from "react-icons/md";


const Heading = [
    {
        id:1, 
        subheading1:"About",
    }
]


const Skills = [
    {
        id:1,
        icon:<GiHairStrands />,
        job: "Haircut",
        description: "Transform your look with precision haircuts that reflect your unique style",
        link: "Read more",
    },
    {
        id:2,
        icon:<GiBeard />,
        job: "Shaving",
        description: "Indulge in a smooth, refreshing shave for the ultimate grooming experience.",
        link: "Read more",
    },
    {
        id:3,
        icon:<GiComb />,
        job: "Styling",
        description: "Elevate your looks with expert grooming and personalized hair design.",
        link: "Read more",
    },
    {
        id:4,
        icon:<TbBlade />,
        job: "Trimming",
        description: "Keep your style fresh with clean with precise trimming for every style.",
        link: "Read more",
    },
]

const About = ({ aboutRef }) => {
    return (
        <section ref={aboutRef} id="about" className="bg-brown">
            <div className="pt-14 px-7 md:px-10 lg:pt-20 lg:px-24 xl:px-20" data-aos="fade-up">
                <div>
                    {Heading.map((data) => (
                        <div key={data.id}>
                            <h3 className="text-3xl text-white font-bold uppercase mb-5 sm:text-3xl lg:text-5xl">{data.subheading1}</h3>
                        </div>
                    ))}
                </div>
                <div className="text-center grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-4">
                    {Skills.map((data2) => (
                        <div key={data2.id} className="bg-deep-brown px-6 py-8 rounded-xl lg:px-8 xl:px-6">
                            <div className="flex justify-center pb-3">
                                <p className="text-milkey text-5xl">{data2.icon}</p>
                            </div>
                            <h4 className="py-3 text-xl text-white font-bold uppercase">{data2.job}</h4>
                            <p className="text-white">{data2.description}</p>
                            <div className="text-white pt-5 flex justify-center lg:pt-8 xl:pt-5">
                                <button className="text-milkey flex justify-center items-center gap-1 hover:text-gray-500 duration-400">
                                    <a href="/" className="font-bold uppercase">{data2.link}</a>
                                    <div>
                                        <MdArrowForwardIos />
                                    </div>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About;