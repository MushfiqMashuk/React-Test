import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Devices from "./components/Devices";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/devices" element={<Devices/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
