import { faFilter } from '@fortawesome/free-solid-svg-icons/faFilter';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "@/styles/listingSearchPage.css";

export default function ListingPageControls() {
    const filterButtonStyles = {
        display:'inline-block', 
        marginInline:'5px',
        
    }


    return (
        <div className='controls'>
            <div className='search-filter-group'>
                <button className='filter-button'>
                    <FontAwesomeIcon className='filter-icon' icon={faFilter} />
                </button>
                <div className='search-field'>
                    <input className='search-input' type="text" placeholder="  Search For Property or Enter Keywords" name="search"></input>
                    <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
                </div>
            </div>
            
            <div className='view-control'>
                <button className='view-control-button-active' name='map button'>Map</button>
                <button className='view-control-button-inactive' name='gallery button'>Gallery</button>
            </div>

        </div>
        
    )
}