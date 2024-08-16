import "./App.css";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Coins from "./pages/Coins";
import SinglCoin from "./components/SingleCoin";
import Header from "./components/Header";

function App() {
  return (
    <Router>
            <NavLink>
              <Header/>
            </NavLink>

      <Routes>
        <Route path='/' element={<Coins />} />
        <Route path="/coin/:id" element={<SinglCoin/>} />
      </Routes>
    </Router>
  );
}

export default App;
