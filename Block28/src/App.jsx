import "./App.css";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import "./components/Blue.jsx";
import "./components/Red.jsx";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <div id="container">
        <h1></h1>

        {/* Add another Link component to our navbar which navigates to the "/" route. */}
        <div id="navbar">
          {/* navigation here: Ask mentor for this part.... */}
          <button onClick={() => navigate()}></button>
        </div>

        {/* replace it with the Routes component */}
        <div id="main-section">
          <Routes>
            <Route path="/home" element={<h1>Home</h1>}></Route>
            <Route path="/blue" element={<h1>Blue</h1>} />
            <Route path="/red" element={<h1>Red</h1>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
