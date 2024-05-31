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

            <section className="p-lengthLg3 dark:text-champagne text-purple">
                <div className="container text-center">
                    <span className="font-oswald text-h1  text-center ">3 Stages to Startup Success.</span>
                    <h2 className="font-oswald text-h2  text-center">Let Us Find Yours.</h2>
                    <div className="grid gap-lengthLg3 lg:grid-cols-3">
                        {serviceData.services.map((service) => (
                            <ServiceCard key={service.stage} service={service} onClick={() => expandServiceCard(service.stage)} />
                        ))}


                    </div>

                </div>

                {expandedService && (
                    <div className=' pt-lengthLg3  gap-lengthSm1 content-center'>
                        <ExpandCard service={expandedService} />


                    </div>)}

            </section>
        </>
    )
}

export default OurServices;