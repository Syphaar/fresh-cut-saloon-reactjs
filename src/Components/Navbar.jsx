// const Navbar = () => {
//     return (
//         import { useState } from "react";
import { useState } from 'react'

const Navbar = ({ scrollToSection, activeSection }) => {
    let Links = [
        {lname:"Home", link:"sectiononeRef", number:"01. ", id: "sectionone"},
        {lname:"Services", link:"servicesRef", number:"02. ", id: "services"},
        {lname:"About", link:"aboutRef", number:"03. ", id: "about"},
        {lname:"Blogs", link:"blogsRef", number:"04. ", id: "blogs"},
        {lname:"Contact", link:"contactRef", number:"05. ", id: "contact"},
    ]

    let [open, setOpen] = useState(false);

    const handleLinkClick = (ref) => {
        scrollToSection(ref); // Scroll to the section
        setOpen(false); // Close the navbar after clicking a link
    };

    return (
        <div className="shadow-md w-full sticky top-0 left-0 z-40">
            <div className="flex md:flex items-center justify-between bg-brown py-4 px-7 md:px-10 lg:px-24 xl:px-20">
                <div className="font-bold text-lg sm:text-2xl cursor-pointer flex items-center text-white">
                    {/* <a href=""> */}
                        <span className="text-3xl text-milkey mr-1 pt-2">
                            {/* <ion-icon name="logo-ionic"></ion-icon> */}
                        </span>
                        <a href="/">Fresh-Cut</a>
                    {/* </a> */}
                </div>
                <div className='flex'>
                    <div className='flex'>
                        <div onClick={() => setOpen(!open)} className="sm:mr-36 text-3xl text-white absolute right-8 top-4 sm:top-6 cursor-pointer md:hidden">
                            <ion-icon name={open ? 'close':'menu'}></ion-icon>
                        </div>
                        {/* <div>
                            <button className='text-white'>bottle</button>
                        </div> */}
                    </div>
                    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 text-center bg-brown transition-all duration-500 ease-in ${open ? 'top-20 opacity-100':'top-[-490px]'} md:opacity-100 opacity-0`}>
                        {Links.map((link) => (
                                <li key={link.lname} className="md:ml-6 lg:ml-8 text-xl md:my-0 my-7">
                                    {/* <a onClick={() => handleLinkClick(link.link)} className="text-white hover:text-milkey duration-500 cursor-pointer">{link.lname}</a> */}
                                    <a onClick={() => handleLinkClick(link.link)} className={`font-bold transition-all duration-500 cursor-pointer ${ activeSection === link.id ? "text-milkey " : "text-white"} hover:text-milkey`}>{link.lname}</a>
                                </li>
                            ))
                        }
                    </ul>
                    <div>
                        <button className='hidden sm:block text-white font-bold sm:ml-5 border-2 px-2 py-1 uppercase rounded-lg border-2 border-milkey transition-all hover:bg-milkey duration-500'>Appointment</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
 
export default Navbar;
//     );
// }

// export default Navbar;