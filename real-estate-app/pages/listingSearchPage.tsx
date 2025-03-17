import styles from "@/styles/Home.module.css";
import "@/styles/listingSearchPage.css";
import ListingsMap from "@/components/listingsMap"
import ListingPageControls from "@/components/listingPageControls";
import FiltersPopup from "@/components/filtersPopup";
import { useState } from "react";

/**
 * Both map view and gallery view will be on this page. User can switch between them without changing pages.
 * Filters should remain untouched during switch.
 */
const ListingSearchPage = () => {
    const [display, setDisplay] = useState("map");
    const [filtersActive, setFiltersActive] = useState(false);
    
    return ( 
        <div>
            <div style={{height:'60px'}}>
                {/* header component */}
            </div>
            

            <main className={styles.main}>
                
                <div>
                    <ListingPageControls display={display} setDisplay={setDisplay} setFiltersActive={setFiltersActive}></ListingPageControls>
                </div>

                <div style={{display: display==='gallery' ? 'block' : 'none'}}>

                </div>

                <div style={display==='map' ? {display:'block', width:'100px'} : {display:'none', width:'100px'}}>
                    <ListingsMap></ListingsMap>
                </div>

                <div className="filters-popup" style={filtersActive ? {display:'block', boxShadow:'0 0 1000px rgb(54, 58, 61)'} : {display:'none'}}>
                    <FiltersPopup setFiltersActive={setFiltersActive}></FiltersPopup>
                </div>
                
                
            </main>

            <footer className={styles.footer}>
        
            </footer>
        </div>
        
    )
}

export default ListingSearchPage;