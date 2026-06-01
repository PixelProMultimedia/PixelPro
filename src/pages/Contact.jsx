import { usePageTitle } from "../hooks/usePageTitle";
import { useState } from "react";
import CTABanner from "../components/CTABanner";

function isOpenNow() {
  const ist = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
  const day = ist.getDay();
  const time = ist.getHours() * 60 + ist.getMinutes();
  if (day === 0) return false;
  if (day >= 1 && day <= 5) return time >= 540 && time < 1140;
  if (day === 6) return time >= 600 && time < 1020;
  return false;
}
const OPEN = isOpenNow();

const CONTACT_INFO = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: "Visit Us",
    value: "First Floor, SCO. 32, Main Market Rd, Sector 14, Karnal, Haryana 132001",
    href: "https://maps.google.com/?q=PIXELPRO+MULTIMEDIA+Sector+14+Karnal",
    linkLabel: "Get Directions →",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.9a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: "Call Us",
    value: "+91 74044 26359",
    href: "tel:+917404426359",
    linkLabel: "Call Now →",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: "Email Us",
    value: "ragdesignss@gmail.com",
    href: "mailto:ragdesignss@gmail.com",
    linkLabel: "Send Email →",
  },
];

const HOURS = [
  { day: "Monday – Friday", time: "9:00 AM – 7:00 PM" },
  { day: "Saturday", time: "10:00 AM – 5:00 PM" },
  { day: "Sunday", time: "Closed" },
];

