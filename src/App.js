import React, { useEffect, useState } from 'react';
import ScrollButton from './components/scrollButton';

import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Home from "./components/Home"
import About from './components/About';
import Skills from './components/Skills';
import Projects from "./components/Projects"
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        let timer = setTimeout(() => {
            setIsLoading(false);
            return () => clearInterval(timer);
        }, 1000);
    }, []);
    return isLoading ? (
        <Loader />
    ) : (
      
    <div  className="App text-gray-400 bg-gray-900  body-font">
<Navbar />
<Home/>
<About/>
<Skills/>
<Projects/>
<Contact/>
<Footer/>
<ScrollButton />
    </div>


  );
}

export default App;