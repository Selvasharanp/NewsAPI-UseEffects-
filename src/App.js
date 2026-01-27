import { useState } from "react";
import News from "./components/News";
import "./App.css";

function App() {
  const [category, setCategory] = useState("general");

  return (
    <div className="app">
      <nav className="navbar">
        <h1>📰 NewsHub</h1>
        <div className="buttons">
          <button onClick={() => setCategory("general")}>General</button>
          <button onClick={() => setCategory("technology")}>Technology</button>
          <button onClick={() => setCategory("sports")}>Sports</button>
          <button onClick={() => setCategory("science")}>Science</button>
        </div>
      </nav>

      <News category={category} />
    </div>
  );
}

export default App;
