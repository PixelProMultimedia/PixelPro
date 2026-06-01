import { usePageTitle } from "../hooks/usePageTitle";
import { useScrollReveal } from "../hooks/useScrollReveal";

function Section({ title, children }) {
  const { ref, visible } = useScrollReveal({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className="mb-10"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(18px)",
        transition: "opacity 0.55s ease, transform 0.55s ease",
      }}
    >
      <h2 className="text-[17px] md:text-[19px] font-bold text-[#1a1a2e] mb-3">{title}</h2>
      <div className="text-[14px] text-gray-500 leading-[1.9] space-y-3">{children}</div>
    </div>
  );
}

export default function Terms() {
  usePageTitle("Terms & Conditions");
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0b0d1a] pt-24 pb-14 px-5 sm:px-8 lg:px-14">
        <div className="max-w-[860px] mx-auto">
          <p className="text-[11px] font-bold text-[#F97316] tracking-[3px] uppercase mb-3">Legal</p>
          <h1 className="text-[32px] sm:text-[38px] md:text-[44px] font-black text-white tracking-tight leading-tight mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-[14px] text-white/50">Last updated: June 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-14 md:py-20 px-5 sm:px-8 lg:px-14">
        <div className="max-w-[860px] mx-auto">

          <Section title="1. Acceptance of Terms">
            <p>By accessing our website, attending a demo class, or enrolling in any course offered by PixelPro Multimedia, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.</p>
          </Section>

          <Section title="2. Enrollment & Fees">
            <p>Course enrollment is confirmed only upon receipt of the applicable fee payment. Fees must be paid in full prior to the commencement of the course unless a specific installment plan has been agreed upon in writing.</p>
            <p>PixelPro Multimedia reserves the right to modify course fees at any time. Changes will not affect students who have already paid and enrolled.</p>
          </Section>

          <Section title="3. Refund Policy">
            <p>Refund requests submitted within 3 days of enrollment (before the course begins) will be honored in full. After the course has commenced, fees are non-refundable. In exceptional circumstances, course credit may be offered at the discretion of the management.</p>
          </Section>

          <Section title="4. Attendance & Completion">
            <p>Students are expected to maintain regular attendance. Completion certificates are issued only to students who meet the minimum attendance requirement of 80% and satisfactorily complete all assigned projects.</p>
            <p>PixelPro Multimedia reserves the right to reschedule classes due to unforeseen circumstances. Makeup sessions will be arranged at no additional cost.</p>
          </Section>

          <Section title="5. Intellectual Property">
            <p>All course materials, lesson recordings, design templates, and resources provided by PixelPro Multimedia are the intellectual property of the institute. Students may use these materials for personal learning and portfolio building but may not distribute, sell, or publish them without written permission.</p>
          </Section>

          <Section title="6. Student Conduct">
            <p>Students are expected to conduct themselves with respect toward faculty and fellow students. Disruptive or inappropriate behavior may result in removal from the course without refund.</p>
          </Section>

          <Section title="7. Limitation of Liability">
            <p>PixelPro Multimedia is not liable for any indirect, incidental, or consequential damages arising from the use of our services or inability to complete a course due to circumstances beyond our control, including natural events, technical failures, or personal emergencies.</p>
          </Section>

          <Section title="8. Governing Law">
            <p>These Terms and Conditions are governed by the laws of India. Any disputes arising from enrollment or use of services will be subject to the jurisdiction of courts in Karnal, Haryana.</p>
          </Section>

          <Section title="9. Modifications">
            <p>PixelPro Multimedia reserves the right to update these Terms at any time. Students will be notified of material changes. Continued use of our services after notification constitutes acceptance of the revised terms.</p>
          </Section>

          <Section title="10. Contact">
            <p>
              <strong className="text-[#1a1a2e]">PixelPro Multimedia</strong><br />
              First Floor, SCO. 32, Main Market Rd, Sector 14, Karnal, Haryana 132001<br />
              Phone: <a href="tel:+917404426359" className="text-[#F97316] hover:underline">+91 74044 26359</a><br />
              Email: <a href="mailto:hello@pixelpromultimedia.com" className="text-[#F97316] hover:underline">hello@pixelpromultimedia.com</a>
            </p>
          </Section>

        </div>
      </section>
    </>
  );
}