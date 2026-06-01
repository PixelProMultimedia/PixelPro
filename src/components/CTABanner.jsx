import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function CTABanner() {
  const { ref, visible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="bg-white px-5 sm:px-8 lg:px-14 py-10 md:py-12"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: "opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)" }}
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="relative overflow-hidden bg-[#0b0d1a] rounded-2xl px-7 md:px-12 py-9 md:py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 md:gap-10">
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-[400px] h-full bg-[#F97316]/8 blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-[#F97316]/10 blur-[40px] pointer-events-none" />

          <div className="relative z-10">
            <h3 className="text-[18px] md:text-[22px] font-black text-white mb-2 leading-tight">
              Would you like to start a project with us?
            </h3>
            <p className="text-[13px] md:text-[14px] text-white/50 max-w-[500px] leading-relaxed">
              Let's turn your ideas into reality. Share your vision and we'll bring your brand to life with powerful visuals, smart design, and engaging content.
            </p>
          </div>
          <Link
            to="/contact"
            className="relative z-10 flex-shrink-0 bg-[#F97316] hover:bg-[#e86a10] text-white text-[13px] font-bold tracking-wide px-8 py-3.5 rounded-xl transition-all duration-200 shadow-[0_4px_20px_rgba(249,115,22,0.4)] hover:shadow-[0_6px_28px_rgba(249,115,22,0.5)] hover:-translate-y-[1px] active:translate-y-0 whitespace-nowrap"
          >
            GET A QUOTE →
          </Link>
        </div>
      </div>
    </section>
  );
}