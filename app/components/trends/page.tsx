import React from "react";
import CallToAction from "@/app/CallToAction";
import { GoogleAnalytics } from "@next/third-parties/google";
const Trends = () => {


    return (
        <><GoogleAnalytics gaId="G-TJ6052SX5D" />
            <section className=" bg-purple p-lengthSm3 md:py-lengthMd2 mt-lengthMd2 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-champagne tracking-tight">


                < p className='font-roboto text-md  text-sand align-middle  pt-lengthSm2' >
                    Tired of the startup struggle? <span className="font-bold">58%</span>  fail within 5 years.
                    But not you. We will rewrite your story. Challenges become steppingstones.

                </p >
                <p className="font-roboto text-md  text-sand align-middle  pt-lengthSm2 text-wrap">             Let us dominate the market together.</p>
                <div className=' mt-lengthSm3 flex flex-col sm:flex-row '> < CallToAction /></div>
            </section >
        </>


    )

}
export default Trends;