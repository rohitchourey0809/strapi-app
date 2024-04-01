import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Strapi from "./Components/strapi";
import { Navbar } from "./Components/Navbar";
// import { Counter } from "./Components/CounterComp/Counter";
// import ProductList, { Reduxcomp } from "./Components/Reduxcomp/redux";
import CounterProject from "./Components/CounterComp/CounterProject";
import AddTodo from "./Components/AddtodComp/AddTodo";
import ProductItems from "./Components/ProductComp/ProductItem";
import ReceipiItem from "./Components/ReceipeComp/ReceipiItem";
import { Context } from "./Components/Context";
import PokemonItem from "./Components/PokemonComp/PokemonItem";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/strapipage" element={<Strapi />} />
          <Route path="/contextpage" element={<Context />} />
          {/* <Route path="/reduxtoolkit" element={<ProductList />} /> */}
          <Route path="/counter" element={<CounterProject />} />
          <Route path="/addtodo" element={<AddTodo />} />

          <Route path="/products" element={<ProductItems />} />
          <Route path="/" element={<ReceipiItem />} />
          <Route path="/pokemon" element={<PokemonItem />} />
        </Routes>
      </BrowserRouter>
      {/* <Strapi /> */}
    </div>
  );
}

export default App;
