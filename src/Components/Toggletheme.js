import React, { useContext } from "react";
import { Themecontext } from "./Context";

export const Togglethemecomp = () => {
  const context = useContext(Themecontext);
  console.log("context------------------------>", context);

  return (
    <div>
      <button onClick={context.toggletheme}>
        Toggle Theme:{context.theme}
      </button>
    </div>
  );
};
