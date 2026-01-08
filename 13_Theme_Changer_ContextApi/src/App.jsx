import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import FirstChild from "./components/FirstChild";
import ThirdChild from "./components/ThirdChild";
import "./index.css";
import { createContext } from "react";

const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div
          className="theme"
          style={{ backgroundColor: theme === "light" ? "yellow" : "blue" }}
        >
          <FirstChild />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
export { ThemeContext };
