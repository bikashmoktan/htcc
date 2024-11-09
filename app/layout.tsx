import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Head from 'next/head';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hindu Temple",
  description: "A place of worship and community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-lightGray text-darkGray`}>


      <Head>
        <title>Hindu Temple</title>
        <meta 
          name="description" 
          content="The Hindu Temple and Cultural Center of South Carolina serves as a sanctuary for worship, community gatherings, and cultural celebrations, fostering a sense of home for all." 
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-saffron p-6 text-center shadow-md">
  <img src="/logo.gif" alt="Hindu Temple Logo" className="mx-auto mb-4 h-24" />
  <h1 className="text-5xl font-heading">Hindu Temple of South Carolina</h1>
  <p className="text-2xl mt-2">ॐ नमो भगवते वासुदेवाय</p>
  <p className="mt-2 text-xl">A Place of Peace, Devotion, and Community</p>
  <nav className="mt-4">
    <Link href="/" className="mx-4 text-darkGray hover:text-coral">Home</Link>
    <Link href="/about-us" className="mx-4 text-darkGray hover:text-coral">About Us</Link>

    <Link href="/events" className="mx-4 text-darkGray hover:text-coral">Events</Link>
    <Link href="/contact" className="mx-4 text-darkGray hover:text-coral">Contact</Link>
    <Link href="/Gallery" className="mx-4 text-darkGray hover:text-coral">Gallery</Link>
  </nav>
</header>


<main className="p-0 md:p-20">

          {children}
        </main>

        <footer className="bg-saffron p-4 text-center">
  <p className="text-darkGray">© 2016 Hindu Temple and Cultural Center (HTCC) of South Carolina</p>
  <p className="text-darkGray">5703 Kiawah Road, Columbia, South Carolina - 29212</p>
</footer>

      </body>
    </html>
  );
}
