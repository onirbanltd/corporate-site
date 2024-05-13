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
                <div className=' flex  justify-center gap-lengthMd3 p-lengthMd2'>
                    <button className="btn bg-purple text-sand" onClick={displayContactForm}>Contact Us</button>

                </div>)}
            <div>
                {showContactForm && <Calendly />}

            </div>

        </>
    )
}

export default CallToAction