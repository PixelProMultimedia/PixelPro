import founderImg from "../assets/founder.jpg";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Founder() {
  const { ref, visible } = useScrollReveal({ threshold: 0.1 });
  return (
    <section
      ref={ref}
      className="bg-[#fdf9f0] py-16 md:py-24 px-5 sm:px-8 lg:px-14"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(24px)", transition: "opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)" }}
    >
      <div className="max-w-[1280px] mx-auto">

        <div className="mb-10 md:mb-14 text-center">
          <p className="text-[11px] font-bold text-[#F97316] tracking-[3px] uppercase mb-3">The Person Behind It</p>
          <h2 className="text-[28px] sm:text-[32px] md:text-[38px] font-bold text-[#1a1a2e] tracking-tight">Meet The Founder</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-start">

          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="relative">
              <img
                src={founderImg}
                alt="Raghav Arora — Founder, PixelPro Multimedia"
                className="w-[260px] sm:w-[280px] h-[320px] sm:h-[340px] object-cover object-top rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-[#F97316]/30 -z-10" />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-[28px] md:text-[32px] font-bold text-[#1a1a2e] tracking-tight leading-tight mb-1">
              Raghav Arora
            </h3>
            <p className="text-[13px] font-bold text-[#F97316] uppercase tracking-[1.5px] mb-5">
              Founder &amp; Creative Director · PixelPro Multimedia
            </p>
            <p className="text-[15px] text-gray-600 leading-[1.85] mb-4">
              PixelPro Multimedia is the creative brainchild of Raghav Arora — a passionate
              graphic designer, visual storyteller, and content creator based in Karnal, Haryana.
            </p>
            <p className="text-[15px] text-gray-600 leading-[1.85] mb-7">
              With years of hands-on experience in graphic design, video production, and brand
              strategy, he transforms ideas into eye-catching visuals that connect and convert.
            </p>
            <blockquote className="border-l-[3px] border-[#F97316] pl-5 py-2 bg-white rounded-r-xl pr-5 shadow-sm">
              <p className="text-[14px] text-gray-600 italic leading-relaxed">
                "Design isn't just about making things look good — it's about solving problems
                creatively. At PixelPro, I help businesses stand out through powerful branding,
                striking visuals, and strategic content. Let's bring your vision to life!"
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}