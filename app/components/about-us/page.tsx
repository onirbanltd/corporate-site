import React from 'react';
import Hero from '../hero/page'
import CallToAction from '../../CallToAction';
import aboutUs from './aboutUsData.json'

interface Service {
    tag: string;
    mission: string;
    who: string[];
    what: string[];
    how: { title: string; description: string }[];
    choice: string;
    values: string[];
}

const AboutUs: React.FC = () => {

    const data = aboutUs.aboutUsData;
    return (
        <>
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h1 className="mb-12 text-h1 font-oswald font-bold leading-none text-center ">About Us</h1>
                    <Hero />
                    <div className="divide-y dark:divide-gray-300 font-roboto">
                        <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                            <h3 className="font-semibold md:col-span-5">Who We Are:</h3>
                            <p className="md:pl-0 md:col-span-7">{data[1].who}</p>
                        </div>
                        <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                            <h3 className="font-semibold md:col-span-5">What We Do:</h3>
                            <ul className="md:pl-0 md:col-span-7">{data[2].what}
                                {data[3].how.map((list, index) =>
                                    (<li className=' list-disc' key={index}>{list.title}: {list.description}</li>))}

                            </ul>
                        </div>
                        <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                            <h3 className="font-semibold md:col-span-5">Our Values</h3>
                            <ul>
                                {data[5].values.map((value, index) => (<li className="list-disc" key={index}>{value}</li>))}
                            </ul>
                        </div>

                    </div>
                </div>
                <div>{data[4].choice}</div>
                <div><CallToAction /></div>
            </section>
        </>
    )
}

export default AboutUs;