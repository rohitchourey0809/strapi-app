import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      {" "}
      <nav>
        <ul>
          <li>
            <Link to="/strapipage">StrapiPage</Link>
          </li>
          <li>
            <Link to="/contextpage">ContextPage</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            {/* <Link to="/reduxtoolkit">ReduxToolKit</Link> */}
          </li>
        </ul>
      </nav>
    </div>
  );
};
