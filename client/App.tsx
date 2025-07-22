import "./global.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import Index from "./pages/Index";
import Waarom from "./pages/Waarom";
import Diensten from "./pages/Diensten";
import Prijzen from "./pages/Prijzen";
import Cases from "./pages/Cases";
import OverOns from "./pages/OverOns";
import Contact from "./pages/Contact";
import Offerte from "./pages/Offerte";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

const queryClient = new QueryClient();

// Scroll to top component
function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router>
          <ScrollToTop />
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
          <CustomCursor />
          <Toaster />
          <Sonner />
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
