import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      {" "}
      <nav>
        <ul>
          <li>
            <Link href="/strapipage">StrapiPage</Link>
          </li>
          <li>
            <Link href="/contextpage">ContextPage</Link>
          </li>
          <li>
            <Link href="/counter">Counter</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
