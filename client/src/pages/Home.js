import React from 'react';
import { useState } from 'react';

function Home() {
  function fetchLatLong(value) {
    console.log(value);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=fcd594fc4b7accf846134105a10b76ac&units=imperial`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (location) {
        console.log(location);

        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com',
            'X-RapidAPI-Key': '279b04dcfemshc0a23d26e174c8ep132e8cjsn6c46292bbe34',
          },
        };

        fetch(
          `https://trailapi-trailapi.p.rapidapi.com/trails/explore/?lat=${location.coord.lat}&lon=${location.coord.lon}`,
          options
        )
          .then((response) => response.json())
          .then((response) => console.log(response))
          .catch((err) => console.error(err))
          .then((response) => {
            return (
              <div>
                <div className="card" style={{ width: 18 + 'rem' }}>
                  <img src="..." class="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text">{response.data[0].name}</p>
                  </div>
                </div>
              </div>
            );
          });
      });
  }
  const [city, setCity] = useState('');
  return (
    <div>
      <div className="searchContainer">
        <input
          className="input is-primary"
          id="userInput"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        ></input>
        <button
          onClick={() => fetchLatLong(city)}
          type="button"
          id="searchBtn"
          className="btn btn-success"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Home;
