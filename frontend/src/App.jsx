import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Navigation } from "./components/Navigation";
import { Home } from "./components/Home";
import { FooterNavigation } from "./components/FooterNavigation";

function App() {
  return (
    <Router basename="/ekjahan">
      <div className="w-full max-w-full sm:max-w-[600px] md:max-w-[900px] lg:max-w-[1100px] xl:max-w-[1200px] mx-auto  sm:p-5 font-sans">
        <Navigation />

        <Routes>
          {/* Redirect root to home */}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />

          {/* Catch all unknown paths */}
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
        <FooterNavigation />
      </div>
    </Router>
  );
}

export default App;
