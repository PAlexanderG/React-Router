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
  // const [state, setState] = useState(initialState);

  // (ask for this....)
  // const routerBrowser = createBrowserRouter("");
  // const Browser = useBroserRouter same....?
  return (
    <>
      <div id="container">
        <h1></h1>

        {/* Add another Link component to our navbar which navigates to the "/" route. */}
        <div id="navbar">
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link>
          <Link to="/home">Home</Link>

          {}
          {/* navigation here: Ask mentor for this part.... */}
          {/* <button onClick={() => navigate()}></button> */}
        </div>

        {/* replace it with the Routes component */}
        <div id="main-section">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="/green" element={<Green />} />
          </Routes>
          <div>
            <Link to="/green">Green</Link>
          </div>
          {/* <Routes>
            <Route path="/routes" element={<h1>Footer</h1>} />
          </Routes> */}
        </div>
      </div>
    </>
  );
}

export default App;
