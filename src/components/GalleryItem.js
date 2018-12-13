import React from 'react';
import Img from 'gatsby-image';

const GalleryItem = ({ image }) => (
  <div className="card">
    <Img className="picture" fluid={image} />
    <div className="card-text">
      <h3>Chair</h3>
    </div>
  </div>
);

export default GalleryItem;
