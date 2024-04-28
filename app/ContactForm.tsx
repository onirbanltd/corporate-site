
"use client"
import React from 'react'

async function passData(event: any) {
    event.preventDefault();
    const contactData = {
        email: String(event.target.email.value),
        company: String(event.target.company.value),
        contactName: String(event.target.yourname.value),
        message: String(event.target.message.value),

    };
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify(contactData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (!response.ok) {
            throw new Error("HTTP Error! status" + response.status)
        }
    } catch (error) {
        console.error("Error sending contact data:", error);
    }
    console.log(contactData);

}
const ContactForm = () => {

    return (<>

        <form onSubmit={passData} className=' w-2/3 p-lengthMd2 font-roboto text-h4 '>
            <div className='flex justify-start gap-lengthSm3 pt-lengthSm3'><label htmlFor="email">Email</label>
                <input className='border border-gray-300 px-2 py-1 rounded w-full' type="email" name="email" id="email" /></div>
            <div className='flex justify-around gap-lengthSm3  pt-lengthSm'><label htmlFor="company">Company name</label>
                <input className='border border-gray-300 px-2 py-1 rounded w-full gap-lengthSm3' type="text" name="company" id="company" />
                <label htmlFor="name">Contact name</label>
                <input className='border border-gray-300 px-2 py-1 rounded w-full' type="text" name="yourname" id="yourname" /></div>
            <div className='gap-lengthSm3 pt-lengthSm'><label htmlFor="message">Tell us about your project</label>
                <textarea className='border border-gray-300 px-2 py-1 rounded w-full' name="message" id="message" maxLength={3000} rows={4} /></div>


            <div className='flex justify-center fill-caribbean'>
                <button type='submit'>Send</button>
            </div>

        </form>

    </>
    )
}

export default ContactForm;