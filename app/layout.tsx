
import type { Metadata } from "next";
import Head from "next/head"
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import Navbar from "./components/navbar/page"
import Footer from "./components/footer/page";


export const metadata: Metadata = {
  title: "Digital Product Services",
  description: "Build Web Applications, Develop Website, Workshops Problem Solving, Design, Build Minimum Viable Product, MVP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head> <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta></Head>
      <body className=" min-w-full  w-fit ">

        <Navbar />

        <div className=" mt-lengthLg3 bg-gradient-to-r from-gray-100  to-cyan-100...">

          <div className="flex  flex-row  justify-between  dark:text-sand">

            {children}
          </div>

        </div>

        <Footer />

      </body>
      <GoogleAnalytics gaId="G-TJ6052SX5D" />
    </html>
  );
}
