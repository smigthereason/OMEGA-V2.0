// SearchResultsPage.js
import React from "react";

const SearchResultsPage = ({ searchResults }) => {
  return (
    <div className="search-results-page">
      <h1>Search Results</h1>
      {searchResults.map((result) => (
        <div key={result.id} className="search-result-card">
          {/* Display result information here */}
        </div>
      ))}
    </div>
  );
};

export default SearchResultsPage;
