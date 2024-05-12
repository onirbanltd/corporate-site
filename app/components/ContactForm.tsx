
"use client";

import { useState } from "react";


const ContactForm = () => {

    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [contactName, setContactName] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState({});
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        console.log("Email: ", email);
        console.log("Company", company);
        console.log("Contact Name: ", contactName);
        console.log("Message: ", message);

        const res = await fetch("api/contact", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                email,
                company,
                contactName,
                message,
            })
        });
        const { msg } = await res.json()
        setError(msg);
        setSuccess(success);
        if (success) {

            setEmail("");
            setCompany("");
            setContactName("");
            setMessage("");
        }
    }


    return (
        <>
            <div>

                <form onSubmit={handleSubmit} className=' w-1/2 p-lengthMd2 font-roboto text-h4 '>
                    <h2 className='font-roboto text-h2 text-purple  pt-lengthSm2 text-center'>Send us a message <br /></h2>
                    <div className='flex justify-start gap-lengthSm3 pt-lengthSm3 font-roboto font-semibold text-caribbean'>
                        <label htmlFor="email">Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} className='border border-gray-300 px-2 py-1 rounded w-full' type="emtextail" name="email" id="email" value={email} /></div>
                    <div className='flex justify-around gap-lengthSm3  pt-lengthSm font-roboto font-semibold text-caribbean'><label htmlFor="company">Company name</label>
                        <input onChange={(e) => setCompany(e.target.value)} className='border border-gray-300 px-2 py-1 rounded w-full gap-lengthSm3' type="text" name="company" id="company" />
                        <label htmlFor="name">Contact name</label>
                        <input onChange={(e) => setContactName(e.target.value)} className='border border-gray-300 px-2 py-1 rounded w-full' type="text" name="yourname" id="yourname" value={contactName} /></div>
                    <div className='gap-lengthSm3 pt-lengthSm font-roboto font-semibold text-caribbean'><label htmlFor="message">Tell us about your project</label>
                        <textarea onChange={(e) => setMessage(e.target.value)} className='border border-gray-300 px-2 py-1 rounded w-full' name="message" id="message" value={message} /></div>


                    <div className='flex justify-center fill-caribbean'>
                        <button className="btn bg-purple text-sand" type='submit'>Send</button>
                    </div>

                </form>
            </div>


        </>
    )
}
export default ContactForm;