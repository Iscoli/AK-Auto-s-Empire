import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import { useLocation } from "react-router-dom";
import  InventoryPage  from "./pages/InventoryPage";
import Navbar from "./components/navbar";
import  AboutUsPage  from "./pages/AboutUsPage";
import   handler from "./pages/InventoryPage"


function App() {

 handler() 
  return (
    <>
      <div className="bg-gradient-to-b from-blue-50 to-white">
        <Router>
          <ScrollToTopOnRouteChange />

          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/inventory" element={<InventoryPage />} />
            <Route path="/about" element={<AboutUsPage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

// Scroll to top on route change
function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default App;
