import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home",     to: "/" },
  { label: "About",    to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact",  to: "/contact" },
];

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3 select-none group">
      <div className="relative flex-shrink-0 w-[38px] h-[38px]">
        <svg viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="16" r="13" fill="#F97316"/>
          <rect x="8" y="7" width="10" height="24" rx="2" fill="#1a1a2e"/>
          <rect x="8" y="7" width="16" height="10" rx="2" fill="#1a1a2e"/>
          <circle cx="24" cy="16" r="5" fill="white"/>
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-[16px] font-black tracking-[0.3px] text-[#1a1a2e]">
          PIXEL<span className="text-[#F97316]">PRO</span>
        </span>
        <span className="text-[9px] font-semibold tracking-[3px] text-gray-400 mt-[3px]">
          MULTIMEDIA
        </span>
      </div>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-white/96 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
        : "bg-white border-b border-gray-100"
    }`}>
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-14 flex items-center justify-between h-[68px]">
        <Logo />

        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"}
              className={({ isActive }) =>
                `text-[14px] font-medium transition-colors duration-150 relative group ${
                  isActive ? "text-[#F97316]" : "text-gray-500 hover:text-gray-900"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#F97316] rounded-full transition-all duration-200 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <Link to="/contact"
          className="hidden md:inline-block bg-[#F97316] hover:bg-[#e86a10] text-white text-[13px] font-semibold tracking-wide px-5 py-[10px] rounded-[6px] transition-all duration-150 hover:-translate-y-[1px] hover:shadow-[0_4px_16px_rgba(249,115,22,0.4)]">
          REQUEST QUOTE
        </Link>

        <button className="md:hidden p-1.5 text-gray-700" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer with animation */}
      <div
        className="md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "400px" : "0" }}
      >
        <div className="px-5 py-5 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"}
              className={({ isActive }) =>
                `text-[15px] font-medium py-1 flex items-center gap-2 ${isActive ? "text-[#F97316]" : "text-gray-600"}`
              }
            >
              {({ isActive }) => (
                <>
                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isActive ? "bg-[#F97316]" : "bg-gray-300"}`} />
                  {l.label}
                </>
              )}
            </NavLink>
          ))}
          <Link to="/contact"
            className="bg-[#F97316] text-white text-[14px] font-semibold text-center py-3 rounded-[6px] mt-1">
            REQUEST QUOTE
          </Link>
        </div>
      </div>
    </header>
  );
}