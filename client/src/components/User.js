import React, { Component } from 'react';
import { connect } from 'react-redux';


class User extends Component {


  render() {
    const currentUser = this.props.currentUser;

    let userImage;
    if (!!currentUser.image) {
      userImage = currentUser.image;
    } else {
      userImage = process.env.PUBLIC_URL + '/images/no_image.png';
    }
    return (
      <>
        <div className='profile-container'>
          <img className="profile-pic" src={ userImage } alt="profile-pic" />
          <div className='user-data'>
            <div className="username">{currentUser.username}</div>
            <h3>{ currentUser.firstName } { currentUser.lastName }</h3>
            <div><i id="location-icon"className="fas fa-map-marker-alt"></i><span className="user-location">{ currentUser.location }</span></div>
            <hr></hr>
          </div>
        </div>
      </>
    )
  }
}


export default connect (User);