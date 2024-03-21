import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Strapi from "./Components/strapi";
import { Context } from "./Components/Context";
import { Navbar } from "./Components/Navbar";
import { Counter } from "./Components/CounterComp/Counter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/strapipage" element={<Strapi />} />
          <Route path="/contextpage" element={<Context />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </BrowserRouter>
      {/* <Strapi /> */}
    </div>
  );
}

export default App;
