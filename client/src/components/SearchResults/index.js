import React from "react";
import "./style.css";
import API from "../../util/API.js"

function SearchResults(props) {
  // const query = 
  API.search(query)
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result} className="list-group-item">
          <img alt="Dog" src={result} className="img-fluid" />
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
