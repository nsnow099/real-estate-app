import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        
        <Link href="/listingSearchPage" legacyBehavior>
          <a>Listings</a>
        </Link>
        
        <main className={styles.main}>
          
        </main>
        <footer className={styles.footer}>
          
        </footer>
      </div>
    </>
  );
}
