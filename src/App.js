import React from 'react';
import MyNav from './components/nav/nav.component';
import Home from './components/home/home.component';
import About from './components/about/about.component';
import Contact from './components/contact/contact.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <MyNav/>
      <Home/>
      <About/>  
      <Contact/>

    </div>
  );
}

export default App;
