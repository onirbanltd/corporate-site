import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/footer";

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
        <div className=" bg-gradient-to-r from-gray-100  to-cyan-100...">
          <Navbar />
          <div className="flex  flex-row  justify-between  px-lengthLg3 py-lengthLg3">
            {children}
          </div>
          <Footer />
        </div>


      </body>
    </html>
  );
}
