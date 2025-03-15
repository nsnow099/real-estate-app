import styles from "@/styles/Home.module.css";

import ListingsMap from "@/components/listingsMap"
/**
 * Both map view and gallery view will be on this page. User can switch between them without changing pages.
 * Filters should remain untouched during switch.
 */
export default function ListingSearchPage() {

    return (
        
            
        <body>
            {/* header component */}

            <main className={styles.main}>
                {/* search, filters and button to switch between map/gallery*/}

                <ListingsMap></ListingsMap>
            </main>

            <footer className={styles.footer}>
        
            </footer>
        </body>
        
    )
}