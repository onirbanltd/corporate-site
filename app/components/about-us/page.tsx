import React from 'react';
import Image from 'next/image';

import CallToAction from '../../CallToAction';
import aboutUs from './aboutUsData.json'



interface Service {
    tag: string;
    mission: string;
    who: string[];
    what: string;
    how: { title: string; description: string }[];
    choice: string;
    values: string[];

}

const AboutUs: React.FC = () => {

    const data = aboutUs.aboutUsData;
    const tag = data[0]?.tag || "";
    const mission = data[0]?.mission || "";
    const who = data[1]?.who || "";
    const what = data[2]?.what || "";
    const how = data[3]?.how || [];
    const choice = data[4]?.choice || "";
    const values = data[5]?.values || [];

    return (

        <>
            <section>
                <h1 className="font-oswald text-h1 text-center">About Us</h1>

                {data && (
                    <>
                        <div className="w-full card lg:card-side bg-base-100 shadow-xl font-roboto text-purple dark:text-champagne">
                            <figure className="w-full"><Image src="/service/mission.jpeg" alt="crafted boat with mission values purpose in wooden blocks" width={500} height={500} /></figure>
                            <div className="card-body ">
                                <h2 className="card-title text-h2">{tag}</h2>
                                <h3 className="card-title">Our Mission:</h3> <span className="text-h4">{mission}</span>



                                <div className="card-actions justify-start">
                                    <h2 className="card-title">Who We Are:
                                    </h2>
                                    <h3 className="text-h4  ">{who}</h3>

                                </div>
                                <div>
                                    <h3 className='text-h4'> {what}</h3>
                                    <ol className=" list-inside">
                                        {how.map((item, index) => (
                                            <li className="text-h4 list-style-position: inside  px-lengthSm1 list-disc " key={index}><span className='text-cyan'>{item.title}-
                                            </span>{''}{item.description}</li>


                                        ))}

                                    </ol>
                                </div>

                            </div>
                        </div >
                        <div className="w-full card lg:card-side bg-base-100 shadow-xl font-roboto text-purple dark:text-champagne">
                            <div className="card-body ">
                                <h2 className="card-title text-h2">{choice}</h2>
                                <div className="card-actions justify-start">
                                    <h2 className="card-title">Our values:
                                    </h2><br />


                                    <ol className=" list-inside">
                                        {values.map((value, index) => (
                                            <li className="text-h4 list-style-position: inside  px-lengthSm1 list-disc " key={index}>{value}</li>


                                        ))}

                                    </ol>


                                </div>
                            </div>

                        </div>
                        <div className="w-full card lg:card-side bg-base-100 shadow-xl font-roboto text-purple dark:text-champagne">

                            <figure className="w-full"><Image src="/service/nextsteps.jpeg" alt="Next steps for product development start up book call Onirban" width={500} height={500} /></figure>
                            <div className="card-body justify-start">
                                <h2 className="card-title text-h2">Ready to Launch Your Startup Journey?
                                </h2>
                                <h3 className="text-h3  ">Schedule a free call to discuss your startup goals.</h3>
                                <CallToAction />

                            </div>
                        </div>
                    </>)}
                {!data && <span className="loading loading-infinity loading-md"></span>}
            </section >
        </>
    )
}

export default AboutUs;