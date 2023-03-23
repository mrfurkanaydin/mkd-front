import Provider from "renderer/context/Provider";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import Hub from "./pages/Hub/Hub";
import Login from "./pages/Login/Login";
import "./App.css";

export default function App() {
  console.log(window.electron.store.get("fullscreen"));
  return (
    <Provider>
      <Router>
        <Routes>
          <Route path="/" element={<Hub />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </Provider>
  );
}
