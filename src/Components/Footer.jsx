import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

const Heading = [
    {
        id:1, 
        subheading1:"Contact Us",
    }
]

const Footer = ({ contactRef }) => {
    return (
        <section ref={contactRef} id="contact" className="bg-brown">
            <div className="pt-14 pb-14 px-7 md:px-10 lg:pb-10 lg:pt-20 lg:px-24 xl:px-20">
                <div>
                    {Heading.map((data) => (
                        <div key={data.id}>
                            <h3 className="text-3xl text-white font-bold uppercase mb-5 sm:text-3xl lg:text-5xl">{data.subheading1}</h3>
                        </div>
                    ))}
                </div>
                <div className="">
                    <div className="text-white sm:flex sm:justify-center sm:text-center">
                        <div className="" data-aos="zoom-in">
                            
                            <p className="pb-4">
                            Looking for your next fresh cut?
                            Visit us at no.4 bull street for a top-tier grooming experience.
                            For appointments or general inquiries, feel free to call us at +123 456 789.
                            You can also email us at freshcut@gmail.com for bookings or questions.
                            Follow us on Instagram and Facebook for the latest trends and offers.
                            Our team of skilled barbers is ready to give you a fresh, sharp look.
                            We’re open from 7:00AM – 8:00PM on weekdays and 7:00AM - 9:00PM on Saturdays 
                            swing by anytime for a quick trim or full makeover.
                            Get in touch today, and let us help you stay stylish!
                            </p>
                            <div className="pb-4">
                                <div className="flex gap-5 text-xl sm:text-2xl sm:justify-center">
                                    <div className="">
                                        <a href="/" className="transition-all duration-500 hover:text-milkey">
                                            <FaTwitter />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/" className="transition-all duration-500 hover:text-milkey">
                                            <FaFacebookF />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/" className="transition-all duration-500 hover:text-milkey">
                                            <FaInstagram />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="text-milkey flex items-center gap-4 pb-2 sm:justify-center">
                                <div className="text-4xl text-(--color-tahiti)">
                                    <FiPhoneCall />
                                </div>
                                <div className="">
                                    <p className="w-full text-2xl font-bold xl:text-2xl">+123 456 789</p>
                                    <p className="pb-3 text-(--color-tahiti)">Round-the-clock</p>
                                </div>
                            </div>
                            <h4 className="text-3xl font-bold lg:pb-4">Fresh-Cut</h4>
                            {/* <div className="w-full">
                                <a href="/">
                                    <button className="w-full px-5 py-3 mt-2 border-2 bg-red-500 rounded-md md:w-[20%]">
                                        <p className="font-bold">Contact us</p>
                                    </button>
                                </a>
                            </div> */}
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;