import "@/styles/listingSearchPage.css";

const FiltersPopup = ({setFiltersActive}:any) => {

    return (
        <div style={{height:'fitContent', width:'fitContent'}}>
            <div className='saved-searches'>
                <label htmlFor='saved searches'>Your Saved Filters: </label>
                <select className='saved-searches-dropdown' name='saved searches'>
                    <option>Select</option>
                    <option>Toronto</option>
                    <option>Apartments</option>
                    <option>Townhouses</option>
                    <option>Cheap Options</option>
                </select>
            </div>
            <br/>
            <div className="filter-grouping">
                <div className="grouping-row">
                    <div className="filter-area">
                        Transaction Type
                        <br/>
                        <form className="options">
                            <div>
                                <label>For Rent </label>
                                <input type="radio" name="rent or sale"></input>
                            </div>
                            <div>
                                <label>For Sale </label>
                                <input type="radio" name="rent or sale"></input>
                            </div>
                            
                        </form>
                        
                    </div>

                    <div className="filter-area">
                        Price Range
                        <br/>
                        <div className="options">
                            $<input type="text" placeholder="Min" style={{width:"60px"}}></input>
                            &nbsp;&nbsp;-&nbsp;&nbsp;
                            $<input type="text" placeholder="Max" style={{width:"60px"}}></input>
                        </div>
                    </div>
                </div>

                <div className="grouping-row">
                    <div className="filter-area">
                        Year Built
                        <br/>
                        <div className="options">
                            <input type="text" placeholder="Min" style={{width:"60px"}}></input>
                            -
                            <input type="text" placeholder="Max" style={{width:"60px"}}></input>
                        </div>
                    </div>
                    <div className="filter-area">
                        Ownership
                        <br/>
                        <div className="options">
                            <select>
                                <option>Any</option>
                                <option>Freehold</option>
                                <option>Condo/Strata</option>
                                <option>Timeshare/Fractional</option>
                                <option>Leasehold</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="filter-grouping">
                <div className="grouping-row">
                    <div className="filter-area">
                        Property Type
                        <br/>
                        <div className="options">
                            <select>
                            <option>Any</option>
                                <option>Residential</option>
                                <option>Condo/Strata</option>
                                <option>Vacant Land</option>
                                <option>Recreational</option>
                                <option>Multi Family</option>
                            </select>
                        </div>
                    </div>
                    <div className="filter-area">
                        Land Size &#40;m²&#41;
                        <br/>
                        <div className="options">
                            <input type="text" placeholder="Min" style={{width:"60px"}}></input>
                            -
                            <input type="text" placeholder="Max" style={{width:"60px"}}></input>
                        </div>
                    </div>
                </div>
                <div className="grouping-row">
                    <div className="filter-area" style={{width:'50%'}}>
                        Storeys
                        <br/>
                        <div className="options">
                            <input type="text" placeholder="Min" style={{width:"60px"}}></input>
                            -
                            <input type="text" placeholder="Max" style={{width:"60px"}}></input>
                        </div>
                    </div>
                </div>
            </div>
            <div className="filter-grouping">
                <div className="grouping-row">
                    <div className="filter-area" style={{width:'50%'}}>
                        Minimum Beds
                        <br/>
                        <div className="options">
                            <input type="text" placeholder="Any" style={{width:"60px"}}></input>
                        </div>
                    </div>
                    <div className="filter-area" style={{width:'50%'}}>
                        Minimum Baths
                        <br/>
                        <div className="options">
                            <input type="text" placeholder="Any" style={{width:"60px"}}></input>
                        </div>
                    </div>
                </div>
            </div>
            <div className="filter-grouping">
                <br/>
                <div className="grouping-row" style={{justifyContent:'right'}}>
                    <button className="save-filters-btn">
                        Save to your filters    
                    </button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="form-ctrl-btn" onClick={() => setFiltersActive(false)}>
                        Cancel
                    </button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="form-ctrl-btn" onClick={() => setFiltersActive(false)} style={{backgroundColor:"#47A4EC"}}>
                        Search
                    </button>
                    {/* add brief loading animation? */}
                </div>
            </div>
        </div>
    )
}

export default FiltersPopup;