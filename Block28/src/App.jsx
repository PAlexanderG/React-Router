import "./App.css";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import "./components/Blue";
import "./components/Red";
import "./components/Home";

function App() {
  const navigate = useNavigate();

  // (ask for this....)
  // const routerBrowser = createBrowserRouter("");
  // const Browser = useBroserRouter same....?
  return (
    <>
      <div id="container">
        <h1></h1>

        {/* Add another Link component to our navbar which navigates to the "/" route. */}
        <div id="navbar">
          <Link to="/Blue">Blue</Link>
          <Link to="/Red">Red</Link>
          <Link to="/Home">Home</Link>
          {}
          {/* navigation here: Ask mentor for this part.... */}
          <button onClick={() => navigate()}></button>
        </div>

        {/* replace it with the Routes component */}
        <div id="main-section">
          <Routes>
            <Route path="/home" element={<h1>Home</h1>} />
            <Route path="/Blue" element={<h1>Blue</h1>} />
            <Route path="/red" element={<h1>Red</h1>} />
          </Routes>
          <Routes>
            <Route path="/routes" element={<h1>Footer</h1>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
