import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";

const items = [
  {
    url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80&auto=format&fit=crop",
    label: "Brand Identity",
    category: "Graphic Design",
  },
  {
    url: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600&q=80&auto=format&fit=crop",
    label: "Logo Design",
    category: "Graphic Design",
  },
  {
    url: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80&auto=format&fit=crop",
    label: "Social Media",
    category: "Content Creation",
  },
  {
    url: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80&auto=format&fit=crop",
    label: "Video Editing",
    category: "Motion",
  },
];

export default function Portfolio() {
  const { ref, visible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="bg-white py-16 md:py-24 px-5 sm:px-8 lg:px-14"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(28px)",
        transition: "opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-12">
          <p className="text-[11px] font-bold text-[#F97316] tracking-[3px] uppercase mb-3">Student Work</p>
          <h2 className="text-[28px] sm:text-[32px] md:text-[38px] font-bold text-[#1a1a2e] tracking-tight mb-4">
            What Our Students Create
          </h2>
          <p className="text-[14px] md:text-[15px] text-gray-500 max-w-[560px] mx-auto leading-relaxed">
            Real work from real students. Our hands-on curriculum produces industry-quality output — logos, reels, social content, and brand identities.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-10">
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-xl overflow-hidden aspect-square border border-gray-100 bg-gray-100"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "scale(0.94) translateY(16px)",
                transition: `opacity 0.55s cubic-bezier(0.16,1,0.3,1) ${0.08 * i}s, transform 0.55s cubic-bezier(0.16,1,0.3,1) ${0.08 * i}s`,
              }}
            >
              <img
                src={item.url}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => { e.target.style.display = "none"; }}
              />
              <div className="absolute inset-0 bg-[#0b0d1a]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-1 px-3 text-center">
                <span className="text-[10px] font-bold text-[#F97316] uppercase tracking-[2px]">{item.category}</span>
                <span className="text-white text-[14px] font-bold">{item.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            to="/contact"
            className="bg-[#F97316] hover:bg-[#e86a10] text-white text-[13px] font-bold tracking-widest px-10 py-3.5 rounded-[7px] transition-all duration-200 uppercase shadow-[0_4px_20px_rgba(249,115,22,0.35)] hover:-translate-y-[1px]"
          >
            Enroll &amp; Build Your Portfolio →
          </Link>
        </div>
      </div>
    </section>
  );
}