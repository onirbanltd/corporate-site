import React from 'react'
import Image from 'next/image';
import CallToAction from '../../CallToAction';
const OurServices = () => {
    return (
        <>

            <section className=" p-lengthLg3">
                <div className='grid gap-4md:grid-cols-2 px-lengthmd2 text-h1 font-oswald' >
                    <h1 className=' text-center'>3 Stages to Startup Success. Let Us Find Yours.
                    </h1>
                    <div className='grid grid-cols-2 gap-2  p-lengthLg1'>
                        <div className='font-oswald text-h3  font-bold'>
                            <Image className="mask mask-squircle font-roboto  text-h2" src="/icons8-fuel-64.png" alt="fuel tank" height={50} width={50} />Fuel Your Idea

                            <p className='font-roboto text-h4'>
                                Product Development Workshops
                            </p>
                        </div>
                        <div>
                            <p className='font-roboto text-h4 text-wrap'>
                                Unleash your inner innovator. One challenge startups face is not lack of ideas, there are too many! Our intensive 2-week design sprints help you isolate and validate product ideas, prototype quickly, and test them with real users. This ensures you are building something customers want and love.
                            </p>
                            <ul className='text-h3 font-roboto font-bold'>Benefits:
                                <li className=' text-h4 font-roboto '><span className='font-bold'>Reduced Risk: </span>Validate your product idea before investing heavily.
                                </li></ul>
                            <ul className='text-h3 font-roboto font-bold'>What We Do:
                                <li className=' text-h4 font-roboto '><span className='font-bold'>Test Business Ideas with Real Customers. </span>
                                </li></ul>
                        </div>

                    </div>
                    <div className='grid grid-cols-2 gap-2 p-lengthLg1'>
                        <div className='font-oswald text-h3  font-bold'>

                            <Image className="mask mask-squircle font-roboto  text-h2" src="/icons8-oxygen-64.png" alt="fuel tank" height={50} width={50} />Oxygenate Your Growth
                            {/* <p className=''> </p> */}
                            <p className='font-roboto text-h4'>
                                Web Application Development
                            </p>
                        </div>
                        <div>
                            <p className='text-h4 font-roboto text-wrap'>
                                Building a product can be extremely expensive and time-consuming, if not done right.
                                Get your MVP (minimum viable product) to market quickly. We build user-friendly web applications that solve specific problems for your startup, allowing you to iterate and gain traction faster. (Time is money, after all!)
                            </p>
                            <ul className='text-h3 font-roboto font-bold'>Benefits:
                                <li className=' text-h4 font-roboto '><span className='font-bold'>Speed to Market: </span>Get your MVP launched quickly and efficiently.
                                </li></ul>
                            <ul className='text-h3 font-roboto font-bold'>What We Do:
                                <li className=' text-h4 font-roboto '><span className='font-bold'>Build Real Interactive Web applications and eCommerce sites. </span>
                                </li></ul>
                        </div>


                    </div>
                    <div className='grid grid-cols-2 gap-2 p-lengthLg1'>
                        <div className='font-oswald text-h3  font-bold'>
                            <Image className="mask mask-hexagon font-roboto  text-h2 " src="/icons8-rocket-64.png" alt="rocket launch" height={50} width={50} />Ignite Your Expansion

                            <p className='font-roboto text-h4'>
                                Business Roadmapping & Improvement identification
                            </p>
                        </div>
                        <div>
                            <p className='text-h4 font-roboto text-wrap'>
                                Keep the momentum going. We help you create a clear roadmap for business growth, ensuring your inner fire continues to propel you forward. We also guide you through regular retrospectives (reviews) to learn from successes and failures, constantly optimizing your path to success.
                            </p>
                            <ul className='text-h3 font-roboto font-bold'>Benefits:
                                <li className=' text-h4 font-roboto '><span className='font-bold'>Focus & Growth: </span>Create a clear roadmap and optimize for continuous improvement.
                                </li></ul>
                            <ul className='text-h3 font-roboto font-bold'>What We Do:
                                <li className=' text-h4 font-roboto '><span className='font-bold'>Create a Plan for your Business Growth. </span>
                                </li></ul>
                        </div>
                    </div>
                </div>

                <div><CallToAction /></div>

            </section >
        </>
    )
}

export default OurServices;