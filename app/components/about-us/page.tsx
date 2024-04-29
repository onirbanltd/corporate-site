import React from 'react'
import Brain from '../brain/brain'
import CallToAction from '../../CallToAction'

const AboutUs = () => {
    return (
        <>
            <section className=' pt-lengthMd1'>
                <div className=' font-oswald   text-purple'>
                    <h1 className='text-center text-h1 font-extrabold'>Spark Your Startup. Ignite Success.</h1>
                    <p className='font-roboto text-h2 text-purple  pt-lengthSm2 text-center'>We are your secret weapon for a successful startup.
                    </p>
                </div>

            </section>
            <section className='flex justify-center'><Brain /></section>
            <section className='px-lengthMd3 py-lengthMd3'>

                <div className=' font-oswald font-bold text-h1 p-lengthLg1 text-center'>About Us</div>
                <div className='font-oswald font-bold text-h2  pt-lengthSm2 text-center text-wrap'> &lsquo;Onirban&lsquo; is a Bangla word which means an inextinguishable flame.
                    Deep down, we all have a fire that fuels us, but sometimes we need a little ignition to light that flame.
                    <br />Let us be your match and set your passions ablaze.</div>

                <div className=' fort-roboto text-wrap text-h3  pt-lengthSm2'>
                    We empower ambitious startups in less than 5 years to outshine the noise. Slash costs, optimize product-market fit, and maximize ROI. Forget expensive consultancies. We are your dedicated partner, laser-focused on your success.
                </div>

                <div className='font-oswald font-bold text-h2 text-center pt-lengthSm2'>
                    Your Startup. Supercharged.
                </div>
                <div className='flex  justify-center gap-lengthMd3 p-lengthMd2'><CallToAction /></div>
            </section>

        </>
    )
}

export default AboutUs