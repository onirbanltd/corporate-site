
import Image from "next/image";
import Link from "next/link";
import Hero from "./components/hero/page"
import OurServices from "./components/services/page"
import Trends from "./components/trends/page"
import ContactUS from "./components/contact-us/page";



export default function Home() {
  return (
    <><main>
      <Hero />
      <Trends />
      <OurServices />
      {/* <ContactUS /> */}
    </main></>
  )
}
