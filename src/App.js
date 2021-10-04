import React, { useState } from 'react';
import Nav from './components/Nav';
// import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';


function App() {
  const [categories] = useState([
    { name: 'about me', description: 'Lorem ip[sum' },
    {
      name: 'portfolio',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'resume', description: 'Portraits of people in my life' },
    
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);
  const [aboutMeSelected, setAboutMeSelected] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <Nav
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
          aboutMeSelected={aboutMeSelected}
          setAboutMeSelected={setAboutMeSelected}
        ></Nav>
      </header>
      {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory} aboutMeSelected={aboutMeSelected}></Gallery>
            
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
