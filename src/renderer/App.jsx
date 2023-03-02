import Provider from "renderer/context/Provider";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Hub from "./pages/Hub/Hub";
import Login from "./pages/Login/Login";

export default function App() {
  return (
    <Provider>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<Hub />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </Provider>
  );
}
