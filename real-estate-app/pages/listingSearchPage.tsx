import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
import "@/styles/listingSearchPage.css";
import ListingsMap from "@/components/listingsMap";
import ListingsGallery from "@/components/ListingsGallery";
import ListingPageControls from "@/components/listingPageControls";
import FiltersPopup from "@/components/filtersPopup";
import Pagination from "@/components/Pagination"; 
import HamburgerMenu from "@/components/HamburgerMenu"; // Import hamburger menu
import LoginButton from "@/components/LoginButton";

const ListingSearchPage = () => {
    const router = useRouter();
    const { view } = router.query;

    const [display, setDisplay] = useState("gallery");
    const [filtersActive, setFiltersActive] = useState(false);

    useEffect(() => {
        if (view === "gallery") {
            setDisplay("gallery");
        } else if (view === "map") {
            setDisplay("map");
        }
    }, [view]);

    return ( 
        <div className={styles.pageContainer}> {/* Add this wrapper to maintain spacing */}
            {/* ✅ Hamburger Menu (Positioned Absolutely to Avoid Pushing Content) */}
            <header className={styles.header}>
                <HamburgerMenu /> {/* ✅ Replaces the default icon */}
                <LoginButton />
            </header>

            <main className={styles.main}>
                <div>
                    <ListingPageControls display={display} setDisplay={setDisplay} setFiltersActive={setFiltersActive} />
                </div>

                {/* Gallery View */}
                <div style={{ display: display === 'gallery' ? 'block' : 'none' }}>
                    <ListingsGallery />
                    <Pagination /> 
                </div>

                {/* Map View */}
                <div style={display === 'map' ? { display: 'block', width: '100px', marginTop:'30px' } : { display: 'none', width: '100px' }}>
                    <ListingsMap />
                </div>

                {/* Filters Popup */}
                <div className="filters-popup" style={filtersActive ? { display: 'block', boxShadow: '0 0 1000px rgb(54, 58, 61)' } : { display: 'none' }}>
                    <FiltersPopup setFiltersActive={setFiltersActive} />
                </div>
            </main>

            <footer className={styles.footer}></footer>
        </div>
    );
};

export default ListingSearchPage;
