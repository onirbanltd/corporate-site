"use client"
import React from 'react'
import { useState } from 'react'
import Calendly from './components/contact-us/components/Calendly'
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
                {showContactForm && <Calendly />}

            </div>

        </>
    )
}

export default CallToAction