// pages/index.tsx
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import LoginButton from "@/components/LoginButton";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Real Estate App</title>
      </Head>
      <div className={styles.container}>
        {/* Top Navigation (Hamburger + Login) */}
        <header className={styles.header}>
          <div className={styles.menuIcon}>☰</div>
          <LoginButton />
        </header>

        {/* Website Name */}
        <div className={styles.websiteNameContainer}>
          <h1 className={styles.title}>Website Name</h1>
        </div>

        {/* Search Bar */}
        <div className={styles.searchContainer}>
          <input type="text" placeholder="Search By" className={styles.searchInput} />
          <button className={styles.searchButton}>Find your home</button>
        </div>

        {/* Circle Options */}
        <div className={styles.circleOptions}>
          {/* Gallery View */}
          <div className={styles.circleWrapper}>
            <Link href={{ pathname: "/listingSearchPage", query: { view: "gallery" } }}>
              <div className={styles.circle}>
                <img src="/images/gallery.jpg" alt="Gallery View" />
              </div>
            </Link>
            <p className={styles.circleLabel}>Gallery View</p>
          </div>

          {/* Map View */}
          <div className={styles.circleWrapper}>
            <Link href={{ pathname: "/listingSearchPage", query: { view: "map" } }}>
              <div className={styles.circle}>
                <img src="/images/map.jpg" alt="Map View" />
              </div>
            </Link>
            <p className={styles.circleLabel}>Map View</p>
          </div>

          {/* Our Realtors */}
          <div className={styles.circleWrapper}>
            <Link href="/realtors">
              <div className={styles.circle}>
                <img src="/images/realtors.jpeg" alt="Our Realtors" />
              </div>
            </Link>
            <p className={styles.circleLabel}>Our Realtors</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
