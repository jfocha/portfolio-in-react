import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery(props) {
  const { currentCategory } = props;
  return (
    <section>
        <>
        
        
          <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
          <div>{currentCategory.description}</div>
        </>
    </section>
  );
}

export default Gallery;

