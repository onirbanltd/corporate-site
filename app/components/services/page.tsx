import React, { useState } from 'react'
import Image from 'next/image';
import CallToAction from '../../CallToAction';
import ServiceCard from './ServiceCard';
import serviceData from './serviceData.json'
import ExpandCard from './ExpandCard';
const OurServices = () => {

    return (
        <>

            <section className="p-lengthLg3">
                <div className="container text-center">
                    <span className="font-oswald text-h1  text-center text-purple">3 Stages to Startup Success.</span>
                    <h2 className="font-oswald text-h2  text-center text-purple">Let Us Find Yours.</h2>
                    <div className="grid gap-lengthLg3 lg:grid-cols-3">
                        {serviceData.services.map((data) => (
                            <ServiceCard key={data.stage}  {...data} />
                        ))}


                    </div>
                </div>


                <div className=''>
                    {serviceData.services.map((details) => (
                        <ExpandCard key={details.stage} {...details} />
                    ))}

                </div>
            </section>
        </>
    )
}

export default OurServices;