import React, { useContext } from "react";
import { Themecontext } from "./Context";

export const Togglethemecomp = () => {
  const context = useContext(Themecontext);
  console.log("context------------------------>", context);
  const buttonBackgroundColor =
    context.theme === "light" ? "#FFFFFF" : "#333333";
  return (
    <div>
      <button
        className=" hover:only"
        onClick={context.toggletheme}
        style={{
          backgroundColor: buttonBackgroundColor,
          color: context.theme === "light" ? "#333333" : "#FFFFFF",
        }}
      >
        Toggle Theme:{context.theme}
      </button>
    </div>
  );
};
