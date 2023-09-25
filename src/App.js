import React, { useState } from "react";
import RegisterFrom from "./RegisterForm";
import "./style.css";
import { createContext } from "react";
import ReactSwitch from "react-switch";
import { FaMoon } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark": "light"));
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="App" id={theme}>
        <div className="sunMoon">
          <p>{theme === "dark" ? 
              <FaMoon style={{
                color: 'white',
                fontSize: '70px'
              }}/> : 
              <BsFillSunFill style={{
                color: 'yellow',
                fontSize: '70px'
              }}/>} 
          </p>
        </div>

        <div className="lightDarkMode">
          <p>{theme === "dark" ? 
            <p>Dark mode <b className="onOff">On</b></p> : 
            <p>Dark mode <b className="onOff">Off</b></p>} 
          </p>

          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
        </div>

        <RegisterFrom />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

//FaMoon fa
//BsFillSunFill bs
