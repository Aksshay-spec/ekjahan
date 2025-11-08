import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";

import { Navigation } from "./components/Navigation";
import { Home } from "./components/Home";

function App() {
  return (
    <Router>
      <div className="w-full max-w-full sm:max-w-[600px] md:max-w-[900px] lg:max-w-[1100px] xl:max-w-[1200px] mx-auto my-5 p-4 sm:p-5 font-sans">
        {/* Top navigation */}
        {/* <nav style={{ marginBottom: "20px" }}>
          <Link
            to="/semiCommerce/addProducts"
            style={{ marginRight: "15px", textDecoration: "none", color: "#2563eb", fontWeight: "bold" }}
          >
            Add Product
          </Link>
          <Link
            to="/semiCommerce/products"
            style={{ textDecoration: "none", color: "#2563eb", fontWeight: "bold" }}
          >
            Products List
          </Link>
        </nav> */}
        <Navigation />

        <Routes>
          {/* Redirect root to products list */}
          <Route path="/" element={<Navigate to="/ekjahan/home" />} />

          <Route path="/ekjahan/home" element={<Home />} />
          {/* Add Product Form */}

          {/* Catch all unknown paths */}
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
