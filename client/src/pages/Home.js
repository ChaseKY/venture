import React from 'react';

function Home() {
  return (
    <div>
      <div className="searchContainer">
        <input class="input is-primary" type="text" placeholder="Search"></input>
        <button type="button" id="searchBtn" class="btn btn-success">
          Search
        </button>
      </div>
    </div>
  );
}

export default Home;
