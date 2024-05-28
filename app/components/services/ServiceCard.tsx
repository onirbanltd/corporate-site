import React from "react";
import Image from "next/image"

interface Service {
    stage: number;
    title: string;
    image: string[];
    purpose: string;
}
const ServiceCard: React.FC<Service> = (data) => {



    return (
        <>
            <div className="flex flex-col rounded-md text-purple  border-cyan border-2  p-lengthLg3 shadow ">
                <div className="p-lengthSm1 flex  justify-center flex-shrink-0 w-20 h-20 items-center font-roboto text-h3 rounded-full">{data.stage}
                    <Image src={data.image[0]} alt={data.image[1]} width={50} height={50} />
                </div>
                <p className="font-roboto text-h3 text-left  place-items-center">
                    <b>{data.title}.</b> <br />
                    <span className="font-roboto text-h4" >{data.purpose}</span>

                </p>

            </div>


        </>
    )

}

export default ServiceCard;