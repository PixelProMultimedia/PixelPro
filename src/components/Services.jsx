import { useScrollReveal } from "../hooks/useScrollReveal";

const services = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>,
    title: "Design",
    desc: "From logos to banners, we craft custom visuals that reflect your brand identity and attract your audience.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/></svg>,
    title: "Development",
    desc: "Get beautifully designed websites and UI layouts tailored for modern brands and creators.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
    title: "Marketing",
    desc: "We build consistent visual brands for social media, websites, and print campaigns.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    title: "Social Media",
    desc: "Engage your followers with eye-catching posts, reels, thumbnails, and more.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>,
    title: "eCommerce",
    desc: "We design stunning product images, infographics, and listing visuals that boost your online sales.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/></svg>,
    title: "Help & Support",
    desc: "We provide creative support, revisions, and updates to keep your visuals fresh and effective.",
  },
];

export default function Services() {
  const { ref, visible } = useScrollReveal({ threshold: 0.1 });
  return (
    <section
      ref={ref}
      className="bg-white py-16 md:py-24 px-5 sm:px-8 lg:px-14"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(28px)", transition: "opacity 0.65s ease, transform 0.65s ease" }}
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-12">
          <p className="text-[11px] font-bold text-[#F97316] tracking-[3px] uppercase mb-3">What We Do</p>
          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-bold text-[#1a1a2e] tracking-tight leading-tight">Our Services</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-gray-100 rounded-2xl overflow-hidden divide-y divide-gray-100 lg:divide-y-0">
          {services.map((s, i) => (
            <div key={i} className={`p-7 md:p-8 bg-white hover:bg-[#fffaf7] transition-colors duration-200 group ${
              i < 3 ? "lg:border-b lg:border-gray-100" : ""
            } ${
              i % 3 !== 2 ? "sm:border-r sm:border-gray-100" : ""
            }`}>
              <div className="w-[46px] h-[46px] rounded-[10px] bg-orange-50 border border-orange-100 flex items-center justify-center mb-5 group-hover:bg-orange-100 transition-colors">
                {s.icon}
              </div>
              <h3 className="text-[16px] md:text-[17px] font-semibold text-[#1a1a2e] mb-2">{s.title}</h3>
              <p className="text-[13.5px] text-gray-500 leading-[1.75]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}