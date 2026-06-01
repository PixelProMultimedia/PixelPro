import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    hasOwnText: true,
    isCustomBg: true,   // rendered via component, no image tag
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1600&q=85&auto=format&fit=crop",
    hasOwnText: false,
    tagline: "Logo & Visual Identity",
    heading: "Brands that",
    heading2: "people",
    highlight: "Remember",
    sub: "From concept to final delivery — identities that make a lasting impression.",
    cta: "See Our Services",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1600&q=85&auto=format&fit=crop",
    hasOwnText: false,
    tagline: "Video Editing & Motion",
    heading: "Stories told",
    heading2: "through",
    highlight: "Motion",
    sub: "Reels, promos, and cinematic edits that drive real engagement.",
    cta: "Request a Quote",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1600&q=85&auto=format&fit=crop",
    hasOwnText: false,
    tagline: "Social Media Content",
    heading: "Content that",
    heading2: "stops the",
    highlight: "Scroll",
    sub: "Eye-catching posts, reels and thumbnails built for maximum reach.",
    cta: "Get Started",
  },
];

/* ────────────────────────────────────────────────────────────
   Floating Adobe Icons Background — built in pure CSS/JSX.
   Mimics the "hands holding Creative Cloud apps" vibe:
   dark navy gradient + colorful Adobe tool icons floating
   with gentle animation. Zero image dependency.
──────────────────────────────────────────────────────────── */
function AdobeBg() {
  // Each icon: { label, bg, letter, color, top, right, size, delay, duration }
  const icons = [
    // Large central cluster (right side)
    { label:"Ps", bg:"#001833", letter:"Ps", color:"#31A8FF", top:"18%",  right:"24%", size:72, delay:0,    dur:6 },
    { label:"Ai", bg:"#FF7C00", letter:"Ai", color:"#fff",    top:"38%",  right:"14%", size:80, delay:0.8,  dur:7 },
    { label:"Pr", bg:"#00005B", letter:"Pr", color:"#9999FF", top:"55%",  right:"26%", size:68, delay:1.6,  dur:6.5 },
    { label:"Id", bg:"#49021F", letter:"Id", color:"#FF3366", top:"22%",  right:"8%",  size:60, delay:2.2,  dur:8 },
    { label:"Ae", bg:"#00003B", letter:"Ae", color:"#9999FF", top:"68%",  right:"10%", size:56, delay:0.4,  dur:7.5 },
    // Scattered outer icons
    { label:"Lr", bg:"#001A36", letter:"Lr", color:"#31A8FF", top:"12%",  right:"40%", size:48, delay:1.2,  dur:9 },
    { label:"Xd", bg:"#2E001E", letter:"Xd", color:"#FF61F6", top:"72%",  right:"38%", size:44, delay:3,    dur:6 },
    { label:"Au", bg:"#1B002E", letter:"Au", color:"#9B8EFF", top:"45%",  right:"44%", size:42, delay:2,    dur:8 },
    { label:"Cc", bg:"#1C0A00", letter:"Cc", color:"#FF2BC2", top:"80%",  right:"20%", size:38, delay:1.8,  dur:7 },
    { label:"Me", bg:"#001A36", letter:"Me", color:"#4BCCFF", top:"8%",   right:"18%", size:36, delay:2.6,  dur:9 },
  ];

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse at 70% 50%, #0d1b3e 0%, #080c1e 45%, #030610 100%)",
        overflow: "hidden",
      }}
    >
      {/* Subtle radial glow behind icons */}
      <div style={{
        position:"absolute", top:"50%", right:"20%",
        width:"520px", height:"520px",
        transform:"translate(50%,-50%)",
        background:"radial-gradient(circle, rgba(49,168,255,0.07) 0%, transparent 70%)",
        pointerEvents:"none",
      }}/>
      <div style={{
        position:"absolute", top:"40%", right:"10%",
        width:"300px", height:"300px",
        transform:"translate(50%,-50%)",
        background:"radial-gradient(circle, rgba(255,124,0,0.08) 0%, transparent 70%)",
        pointerEvents:"none",
      }}/>

      <style>{`
        @keyframes floatA {
          0%,100% { transform: translateY(0px) rotate(-2deg); }
          50%      { transform: translateY(-18px) rotate(2deg); }
        }
        @keyframes floatB {
          0%,100% { transform: translateY(0px) rotate(1deg); }
          50%      { transform: translateY(-14px) rotate(-3deg); }
        }
        @keyframes floatC {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          50%      { transform: translateY(-22px) rotate(1deg); }
        }
      `}</style>

      {icons.map((ic, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: ic.top,
            right: ic.right,
            width: ic.size,
            height: ic.size,
            borderRadius: "22%",
            background: ic.bg,
            border: `1.5px solid rgba(255,255,255,0.10)`,
            boxShadow: `0 8px 32px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.04)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Adobe Clean', 'Myriad Pro', system-ui, sans-serif",
            fontWeight: 700,
            fontSize: ic.size * 0.34,
            color: ic.color,
            letterSpacing: "-0.5px",
            animationName: i % 3 === 0 ? "floatA" : i % 3 === 1 ? "floatB" : "floatC",
            animationDuration: `${ic.dur}s`,
            animationDelay: `${ic.delay}s`,
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
            userSelect: "none",
          }}
        >
          {ic.letter}
        </div>
      ))}

      {/* Left gradient to ensure text readability */}
      <div style={{
        position:"absolute", inset:0,
        background:"linear-gradient(to right, rgba(8,12,30,0.97) 0%, rgba(8,12,30,0.82) 35%, rgba(8,12,30,0.40) 58%, rgba(8,12,30,0.05) 100%)",
        pointerEvents:"none",
      }}/>
      <div style={{
        position:"absolute", bottom:0, left:0, right:0, height:"10rem",
        background:"linear-gradient(to top, rgba(8,12,30,0.90) 0%, transparent 100%)",
        pointerEvents:"none",
      }}/>
    </div>
  );
}

/* ── Slide 1 Content ── */
function Slide1Content({ mobile }) {
  if (mobile) {
    return (
      <div className="px-5 pt-5 pb-6">
        <p className="text-[#F97316] text-[10px] font-black tracking-[3px] uppercase mb-3">
          Karnal's #1 Design Institute
        </p>
        <h2 className="text-white leading-tight mb-3">
          <span className="block text-[28px] font-light text-white/75">Learn</span>
          <span className="block text-[34px] font-extrabold text-[#F97316] leading-none">Graphic Design,</span>
          <span className="block text-[28px] font-bold">Video Editing &amp; AI</span>
        </h2>
        <p className="text-white/55 text-[13px] leading-relaxed mb-5">
          Job-ready courses taught by industry professionals. Free demo class — no commitment.
        </p>
        <div className="flex flex-col gap-2.5">
          <a
            href="https://wa.me/917404426359?text=Hi%2C%20I%20want%20to%20book%20a%20free%20demo%20class"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#F97316] text-white text-[13px] font-bold px-5 py-3 rounded-[8px] shadow-[0_4px_20px_rgba(249,115,22,0.5)]"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Book Free Demo Class
          </a>
          <Link to="/services" className="flex items-center justify-center bg-white/10 border border-white/20 text-white text-[13px] font-semibold px-5 py-3 rounded-[8px] backdrop-blur-sm">
            Explore Courses
          </Link>
          <Link to="/contact" className="flex items-center justify-center bg-transparent border border-white/15 text-white/70 text-[13px] font-medium px-5 py-3 rounded-[8px]">
            Contact Us →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 lg:px-16 max-w-[640px]"
      style={{ animation: "heroTextIn 0.55s cubic-bezier(0.16,1,0.3,1) both" }}
    >
      <p className="text-[#F97316] text-[11px] font-black tracking-[3.5px] uppercase mb-5">
        Karnal's #1 Design Institute
      </p>
      <h1 className="text-white leading-[1.06] mb-5">
        <span className="block text-[40px] lg:text-[50px] font-light text-white/75 leading-tight">Learn</span>
        <span className="block text-[50px] lg:text-[62px] font-extrabold text-[#F97316] tracking-tight leading-none">Graphic Design,</span>
        <span className="block text-[40px] lg:text-[50px] font-bold leading-tight">Video Editing &amp; AI</span>
      </h1>
      <p className="text-white/60 text-[15px] leading-relaxed mb-8 max-w-[400px]">
        Job-ready courses taught by industry professionals in Karnal.<br />
        Free demo class — no commitment required.
      </p>
      <div className="flex flex-wrap gap-3">
        <a
          href="https://wa.me/917404426359?text=Hi%2C%20I%20want%20to%20book%20a%20free%20demo%20class"
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#e86a10] text-white text-[14px] font-bold px-7 py-3.5 rounded-[8px] transition-all duration-200 shadow-[0_4px_24px_rgba(249,115,22,0.5)] hover:-translate-y-[2px] hover:shadow-[0_8px_32px_rgba(249,115,22,0.55)]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Book Free Demo
        </a>
        <Link to="/services" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/18 border border-white/25 hover:border-white/40 text-white text-[14px] font-semibold px-7 py-3.5 rounded-[8px] transition-all duration-200 backdrop-blur-sm hover:-translate-y-[2px]">
          Explore Courses
        </Link>
        <Link to="/contact" className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-[14px] font-medium px-3 py-3.5 transition-colors duration-200 group">
          Contact Us
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-200">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback((index) => {
    if (transitioning || index === current) return;
    setTransitioning(true);
    setTimeout(() => { setCurrent(index); setTransitioning(false); }, 400);
  }, [transitioning, current]);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const t = setInterval(next, 5500);
    return () => clearInterval(t);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="w-full" style={{ paddingTop: "108px" }}>

      {/* ── DESKTOP ── */}
      <div
        className="relative w-full overflow-hidden bg-[#080c1e] hidden md:block"
        style={{ height: "calc(100vh - 108px)", minHeight: "520px", maxHeight: "820px" }}
      >
        {/* Slide 1 — custom animated background */}
        {slide.isCustomBg && !transitioning && <AdobeBg />}

        {/* Slides 2–4 — photo background */}
        {!slide.isCustomBg && (
          <div className="absolute inset-0" style={{ opacity: transitioning ? 0 : 1, transition: "opacity 0.45s cubic-bezier(0.16,1,0.3,1)" }}>
            <img src={slide.image} alt="" className="w-full h-full object-cover object-center" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b0d1a]/92 via-[#0b0d1a]/60 to-[#0b0d1a]/20" />
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0b0d1a]/85 to-transparent" />
          </div>
        )}

        {/* Slide 1 text */}
        {slide.hasOwnText && !transitioning && <Slide1Content mobile={false} key={current} />}

        {/* Slides 2–4 text */}
        {!slide.hasOwnText && !transitioning && (
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 lg:px-16 max-w-[600px]"
            key={current}
            style={{ animation: "heroTextIn 0.55s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            <p className="text-[#F97316] text-[11px] font-bold tracking-[3px] uppercase mb-4">{slide.tagline}</p>
            <h1 className="text-white leading-[1.08] mb-5">
              <span className="block text-[42px] lg:text-[52px] font-light text-white/80">{slide.heading}</span>
              <span className="block text-[42px] lg:text-[52px] font-bold">{slide.heading2}</span>
              <span className="block text-[54px] lg:text-[66px] font-extrabold text-[#F97316] tracking-tight leading-none">{slide.highlight}</span>
            </h1>
            <p className="text-white/60 text-[15px] leading-relaxed mb-8 max-w-[380px]">{slide.sub}</p>
            <Link to="/contact" className="inline-flex w-fit bg-[#F97316] hover:bg-[#e86a10] text-white text-[14px] font-semibold px-8 py-3.5 rounded-[7px] transition-all duration-200 shadow-[0_4px_24px_rgba(249,115,22,0.45)] hover:-translate-y-[1px]">
              {slide.cta} →
            </Link>
          </div>
        )}

        {/* Arrows */}
        <button onClick={prev} aria-label="Previous" className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/30 hover:bg-[#F97316] border border-white/20 hover:border-[#F97316] flex items-center justify-center transition-all duration-200 backdrop-blur-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <button onClick={next} aria-label="Next" className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/30 hover:bg-[#F97316] border border-white/20 hover:border-[#F97316] flex items-center justify-center transition-all duration-200 backdrop-blur-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 right-8 lg:right-14 z-30 flex items-center gap-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${i === current ? "bg-[#F97316] w-7 h-2" : "bg-white/30 hover:bg-white/60 w-2 h-2"}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="absolute bottom-6 left-8 lg:left-14 z-30 text-white/40 text-[12px] font-semibold tracking-widest select-none">
          {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </div>
      </div>

      {/* ── MOBILE ── */}
      <div className="md:hidden bg-[#080c1e]">
        {/* Mobile slide 1 — custom bg as a contained block */}
        {slide.isCustomBg ? (
          <div className="relative w-full overflow-hidden" style={{ height: "260px" }}>
            <AdobeBg />
          </div>
        ) : (
          <div className="relative w-full overflow-hidden" style={{ paddingBottom: "56.25%" }}>
            <div className="absolute inset-0" style={{ opacity: transitioning ? 0 : 1, transition: "opacity 0.45s cubic-bezier(0.16,1,0.3,1)" }}>
              <img src={slide.image} alt="" className="w-full h-full object-cover object-center absolute inset-0" loading="eager" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#080c1e]" />
          </div>
        )}

        {/* Mobile arrows */}
        <div className="absolute" style={{ display: "none" }} /> {/* placeholder */}

        {/* Mobile text */}
        {slide.hasOwnText ? (
          <Slide1Content mobile={true} />
        ) : (
          <div className="px-5 pt-5 pb-6">
            <p className="text-[#F97316] text-[10px] font-bold tracking-[2.5px] uppercase mb-2">{slide.tagline}</p>
            <h2 className="text-white leading-tight mb-3">
              <span className="block text-[26px] font-light text-white/75">{slide.heading}</span>
              <span className="block text-[26px] font-bold">{slide.heading2}</span>
              <span className="block text-[34px] font-extrabold text-[#F97316] leading-none">{slide.highlight}</span>
            </h2>
            <p className="text-white/55 text-[13px] leading-relaxed mb-5">{slide.sub}</p>
            <Link to="/contact" className="inline-block bg-[#F97316] text-white text-[13px] font-semibold px-6 py-3 rounded-[7px]">
              {slide.cta} →
            </Link>
          </div>
        )}

        {/* Mobile dots */}
        <div className="flex items-center justify-center gap-2 pb-5 pt-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${i === current ? "bg-[#F97316] w-6 h-1.5" : "bg-white/25 w-1.5 h-1.5"}`}
            />
          ))}
        </div>
      </div>

    </section>
  );
}