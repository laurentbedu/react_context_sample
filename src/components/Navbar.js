import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const theme = isDark ? " darkmode" : "";
  return (
    <div className={"navbar" + theme}>
      <h1>Navbar</h1>
      <div>
        <input 
        type="checkbox" 
        id="themeToogle" 
        onClick={toggleTheme} />
        <label htmlFor="themeToogle">Dark</label>
      </div>
    </div>
  );
};

export default Navbar;
