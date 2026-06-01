import { usePageTitle } from "../hooks/usePageTitle";
import Hero from "../components/Hero";
import FreeDemoCTA from "../components/FreeDemoCTA";
import Stats from "../components/Stats";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Testimonial from "../components/Testimonial";
import FAQ from "../components/FAQ";
import Founder from "../components/Founder";
import Customers from "../components/Customers";
import CTABanner from "../components/CTABanner";

export default function Home() {
  usePageTitle("Home");
  return (
    <main>
      <Hero />
      {/* Free Demo banner — drops right under hero, stays on every page via this component */}
      <FreeDemoCTA variant="banner" />
      <Stats />
      <Services />
      <Portfolio />
      <Testimonial />
      <FAQ />
      <Founder />
      <Customers />
      {/* Full Free Demo section above the final CTA */}
      <FreeDemoCTA variant="card" />
      <CTABanner />
    </main>
  );
}