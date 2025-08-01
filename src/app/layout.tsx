import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito} from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} ${nunito.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
