
"use client";

import { useState } from "react";

const ContactForm = () => {

    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [contactName, setContactName] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        console.log("Email: ", email);
        console.log("Company", company);
        console.log("Contact Name: ", contactName);
        console.log("Message: ", message);

        const res = await fetch("api/contact", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                email,
                company,
                contactName,
                message,
            }),
        });

        const { msg, success } = await res.json();
        setError(msg);
        setSuccess(success);

        if (success) {
            setEmail("");
            setCompany("");
            setCompany("");
            setMessage("");
        }
    };


    return (
        <>
            <div>
                <form onSubmit={handleSubmit} className=' w-full p-lengthMd2 font-roboto text-h4 '>
                    <div className='flex justify-start gap-lengthSm3 pt-lengthSm3 font-roboto font-semibold text-caribbean'>
                        <label htmlFor="email">Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} className='border border-gray-300 px-2 py-1 rounded w-full' type="email" name="email" id="email" value={email} /></div>
                    <div className='flex justify-around gap-lengthSm3  pt-lengthSm font-roboto font-semibold text-caribbean'><label htmlFor="company">Company name</label>
                        <input onChange={(e) => setCompany(e.target.value)} className='border border-gray-300 px-2 py-1 rounded w-full gap-lengthSm3' type="text" name="company" id="company" />
                        <label htmlFor="name">Contact name</label>
                        <input onChange={(e) => setContactName(e.target.value)} className='border border-gray-300 px-2 py-1 rounded w-full' type="text" name="yourname" id="yourname" value={contactName} /></div>
                    <div className='gap-lengthSm3 pt-lengthSm font-roboto font-semibold text-caribbean'><label htmlFor="message">Tell us about your project</label>
                        <textarea onChange={(e) => setMessage(e.target.value)} className='border border-gray-300 px-2 py-1 rounded w-full' name="message" id="message" maxLength={3000} rows={4} value={message} /></div>


                    <div className='flex justify-center fill-caribbean'>
                        <button className="btn bg-purple text-sand" type='submit'>Send</button>
                    </div>

                </form>
            </div>
            <div className="flex flex-col">{error && (
                <div
                    className={`${success ? "text-green-800" : "text-red-600"
                        } px-5 py-2`}
                >
                    {error}</div>

            )}
            </div>
        </>
    )
}
export default ContactForm;