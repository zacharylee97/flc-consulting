import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FLC Consulting",
  description: `FLC Consulting offers a full range of pre-construction and construction services, 
  including evaluation of the preliminary design, overall project evaluation, cost estimates and 
  schedules, evaluation of construction methods, materials and systems, cost effectiveness of 
  programs, cash flow projections, manpower, equipment requirements, purchasing and expediting.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {children}
      </body>
    </html>
  );
}
