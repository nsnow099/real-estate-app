import "@/styles/listingSearchPage.css";

export default function FiltersPopup() {

    return (
        <div>
            {/* move this */}
            <div className='saved-searches'>
                <label htmlFor='saved searches'>Saved Searches: </label>
                <select className='saved-searches-dropdown' name='saved searches'>
                    <option>Select</option>
                    <option>Toronto</option>
                    <option>Apartments</option>
                    <option>Townhouses</option>
                    <option>Cheap Options</option>
                </select>
            </div>
        </div>
    )
}