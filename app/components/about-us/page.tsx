import React from 'react';
import Image from 'next/image';
import Hero from '../hero/page'
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

    return (
        <>
            <section>
                <h1 className="font-oswald text-h1 text-center">About Us</h1>

                {data && (
                    <>
                        <div className="w-full card lg:card-side bg-base-100 shadow-xl font-roboto text-purple dark:text-champagne">
                            <figure className="w-full"><Image src="/service/mission.jpeg" alt="crafted boat with mission values purpose in wooden blocks" width={500} height={500} /></figure>
                            <div className="card-body ">
                                <h2 className="card-title text-h2">{data[0].tag}</h2>
                                <h3 className="card-title">Our Mission:</h3> <span className="text-h4">{data[0].mission}</span>



                                <div className="card-actions justify-start">
                                    <h2 className="card-title">Who We Are:
                                    </h2><br />
                                    <h3 className="text-h4  ">{data[2].what}</h3>

                                </div>
                                <div>
                                    <ol className=" list-inside">
                                        {data[3].how.map((item, index) => (
                                            <li className="text-h4 list-style-position: inside  px-lengthSm1 list-disc " key={index}><span className='text-cyan'>{item.title}-</span>{''}{item.description}</li>


                                        ))}

                                    </ol>
                                </div>

                            </div>
                        </div >
                        <div className="w-full card lg:card-side bg-base-100 shadow-xl font-roboto text-purple dark:text-champagne">
                            <div className="card-body ">
                                <h2 className="card-title text-h2">{data[4].choice}</h2>




                                <div className="card-actions justify-start">
                                    <h2 className="card-title">Our values:
                                    </h2><br />


                                    <ol className=" list-inside">
                                        {data[5].values.map((value, index) => (
                                            <li className="text-h4 list-style-position: inside  px-lengthSm1 list-disc " key={index}>{value}</li>


                                        ))}

                                    </ol>
                                </div>
                                <div className="card-actions justify-start">
                                    <h2 className="card-title">Ready to Launch Your Startup Journey?
                                    </h2><br />
                                    <h3 className="text-h4  ">Schedule a free call to discuss your startup goals.</h3>
                                    <CallToAction />

                                </div>
                            </div>

                        </div>
                    </>)}
                {!data && <span className="loading loading-infinity loading-md"></span>}
            </section >
        </>
    )
}

export default AboutUs;