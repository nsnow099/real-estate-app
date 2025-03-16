import styles from "@/styles/Home.module.css";
import "@/styles/listingSearchPage.css";
import ListingsMap from "@/components/listingsMap"
import ListingPageControls from "@/components/listingPageControls";

/**
 * Both map view and gallery view will be on this page. User can switch between them without changing pages.
 * Filters should remain untouched during switch.
 */
export default function ListingSearchPage() {

    return (
        
            
        <div>
            <div style={{height:'60px'}}>
                {/* header component */}
            </div>
            

            <main className={styles.main}>
                <div>
                    {/* search, filters and button to switch between map/gallery*/}
                    <ListingPageControls></ListingPageControls>
                </div>
                

                <ListingsMap></ListingsMap>
            </main>

            <footer className={styles.footer}>
        
            </footer>
        </div>
        
    )
}