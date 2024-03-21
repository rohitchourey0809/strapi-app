import React, { useState } from "react";
import { Togglethemecomp } from "./Toggletheme";
export const Themecontext = React.createContext();
// Step 1: Create a context
// Step 2: Provide a value
export const Context = () => {
  const [Theme, setTheme] = useState("light");

  function toggletheme() {
    setTheme((prevtheme) => (prevtheme === "light" ? "dark" : "light"));
  }

  return (
    <div className="contexapi">
      <h2>Contex theme app</h2>
      <Themecontext.Provider value={{ Theme, toggletheme }}>
        <div className="">
          <Togglethemecomp />
        </div>
      </Themecontext.Provider>
    </div>
  );
};
