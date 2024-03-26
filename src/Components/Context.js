import React, { useState, useMemo } from "react";
import { Togglethemecomp } from "./Toggletheme";
export const Themecontext = React.createContext();
// Step 1: Create a context
// Step 2: Provide a value
export const Context = () => {
  const [theme, setTheme] = useState("light");

  function toggletheme() {
    setTheme((prevtheme) => (prevtheme === "light" ? "dark" : "light"));
  }

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({ theme, toggletheme }), [theme]);

  return (
    <div className="contexapi">
      <h2>Contex theme app</h2>
      <Themecontext.Provider value={contextValue}>
        <div className="">
          <Togglethemecomp />
        </div>
      </Themecontext.Provider>
    </div>
  );
};
