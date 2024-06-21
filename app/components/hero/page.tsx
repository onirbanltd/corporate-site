'use client'
import React from 'react'
import CallToAction from '../../CallToAction';
import Brain from "../brain/brain"
import Link from 'next/link';

// import { useRouter } from 'next/router'

const Hero = () => {
    // const router = useRouter();

    return (

        <>
            <div className='sm:mt-lengthLg3 md:mt-lengthSm0 grid lg:grid-cols-2 place-items-center pt-lengthLg3  pb-lengthMd4 md:pt-lengthLg1 md:pb-lengthLg4 '>
                <div className=' pt-lengthMd3  align-middle md:order-1 hidden lg:block size-auto'> <Brain /></div>
                <div className=' pt-lengthMd3'>
                    <h1 className=' font-oswald text-purple dark:text-champagne text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter'>Spark Your Startup. Ignite Success.</h1>
                    <p className='font-roboto text-lg mt-lengthSm0 text-purple dark:text-champagne max-w-xl '>We are your secret weapon for a successful startup. <wbr /> We build interactive products to validate your ideas and concepts, turning them into user-interactive applications - fast!
                    </p>
                    <div className=' mt-lengthSm1 flex flex-col sm:flex-row gap-3 '>
                        <CallToAction />
                        <Link href="/components/services" className=' border bg-purple text-sand dark:bg-caribbean dark:text-sand flex  justify-center  btn rounded-md'>See Services</Link>

                    </div>
                </div>




            </div>

        </>

    )
}

export default Hero;