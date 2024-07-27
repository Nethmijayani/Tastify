import React, { useState } from 'react';
import Button from './Button';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const Links = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Recipes", link: "/recipes" },
        { name: "Categories", link: "/categories" },
        
    ];

    return (
        <div className='shadow-md w-full top-0 left-0'>
            <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer'>
                    Testify
                </div>
                <div onClick={() => setIsOpen(!isOpen)} className='text-3xl absolute right-8 top-5 cursor-pointer md:hidden'>
                    <ion-icon name={isOpen ? 'close' : 'menu'}></ion-icon>
                </div>
                <ul className=
                {`md:flex md:items-center md:pb-0 pb-12  bg-white absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-20 opacity-100' : 'top-[-490px] opacity-0 md:opacity-100'}`}>
                    {Links.map((link, index) => (
                        <li key={index} className='md:ml-8 text-xl md:my-0 my-7'>
                            <a href={link.link} className='text-gray-800 hover:text-gray-600 duration-500'>{link.name}</a>
                        </li>
                        
                    ))}
                   <Button/>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;