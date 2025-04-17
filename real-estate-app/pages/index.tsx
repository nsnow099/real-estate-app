import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import LoginButton from "@/components/LoginButton";
import HamburgerMenu from "@/components/HamburgerMenu";
import { useState, useEffect, useRef } from "react";

const HomePage = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);

  const searchData = {
    Cities: ["Toronto", "Ottawa"],
    "Street Addresses": ["123 Elm Street", "456 Maple Avenue"],
    Realtors: ["John Doe", "Jane Smith"],
    Tools: ["Mortgage Calculator"]
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredData = Object.entries(searchData).reduce((acc, [category, items]) => {
    const matches = items.filter(item =>
      item.toLowerCase().includes(searchInput.toLowerCase())
    );
    if (matches.length > 0) acc[category] = matches;
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <>
      <Head>
        <title>Real Estate App</title>
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          <HamburgerMenu />
          <LoginButton />
        </header>
        
        <div className={styles.backgroundPicContainer}>
          <img src="/images/house-background.jpeg" />
          <div className={styles.websiteNameContainer}>
            <h1 className={styles.title}>Realest Estate</h1>
          </div>
        </div>

        <div className={styles.searchContainer} ref={searchRef}>
          <input
            type="text"
            placeholder="What are you looking for?"
            className={styles.searchInput}
            value={searchInput}
            onClick={() => setShowDropdown(true)}
            onChange={(e) => {
              setSearchInput(e.target.value);
              setShowDropdown(true);
            }}
          />
          <button className={styles.searchButton}>Search</button>

          {showDropdown && (
            <div className={styles.dropdown}>
              {Object.keys(filteredData).length > 0 ? (
                Object.entries(filteredData).map(([category, items]) => (
                  <div key={category}>
                    <h4>{category}</h4>
                    {items.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                ))
              ) : (
                <p>No results found</p>
              )}
            </div>
          )}
        </div>

        <div className={styles.circleOptions}>
          <div className={styles.circleWrapper}>
            <Link href={{ pathname: "/listingSearchPage", query: { view: "gallery" } }}>
              <div className={styles.circle}>
                <img src="/images/gallery.jpg" alt="Listings" />
              </div>
            </Link>
            <p className={styles.circleLabel}>Listings</p>
          </div>

          <div className={styles.circleWrapper}>
            <Link href={{ pathname: "/analysisTools", query: { view: "news" } }}>
              <div className={styles.circle}>
                <img src="/images/tools.jpg" alt="Analysis Tools" />
              </div>
            </Link>
            <p className={styles.circleLabel}>Analysis Tools</p>
          </div>

          <div className={styles.circleWrapper}>
            <Link href="/realtor">
              <div className={styles.circle}>
                <img src="/images/realtors.jpeg" alt="Our Realtors" />
              </div>
            </Link>
            <p className={styles.circleLabel}>Realtors</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
