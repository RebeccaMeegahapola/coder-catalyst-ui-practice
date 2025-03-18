import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
    weight: "400"
})

export const metadata: Metadata = {
  title: "e-Commerce Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
            <title>e-Commerce App</title>
      </head>
      <body
        className={`${roboto.variable} overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
