import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
const Dashboard = React.lazy(()=>import("./pages/Dashboard"))

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Suspense fallback={<div>looading...</div>}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Landing
      </button>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Dashboard
      </button>
    </div>
  );
}

export default App;
