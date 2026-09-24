import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="text-center">
        <h1 className="font-display font-extrabold text-6xl text-[#0F0F0F] mb-4">404</h1>
        <p className="text-lg text-[#6B7280] mb-8">Page not found</p>
        <Link 
          to="/" 
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#4F46E5] text-white font-semibold text-sm"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
