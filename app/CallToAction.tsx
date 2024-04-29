"use client"
import React from 'react'
import { useState } from 'react'
import ContactForm from './ContactForm'
import { Client } from 'undici-types'
import CalendlyEmbed from './components/CalendlyEmbed'
const CallToAction = () => {
    const [showContactForm, setShowContactForm] = useState(false);
    const displayContactForm = () => {
        setShowContactForm(true);

    }
    return (
        <>
            {!showContactForm && (
                <div className=' flex  justify-center gap-lengthMd3 p-lengthMd2'>
                    <button className="btn bg-purple text-sand" onClick={displayContactForm}>Contact Us</button>

                </div>)}
            <div>
                {showContactForm && <ContactForm />}

            </div>
            {/* <div> <CalendlyEmbed url="https://calendly.com/onirbanltd/30min" /></div> */}
        </>
    )
}

export default CallToAction