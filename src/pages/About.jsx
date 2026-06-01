import { usePageTitle } from "../hooks/usePageTitle";
import { useState } from "react";
import { Link } from "react-router-dom";
import founderImg from "../assets/founder.jpg";
import Founder from "../components/Founder";
import CTABanner from "../components/CTABanner";
import FreeDemoCTA from "../components/FreeDemoCTA";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useCounter } from "../hooks/useCounter";

const services = [
  { num: "01", title: "Logo Design", desc: "We create unique and memorable logos that represent your brand's identity and leave a lasting impression." },
  { num: "02", title: "Social Media Creatives", desc: "Attractive designs tailored for Instagram, Facebook, and other platforms to boost your online presence." },
  { num: "03", title: "Video Editing", desc: "Professional editing for reels, shorts, promos, and more — we bring your stories to life with stunning visuals." },
  { num: "04", title: "Poster & Flyer Design", desc: "Eye-catching posters and flyers that help you promote your events, offers, or brand professionally." },
  { num: "05", title: "Branding Kit", desc: "Complete branding solutions including logo, fonts, color palette, and templates to maintain brand consistency." },
  { num: "06", title: "Content Creation (Reels & Graphics)", desc: "We craft scroll-stopping visual content — from Instagram reels to promotional graphics — to grow your brand organically." },
];

const courses = [
  { num: "01", emoji: "🎨", title: "Graphic Designing", desc: "Master modern tools like Photoshop, Illustrator & Canva. Build strong design fundamentals.", price: "₹4,999" },
  { num: "02", emoji: "🎬", title: "Video Editing", desc: "Edit professional-level videos using Premiere Pro, After Effects & mobile-friendly tools.", price: "₹4,999" },
  { num: "03", emoji: "🤖", title: "AI Tools for Creators", desc: "Discover trending AI tools like Midjourney, Runway, and more to boost your creativity.", price: "₹4,999" },
  { num: "04", emoji: "🧠", title: "Content Creation & Branding", desc: "Learn how to build a personal brand, grow online, and create impactful content.", price: "₹4,999" },
  { num: "05", emoji: "📱", title: "Social Media Management", desc: "Manage Instagram, YouTube & LinkedIn like a pro with tools and growth strategies.", price: "₹4,999" },
  { num: "06", emoji: "💼", title: "Freelancing & Career Building", desc: "Learn how to get clients, create a portfolio, and grow as a freelancer using your skills.", price: "₹4,999" },
];

const whyUs = [
  { q: "Best Quality Designs", a: "We deliver top-notch visual content tailored to your brand's personality — clean, creative, and captivating." },
  { q: "Fast Turnaround", a: "We respect your time. Most projects are delivered within agreed timelines with no compromise on quality." },
  { q: "Result Oriented Projects", a: "Every project is driven by strategy and creativity — we focus on outputs that actually convert." },
  { q: "Dedicated Support Team", a: "Our experienced team is always available to assist you with revisions, queries, and project updates." },
  { q: "Experienced Professionals", a: "Years of hands-on work across branding, video, and digital content — real expertise, not theory." },
];

const STATS = [
  { value: 100, suffix: "+", label: "Satisfied Clients" },
  { value: 150, suffix: "+", label: "Projects Completed" },
  { value: 5000, suffix: "+", label: "Hours of Creative Work" },
];