function InputField({ label, required, children }) {
  return (
    <div>
      <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-[1px] mb-1.5">
        {label}{required && <span className="text-[#F97316] ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputCls =
  "w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[14px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/10 transition-all duration-200";

export default function Contact() {
  usePageTitle("Contact Us");
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Fire and forget — don't await
    fetch(import.meta.env.VITE_GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        name: form.name,
        phone: form.phone,
        email: form.email || "Not provided",
        service: form.service || "Not specified",
        message: form.message || "No message",
      }),
      mode: "no-cors",
    }).catch(() => {});

    // Show success after 800ms without waiting for response
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 800);
  };

  return (
    <main className="pt-[108px]">

      {/* ── HERO ── */}
      <section className="relative w-full overflow-hidden bg-[#0b0d1a]" style={{ minHeight: "380px" }}>
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b0d1a] via-[#0b0d1a]/80 to-[#1a0a00]/60" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#F97316]/20 blur-[80px] rounded-full" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-5 py-20 md:py-28">
          <span className="inline-block bg-[#F97316]/15 border border-[#F97316]/30 text-[#F97316] text-[11px] font-bold tracking-[2.5px] uppercase px-4 py-1.5 rounded-full mb-5">
            Let's Talk
          </span>
          <h1 className="text-[40px] sm:text-[52px] md:text-[60px] font-black text-white tracking-tight leading-none mb-5">
            Get In <span className="text-[#F97316]">Touch</span>
          </h1>
          <p className="text-[15px] text-white/55 max-w-[520px] leading-[1.85]">
            Have a project in mind or just want to say hello? We'd love to hear from you —
            our team responds within 24 hours.
          </p>
        </div>
      </section>

      {/* ── CONTACT CARDS ROW ── */}
      <section className="bg-white px-5 sm:px-8 lg:px-14 -mt-0">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 -mt-10 relative z-10">
            {CONTACT_INFO.map((c, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 md:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_32px_rgba(249,115,22,0.12)] hover:border-orange-200 transition-all duration-300 group">
                <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#F97316] mb-4 group-hover:bg-[#F97316] group-hover:text-white group-hover:border-[#F97316] transition-all duration-300">
                  {c.icon}
                </div>
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[1.5px] mb-1">{c.label}</p>
                <p className="text-[13.5px] text-gray-700 leading-[1.7] mb-3 font-medium">{c.value}</p>
                <a href={c.href} target={c.label === "Visit Us" ? "_blank" : undefined} rel="noopener noreferrer" className="text-[12px] font-bold text-[#F97316] hover:underline">
                  {c.linkLabel}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT: FORM + SIDEBAR ── */}
      <section className="bg-white py-16 md:py-20 px-5 sm:px-8 lg:px-14">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 xl:gap-16 items-start">

            {/* ── LEFT: FORM ── */}
            <div className="bg-[#fafafa] border border-gray-100 rounded-2xl p-6 sm:p-8 md:p-10">
              <div className="mb-8">
                <p className="text-[11px] font-bold text-[#F97316] tracking-[2.5px] uppercase mb-2">Free Consultation</p>
                <h2 className="text-[26px] sm:text-[30px] font-black text-[#1a1a2e] tracking-tight leading-tight">
                  Tell us about your project
                </h2>
                <p className="text-[14px] text-gray-500 mt-2 leading-relaxed">
                  Fill in the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-16 px-6">
                  <div className="w-20 h-20 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mb-6">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3 className="text-[22px] font-black text-[#1a1a2e] mb-2">You're all set!</h3>
                  <p className="text-[14px] text-gray-500 max-w-[300px]">
                    We received your request and will reach out within 24 hours. Looking forward to working with you!
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", service: "", message: "" }); }}
                    className="mt-8 text-[13px] font-semibold text-[#F97316] border border-[#F97316]/30 px-5 py-2.5 rounded-lg hover:bg-orange-50 transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <InputField label="Full Name" required>
                      <input name="name" required value={form.name} onChange={handleChange} placeholder="e.g. Rahul Sharma" className={inputCls} />
                    </InputField>
                    <InputField label="Phone Number" required>
                      <input name="phone" required value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className={inputCls} />
                    </InputField>
                  </div>

                  <InputField label="Email Address">
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputCls} />
                  </InputField>

                  <InputField label="Service Interested In">
                    <div className="relative">
                      <select name="service" value={form.service} onChange={handleChange} className={`${inputCls} appearance-none pr-10 cursor-pointer`}>
                        <option value="">Select a service…</option>
                        <option>Graphic Design</option>
                        <option>Video Editing</option>
                        <option>Social Media Management</option>
                        <option>Website Development</option>
                        <option>eCommerce Design</option>
                        <option>Branding / Identity Kit</option>
                        <option>AI Content Creation</option>
                        <option>Freelancing Course</option>
                      </select>
                      <svg className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </div>
                  </InputField>

                  <InputField label="Message">
                    <textarea name="message" rows={4} value={form.message} onChange={handleChange} placeholder="Tell us about your project — what do you need, timeline, budget…" className={`${inputCls} resize-none`} />
                  </InputField>

                  <button
                    type="submit"
                    disabled={loading}
                    className="relative flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#e86a10] disabled:opacity-80 text-white text-[14px] font-bold py-4 rounded-xl transition-all duration-200 shadow-[0_4px_20px_rgba(249,115,22,0.35)] hover:shadow-[0_6px_28px_rgba(249,115,22,0.45)] hover:-translate-y-[1px] active:scale-95 tracking-wide mt-1"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                          <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        Submit Request
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-gray-400 text-center">
                    We never share your details with third parties.
                  </p>
                </form>
              )}
            </div>

            {/* ── RIGHT: SIDEBAR ── */}
            <div className="flex flex-col gap-6">
              <a href="https://wa.me/917404426359" target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-[#0b0d1a] hover:bg-[#131628] border border-white/5 rounded-2xl p-5 transition-all duration-200 hover:shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
                <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center flex-shrink-0 shadow-[0_4px_14px_rgba(37,211,102,0.4)]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-bold text-white mb-0.5">Chat on WhatsApp</p>
                  <p className="text-[12px] text-gray-500">We reply within minutes</p>
                </div>
                <svg className="flex-shrink-0 text-gray-600 group-hover:text-[#25D366] transition-colors" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </a>

              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <h3 className="text-[14px] font-bold text-[#1a1a2e]">Business Hours</h3>
                </div>
                <div className="flex flex-col gap-3">
                  {HOURS.map((h, i) => (
                    <div key={i} className="flex items-center justify-between text-[13px]">
                      <span className="text-gray-500">{h.day}</span>
                      <span className={`font-semibold ${h.time === "Closed" ? "text-red-400" : "text-[#1a1a2e]"}`}>{h.time}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full flex-shrink-0 ${OPEN ? "bg-green-400 animate-pulse" : "bg-gray-300"}`} />
                  <span className="text-[12px] text-gray-500">
                    {OPEN
                      ? <>We're currently <span className="text-green-600 font-semibold">open</span> — expect a quick reply</>
                      : <>We're currently <span className="text-red-400 font-semibold">closed</span> — we'll reply next business day</>
                    }
                  </span>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm" style={{ height: "240px" }}>
                <iframe title="PixelPro Multimedia Location" width="100%" height="100%" loading="lazy" style={{ border: 0 }} allowFullScreen referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=PIXELPRO+MULTIMEDIA,+SCO+32,+Main+Market+Rd,+Sector+14,+Karnal,+Haryana+132001&z=16&output=embed" />
              </div>

              <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map((s) => (
                      <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="#F97316">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-[24px] font-black text-[#1a1a2e] leading-tight mt-1">5.0</p>
                  <p className="text-[11px] text-gray-500">34 Google reviews</p>
                </div>
                <div className="flex-1 border-l border-orange-200 pl-4">
                  <p className="text-[13px] font-semibold text-[#1a1a2e] leading-snug">"Top-notch design work with fast turnaround."</p>
                  <p className="text-[11px] text-gray-500 mt-1">— Verified Google Review</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}