import "./global.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Waarom from "./pages/Waarom";
import Diensten from "./pages/Diensten";
import Prijzen from "./pages/Prijzen";
import Cases from "./pages/Cases";
import OverOns from "./pages/OverOns";
import Contact from "./pages/Contact";
import Offerte from "./pages/Offerte";
import FAQ from "./pages/FAQ";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <Router>
      <CustomCursor />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/waarom" element={<Waarom />} />
            <Route path="/diensten" element={<Diensten />} />
            <Route path="/prijzen" element={<Prijzen />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/over-ons" element={<OverOns />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/offerte" element={<Offerte />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
