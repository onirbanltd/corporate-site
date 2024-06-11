"use client"
import React from 'react'
import { useState } from 'react'
import Calendly from './components/contact-us/components/Calendly'
import { sendGTMEvent } from '@next/third-parties/google'

const CallToAction = () => {
    const [showContactForm, setShowContactForm] = useState(false);
    const displayContactForm = () => {
        setShowContactForm(true);
        sendGTMEvent({ event: 'buttonClicked', value: 'TJ6052SX5D' })


    }
    return (
        <>

            {!showContactForm && (
                <div className=''>
                    <button className=" w-full  mb-4 md:mb-0px-4 py-2  bg-purple text-sand dark:bg-caribbean dark:text-sand flex  justify-center  btn rounded-md" onClick={displayContactForm}>Contact Us</button>

                </div>)}
            <div>
                {showContactForm && <Calendly />}

            </div>

        </>
    )
}

export default CallToAction