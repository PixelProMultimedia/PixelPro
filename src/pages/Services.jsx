import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle";
import { useScrollReveal } from "../hooks/useScrollReveal";
import CTABanner from "../components/CTABanner";
import FreeDemoCTA from "../components/FreeDemoCTA";

const services = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
        <path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>
      </svg>
    ),
    title: "Graphic Design",
    desc: "From logos to banners, we craft custom visuals that reflect your brand identity and attract your audience.",
    tags: ["Logo Design", "Posters", "Banners", "Branding Kit"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>
      </svg>
    ),
    title: "Video Editing",
    desc: "Reels, promos, shorts and cinematic edits that stop the scroll and drive real engagement for your brand.",
    tags: ["Reels", "Promos", "Cinematic", "YouTube"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: "Social Media Management",
    desc: "Engage your followers with eye-catching posts, reels, thumbnails, and a consistent content calendar.",
    tags: ["Instagram", "Facebook", "Thumbnails", "Calendars"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/>
      </svg>
    ),
    title: "Website Development",
    desc: "Get beautifully designed, fast, and mobile-ready websites tailored for modern brands and creators.",
    tags: ["React", "Landing Pages", "eCommerce", "UI/UX"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
      </svg>
    ),
    title: "eCommerce Design",
    desc: "Stunning product images, infographics, and store visuals that build trust and boost your online sales.",
    tags: ["Amazon", "Shopify", "Product Photos", "Infographics"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: "Branding / Identity Kit",
    desc: "Complete brand systems — logo, fonts, colour palette, templates and guidelines for total consistency.",
    tags: ["Logo", "Brand Guide", "Colour Palette", "Templates"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    title: "AI Content Creation",
    desc: "Leverage cutting-edge AI tools to create stunning visuals, write compelling copy, and automate content workflows.",
    tags: ["Midjourney", "Runway", "ChatGPT", "Automation"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    title: "Freelancing Course",
    desc: "Learn how to get clients, build a portfolio, price your work, and grow as a successful freelance creative.",
    tags: ["Client Acquisition", "Portfolio", "Pricing", "Growth"],
  },
];

const process = [
  { step: "01", title: "Discovery Call", desc: "We understand your brand, goals, and requirements in a free consultation." },
  { step: "02", title: "Strategy & Plan", desc: "We map out a clear creative direction and timeline before any work begins." },
  { step: "03", title: "Design & Deliver", desc: "We execute with precision and share drafts for your feedback and approval." },
  { step: "04", title: "Final Handover", desc: "Polished files delivered in all formats you need, ready to use immediately." },
];

function ServiceCard({ s, i, visible }) {
  return (
    <div
      className="bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg hover:border-orange-200 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 0.07}s, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 0.07}s, box-shadow 0.3s ease`,
      }}
    >
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#F97316] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl" />
      <div className="w-[46px] h-[46px] rounded-[10px] bg-orange-50 border border-orange-100 flex items-center justify-center mb-5 group-hover:bg-[#F97316] group-hover:border-[#F97316] transition-all duration-300">
        <div className="group-hover:[&_svg]:stroke-white transition-all duration-300">
          {s.icon}
        </div>
      </div>
      <h3 className="text-[16px] md:text-[17px] font-bold text-[#1a1a2e] mb-2 group-hover:text-[#F97316] transition-colors duration-200">{s.title}</h3>
      <p className="text-[13.5px] text-gray-500 leading-[1.75] mb-4">{s.desc}</p>
      <div className="flex flex-wrap gap-1.5">
        {s.tags.map((tag) => (
          <span key={tag} className="text-[10px] font-semibold text-gray-400 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ServicesPage() {
  usePageTitle("Services");

  const heroRef = useScrollReveal({ threshold: 0.1 });
  const cardsRef = useScrollReveal({ threshold: 0.05 });
  const processRef = useScrollReveal({ threshold: 0.1 });

  return (
    <main className="pt-[108px]">
      <FreeDemoCTA variant="banner" />

      {/* ── HERO ── */}
      <section className="relative w-full overflow-hidden bg-[#0b0d1a]" style={{ minHeight: "380px" }}>
        <img
          src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=1600&q=80&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b0d1a] via-[#0b0d1a]/80 to-[#1a0a00]/60" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#F97316]/20 blur-[80px] rounded-full" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-5 py-20 md:py-28">
          <span className="inline-block bg-[#F97316]/15 border border-[#F97316]/30 text-[#F97316] text-[11px] font-bold tracking-[2.5px] uppercase px-4 py-1.5 rounded-full mb-5">
            What We Offer
          </span>
          <h1 className="text-[40px] sm:text-[52px] md:text-[60px] font-black text-white tracking-tight leading-none mb-5">
            Our <span className="text-[#F97316]">Services</span>
          </h1>
          <p className="text-[15px] text-white/55 max-w-[520px] leading-[1.85]">
            From graphic design to AI content — everything your brand needs to stand out, delivered by professionals who care.
          </p>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section
        ref={cardsRef.ref}
        className="bg-gray-50 py-16 md:py-24 px-5 sm:px-8 lg:px-14"
      >
        <div className="max-w-[1280px] mx-auto">
          <div
            className="text-center mb-14"
            style={{
              opacity: cardsRef.visible ? 1 : 0,
              transform: cardsRef.visible ? "none" : "translateY(20px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <p className="text-[11px] font-bold text-[#F97316] tracking-[3px] uppercase mb-3">Full Range</p>
            <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-black text-[#1a1a2e] tracking-tight">
              Everything Under One Roof
            </h2>
            <p className="text-[14px] text-gray-500 mt-3 max-w-[500px] mx-auto leading-relaxed">
              No need to juggle multiple agencies. We handle design, video, web, and content — all in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <ServiceCard key={s.title} s={s} i={i} visible={cardsRef.visible} />
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR PROCESS ── */}
      <section
        ref={processRef.ref}
        className="bg-white py-16 md:py-20 px-5 sm:px-8 lg:px-14"
        style={{
          opacity: processRef.visible ? 1 : 0,
          transform: processRef.visible ? "none" : "translateY(28px)",
          transition: "opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[11px] font-bold text-[#F97316] tracking-[3px] uppercase mb-3">How We Work</p>
            <h2 className="text-[28px] sm:text-[34px] font-black text-[#1a1a2e] tracking-tight">Our Process</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div
                key={p.step}
                className="relative"
                style={{
                  opacity: processRef.visible ? 1 : 0,
                  transform: processRef.visible ? "none" : "translateY(24px)",
                  transition: `opacity 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s`,
                }}
              >
                {/* Connector line */}
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-[calc(50%+28px)] right-[-calc(50%-28px)] h-[1px] bg-gradient-to-r from-orange-200 to-transparent" />
                )}
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[#F97316] text-white font-black text-[16px] flex items-center justify-center mb-4 shadow-[0_4px_16px_rgba(249,115,22,0.4)]">
                    {p.step}
                  </div>
                  <h3 className="text-[15px] font-bold text-[#1a1a2e] mb-2">{p.title}</h3>
                  <p className="text-[13px] text-gray-500 leading-[1.75]">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="bg-gray-50 px-5 sm:px-8 lg:px-14 py-4">
        <div className="max-w-[1280px] mx-auto">
          <div className="relative overflow-hidden bg-[#0b0d1a] rounded-2xl px-7 md:px-12 py-9 md:py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="absolute top-0 right-0 w-[400px] h-full bg-[#F97316]/8 blur-[80px] pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-[18px] md:text-[22px] font-black text-white mb-2 leading-tight">
                Ready to get started?
              </h3>
              <p className="text-[13px] md:text-[14px] text-white/50 max-w-[500px] leading-relaxed">
                Tell us about your project — we'll respond within 24 hours with a free consultation.
              </p>
            </div>
            <Link
              to="/contact"
              className="relative z-10 flex-shrink-0 bg-[#F97316] hover:bg-[#e86a10] text-white text-[13px] font-bold tracking-wide px-8 py-3.5 rounded-xl transition-all duration-200 shadow-[0_4px_20px_rgba(249,115,22,0.4)] hover:-translate-y-[1px] whitespace-nowrap"
            >
              GET A QUOTE →
            </Link>
          </div>
        </div>
      </div>

    </main>
  );
}