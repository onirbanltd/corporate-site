import type { Metadata } from "next";

import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import Navbar from "./components/navbar/page"
import Footer from "./components/footer/page";




export const metadata: Metadata = {
  title: "Digital Product Services",
  description: "Build Web Applications Workshop Problem Solving",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className=" min-w-full  w-fit">
        <Navbar />

        <div className=" bg-gradient-to-r from-gray-100  to-cyan-100...">

          <div className="flex  flex-row  justify-between  p-lengthLg3 sm:p-lengthMd1  dark:text-sand">
            {children}
          </div>

        </div>
        <Footer />

      </body>
      <GoogleAnalytics gaId="G-TJ6052SX5D" />
    </html>
  );
}
