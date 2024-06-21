// { use client }
import react from "react"
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/Onirban8.svg"
import Linkedin from "../../../public/social-icons/li.svg"
import X from "../../../public/social-icons/x.svg"
import Tiktok from "../../../public/social-icons/tiktok.svg"
import Insta from "../../../public/social-icons/insta.svg"


const Footer = () => {
    const year = new Date();
    return (
        <section className=" bg-purple w-full my-lengthMd2">
            <div className=" ">
                <div className="flex items-center sm:flex-row justify-start gap-x-lengthSm3">
                    <div className=" flex-start">
                        <Image src={Logo} alt="Logo" width={170} />
                    </div>
                    <div className=" mx-lengthLg4 flex flex-row justify-center gap-x-[12px]">
                        <Link href="https://www.linkedin.com/company/onirban-ltd?viewAsMember=true">
                            <Image key={Linkedin} src={Linkedin} alt="linkedin logo" height={28} width={28} />
                        </Link>
                        <Link href="https://www.instagram.com/onirbanltd">
                            <Image key={Insta} src={Insta} alt="Instagram logo" height={28} width={28} />
                        </Link>
                        {/* <Image key={X} src={X} alt="X logo" height={28} width={28}></Image>
                    <Image key={Tiktok} src={Tiktok} alt="Tiktok logo" height={28} width={28}></Image> */}



                    </div></div>
                <div>
                    <p className=" font-roboto text-center mt-lengthMd1 text-xs text-champagne">{year.getFullYear()} © Onirban Ltd. All Rights Reserved</p>
                </div>
            </div>
        </section>


    )

}
export default Footer;