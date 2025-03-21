import PropTypes from "prop-types"; // Import prop-types

const Heading = [
    {
        id:1, 
        subheading1:"Blogs",
    }
]

const Pictures = [
    {
        id:1,
        img: <img src="https://res.cloudinary.com/dlcoacdkb/image/upload/v1740650062/blog-one_xadgdm.jpg" alt="" className="rounded-xl" />,
    },
    {
        id:2,
        img: <img src="https://res.cloudinary.com/dlcoacdkb/image/upload/v1740650063/blog-two_yxrlox.jpg" alt="" className="rounded-xl" />,
    },
    {
        id:3,
        img: <img src="https://res.cloudinary.com/dlcoacdkb/image/upload/v1740650062/blog-three_yisqvg.jpg" alt="" className="rounded-xl" />,
    },
    {
        id:4,
        img: <img src="https://res.cloudinary.com/dlcoacdkb/image/upload/v1740650061/blog-four_kjtexu.jpg" alt="" className="rounded-xl" />,
    },
]

const Blogs = ({ blogsRef }) => {
    return (
        <section ref={blogsRef} id="blogs" className="bg-brown">
            <div className="pt-14 px-7 md:px-10 lg:pt-20 lg:px-24 xl:px-20" data-aos="fade-up">
                <div>
                    {Heading.map((data) => (
                        <div key={data.id}>
                            <h3 className="text-3xl text-white font-bold uppercase mb-5 sm:text-3xl lg:text-5xl">{data.subheading1}</h3>
                        </div>
                    ))}
                </div>
                <div>
                    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-4">
                        {Pictures.map((images) => (
                            <div key={images.id} className="rounded-full">
                                <div className="rounded-xl">
                                    {images.img}
                                    {/* <img src="src/assets/images/design-five.JPG" alt="" className="rounded-xl" /> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
};

// Define prop types
Blogs.propTypes = {
    blogsRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any }),
    ]),
};

export default Blogs;