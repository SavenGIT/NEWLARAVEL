import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MasterLayout from "./Layout/admin/MasterLayout";
import Home from "./components/frontend/Home";
import Login from "./components/frontend/auth/Login";
import Register from "./components/frontend/auth/Register";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/Register" element={<Register />}/>
          <Route path="/admin/*" element={<MasterLayout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;