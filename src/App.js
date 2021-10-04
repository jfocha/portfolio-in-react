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
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
        ></Nav>
      </header>
      {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
          <footer>

          </footer>
        </div>
      );
}

      export default App;
