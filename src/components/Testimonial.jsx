import { useState, useEffect } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const reviews = [
  {
    quote: "PixelPro completely transformed our brand. The logo, social media creatives, and video edits were all outstanding. Raghav is incredibly talented and delivers fast.",
    name: "Kapil Sharma",
    role: "Founder, StudioWave Karnal",
    stars: 5,
    initial: "K",
    color: "#F97316",
    via: "Google Review",
  },
  {
    quote: "I enrolled in the Graphic Design course and it's the best investment I've made. The teaching is practical, hands-on, and the trainer really knows the industry.",
    name: "Priya Mehta",
    role: "Student · Graphic Design Batch",
    stars: 5,
    initial: "P",
    color: "#3B82F6",
    via: "Google Review",
  },
  {
    quote: "The video editing course is top-notch. After 2 months I started taking freelance clients. The portfolio projects we built during the course were the real game changer.",
    name: "Aakash Verma",
    role: "Student · Video Editing Batch",
    stars: 5,
    initial: "A",
    color: "#10B981",
    via: "Google Review",
  },
];

const Stars = ({ count }) => (
  <div className="flex gap-0.5 mb-4">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="#F97316">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ))}
  </div>
);

export default function Testimonial() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const { ref, visible } = useScrollReveal({ threshold: 0.15 });

  useEffect(() => {
    const t = setInterval(() => {
      setAnimating(true);
      setTimeout(() => { setActive(a => (a + 1) % reviews.length); setAnimating(false); }, 280);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const goTo = (i) => {
    if (i === active) return;
    setAnimating(true);
    setTimeout(() => { setActive(i); setAnimating(false); }, 280);
  };

  const r = reviews[active];

  return (
    <section
      ref={ref}
      className="bg-[#fdf9f0] py-16 md:py-20 px-5 sm:px-8 lg:px-14 border-t border-orange-100"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(24px)",
        transition: "opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      <div className="max-w-[860px] mx-auto">
        <div className="text-center mb-10">
          <p className="text-[11px] font-bold text-[#F97316] tracking-[3px] uppercase mb-3">Student & Client Reviews</p>
          <h2 className="text-[28px] sm:text-[32px] font-black text-[#1a1a2e] tracking-tight">What People Say</h2>
        </div>

        <div className="bg-white rounded-2xl border border-orange-100 px-7 md:px-12 py-9 md:py-10 shadow-sm text-center relative overflow-hidden">
          <div className="text-[120px] leading-none text-[#F97316]/8 font-serif select-none absolute -top-4 left-6 pointer-events-none">"</div>
          <div
            style={{
              opacity: animating ? 0 : 1,
              transform: animating ? "translateY(8px)" : "none",
              transition: "opacity 0.28s ease, transform 0.28s ease",
            }}
          >
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-white text-[20px] font-black shadow-lg" style={{ background: r.color }}>
                {r.initial}
              </div>
            </div>
            <Stars count={r.stars} />
            <p className="text-[15px] md:text-[17px] text-[#1a1a2e] leading-[1.8] font-medium mb-5 max-w-[620px] mx-auto">
              {r.quote}
            </p>
            <p className="text-[14px] font-bold text-[#F97316]">{r.name}</p>
            <p className="text-[11px] font-semibold text-gray-400 tracking-[1.2px] uppercase mt-1">{r.role}</p>
            <p className="text-[10px] text-gray-300 mt-1">{r.via}</p>
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-6">
          {reviews.map((_, i) => (
            <button key={i} onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${i === active ? "bg-[#F97316] w-6 h-2" : "bg-[#F97316]/25 hover:bg-[#F97316]/50 w-2 h-2"}`}
            />
          ))}
        </div>

        {/* Google badge */}
        <div className="mt-8 flex justify-center">
          <a
            href="https://g.co/kgs/pixelpromultimedia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white border border-gray-200 hover:border-gray-300 rounded-full px-5 py-2.5 shadow-sm hover:shadow-md transition-all duration-200 group"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(s => (
                <svg key={s} width="12" height="12" viewBox="0 0 24 24" fill="#F97316">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              ))}
            </div>
            <span className="text-[12px] font-bold text-[#1a1a2e]">5.0</span>
            <span className="text-[12px] text-gray-300">·</span>
            <span className="text-[12px] text-gray-500 group-hover:text-[#F97316] transition-colors">See Google Reviews →</span>
          </a>
        </div>
      </div>
    </section>
  );
}