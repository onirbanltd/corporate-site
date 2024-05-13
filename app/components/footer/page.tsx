// { use client }
import react from "react"
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/Onirban8.png"
import Linkedin from "../../../public/social-icons/li.svg"
import X from "../../../public/social-icons/x.svg"
import Tiktok from "../../../public/social-icons/tiktok.svg"
import Insta from "../../../public/social-icons/insta.svg"


const Footer = () => {
    const year = new Date();
    return (
        <section className=" bg-purple w-full">
            <div className=" pt-lengthLg3">
                <div className="flex items-center justify-start gap-x-lengthSm3">
                    <Image src={Logo} alt="Logo" height={80} width={120} />
                </div>
                <div className="flex flex-row justify-center gap-x-[12px]">
                    <Link href="https://www.linkedin.com/company/onirban-ltd?viewAsMember=true">
                        <Image key={Linkedin} src={Linkedin} alt="linkedin logo" height={28} width={28} />
                    </Link>
                    <Link href="https://www.instagram.com/onirbanltd">
                        <Image key={Insta} src={Insta} alt="Instagram logo" height={28} width={28} />
                    </Link>
                    {/* <Image key={X} src={X} alt="X logo" height={28} width={28}></Image>
                    <Image key={Tiktok} src={Tiktok} alt="Tiktok logo" height={28} width={28}></Image> */}



                </div>
                <div>
                    <p className=" font-roboto text-center text-h3 pt-[56px] text-champagne">{year.getFullYear()} © Onirban Ltd. All Rights Reserved</p>
                </div>
            </div>
        </section>


    )

}
export default Footer;