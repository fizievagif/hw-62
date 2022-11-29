import React from 'react';
import './App.css';
import Navbar from "./Components /Navbar/Navbar";
import Home from "./Containers/Home/Home";
import AboutBasketball from "./Containers/AboutBasketball/AboutBasketball";
import Contacts from "./Containers/Contacts/Contacts";

function App() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className="container-fluid">
        <Home/>
        <AboutBasketball/>
        <Contacts/>
      </main>
    </>
  );
}

export default App;
