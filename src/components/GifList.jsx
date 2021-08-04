import React from 'react';
import Gif from './Gif';

const GifList = ({ ids, onSelect }) => (
  <div className="gif-list">
    {ids.map(id => {
      return <Gif key={id} id={id} onSelect={onSelect} />
    })}
  </div>
);

export default GifList;
