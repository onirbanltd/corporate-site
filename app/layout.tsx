import type { Metadata } from "next";

import "./globals.css";
import Navbar from "./components/navbar/page";
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

      <body className=" min-w-full w-fit">
        <Navbar />
        <div className=" bg-gradient-to-r from-gray-100  to-cyan-100...">

          <div className="flex  flex-row  justify-between  px-lengthLg3 py-lengthLg3">
            {children}
          </div>

        </div>
        <Footer />

      </body>

    </html>
  );
}
