import React from "react";

function Search({handleSearch}) {
const [searchText, setSearchText] = useState("");

const handleChange = (e) => {
    const searchText = e.target.value;
    setSearchText(searchText);
    handleSearch(searchText); 
  };
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        value={searchText}
        onChange={handleSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
