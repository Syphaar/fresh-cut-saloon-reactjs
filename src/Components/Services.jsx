const Heading = [
    {
        id:1, 
        subheading1:"Service", 
        subheading2:"beyond expectation", 
        des: "Experience precision cuts and expert grooming tailored to your style. Our skilled barbers deliver fresh, clean looks that keep you sharp and confident."
    }
]

const Services = ({ servicesRef }) => {
    return (
        <section ref={servicesRef} id="services" className="bg-brown overflow-hidden">
            <div className="pt-14 px-7 md:px-10 lg:pt-20 lg:px-24 xl:px-20">
                <div className="md:flex md:flex-row-reverse md:gap-5">
                    <div data-aos="fade-left">
                        {Heading.map((data) => (
                            <div key={data.id}>
                                <h3 className="text-3xl text-white font-bold uppercase mb-5 sm:text-3xl lg:text-5xl">{data.subheading1} <span className="text-milkey">{data.subheading2}</span> </h3>
                                <p className="bg-white w-20 h-1 rounded mb-5 lg:my-7"></p>
                                <p className="text-white">
                                    {data.des}
                                </p>
                                <div>
                                    <button className="text-white bg-transparent w-full mt-5 mb-7 px-5 py-3 rounded-lg border-2 border-milkey transition-all hover:bg-milkey duration-500 xl:w-[43%]">
                                        <p className="font-bold uppercase">Read more about us</p>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="md:w-[250%] xl:w-[90%]" data-aos="fade-right">
                        <img src="https://res.cloudinary.com/dlcoacdkb/image/upload/v1740650063/services_riwqw2.jpg" alt="" className="rounded-xl" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;