import React from 'react'
import CallToAction from '../../CallToAction';
import Brain from "../brain/brain"
import Link from 'next/link';

const Hero = () => {
    return (
        <>
            <section className=' pt-lengthMd1 '>
                <div className=' font-oswald   text-purple dark:text-champagne'>
                    <h1 className='text-center text-h1 font-extrabold'>Spark Your Startup. Ignite Success.</h1>
                    <p className='font-roboto text-h2 text-purple dark:text-champagne  pt-lengthSm2 text-center'>We are your secret weapon for a successful startup.  You will have access to Workshop Maestros, User Experience Gurus, and Virtuoso Developers - to help unlock your potential. With affordable packages and flexible solutions - we fit your needs. <br />Ignite your startup journey today!

                    </p>
                </div>

                <div className='flex w-full justify-center gap-lengthSm3 pt-lengthSm2'>
                    <CallToAction></CallToAction>
                    <Link href="/components/services" className=' text-caribbean font-roboto font-bold  m-lengthLg2'>See Services</Link>

                </div>
            </section>
            <section className='flex justify-center'><Brain /></section>

        </>

    )
}

export default Hero;