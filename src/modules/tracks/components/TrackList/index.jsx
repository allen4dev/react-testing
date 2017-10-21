import React from 'react';

import './index.css';

import Track from './../Track';

const TrackList = ({ items, message }) => {
  return (
    <div className="TrackList">
      <ul className="TrackList-items">
        {items.map(track => <Track key={track.id} {...track} />)}
      </ul>

      {message && <p className="TrackList-message">{message}</p>}
    </div>
  );
};

export default TrackList;
