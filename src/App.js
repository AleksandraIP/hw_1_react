import React from 'react';
import kyiv from "./images/kyiv.jpg"


export default function App() {
  return (
    <div className="App">
      <h1>Oleksandra Popova</h1>
      <h3>079 111 11 11</h3>
      <h3>aleksandraip@ukr.net</h3>

        <div className="Country">
            <h1>Ukraine, Kyiv</h1>
            <img src={kyiv} alt="img"/>
        </div>
    </div>
  );
}

