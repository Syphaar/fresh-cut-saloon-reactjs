import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";


const Sectionone = ({ sectiononeRef }) => {
    return (
        <section ref={sectiononeRef} id="sectionone">
            {/* <div className=""> */}
                <div className="flex justify-center items-center w-full h-[100vh] bg-[url(https://res.cloudinary.com/dlcoacdkb/image/upload/v1740650061/bg_hlwsol.jpg)] bg-cover bg-no-repeat bg-center">
                    <div className="md:flex justify-between items-center md:w-full px-7 sm:pl-7 md:pl-10 md:pr-0 lg:pl-24 xl:pl-20" data-aos="zoom-in">
                        <div>
                            <h2 className="text-4xl font-bold text-white w-60 uppercase sm:text-5xl sm:w-96 lg:text-7xl lg:w-[70%]">Stay sharp with <span className="text-milkey">every cut.</span> </h2>
                            <p className="bg-white w-20 h-1 rounded my-5 lg:my-7"></p>
                            <p className="text-white">Come by for a haircut, shave, accessories and good mood</p>
                        </div>
                        <div className="text-white flex gap-5 pt-3 text-2xl md:block md:pt-0 md:bg-milkey md:rounded-l-lg">
                            <div className="md:px-4 md:py-5">
                                <a href="/" className="transition-all duration-500 hover:text-milkey md:hover:text-brown">
                                    <FaTwitter />
                                </a>
                            </div>
                            <div className="md:px-4 md:py-5">
                                <a href="/" className="transition-all duration-500 hover:text-milkey md:hover:text-brown ">
                                    <FaFacebookF />
                                </a>
                            </div>
                            <div className="md:px-4 md:py-5">
                                <a href="/" className="transition-all duration-500 hover:text-milkey md:hover:text-brown ">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </section>
    )
};

export default Sectionone;