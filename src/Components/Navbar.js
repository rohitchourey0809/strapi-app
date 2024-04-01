import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav className="space-x-4">
        <ul className="flex">
          <li>
            <Link
              className="text-blue-500 hover:text-blue-700 hover:bg-blue-100 border-b-2 border-transparent hover:border-blue-500 px-4 py-2"
              to="/strapipage"
            >
              StrapiPage
            </Link>
          </li>
          <li>
            <Link
              className="text-blue-500 hover:text-blue-700 hover:bg-blue-100 border-b-2 border-transparent hover:border-blue-500 px-4 py-2"
              to="/contextpage"
            >
              ContextPage
            </Link>
          </li>
          {/* <li>
            <Link
              className="text-blue-500 hover:text-blue-700 hover:bg-blue-100 border-b-2 border-transparent hover:border-blue-500 px-4 py-2"
              to="/reduxtoolkit"
            >
              ReduxToolKit
            </Link>
          </li> */}
          <li>
            <Link
              className="text-blue-500 hover:text-blue-700 hover:bg-blue-100 border-b-2 border-transparent hover:border-blue-500 px-4 py-2"
              to="/counter"
            >
              Counter
            </Link>
          </li>
          <li>
            <Link
              className="text-blue-500 hover:text-blue-700 hover:bg-blue-100 border-b-2 border-transparent hover:border-blue-500 px-4 py-2"
              to="/addtodo"
            >
              AddTodo
            </Link>
          </li>
          <li>
            <Link
              className="text-blue-500 hover:text-blue-700 hover:bg-blue-100 border-b-2 border-transparent hover:border-blue-500 px-4 py-2"
              to="/products"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              className="text-blue-500 hover:text-blue-700 hover:bg-blue-100 border-b-2 border-transparent hover:border-blue-500 px-4 py-2"
              to="/receipe"
            >
              Receipe
            </Link>
          </li>
          <li>
            <Link
              className="text-blue-500 hover:text-blue-700 hover:bg-blue-100 border-b-2 border-transparent hover:border-blue-500 px-4 py-2"
              to="/pokemon"
            >
              Pokemon
            </Link>
          </li>
          {/* <Route path="/products" element={<ProductItems />} />
          <Route path="/receipe" element={<ReceipiItem />} /> */}
        </ul>
      </nav>
    </div>
  );
};
