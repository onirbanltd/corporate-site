import React from "react";

const Trends = () => {


    return (
        <>
            <section className=" p-lengthLg3 ">
                <div className=" text-h1 font-oswald text-center">UK Startup trend for last the 5 years</div>
                <div className="stats shadow flex justify-between">

                    <div className="stat place-items-center">
                        <div className="font-roboto font-h3 text-pretty">Average number  launched</div>
                        <div className="stat-value">360,651</div>

                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Average number  folded</div>
                        <div className="stat-value text-cyan">304,518</div>
                        {/* <div className="stat-desc text-secondary">↗︎ 40 (2%)</div> */}
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Survival rate</div>
                        <div className="stat-value">42%</div>
                        {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
                    </div>

                </div>
                <div className='font-roboto text-h3 text-purple text-center pt-lengthSm2 text-wrap'>
                    Tired of the startup struggle? 60% fail within 5 years. But not you. We will rewrite your story. Challenges become steppingstones.
                    <br /> Let us dominate the market together. Learn More!
                </div>

            </section>
        </>


    )

}
export default Trends;