import "../styles/ticker.css";

const ITEMS = [
  "100+ Satisfied Clients",
  "150+ Projects Completed",
  "5★ Google Rating",
  "Karnal's #1 Design Institute",
  "Graphic Design · Video Editing · AI Tools",
  "Free Demo Classes Available",
  "Job-Ready Curriculum",
  "Certificate on Completion",
  "Experienced Faculty",
  "Hands-On Projects",
];

const Dot = () => (
  <span className="mx-5 text-[#F97316] text-[8px] select-none">◆</span>
);

export default function TrustTicker() {
  const content = ITEMS.map((item, i) => (
    <span key={i} className="inline-flex items-center whitespace-nowrap">
      <span className="text-[12px] md:text-[13px] font-semibold tracking-[0.5px] text-white/80">{item}</span>
      <Dot />
    </span>
  ));

  return (
    <div
      className="fixed left-0 right-0 z-40 bg-[#0b0d1a] border-b border-white/[0.06] overflow-hidden py-2"
      style={{ top: "68px" }}
    >
      <div className="ticker-wrapper">
        <div className="ticker-track">
          {content}
          {content}
        </div>
      </div>
    </div>
  );
}