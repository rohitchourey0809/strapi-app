import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Strapi from "./Components/strapi";
import { Navbar } from "./Components/Navbar";
import { Counter } from "./Components/CounterComp/Counter";
import { Reduxcomp } from "./Components/Reduxcomp/redux";
import { Context } from "./Components/Context";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/strapipage" element={<Strapi />} />
          <Route path="/contextpage" element={<Context />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/reduxtoolkit" element={<Reduxcomp />} />
        </Routes>
      </BrowserRouter>
      {/* <Strapi /> */}
    </div>
  );
}

export default App;
