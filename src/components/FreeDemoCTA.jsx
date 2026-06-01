import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";

/**
 * FreeDemoCTA — drop this anywhere on any page.
 * variant: "banner" (full-width dark bar) | "card" (centered card in a section)
 */
export default function FreeDemoCTA({ variant = "banner" }) {
  const { ref, visible } = useScrollReveal({ threshold: 0.2 });

  if (variant === "card") {
    return (
      <section
        ref={ref}
        className="bg-white px-5 sm:px-8 lg:px-14 py-10 md:py-14"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(30px)", transition: "opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)" }}
      >
        <div className="max-w-[720px] mx-auto text-center">
          <span className="inline-block bg-orange-50 border border-orange-200 text-[#F97316] text-[10px] font-black uppercase tracking-[3px] px-3 py-1.5 rounded-full mb-5">
            Free Demo Class
          </span>
          <h2 className="text-[26px] sm:text-[30px] md:text-[34px] font-black text-[#1a1a2e] tracking-tight leading-tight mb-4">
            Experience Our Teaching Before You Enroll
          </h2>
          <p className="text-[14px] md:text-[15px] text-gray-500 leading-relaxed mb-7 max-w-[500px] mx-auto">
            Attend a free demo class — no fee, no commitment. See how we teach Graphic Design, Video Editing & AI tools in a live session.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/917404426359?text=Hi%2C%20I%20want%20to%20book%20a%20free%20demo%20class"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#e86a10] text-white text-[13px] font-bold px-7 py-3.5 rounded-[8px] transition-all duration-200 shadow-[0_4px_20px_rgba(249,115,22,0.4)] hover:-translate-y-[1px]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Book Free Demo on WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[#1a1a2e]/10 hover:border-[#F97316]/40 text-[#1a1a2e] text-[13px] font-bold px-7 py-3.5 rounded-[8px] transition-all duration-200 hover:-translate-y-[1px]"
            >
              View Courses →
            </Link>
          </div>
        </div>
      </section>
    );
  }

  // Default: banner variant
  return (
    <section
      ref={ref}
      className="bg-[#0b0d1a] px-5 sm:px-8 lg:px-14 py-5"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.6s cubic-bezier(0.16,1,0.3,1)" }}
    >
      <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex-shrink-0 w-8 h-8 bg-[#F97316]/15 border border-[#F97316]/30 rounded-full flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </span>
          <p className="text-white text-[13px] md:text-[14px] font-medium">
            <span className="font-black text-[#F97316]">Free Demo Class Available</span>
            {" "}— Learn Graphic Design, Video Editing & AI tools. No commitment.
          </p>
        </div>
        <a
          href="https://wa.me/917404426359?text=Hi%2C%20I%20want%20to%20book%20a%20free%20demo%20class"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 bg-[#F97316] hover:bg-[#e86a10] text-white text-[12px] font-black uppercase tracking-wider px-5 py-2.5 rounded-[6px] transition-all duration-200 whitespace-nowrap hover:-translate-y-[1px] shadow-[0_4px_16px_rgba(249,115,22,0.4)]"
        >
          Book Now →
        </a>
      </div>
    </section>
  );
}