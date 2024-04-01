import React from "react";
// import { a } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav className="space-x-4">
        <ul className="flex">
          {/* <li>
            <a
              className="text-blue-500 hover:text-blue-700 hover:bg-blue-100 border-b-2 border-transparent hover:border-blue-500 px-4 py-2"
              href="/strapipage"
            >
              StrapiPage
            </a>
          </li> */}
          <li>
            <a
              className="text-blue-500 hover:text-blue-700 hover:bg-blue-100 border-b-2 border-transparent hover:border-blue-500 px-4 py-2"
              href="/contextpage"
            >
              ContextPage
            </a>
          </li>
          {/* <li>
            <a
              className="text-blue-500 hover:text-blue-700 hover:bg-blue-100 border-b-2 border-transparent hover:border-blue-500 px-4 py-2"
              href="/reduxtoolkit"
            >
              ReduxToolKit
            </a>
          </li> */}
          <li>
            <a
              className="text-blue-500 hover:text-blue-700 hover:bg-blue-100 border-b-2 border-transparent hover:border-blue-500 px-4 py-2"
              href="/counter"
            >
              Counter
            </a>
          </li>
          <li>
            <a
              className="text-blue-500 hover:text-blue-700 hover:bg-blue-100 border-b-2 border-transparent hover:border-blue-500 px-4 py-2"
              href="/addtodo"
            >
              AddTodo
            </a>
          </li>
          <li>
            <a
              className="text-blue-500 hover:text-blue-700 hover:bg-blue-100 border-b-2 border-transparent hover:border-blue-500 px-4 py-2"
              href="/products"
            >
              Products
            </a>
          </li>
          <li>
            <a
              className="text-blue-500 hover:text-blue-700 hover:bg-blue-100 border-b-2 border-transparent hover:border-blue-500 px-4 py-2"
              href="/"
            >
              Receipe
            </a>
          </li>
          <li>
            <a
              className="text-blue-500 hover:text-blue-700 hover:bg-blue-100 border-b-2 border-transparent hover:border-blue-500 px-4 py-2"
              href="/pokemon"
            >
              Pokemon
            </a>
          </li>
          {/* <Route path="/products" element={<ProductItems />} />
          <Route path="/receipe" element={<ReceipiItem />} /> */}
        </ul>
      </nav>
    </div>
  );
};
