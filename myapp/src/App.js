import { Route, Routes } from "react-router-dom";
import "./App.css";
import Devices from "./components/Devices";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/devices" element={<PrivateRoute component={Devices}/>}></Route>
        </Routes>
      </>
    </div>
  );
}

export default App;
