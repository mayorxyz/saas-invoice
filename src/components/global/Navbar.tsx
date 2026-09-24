import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Close drawer on Escape key
  useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    // Lock body scroll
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navLinks = [
    { label: 'Features', to: '/features' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-6 lg:px-12 bg-white/80 backdrop-blur-md ${scrolled ? 'shadow-md' : ''}`}>
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="font-display font-bold text-xl">
            <span className="text-[#0F0F0F]">Invoice</span>
            <span className="text-[#4F46E5]">Flow</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium ${location.pathname === link.to ? 'text-[#4F46E5]' : 'text-[#6B7280]'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#4F46E5] text-white font-semibold text-sm"
            >
              Get Started Free
            </Link>
          </div>

          <button
            ref={toggleRef}
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-drawer"
          >
            <span className={`block w-5 h-0.5 bg-[#0F0F0F] transition-transform ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-[#0F0F0F] transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-[#0F0F0F] transition-transform ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden" role="dialog" aria-modal="true" id="mobile-drawer">
          <div 
            className="absolute inset-0 bg-black/20" 
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div 
            ref={drawerRef}
            className="absolute right-0 top-0 bottom-0 w-72 bg-white shadow-lg p-8 flex flex-col gap-6 pt-20"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-base font-medium ${location.pathname === link.to ? 'text-[#4F46E5]' : 'text-[#0F0F0F]'}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#4F46E5] text-white font-semibold text-sm mt-4"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
