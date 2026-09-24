import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/global/Navbar';
import { Footer } from './components/global/Footer';
import { NoiseOverlay } from './components/ui';
import Landing from './pages/Landing';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#FAFAFA]">
        <Navbar />
        <main className="pt-0">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <NoiseOverlay />
      </div>
    </HashRouter>
  );
}

export default App;
