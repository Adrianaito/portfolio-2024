import "./globals.css";
import type { Metadata } from "next";
import { Inter, Montserrat, Unbounded } from "next/font/google";
import Navbar from "./_components/Navbar";

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Adriana Ito",
  description: "Adriana Ito's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${unbounded.variable} ${montserrat.variable}`}>
        <Navbar>{children}</Navbar>
      </body>
    </html>
  );
}
