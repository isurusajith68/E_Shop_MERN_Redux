import React from "react";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import {LoginPage} from "./Routes.js"
import {SignUpPage} from "./Routes.js"

 function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
