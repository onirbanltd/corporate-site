import React from "react";
import CallToAction from "@/app/CallToAction";
import { GoogleAnalytics } from "@next/third-parties/google";
const Trends = () => {


    return (
        <><GoogleAnalytics gaId="G-TJ6052SX5D" />
            <section className=" p-lengthLg3 dark:text-champagne">
                <div className="font-roboto text-center">
                    <h3 className="text-h3">      The UK startup landscape is competitive. Only <span className=" font-bold">42%</span> survive the first 5 years.</h3>
                </div>
                {/* <div className="stats shadow flex justify-between">

                    <div className="stat place-items-center">
                        <div className="font-roboto text-h3 text-pretty">Startups Launched</div>
                        <div className="stat-value">360,651</div>

                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Startups Ceased Trading</div>
                        <div className="stat-value text-cyan">304,518</div>
                        <div className="stat-desc text-secondary">↗︎ 40 (2%)</div> 
            </div>

            <div className="stat place-items-center">
                <div className="stat-title">Startup Survival rate</div>
                <div className="stat-value">42%</div>
             <div className="stat-desc">↘︎ 90 (14%)</div> 
            </div>

    </div > */}
                < div className='font-roboto text-h4 text-purple dark:text-sand text-center pt-lengthSm2 text-wrap' >
                    Tired of the startup struggle? 58% fail within 5 years.But not you.We will rewrite your story.Challenges become steppingstones.
                    < br /> Let us dominate the market together. < CallToAction />
                </div >

            </section >
        </>


    )

}
export default Trends;