import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/HamburgerMenu.module.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.hamburgerContainer}>
      {/* Hamburger Icon */}
      <div className={styles.hamburgerIcon} onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* Dropdown Menu */}
      <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <ul>
          <li><Link href="/">Home</Link></li>  
          <li><Link href="/listingSearchPage?view=gallery">Gallery View</Link></li>
          <li><Link href="/listingSearchPage?view=map">Map View</Link></li>
          <li><Link href="/realtors">Realtors</Link></li>
          <li><Link href="/analysisTools?view=news">News</Link></li>
          <li><Link href="/analysisTools?view=advice">Advice</Link></li>
          <li><Link href="/analysisTools?view=trends">Market Trends</Link></li>
          <li><Link href="/analysisTools?view=calculator">Mortgage Calculator</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
