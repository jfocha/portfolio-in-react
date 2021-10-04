import React from 'react';


function Resume() {
  return (
    <section className="my-5">
      <h1 id="resume">Download My <a href="mailto:jfocha@gmail.com">Resume</a></h1>

      <h3>Front End Proficiencies</h3>
      <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
      </ul>

      <h3>Back End Proficiencies</h3>
      <ul>
          <li>APIs</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
      </ul>
      
    </section>
  );
}

export default Resume;