import "./globals.css";
import React from "react";
import type { Metadata } from "next";
import { Montserrat, Unbounded, VT323, Exo_2, Roboto } from "next/font/google";
import Navbar from "./_components/Navbar";
import StripeModal from "./_components/StripeModal";

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo-2",
});

const msdos = VT323({
  subsets: ["latin"],
  variable: "--font-ms-dos",
  weight: ["400"],
});

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  // display: "swap",
  variable: "--font-main-title",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-common",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Adriana Ito",
  description: "Adriana Ito's portfolio",
  icons: {
    icon: "/hedgehog.svg",
  },
  openGraph: {
    title: "Adriana Ito",
    description: "Adriana Ito's portfolio",
    url: "https://adrianaito.com",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${unbounded.variable} ${montserrat.variable} ${msdos.variable} ${exo2.variable} ${roboto.variable}`}
      >
        {/* <Navbar>{children}</Navbar> */}
        <Navbar />
        {children}
        <StripeModal />
      </body>
    </html>
  );
}
