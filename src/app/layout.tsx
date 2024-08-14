import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ralewayFont } from "@/constants/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Triangle of Knowledge",
  description: "Created by enthusiasts",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body className={`${ralewayFont.variable}`}>{children}</body>
  </html>
);

export default RootLayout;
