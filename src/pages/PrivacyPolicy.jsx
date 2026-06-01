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

export default function PrivacyPolicy() {
  usePageTitle("Privacy Policy");
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0b0d1a] pt-24 pb-14 px-5 sm:px-8 lg:px-14">
        <div className="max-w-[860px] mx-auto">
          <p className="text-[11px] font-bold text-[#F97316] tracking-[3px] uppercase mb-3">Legal</p>
          <h1 className="text-[32px] sm:text-[38px] md:text-[44px] font-black text-white tracking-tight leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-[14px] text-white/50">Last updated: June 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-14 md:py-20 px-5 sm:px-8 lg:px-14">
        <div className="max-w-[860px] mx-auto">

          <Section title="1. Information We Collect">
            <p>When you contact us, enroll in a course, or submit a form on our website, we may collect personal information including your name, email address, phone number, and educational background. We also collect non-personally identifiable information such as browser type, referring pages, and device type to improve our website experience.</p>
          </Section>

          <Section title="2. How We Use Your Information">
            <p>We use the information collected to:</p>
            <ul className="list-disc list-inside space-y-1.5 mt-2">
              <li>Respond to your inquiries and course enrollment requests</li>
              <li>Schedule and confirm demo classes</li>
              <li>Send course-related communications, updates, and announcements</li>
              <li>Improve our website, curriculum, and student experience</li>
              <li>Comply with applicable legal obligations</li>
            </ul>
          </Section>

          <Section title="3. Data Sharing">
            <p>PixelPro Multimedia does not sell, trade, or rent your personal information to third parties. We may share data with trusted service providers who assist us in operating our website (such as hosting or analytics), subject to confidentiality agreements.</p>
          </Section>

          <Section title="4. Cookies">
            <p>Our website may use cookies to enhance user experience, remember preferences, and understand how visitors interact with the site. You can choose to disable cookies through your browser settings, though some features of the site may not function properly as a result.</p>
          </Section>

          <Section title="5. Data Security">
            <p>We implement reasonable security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of internet transmission is 100% secure, and we cannot guarantee absolute security.</p>
          </Section>

          <Section title="6. Your Rights">
            <p>You have the right to request access to, correction of, or deletion of your personal data. To exercise these rights or ask questions about this policy, please contact us at <a href="mailto:hello@pixelpromultimedia.com" className="text-[#F97316] hover:underline">hello@pixelpromultimedia.com</a>.</p>
          </Section>

          <Section title="7. Children's Privacy">
            <p>Our courses are open to students of all ages; however, for students under 18, parental consent is required during enrollment. We do not knowingly collect personal data from minors without parental consent.</p>
          </Section>

          <Section title="8. Changes to This Policy">
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date. We encourage you to review this page periodically.</p>
          </Section>

          <Section title="9. Contact Us">
            <p>If you have questions or concerns about this Privacy Policy, please reach out:</p>
            <p className="mt-2">
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