import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  const [categories] = useState([
    { name: 'about me', description: <About></About> },
    {
      name: 'portfolio',
      description: <Portfolio></Portfolio>,
    },
    { name: 'resume', description: <Resume></Resume> },

  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <Nav
          component={'span'}
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
        ></Nav>
      </header>
      {!contactSelected ? (
        <main>
          <Gallery currentCategory={currentCategory}></Gallery>

        </main>
      ) : (
        <ContactForm></ContactForm>
      )}
      <footer className="flex-row px-1">
        <a className="flex-row px-2" href="https://github.com/jfocha">GitHub</a>
        <a className="flex-row px-2" href="https://www.linkedin.com/in/joseph-focha-24492a5b/">LinkedIn</a>
        <a className="flex-row mx-2" href="https://www.facebook.com/joe.focha.5">Facebook</a>
      </footer>
    </div>
  );
}

export default App;
