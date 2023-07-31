import { useState } from "react";

// Return a parent div element with a h1 saying "home".

export default function App() {
  const [state, setState] = useState(initialState);
  return (
    <div className="home">
      <h1>Home</h1>
    </div>
  );
}
