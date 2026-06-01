import { useScrollReveal } from "../hooks/useScrollReveal";

const testimonials = [
  { quote: "PixelPro completely transformed our brand. The logo, social media creatives, and video edits were all outstanding. Raghav is incredibly talented and delivers fast.", name: "Kapil Sharma", role: "Founder, StudioWave Karnal", initial: "K", color: "#F97316" },
  { quote: "Got our coaching institute's complete branding done — logo, banners, admission ads. Raghav delivered everything on time and the quality was excellent.", name: "Meena K.", role: "Director, Karnal Coaching Centre", initial: "M", color: "#3B82F6" },
  { quote: "The reels they edited for our boutique went viral locally. We saw 3x more walk-ins that week. Highly recommend PixelPro to every local business.", name: "Priya T.", role: "Boutique Owner, Sector 13 Karnal", initial: "P", color: "#10B981" },
];

export default function Customers() {
  const { ref, visible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="bg-[#0b0d1a] py-16 md:py-20 px-5 sm:px-8 lg:px-14"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(24px)",
        transition: "opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-12">
          <p className="text-[11px] font-bold text-[#F97316] tracking-[3px] uppercase mb-3">Our Customers</p>
          <h2 className="text-[28px] sm:text-[32px] font-black text-white tracking-tight">
            What Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-300"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(24px)",
                transition: `opacity 0.5s ease ${i * 0.12}s, transform 0.5s ease ${i * 0.12}s`,
              }}
            >
              <div className="flex gap-0.5 mb-4">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} width="13" height="13" viewBox="0 0 24 24" fill="#F97316">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
              <p className="text-[13.5px] text-white/70 leading-[1.8] mb-5 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[14px] font-black flex-shrink-0" style={{ background: t.color }}>
                  {t.initial}
                </div>
                <div>
                  <p className="text-[13px] font-bold text-white">{t.name}</p>
                  <p className="text-[11px] text-white/40">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}