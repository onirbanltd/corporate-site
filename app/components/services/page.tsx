'use client'
import React, { useState } from 'react'
// import CallToAction from '../../CallToAction';
import ServiceCard from './ServiceCard';
import serviceData from './serviceData.json'
import ExpandCard from './ExpandCard';

const OurServices = () => {

    const [expanded, setExpanded] = useState<number | null>(null);

    const expandServiceCard = (stage: number) => {

        setExpanded(stage === expanded ? null : stage);

    };
    const expandedService = serviceData.services.find(service => service.stage === expanded);
    return (
        <>

            <section className=" sm:mt-lengthLg3 md:mt-lengthSm0">
                <div className="  pt-lengthLg3  pb-lengthMd4 md:pt-lengthLg1 md:pb-lengthLg4 dark:text-champagne text-purple">
                    <h2 className="font-oswald text-4xl lg:text-5xl font-bold lg:tracking-tight"> Startup Growth Journey to Success.</h2>
                    <h3 className="font-roboto text-lg  mt-lengthSm2">
                        The UK startup landscape is competitive.
                        Only <span className=" font-bold">42%</span> survive the first 5 years.</h3>

                    <p className=' font-roboto text-lg mt-lengthMd1'>With affordable packages and flexible solutions, we fit your needs to ignite your startup journey.
                    </p>
                    <p className=' font-roboto text-lg mt-lengthMd1'>Let Us Find Your Path to Sucess, today!</p>
                    <div className="grid gap-lengthLg3 lg:grid-cols-3 sm:grid-cols-1 pt-lengthMd4 ">
                        {serviceData.services.map((service) => (
                            <ServiceCard key={service.stage} service={service} onClick={() => expandServiceCard(service.stage)} />
                        ))}


                    </div>

                </div>

                {expandedService && (
                    <div className=' pt-lengthMd1  gap-lengthSm1 content-center'>
                        <ExpandCard service={expandedService} />


                    </div>)}

            </section >
        </>
    )
}

export default OurServices;