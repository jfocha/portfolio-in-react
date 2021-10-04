import React from 'react';
import PhotoList from '../PhotoList';
import About from '../About';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery(props) {
  const { currentCategory, aboutMeSelected } = props;
  return (
    <section>
      {!aboutMeSelected ? (
        <>
          <About></About>

        </>
      ) : (

        <>
          <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
          <p>{currentCategory.description}</p>
          <PhotoList category={currentCategory.name} />
        </>
      )}
    </section>
  );
}

export default Gallery;

