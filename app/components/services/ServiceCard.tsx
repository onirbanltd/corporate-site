"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"


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
interface ServiceCardProps {
    service: Service;

    onClick: () => void;
}
const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {


    return (
        <>

            <motion.div className="w-full flex flex-col rounded-md text-purple dark:text-champagne border-caribbean border-2  p-lengthLg3 shadow cursor-pointer" onClick={onClick} layoutId={`card-${service.stage}`}>
                <motion.div className="p-lengthSm1 flex  justify-center flex-shrink-0 w-10 h-10 items-center font-roboto text-h2  text-caribbean" >{service.stage}
                    <span><Image src={service.image[0]} alt={service.image[1]} width={50} height={50} /></span>
                </motion.div>
                <motion.p className="font-roboto font-semibold text-lg text-center  place-items-center">
                    <b>{service.title}.</b> <br />
                    <span className="font-roboto mt-lengthSm0 leading-relaxed text-md" >{service.purpose}</span>

                </motion.p>

            </motion.div>



        </>
    )

}

export default ServiceCard;