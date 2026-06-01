import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#0f1120]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-14 pt-14 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-5 bg-white inline-flex rounded-lg p-2">
              <img src={logo} alt="PixelPro Multimedia" className="h-[38px] w-auto object-contain" />
            </div>
            <p className="text-[13px] text-gray-400 leading-[1.85]">
              PixelPro Multimedia is Karnal's leading design institute — offering professional
              courses in Graphic Design, Video Editing, and AI tools. We train students to be
              job-ready creatives.
            </p>
            <div className="flex gap-2 mt-5">
              <a href="https://www.facebook.com/ragdesignss/" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#F97316] hover:border-[#F97316] transition-all duration-200">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/pixel_pro.in/" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#F97316] hover:border-[#F97316] transition-all duration-200">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://www.behance.net/raghavarora7" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#F97316] hover:border-[#F97316] transition-all duration-200">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.7zM15.97 13h4.951c-.171-1.975-1.361-2.754-2.547-2.754-1.342 0-2.404.779-2.404 2.754zM7.462 14.598c1.417 0 2.309-.973 2.309-2.309 0-1.34-.892-2.314-2.309-2.314H4.19v4.623h3.272zm-.28-7.032c1.164 0 1.937-.79 1.937-1.89 0-1.109-.773-1.895-1.937-1.895H4.19v3.785h2.992zM0 5h8.26c1.938 0 3.875 1.268 3.875 4.017 0 1.551-.73 2.627-1.833 3.244C11.673 12.916 12.5 14.197 12.5 15.98 12.5 19.244 10.187 21 7.462 21H0V5z"/>
                </svg>
              </a>
              <a href="https://wa.me/917404426359" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] transition-all duration-200">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] font-bold text-white uppercase tracking-[2px] mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Services", to: "/services" },
                { label: "Contact", to: "/contact" },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-[13px] text-gray-400 hover:text-[#F97316] transition-colors duration-150 flex items-center gap-1.5 group">
                    <span className="w-0 group-hover:w-2 h-[1.5px] bg-[#F97316] transition-all duration-200 rounded-full" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] font-bold text-white uppercase tracking-[2px] mb-5">Services</h4>
            <ul className="flex flex-col gap-3">
              {["Graphic Design", "Video Editing", "Social Media", "Branding Kit", "Website Dev", "AI Content"].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-[13px] text-gray-400 hover:text-[#F97316] transition-colors duration-150 flex items-center gap-1.5 group">
                    <span className="w-0 group-hover:w-2 h-[1.5px] bg-[#F97316] transition-all duration-200 rounded-full" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="text-[11px] font-bold text-white uppercase tracking-[2px] mb-5">Get In Touch</h4>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-start">
                <div className="mt-0.5 flex-shrink-0">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <p className="text-[13px] text-gray-400 leading-relaxed">
                  First Floor, SCO. 32, Main Market Rd,<br />Sector 14, Karnal, Haryana 132001
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.9a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <a href="tel:+917404426359" className="text-[13px] text-gray-400 hover:text-white transition-colors">+91 74044 26359</a>
              </div>
              <div className="flex gap-3 items-center">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href="mailto:ragdesignss@gmail.com" className="text-[13px] text-gray-400 hover:text-white transition-colors break-all">
                  ragdesignss@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.07] pt-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[12px] text-gray-600">
            Copyright © {new Date().getFullYear()} &nbsp;|&nbsp; Powered by PixelPro Multimedia
          </p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="text-[12px] text-gray-600 hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-[12px] text-gray-600 hover:text-gray-400 transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}