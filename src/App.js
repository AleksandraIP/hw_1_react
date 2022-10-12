import React from 'react';
import kyiv from "./images/kyiv.jpg"


export default function App() {
  return (
    <div className="App">
      <h1>Oleksandra Popova</h1>
      <h3>063 610 54 17</h3>
      <h3>aleksandraip@ukr.net</h3>

        <div className="Country">
            <h1>Ukraine, Kyiv</h1>
            <img src={kyiv} alt="img"/>
        </div>
    </div>
  );
}

