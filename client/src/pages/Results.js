import React from 'react';
import response from './Home';

function Results() {
  response.map((response) => {
    return (
      <div>
        <div className="card" style={{ width: 18 + 'rem' }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p>
          </div>
        </div>
      </div>
    );
  });
}

export default Results;
