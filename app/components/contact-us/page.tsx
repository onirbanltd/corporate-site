"use client"
import React from 'react'
import ContactForm from './components/ContactForm'
import Brain from '../brain/brain'
import Calendly from './components/Calendly'
const ContactUS = () => {
    return (
        <>
            <section className=' pt-lengthMd1'>
                <div className=' font-oswald   text-purple'>
                    <h1 className='text-center text-h1 font-extrabold'>Spark Your Startup. Ignite Success.</h1>
                    <p className='font-roboto text-h2 text-purple  pt-lengthSm2 text-center'>We are your secret weapon for a successful startup.
                    </p>
                </div>

            </section>
            <section className='flex justify-center'><Brain /></section>
            <section className='px-lengthMd3 py-lengthMd3'>
                <div className=' font-oswald font-bold text-h1 p-lengthLg1 text-center'>Contact Us</div>
                <ContactForm></ContactForm>
            </section>
            <section>
                <h2 className='font-roboto text-h2 text-purple  pt-lengthSm2 text-cente'>Feel Free to Schedule a free 30 mins call with Orniban</h2>
                <div id="__next">  <Calendly /></div>


            </section>
        </>
    )
}

export default ContactUS;