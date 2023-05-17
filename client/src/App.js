import React from "react";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import {Login} from "./Routes.js"
 function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
