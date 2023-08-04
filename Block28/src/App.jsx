// import the Routes and Routes components from React Router import
// { Routes, Route } from "react-router-dom";
// Add the Link component to the 'react-router-dom' import statement object

import "./index.css";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Blue from "./components/Blue";
import Red from "./components/Red";
import Home from "./components/Home";
import Green from "./components/Green";
import { useState } from "react";

function App() {
  const navigate = useNavigate();
  //  Remove the { } from within the "main-container"
  // div and replace it with the Routes component.

  return (
    <>
      <div id="container">
        <h1></h1>

        {/* Add another Link component to our navbar which navigates to the "/" route. */}
        <div id="navbar">
          <Link to="/blue">Blue</Link>
          <Link to="/home">Home</Link>
          <Link to="/red">Red</Link>
          {}
          {/* navigation here: Ask mentor for this part.... */}
          {/* <button onClick={() => navigate()}></button> */}
        </div>

        {/* replace it with the Routes component */}
        {/* Add an element property in the main-section to each 
        Route tag and pass them as a Funcion from the import for each component ex:
        <Route path="/home" element={<Home />} />*/}
        <div id="main-section">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="/green" element={<Green />} />
          </Routes>

          {/* <Routes>
            <Route path="/routes" element={<h1>Footer</h1>} />
          </Routes> */}
        </div>
        <div>
          <Link to="/green">Green</Link>
        </div>
      </div>
    </>
  );
}

export default App;
