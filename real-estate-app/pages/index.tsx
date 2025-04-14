// pages/index.tsx
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import LoginButton from "@/components/LoginButton";
import HamburgerMenu from "@/components/HamburgerMenu"; 

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Real Estate App</title>
      </Head>
      <div className={styles.container}>
        {/* Top Navigation (Hamburger + Login) */}
        <header className={styles.header}>
          <HamburgerMenu /> {/* ✅ Replaces the default icon */}
          <LoginButton />
        </header>

        {/* Website Name */}
        <div className={styles.websiteNameContainer}>
          <h1 className={styles.title}>Realest Estate</h1>
        </div>

        {/* Search Bar */}
        <div className={styles.searchContainer}>
          <input type="text" placeholder="What are you looking for?" className={styles.searchInput} />
          <button className={styles.searchButton}>Search</button>
        </div>

        {/* Circle Options */}
        <div className={styles.circleOptions}>
          {/* Gallery View */}
          <div className={styles.circleWrapper}>
            <Link href={{ pathname: "/listingSearchPage", query: { view: "gallery" } }}>
              <div className={styles.circle}>
                <img src="/images/gallery.jpg" alt="Listings" />
              </div>
            </Link>
            <p className={styles.circleLabel}>Listings</p>
          </div>

          {/* Map View */}
          <div className={styles.circleWrapper}>
            <Link href={{ pathname: "/analysisTools", query: { view: "news" } }}>
              <div className={styles.circle}>
                <img src="/images/map.jpg" alt="Analysis Tools" />
              </div>
            </Link>
            <p className={styles.circleLabel}>Analysis Tools</p>
          </div>

          {/* Our Realtors */}
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
