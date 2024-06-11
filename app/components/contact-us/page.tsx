"use client"
import React from 'react'
import Image from 'next/image'
// import ContactForm from '../ContactForm'
import Brain from '../brain/brain'
import Calendly from './components/Calendly'
const ContactUS = () => {
    return (
        <>

            <section className='mt-lengthLg4 '>

                <h1 className='font-oswald text-purple dark:text-champagne text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter'>Spark Your Startup. Ignite Success.</h1>

                <p className='font-roboto text-lg text-purple  pt-lengthSm2  dark:text-sand'>We are your secret weapon for a successful startup.
                </p>
                <h2 className="text-lg">Ready to Launch Your Startup Journey?
                </h2>
                <h3 className="text-md  ">Schedule a free call to discuss your startup goals.</h3>

                <div className=" w-full flex  pt-lengthLg3  pb-lengthMd4 md:pt-lengthLg1 md:pb-lengthLg4">

                    <figure className="w-1/2 md:block hidden"><Image src="/service/nextsteps.jpeg" alt="Next steps for product development start up book call Onirban" width={500} height={500} /></figure>
                    <div className="w-1/2 " id="__next">
                        <Calendly />

                    </div>
                </div>


            </section>
        </>
    )
}

export default ContactUS;