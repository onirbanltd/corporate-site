import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ContactForm from "./components/ContactForm";
import CallToAction from "./components/CallToAction";
import Navbar from "./components/navbar/Navbar"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digital Product Services",
  description: "Build App Workshop Problem Solving",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-screen h-screen  bg-gradient-to-b from-gray-100  to-cyan-100">
          <Navbar />
          {children}
          <CallToAction />
          <ContactForm />
        </div>


      </body>
    </html>
  );
}
