import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-white relative overflow-hidden">
      {/* IF Monogram */}
      <div className="absolute bottom-0 right-0 opacity-[0.04] pointer-events-none" aria-hidden="true">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
          <text x="50" y="220" fontFamily="Plus Jakarta Sans" fontWeight="800" fontSize="200" fill="white">IF</text>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="font-display font-bold text-xl mb-4">
              <span className="text-white">Invoice</span>
              <span className="text-[#4F46E5]">Flow</span>
            </div>
            <p className="text-sm text-gray-400 mb-2">Invoice faster. Get paid sooner.</p>
            <p className="text-sm text-gray-500">Built for freelancers and small businesses across Africa and beyond.</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-gray-300">Product</h4>
            <ul className="space-y-3">
              <li><Link to="/features" className="text-sm text-gray-400">Features</Link></li>
              <li><Link to="/pricing" className="text-sm text-gray-400">Pricing</Link></li>
              <li><a href="/login" className="text-sm text-gray-400">Dashboard</a></li>
              <li><a href="#" className="text-sm text-gray-400">Changelog</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-gray-300">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-gray-400">About</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-400">Contact</Link></li>
              <li><a href="#" className="text-sm text-gray-400">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-400">Terms of Service</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-gray-300">Connect</h4>
            <ul className="space-y-3">
              <li><a href="https://twitter.com/invoiceflow" className="text-sm text-gray-400">Twitter/X: @invoiceflow</a></li>
              <li><a href="https://linkedin.com/company/invoiceflow" className="text-sm text-gray-400">LinkedIn: InvoiceFlow</a></li>
              <li><a href="mailto:hello@invoiceflow.co" className="text-sm text-gray-400">hello@invoiceflow.co</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6 text-center">
        <p className="text-sm text-gray-500">© 2025 InvoiceFlow. All rights reserved.</p>
      </div>
    </footer>
  );
}
