"use client"
import React from 'react'
import ContactForm from './ContactForm'
import { Client } from 'undici-types'

const CallToAction = () => {
    return (
        <div><button onClick={() => ContactForm}>Contact Us</button></div>
    )
}

export default CallToAction