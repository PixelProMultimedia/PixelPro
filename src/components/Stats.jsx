import { useScrollReveal } from "../hooks/useScrollReveal";
import { useCounter } from "../hooks/useCounter";

const STATS = [
  { value: 100, suffix: "+", label: "Satisfied Clients", icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  )},
  { value: 150, suffix: "+", label: "Projects Completed", icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  )},
  { value: 5, suffix: "★", label: "Google Rating", icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  )},
  { value: 1, suffix: "st", label: "Design Institute in Karnal", icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  )},
];

function StatItem({ stat, visible, index }) {
  const count = useCounter(stat.value, { start: visible, duration: 1800 });

  return (
    <div
      className="flex flex-col items-center text-center px-6 py-8 group"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(20px)",
        transition: `opacity 0.5s cubic-bezier(0.16,1,0.3,1) ${0.1 * index}s, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${0.1 * index}s`,
      }}
    >
      <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-4 group-hover:bg-orange-100 group-hover:scale-110 transition-all duration-300">
        {stat.icon}
      </div>
      <div className="text-[40px] md:text-[48px] font-black text-[#1a1a2e] leading-none tracking-tight mb-1">
        {count}<span className="text-[#F97316]">{stat.suffix}</span>
      </div>
      <p className="text-[12px] md:text-[13px] font-semibold text-gray-500 uppercase tracking-[1.5px] mt-1">{stat.label}</p>
    </div>
  );
}

export default function Stats() {
  const { ref, visible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section
      className="bg-white border-t border-b border-gray-100 py-2 px-5 sm:px-8 lg:px-14"
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(24px)",
        transition: "opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 divide-x-0 lg:divide-x divide-gray-100">
          {STATS.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} visible={visible} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}