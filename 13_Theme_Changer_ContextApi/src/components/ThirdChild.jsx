import { useContext } from "react";
import { ThemeContext } from "../App";

const ThirdChild = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  console.log("theme ", theme);

  return (
    <>
      <button
        style={{
          padding: "10px",
          fontWeight: "600",
          backgroundColor: "white",
          borderRadius: "10px",
        }}
        onClick={() => {
          if (theme === "light") {
            setTheme("dark");
          } else {
            setTheme("light");
          }
        }}
      >
        Change Theme
      </button>
    </>
  );
};
export default ThirdChild;
