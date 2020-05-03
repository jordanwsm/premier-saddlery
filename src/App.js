import React from 'react';
import MyNav from './components/nav/nav.component';
import Home from './components/home/home.component';
import About from './components/about/about.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <MyNav/>
      <Home/>
      <About/>
       Hello
    </div>
  );
}

export default App;
