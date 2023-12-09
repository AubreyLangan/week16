import React from 'react'

const Rating = ({ rating }) => {
  return (
    <div>
        <span>Rating: </span>
        <strong>{rating}</strong>
    </div>
  );
};

export default Rating