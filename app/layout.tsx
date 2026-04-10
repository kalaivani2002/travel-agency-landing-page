import type { Metadata } from "next";
import { Volkhov, Poppins } from 'next/font/google';
import "./globals.scss";

const volkhov = Volkhov({
  variable: "--font-volkhov",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jadoo - Travel Agency",
  description: "Best Destinations Around The World",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${volkhov.variable} ${poppins.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}