function AnimatedStat({ stat, visible, index }) {
  const count = useCounter(stat.value, { start: visible, duration: 2000 });
  return (
    <div
      className="text-center py-6 sm:py-0 px-8"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(24px)",
        transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 0.15}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 0.15}s`,
      }}
    >
      <div className="text-[52px] md:text-[60px] font-black text-white leading-none mb-2">
        {stat.value >= 1000 ? `${Math.floor(count / 1000)}K` : count}
        <span className="text-white/70">{stat.suffix}</span>
      </div>
      <div className="text-[13px] text-white/70 font-medium leading-snug max-w-[160px] mx-auto">{stat.label}</div>
    </div>
  );
}

export default function About() {
  usePageTitle("About Us");
  const [openFaq, setOpenFaq] = useState(0);

  // scroll reveal refs for each section
  const missionRef = useScrollReveal({ threshold: 0.1 });
  const servicesRef = useScrollReveal({ threshold: 0.1 });
  const coursesRef = useScrollReveal({ threshold: 0.05 });
  const whyRef = useScrollReveal({ threshold: 0.1 });
  const statsRef = useScrollReveal({ threshold: 0.2 });

  return (
    <main className="pt-[108px]">
      <FreeDemoCTA variant="banner" />

      {/* ── HERO ── */}
      <section className="relative w-full overflow-hidden bg-[#0b0d1a]" style={{ minHeight: "420px" }}>
        <img src={founderImg} alt="PixelPro Multimedia" className="absolute inset-0 w-full h-full object-cover object-top opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0d1a]/40 via-[#0b0d1a]/70 to-[#0b0d1a]" />
        {/* Animated glow orbs */}
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#F97316]/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-[#F97316]/6 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-5 py-24 md:py-32">
          <span className="inline-block bg-[#F97316]/15 border border-[#F97316]/30 text-[#F97316] text-[11px] font-bold tracking-[2.5px] uppercase px-4 py-1.5 rounded-full mb-5">
            Who We Are
          </span>
          <h1 className="text-[44px] sm:text-[56px] md:text-[64px] font-black text-white tracking-tight leading-none mb-6">
            About <span className="text-[#F97316]">Us</span>
          </h1>
          <p className="text-[15px] md:text-[16px] text-white/60 max-w-[640px] leading-[1.85]">
            We are a creative graphic design agency that transforms ideas into stunning visuals.
            From branding to content creation, our designs reflect the essence of your business.
            Good design isn't just about looks — it's about creating impact.
          </p>
        </div>
      </section>

      {/* ── WHO / MISSION / WHAT ── */}
      <section
        ref={missionRef.ref}
        className="bg-white py-16 md:py-20 px-5 sm:px-8 lg:px-14"
        style={{ opacity: missionRef.visible ? 1 : 0, transform: missionRef.visible ? "none" : "translateY(28px)", transition: "opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1)" }}
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            {[
              {
                title: "Who Are We",
                text: "PixelPro Multimedia is a full-service design studio specialising in visual storytelling. We help startups, creators, and businesses build their identity through eye-catching designs, creative layouts, and smart digital presence.",
              },
              {
                title: "Our Mission",
                text: "Our mission is to bring creativity to life. We aim to design visuals that speak louder than words, empower brands with strong identities, and deliver exceptional results across digital platforms.",
              },
              {
                title: "What We Do",
                list: ["Graphic Design", "Video Editing", "Website Development", "Social Media", "Branding Kit", "AI Content"],
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white p-8 md:p-10 hover:bg-[#fffaf7] transition-colors duration-300 group"
                style={{
                  opacity: missionRef.visible ? 1 : 0,
                  transform: missionRef.visible ? "none" : "translateY(20px)",
                  transition: `opacity 0.55s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s, transform 0.55s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s`,
                }}
              >
                <div className="w-8 h-[3px] bg-[#F97316] rounded-full mb-5 group-hover:w-14 transition-all duration-300" />
                <h3 className="text-[19px] font-bold text-[#1a1a2e] mb-4">{card.title}</h3>
                {card.text && <p className="text-[13.5px] text-gray-500 leading-[1.9]">{card.text}</p>}
                {card.list && (
                  <ul className="flex flex-col gap-2.5">
                    {card.list.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-[13.5px] text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR SERVICES ── */}
      <section
        ref={servicesRef.ref}
        className="bg-gray-50 py-16 md:py-20 px-5 sm:px-8 lg:px-14"
        style={{ opacity: servicesRef.visible ? 1 : 0, transform: servicesRef.visible ? "none" : "translateY(28px)", transition: "opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1)" }}
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[11px] font-bold text-[#F97316] tracking-[3px] uppercase mb-3">What We Offer</p>
            <h2 className="text-[32px] md:text-[38px] font-bold text-[#1a1a2e] tracking-tight">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {services.map((s, i) => (
              <div
                key={s.num}
                className="relative group"
                style={{
                  opacity: servicesRef.visible ? 1 : 0,
                  transform: servicesRef.visible ? "none" : "translateY(24px)",
                  transition: `opacity 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 0.08}s, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 0.08}s`,
                }}
              >
                <div className="text-[72px] font-black text-gray-100 leading-none select-none absolute -top-4 -left-1 group-hover:text-orange-100 transition-colors duration-300">
                  {s.num}.
                </div>
                <div className="relative pt-10">
                  <h3 className="text-[16px] font-bold text-[#1a1a2e] mb-2 group-hover:text-[#F97316] transition-colors duration-200">{s.title}</h3>
                  <p className="text-[13.5px] text-gray-500 leading-[1.8]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR COURSES ── */}
      <section
        ref={coursesRef.ref}
        className="bg-white py-16 md:py-20 px-5 sm:px-8 lg:px-14"
        style={{ opacity: coursesRef.visible ? 1 : 0, transform: coursesRef.visible ? "none" : "translateY(28px)", transition: "opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1)" }}
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[11px] font-bold text-[#F97316] tracking-[3px] uppercase mb-3">Learn With Us</p>
            <h2 className="text-[32px] md:text-[38px] font-bold text-[#1a1a2e] tracking-tight">Our Courses</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {courses.map((c, i) => (
              <div
                key={c.num}
                className="relative bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-lg hover:border-orange-200 hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
                style={{
                  opacity: coursesRef.visible ? 1 : 0,
                  transform: coursesRef.visible ? "translateY(0)" : "translateY(28px)",
                  transition: `opacity 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 0.07}s, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 0.07}s, box-shadow 0.3s ease, border-color 0.3s ease`,
                }}
              >
                {/* Subtle top accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#F97316] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl" />
                <div className="absolute top-4 right-5 text-[52px] font-black text-gray-50 leading-none select-none group-hover:text-orange-50 transition-colors">
                  {c.num}.
                </div>
                <div className="text-[30px] mb-4">{c.emoji}</div>
                <h3 className="text-[16px] font-bold text-[#1a1a2e] mb-2">{c.title}</h3>
                <p className="text-[13px] text-gray-500 leading-[1.8] mb-6">{c.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-[18px] font-black text-[#F97316]">{c.price}</span>
                  <Link to="/contact" className="text-[12px] font-bold text-white bg-[#F97316] hover:bg-[#e86a10] px-4 py-2 rounded-lg transition-colors">
                    Enroll Now →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section
        ref={whyRef.ref}
        className="bg-gray-50 py-16 md:py-20 px-5 sm:px-8 lg:px-14"
        style={{ opacity: whyRef.visible ? 1 : 0, transform: whyRef.visible ? "none" : "translateY(28px)", transition: "opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1)" }}
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="max-w-[700px]">
            <p className="text-[11px] font-bold text-[#F97316] tracking-[3px] uppercase mb-3">Our Edge</p>
            <h2 className="text-[32px] md:text-[38px] font-bold text-[#1a1a2e] tracking-tight mb-4">Why Choose Us?</h2>
            <p className="text-[14px] text-gray-500 leading-relaxed mb-8">
              We bring passion, precision, and professionalism to every project. Here's why our clients love working with us:
            </p>
            <div className="flex flex-col gap-2">
              {whyUs.map((f, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-gray-200 bg-white">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
                  >
                    <span className={`text-[14px] font-semibold transition-colors ${openFaq === i ? "text-[#F97316]" : "text-[#1a1a2e]"}`}>
                      {f.q}
                    </span>
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-[16px] font-bold transition-all duration-300 ${openFaq === i ? "bg-[#F97316] text-white rotate-45" : "bg-gray-100 text-gray-400"}`}>
                      +
                    </span>
                  </button>
                  <div style={{ maxHeight: openFaq === i ? "200px" : "0", transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1)" }} className="overflow-hidden">
                    <div className="px-5 pb-4 border-t border-gray-100">
                      <p className="text-[13px] text-gray-500 leading-relaxed pt-3">{f.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ANIMATED NUMBERS ── */}
      <section
        ref={statsRef.ref}
        className="bg-[#F97316] py-14 px-5 sm:px-8 lg:px-14 relative overflow-hidden"
      >
        {/* Decorative background shapes */}
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10 pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-white/8 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-white/5 rounded-full blur-[60px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto relative z-10">
          <p className="text-center text-white/60 text-[11px] font-bold tracking-[3px] uppercase mb-8">By The Numbers</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
            {STATS.map((s, i) => (
              <AnimatedStat key={i} stat={s} visible={statsRef.visible} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Founder />
      <CTABanner />

    </main>
  );
}