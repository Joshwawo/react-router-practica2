import { useState } from "react";
import logo from "./logo.svg";
// import './App.css'
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";
import NotFound from "./pages/NotFound";
import Navegador from "./components/Navegador";
import UserPage from "./pages/UserPage";
import DashBoard from "./pages/DashBoard";

function App() {
  return (
    <BrowserRouter>
      <Navegador />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserPage />} />
        <Route path="/dashboard/*" element={<DashBoard />}>
          <Route path="welcome" element={<p>Welcome!!!</p>} />
          <Route path="bye" element={<p>Bye!!</p>}>
          
        </Route>
        </Route>
        <Route path="/usuarios" element={<Navigate to="/users" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
