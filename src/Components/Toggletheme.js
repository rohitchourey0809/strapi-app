import React, { useContext } from "react";
import { Themecontext } from "./Context";

export const Togglethemecomp = () => {
  const context = useContext(Themecontext);
  console.log(context, "context");
  //   console.log(toggletheme, "toggletheme");

  return (
    <div>
      <button onClick={context.toggletheme}>
        Toggle Theme:{context.Theme}
      </button>
    </div>
  );
};
