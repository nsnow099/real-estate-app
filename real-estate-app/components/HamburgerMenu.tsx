import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "@/styles/HamburgerMenu.module.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const { view } = router.query;
  const [currPage, setPage] = useState("");
  useEffect(() => {
    if (view === "gallery") {
      setPage("gallery");
    } else if (view === "map") {
      setPage("map");
    } else if (view === "home") {
      setPage("home");
    } else if (view === "realtor") {
      setPage("realtor");
    }  else if (view === "news") {
      setPage("news");
    } else if (view === "advice") {
      setPage("advice");
    } else if (view === "trends") {
      setPage("trends");
    } else if (view === "calculator") {
      setPage("calculator");
    }
  }, [view]);

  return (
    <div className={styles.hamburgerContainer}>
      {/* Hamburger Icon */}
      <div className={styles.hamburgerIcon} onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* Dropdown Menu */}
      <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <ul>
          <li className={currPage === "home" ? styles.selected : ""}>
            <Link href="/?view=home">Home</Link>
          </li>  
          <li className={currPage === "gallery" ? styles.selected : ""}>
            <Link href="/listingSearchPage?view=gallery">Gallery View</Link>
          </li>
          <li className={currPage === "map" ? styles.selected : ""}>
            <Link href="/listingSearchPage?view=map">Map View</Link>
          </li>
          <li className={currPage === "realtor" ? styles.selected : ""}>
            <Link href="/realtor?view=realtor">Realtors</Link>
          </li>
          <li className={currPage === "news" ? styles.selected : ""}>
            <Link href="/analysisTools?view=news">News</Link>
          </li>
          <li className={currPage === "advice" ? styles.selected : ""}>
            <Link href="/analysisTools?view=advice">Advice</Link>
          </li>
          <li className={currPage === "trends" ? styles.selected : ""}>
            <Link href="/analysisTools?view=trends">Market Trends</Link>
          </li>
          <li className={currPage === "calculator" ? styles.selected : ""}>
            <Link href="/analysisTools?view=calculator">Mortgage Calculator</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
