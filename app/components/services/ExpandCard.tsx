import React from "react";
import Image from "next/image";


interface Service {
    stage: number;
    title: string;
    image: string[];
    whatWeDo: string[];
    why: string;
    benefitsTitle: string;
    benefitsDescription: string;
    purpose: string;
}



const ExpandCard: React.FC<Service> = (details) => {

    return (
        <>
            <div className="w-full card lg:card-side bg-base-100 shadow-xl font-roboto text-purple dark:text-champagne">
                <figure className="w-full"><Image src={details.image[2]} alt={details.image[3]} width={500} height={500} /></figure>
                <div className="card-body ">
                    <h2 className="card-title text-h2">{details.title}</h2>
                    <h3 className="card-title">Why:</h3> <span className="text-h4">{details.why}</span>

                    <ol className=" list-inside"><span className="card-title">How we help:</span>
                        {details.whatWeDo.map((item, index) => (
                            <li className="text-h4 list-style-position: inside  px-lengthSm1 list-disc " key={index}>{item}</li>


                        ))}

                    </ol>

                    <div className="card-actions justify-start">
                        <h2 className="card-title">What it does for your business:
                        </h2>
                        <h3 className="text-h3 text-cyan">{details.benefitsTitle}</h3>
                        <p>{details.benefitsDescription}</p>
                        <p>We want to help you to: <span>{details.purpose}</span></p>
                    </div>
                </div>
            </div >


        </>
    )


}

export default ExpandCard;