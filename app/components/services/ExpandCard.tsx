"use client"
import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";


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

interface ExpandedCardProps {
    service: Service;
}


const ExpandCard: React.FC<ExpandedCardProps> = (service) => {

    return (
        <>
            <AnimatePresence>
                <motion.div className="w-full card lg:card-side bg-base-100 shadow-xl font-roboto text-purple dark:text-champagne" layoutId={`card=${service.service.stage}`}>
                    <motion.figure className="w-full"><Image src={service.service.image[2]} alt={service.service.image[3]} width={500} height={500} /></motion.figure>
                    <motion.div className="card-body ">
                        <motion.h2 className="card-title text-h2">{service.service.title}</motion.h2>
                        <motion.h3 className="card-title">Why:</motion.h3> <span className="text-h4">{service.service.why}</span>

                        <motion.ol className=" list-inside"><span className="card-title">How we help:</span>
                            {service.service.whatWeDo.map((item, index) => (
                                <motion.li className="text-h4 list-style-position: inside  px-lengthSm1 list-disc " key={index}>{item}</motion.li>


                            ))}

                        </motion.ol>

                        <motion.div className="card-actions justify-start">
                            <motion.h2 className="card-title">What it does for your business: <span className="text-h3  font-bold">{service.service.benefitsTitle}</span>
                            </motion.h2>

                            <motion.p>{service.service.benefitsDescription}</motion.p>
                            <motion.p>We want to help you to: <span>{service.service.purpose}</span></motion.p>
                        </motion.div>
                    </motion.div>


                </motion.div>
            </AnimatePresence>


        </>
    )


}

export default ExpandCard;