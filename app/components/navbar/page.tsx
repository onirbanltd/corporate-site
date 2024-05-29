"use client";
import React from 'react'
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Logo from "../../../public/Onirban8.svg"
import Calendly from '../contact-us/components/Calendly';
import { sendGTMEvent } from "@next/third-parties/google";

const link = [
    { id: 1, url: "/", title: "Home" },
    { id: 2, url: "/components/about-us", title: "About Us" },
    { id: 3, url: "/components/services", title: "Our Services" },
    { id: 4, url: "/components/contact-us", title: "Contact Us" }
];

const Navbar = () => {
    const [showCalendly, setShowCalendly] = useState(false);
    const calendlyLink = () => {
        setShowCalendly(true)
        sendGTMEvent({ event: "buttonClicked", value: 'TJ6052SX5D' })
    }
    return (
        <>
            <nav className="flex px-lengthLg3 items-center justify-between navbar bg-base-100 sticky top-0 z-10">

                <div className="flex items-center">
                    <Link href="/"><Image src={Logo} alt='Onirban Product Development logo' height={80} width={120} /></Link>

                </div>
                <div className='flex items-center'>
                    <button role="button" className='btn bg-caribbean text-sand' onClick={calendlyLink}>Book a Call</button></div>
                <div className="hidden md:flex space-x-lengthMd3">

                    {link.map(link => (
                        <Link href={link.url} key={link.id} className=" flex-row  justify-between  whitespace-nowrap"  >{link.title}</Link>
                    ))}
                </div>

                <div className="navbar-end md:hidden">
                    <div className="md:hidden dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                            {link.map(link => (
                                <li key={link.id} className=' whitespace-nowrap'>
                                    <Link href={link.url} key={link.id}>{link.title}</Link>
                                </li>))}

                        </ul>
                    </div>
                </div>
            </nav>
            {showCalendly && <Calendly />}
        </>
    )
}

export default Navbar;