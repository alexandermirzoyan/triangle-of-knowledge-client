import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { montserrat, raleway } from "@/constants/fonts";

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
    <body className={`${raleway.variable} ${montserrat.variable}`}>
      {children}
    </body>
  </html>
);

export default RootLayout;
