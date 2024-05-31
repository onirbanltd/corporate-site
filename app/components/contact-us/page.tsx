"use client"
import React from 'react'
import Image from 'next/image'
// import ContactForm from '../ContactForm'
import Brain from '../brain/brain'
import Calendly from './components/Calendly'
const ContactUS = () => {
    return (
        <>

            <section className='w-full  pt-lengthMd1 flex flex-col '>
                <div className=' font-oswald   text-purple'>
                    <h1 className='text-center text-h1 font-extrabold dark:text-sand'>Spark Your Startup. Ignite Success.</h1>
                    <p className='font-roboto text-h2 text-purple  pt-lengthSm2 text-center dark:text-sand'>We are your secret weapon for a successful startup.
                    </p>
                </div>
                <div className='justify-center'>   <Brain /></div>
                <div className="w-full card lg:card-side bg-base-100 shadow-xl font-roboto text-purple dark:text-champagne">

                    <figure className="w-1/2"><Image src="/service/nextsteps.jpeg" alt="Next steps for product development start up book call Onirban" width={500} height={500} /></figure>
                    <div className="card-body justify-start ">
                        <h2 className="card-title text-h2">Ready to Launch Your Startup Journey?
                        </h2>
                        <h3 className="text-h3  ">Schedule a free call to discuss your startup goals.</h3>
                        <div id="__next"  >
                            <Calendly />
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}

export default ContactUS;