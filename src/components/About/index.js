import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <div className="flex-container">
        <div>
          <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        </div>
        <div>
          <p>I'm a full stack developer. I work with both the front and back ends of a website or application. I can tackle projects that involve databases, APIs, build user-facing websites, or even work with clients during the planning phase of projects. I can work both client-side and server-side.</p>
          <p>I am familiar with HTML, CSS, JavaScript, MongoDB, Express server, React, Node.js</p>
        </div>
      </div>
    </section>
  );
}

export default About;