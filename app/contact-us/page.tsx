import React from 'react'
// import ContactForm from './components/ContactForm'
import Brain from '../components/brain/brain'
const ContactUS = () => {
    return (
        <>
            <section className=' pt-lengthMd1 text-purple dark:text-sand'>
                <div className=' font-oswald  '>
                    <h1 className='text-center text-h1 font-extrabold '>Spark Your Startup. Ignite Success.</h1>
                    <p className='font-roboto text-h2  pt-lengthSm2 text-center'>We are your secret weapon for a successful startup.
                    </p>
                </div>

            </section>
            <section className='flex justify-center'><Brain /></section>
            <section className='px-lengthMd3 py-lengthMd3'>
                <div className=' font-oswald font-bold text-h1 p-lengthLg1 text-center'>Contact Us</div>
                {/* <ContactForm></ContactForm> */}
            </section>
        </>
    )
}

export default ContactUS;