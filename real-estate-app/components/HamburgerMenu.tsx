import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "@/styles/HamburgerMenu.module.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { view } = router.query;
  const [currPage, setPage] = useState("");

  useEffect(() => {
    const { pathname, query } = router;
  
    if (pathname.includes("/realtor") || query.view === "realtor") {
      setPage("realtor");
    } else if (pathname.includes("/listingSearchPage") || query.view === "gallery") {
      setPage("gallery");
    } else if (pathname.includes("/analysisTools") || query.view === "news") {
      setPage("news");
    } else if (query.view === "map") {
      setPage("map");
    } else if (query.view === "advice") {
      setPage("advice");
    } else if (query.view === "trends") {
      setPage("trends");
    } else if (query.view === "calculator") {
      setPage("calculator");
    } else {
      setPage("home");
    }
  }, [router]);
  

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={menuRef} className={styles.hamburgerContainer}>
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
            <Link href="/listingSearchPage?view=gallery">Listings</Link>
          </li>
          <li className={currPage === "news" ? styles.selected : ""}>
            <Link href="/analysisTools?view=news">Analysis Tools</Link>
          </li>
          <li className={currPage === "realtor" ? styles.selected : ""}>
            <Link href="/realtor?view=realtor">Realtors</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
