import React, { useState } from 'react';

const Project = () => {

  const [photos] = useState([
    {
      title: 'Meal Bytes',
      link: 'https://pure-wildwood-98439.herokuapp.com/',
      github: 'https://github.com/jfocha/meal-bytes',
    },
    {
      title: 'Movie Buddy',
      link: 'https://jfocha.github.io/movie-buddy/',
      github: 'https://github.com/jfocha/movie-buddy',
    },
    {
      title: 'The Tech Blog',
      link: 'https://sleepy-tundra-56200.herokuapp.com/',
      github: 'https://github.com/jfocha/the-tech-blog',
    },
    {
      title: 'Work Day Scheduler',
      link: 'https://jfocha.github.io/work-day-scheduler/',
      github: 'https://github.com/jfocha/work-day-scheduler',
    },
    
  ]);

  return (
    <div>
      <div className="flex-row">
        {photos.map((image, i) => (
          <div>
          <div>
            {image.title}
          </div>
          <div>
            <a href={image.link}>Deployed Application</a>
          </div>
          <div>
          <a href={image.github}>GitHub Repository</a>
          </div>
          <img
            src={require(`../../assets/small/${i}.png`).default}
            alt={image.title}
            className="img-thumbnail mx-1"
            key={image.title}
          />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;