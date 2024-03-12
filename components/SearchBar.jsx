import React, { useState } from "react";

function SearchBar() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleSearchBar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleSearchBar}>Search</button>
      {isVisible && (
        <div>
          <input type="text" placeholder="Type your search here..." />
          <button>Submit</button>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
