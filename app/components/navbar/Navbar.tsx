// import React from 'react'
// import Image from 'next/image';
// import Link from 'next/link';
// import { title } from 'process';


// const link = [
//     { url: "/", title: "Home" },
//     { url: "/aboutus", title: "About Us" },
//     { url: "/services", title: "Our Services" },
//     { url: "/contactus", title: "Contact Us" }
// ];
// const Navbar = () => {

//     return (
//         <div className="navbar bg-base-100">

//             <div className="navbar-center">
//                 <Link href="/"><Image src="/Onirban8.png " alt='logo' width={200} height={100} /></Link>

//             </div>
//             <div className="navbar-center sm:hidden lg:flex">
//                 <ul className=" flex-row  justify-between px-1">
//                     <li> {link.map(link => (
//                         <Link href={link.url} key={link.title}>{link.title}</Link>
//                     ))}</li></ul>
//             </div>

//             <div className="navbar-end lg:hidden">
//                 <div className="dropdown">
//                     <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
//                     </div>
//                     <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
//                         <li> {link.map(link => (
//                             <Link href={link.url} key={link.title}>{link.title}</Link>
//                         ))}</li>

//                     </ul>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Navbar;