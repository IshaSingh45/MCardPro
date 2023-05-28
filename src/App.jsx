import "./index.css";
import { useState } from "react";
import AppRouter from "./router";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleMode = () => {
    setDarkMode(!darkMode);
  }
  return (
    <div className={`overflow-hidden ${darkMode ? "dark" : ""}`} id="dark">
      <AppRouter handleMode={handleMode} darkMode={darkMode}/>
    </div>
  );
}

export default App;
