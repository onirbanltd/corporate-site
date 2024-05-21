"use client"
import React from 'react'
import ContactForm from '../components/contact-us/components/ContactForm'
import { Client } from 'undici-types'

const CallToAction = () => {
    return (
        <div><button onClick={() => ContactForm}>Contact Us</button></div>
    )
}

export default CallToAction