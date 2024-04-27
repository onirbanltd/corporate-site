"use client"
import React from 'react'
import ContactForm from './ContactForm'
import { Client } from 'undici-types'

const CallToAction = () => {
    return (
        <div className=' flex  justify-center gap-lengthMd3 p-lengthMd2'>
            <button className="btn bg-purple text-sand" onClick={() => ContactForm}>Contact Us</button>
            <button className='w-1/2 text-caribbean'>See Services</button>
        </div>
    )
}

export default CallToAction