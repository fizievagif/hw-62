import React from 'react';
import './App.css';
import Navbar from "./Components /Navbar/Navbar";
import Home from "./Containers/Home/Home";
import AboutBasketball from "./Containers/AboutBasketball/AboutBasketball";
import Contacts from "./Containers/Contacts/Contacts";
import {Route, Routes} from "react-router-dom";

function App() {


  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className="container-fluid">
        <Routes>
          <Route path="/" element={(
            <Home/>
          )}/>
          <Route path="/about-basketball" element={(
            <AboutBasketball/>
          )}/>
          <Route path="/contacts" element={(
            <Contacts/>
          )}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
