"use client";
import React from 'react'
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Logo from "../../../public/Onirban8.png"
import Calendly from '../contact-us/components/Calendly';


const link = [
    { id: 1, url: "/", title: "Home" },
    { id: 2, url: "/components/about-us", title: "About Us" },
    { id: 3, url: "/components/services", title: "Our Services" },
    { id: 4, url: "/components/contact-us", title: "Contact Us" }
];

const Navbar = () => {
    const [showCalendly, setShowCalendly] = useState(false);

    const calendlyLink = () => {
        setShowCalendly(true);
    }
    const [showMenu, setShowMenu] = useState(false);
    const pathname = usePathname();

    const handleMenu = () => {
        setShowMenu(!showMenu);
    }
    return (
        <>
            <nav className="flex w-full items-center justify-between navbar bg-base-100 p-lengthMd2">

                <div className="navbar-center">
                    <Link href="/"><Image src={Logo} alt='logo' height={80} width={120} /></Link>

                </div>
                <div><button role="button" className='btn bg-caribbean text-sand' onClick={calendlyLink}>Book a Call</button></div>
                <div className="navbar-center sm:hidden md:hidden  lg:block">

                    {link.map(link => (
                        <Link href={link.url} key={link.id} className=" flex-row  justify-between  px-lengthSm3"  >{link.title}</Link>
                    ))}
                </div>

                <div className="navbar-end sm:block md:hidden lg:hidden">
                    <div className="dropdown">
                        <button tabIndex={0} role="button" className="btn btn-ghost btn-circle" onClick={handleMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </button>
                        {showMenu && (<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                            <li> {link.map(link => (
                                <Link href={link.url} key={link.title}>{link.title}</Link>
                            ))}</li>

                        </ul>)}
                    </div>
                </div>
            </nav>
            {showCalendly && <Calendly />}
        </>
    )
}

export default Navbar;