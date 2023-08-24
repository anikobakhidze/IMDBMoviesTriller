import React, { useState, useEffect } from "react";
import Header from "./components/header/Header.jsx";
import AppRoutes from "./AppRoutes";
import { useLocation } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import "./App.css";
import Footer from "./components/footer/Footer.jsx";
function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [location.pathname, setLoading]);
  return (
    <>
      {loading ? (
        <div className="loaderStyle">
          <PacmanLoader color="#ec534c" size={40} />
        </div>
      ) : (
        <div className="appWrapper">
          <Header />
          <AppRoutes />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
