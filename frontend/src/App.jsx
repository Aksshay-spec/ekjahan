import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import "./App.css";

function App() {
  return (
    <Router basename="/ekjahan">
      <div className="w-full max-w-full sm:max-w-[600px] md:max-w-[900px] lg:max-w-[1100px] xl:max-w-[1200px] mx-auto sm:p-5 font-sans">
        <Routes>
          {/* This route will render Home when user goes to /ekjahan */}
          <Route path="/" element={<Home />} />

          {/* Any other route → 404 */}
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
