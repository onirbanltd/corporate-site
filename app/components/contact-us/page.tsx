"use client"
import React from 'react'
import ContactForm from './components/ContactForm'
import Brain from '../brain/brain'
import Calendly from './components/Calendly'
const ContactUS = () => {
    return (
        <>

            <section className='w-full  pt-lengthMd1 flex flex-col '>
                <div className=' font-oswald   text-purple'>
                    <h1 className='text-center text-h1 font-extrabold'>Spark Your Startup. Ignite Success.</h1>
                    <p className='font-roboto text-h2 text-purple  pt-lengthSm2 text-center'>We are your secret weapon for a successful startup.
                    </p>
                </div>
                <div className='justify-center'>   <Brain /></div>


                <div className='px-lengthMd3 py-lengthMd3 flex flex-row '>
                    <div >

                        <ContactForm />
                    </div>

                    <div id="__next" >

                        <Calendly /></div>


                </div>
            </section>
        </>
    )
}

export default ContactUS;