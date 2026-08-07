// import { Geist, Geist_Mono } from "next/font/google";

import "../app/globals.css";
import Footer from "./constants/Footer";
import Navbar from "./constants/Navbar";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Skincare App",
  description: "Next big thing in skincare industry",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Navbar/> */}
        {children}
      </body>
    </html>
  );
}
