import React from "react";

function SearchBar({ word, setSearch }) {
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };
    return (
        <div className="ui large fluid icon input">
            <input type="text" placeholder="Search here..." onChange={handleSearchChange} value={word} />
            <button className="search-button" type="submit">
                <i className="fa fa-search"></i>
            </button>
        </div>
    );
}

export default SearchBar;
