import { usePageTitle } from "../hooks/usePageTitle";
import { Link } from "react-router-dom";

export default function NotFound() {
  usePageTitle("404 Not Found");
  return (
    <main className="pt-[68px] min-h-screen bg-white flex items-center justify-center px-5">
      <div className="text-center max-w-[480px] mx-auto py-20">

        {/* Big 404 */}
        <div className="relative inline-block mb-6">
          <span className="text-[120px] sm:text-[160px] font-black text-gray-100 leading-none select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
          </div>
        </div>

        <h1 className="text-[26px] sm:text-[30px] font-black text-[#1a1a2e] tracking-tight mb-3">
          Page not found
        </h1>
        <p className="text-[14px] text-gray-500 leading-relaxed mb-8">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto bg-[#F97316] hover:bg-[#e86a10] text-white text-[14px] font-bold px-8 py-3.5 rounded-xl transition-all duration-200 shadow-[0_4px_20px_rgba(249,115,22,0.3)] hover:-translate-y-[1px]"
          >
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto border border-gray-200 hover:border-gray-300 text-[#1a1a2e] text-[14px] font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 hover:bg-gray-50"
          >
            Contact Us
          </Link>
        </div>

      </div>
    </main>
  );
}