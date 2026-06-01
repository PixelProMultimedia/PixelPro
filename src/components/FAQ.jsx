import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const FAQS = [
  {
    q: "What courses does PixelPro Multimedia offer?",
    a: "We offer professional courses in Graphic Design (Adobe Photoshop, Illustrator, CorelDRAW), Video Editing (Premiere Pro, After Effects), and AI-powered design tools. Each course is structured with hands-on projects and real-world assignments.",
  },
  {
    q: "Can I attend a demo class before enrolling?",
    a: "Absolutely. We offer free demo classes with zero commitment. Just reach out on WhatsApp or fill in the contact form and we'll schedule a session at your convenience. Experience the teaching style and curriculum before you decide.",
  },
  {
    q: "What is the duration and fee for the courses?",
    a: "Course duration ranges from 1 to 3 months depending on the program. Fees are competitive and vary by course. Contact us directly for the current fee structure and available batch timings.",
  },
  {
    q: "Will I get a certificate after completing the course?",
    a: "Yes. Every student who completes the course receives a PixelPro Multimedia completion certificate. We also help you build a strong portfolio that carries more weight than any certificate in the creative industry.",
  },
  {
    q: "Do you offer placement assistance after the course?",
    a: "We actively help students build job-ready portfolios and connect them with freelance opportunities and local businesses. Our network in Karnal and beyond helps our graduates land projects and full-time roles.",
  },
  {
    q: "Is prior experience required to join?",
    a: "No prior experience is needed. Our courses are designed for complete beginners as well as working professionals who want to upskill. We move at a pace that ensures every student understands and applies what they learn.",
  },
];

function FAQItem({ item, index, openIndex, setOpenIndex }) {
  const isOpen = openIndex === index;
  const { ref, visible } = useScrollReveal({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(20px)",
        transition: `opacity 0.5s cubic-bezier(0.16,1,0.3,1) ${index * 0.07}s, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${index * 0.07}s`,
      }}
      className={`border rounded-xl overflow-hidden transition-colors duration-200 ${
        isOpen
          ? "border-[#F97316]/30 bg-[#fffaf7]"
          : "border-gray-100 bg-white hover:border-gray-200"
      }`}
    >
      <button
        onClick={() => setOpenIndex(isOpen ? null : index)}
        className="w-full flex items-center justify-between px-6 py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className={`text-[14px] md:text-[15px] font-semibold leading-snug transition-colors ${isOpen ? "text-[#F97316]" : "text-[#1a1a2e] group-hover:text-[#F97316]"}`}>
          {item.q}
        </span>
        <span className={`flex-shrink-0 ml-4 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${
          isOpen ? "border-[#F97316] bg-[#F97316] rotate-45" : "border-gray-200 bg-gray-50"
        }`}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={isOpen ? "white" : "#6b7280"} strokeWidth="2.5" strokeLinecap="round">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
        </span>
      </button>
      <div
        style={{
          maxHeight: isOpen ? "400px" : "0",
          transition: "max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-5 text-[13.5px] text-gray-500 leading-[1.8]">{item.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const { ref, visible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="bg-white py-16 md:py-24 px-5 sm:px-8 lg:px-14">
      <div className="max-w-[860px] mx-auto">
        <div
          ref={ref}
          className="mb-12 text-center"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(20px)",
            transition: "opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <p className="text-[11px] font-bold text-[#F97316] tracking-[3px] uppercase mb-3">Got Questions?</p>
          <h2 className="text-[28px] sm:text-[32px] md:text-[38px] font-bold text-[#1a1a2e] tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[14px] text-gray-500 mt-3 max-w-[500px] mx-auto">
            Everything you need to know about our courses, admissions, and what to expect.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              index={i}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-[13.5px] text-gray-400">
            Still have questions?{" "}
            <a
              href="https://wa.me/917404426359"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F97316] font-semibold hover:underline"
            >
              Chat with us on WhatsApp →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}