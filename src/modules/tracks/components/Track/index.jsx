import React from 'react';

import './index.css';

import defaultImage from './images/n_logo.jpg';

const Track = props => {
  const src = props.artwork_url || defaultImage;
  return (
    <div className="Track">
      <div className="Track-photo">
        <img className="Track-image" src={src} alt="yay" />
      </div>
      <div className="Track-description">
        <span className="Track-title truncate">{props.title}</span>
        <span className="Track-username">{props.user.username}</span>
      </div>
    </div>
  );
};

export default Track;
