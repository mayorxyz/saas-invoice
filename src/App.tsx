import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/global/Navbar';
import { Footer } from './components/global/Footer';
import { ScrollToTop } from './components/global/ScrollToTop';
import { ErrorBoundary } from './components/ErrorBoundary';
import Landing from './pages/Landing';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <ErrorBoundary>
      <HashRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-[#FAFAFA]">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/features" element={<Features />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </ErrorBoundary>
  );
}

export default App;
