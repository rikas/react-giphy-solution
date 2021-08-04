import React from 'react';

// <Gif id="tOWyML1WPzKjm" />
// id comes from props.id
const Gif = ({ id, onSelect }) => {
  const url = `https://media2.giphy.com/media/${id}/200w.webp`;

  return (
    <img src={url} alt="Gif from Giphy" className="gif" onClick={() => onSelect(id)} />
  );
};

export default Gif;
