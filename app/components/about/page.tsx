import React from 'react'
import Hero from '../hero/page'
import CallToAction from '../CallToAction'

const AboutUs = () => {
    return (
        <>
            <section className='p-lengthLg1'>
                <Hero />
                <div className=' font-oswald font-bold text-h1 p-lengthLg1 text-center'>About Us</div>
                <div className='font-oswald font-bold text-h2  pt-lengthSm2 text-center text-wrap'>'Onirban' is a Bangla word which means an inextinguishable flame.
                    Deep down, we all have a fire that fuels us, but sometimes we need a little ignition to light that flame.
                    <br />Let us be your match and set your passions ablaze.</div>

                <div className=' fort-roboto text-wrap text-h3  pt-lengthSm2'>
                    We empower ambitious startups in less than 5 years to outshine the noise. Slash costs, optimize product-market fit, and maximize ROI. Forget expensive consultancies. We are your dedicated partner, laser-focused on your success.
                </div>

                <div className='font-oswald font-bold text-h2 text-center pt-lengthSm2'>
                    Your Startup. Supercharged.
                </div>
            </section>
            <CallToAction />
        </>
    )
}

export default AboutUs