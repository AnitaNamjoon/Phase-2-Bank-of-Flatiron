import React from "react";

function SearchBar({ word, setSearch}) {
    const handleSearchChange =( e ) => {
        setSearch(e.target.value);
    };
    return (
        <div className="ui large fluidicon input">
            <input 
            type="text"
            placeholder="Search here..."
            onChange={handleSearchChange}
            value={word}
            />

            <i className="circular search link icon"></i>

        </div>
    )
}
export default SearchBar;
