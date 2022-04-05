import React from 'react';

function Profile() {
  return (
    <div>
      <div>
        <div className="card profileCard" style={{ width: 16 + 'rem' }}>
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
            className="card-img-top"
            alt="profile pic"
          />
          <div className="card-body">
            <p className="card-text">ChaseKY - Florida</p>
          </div>
        </div>

        <div className="card planToBike" style={{ width: 16 + 'rem' }}>
          <div className="card-header">Plan-To-Bike</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Orlando Mountain Bike Park</li>
            <li className="list-group-item">Soldier Creek Park</li>
            <li className="list-group-item">Rock Springs Reserve</li>
          </ul>
        </div>

        <div className="card completedTrails" style={{ width: 16 + 'rem' }}>
          <div className="card-header">Completed Trails</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Ocean View</li>
            <li className="list-group-item">New River Greenway</li>
            <li className="list-group-item">Rinker Trails</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
