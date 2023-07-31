import { useState } from "react";

// Create a component which returns a div
// with the className set to its respective colors

export default function Red() {
  const [state, setState] = useState(initialState);
  return (
    <div className="red">
      <h1>RED</h1>
    </div>
  );
}
