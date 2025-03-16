import { useState } from "react";

import church from "../assets/church.jpg";

import "./AppBody.css";

function AppHeader() {
  const [count, setCount] = useState(0);

  return (
    <div className="appBody">
      <img src={church} className="church" alt="Church" />
      <h1>마르페 교회</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default AppHeader;
