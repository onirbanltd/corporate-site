import { Main } from "next/document";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <><main><h1> Onirban: Your Fuel for Growth.</h1>
      <Link href="/services">Services</Link>
      <Link href="/aboutus">About Us</Link>
    </main></>
  )
}
