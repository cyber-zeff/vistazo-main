import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Showcase from "./components/Showcase";
import Specs from "./components/Specs";
import LinkedInBrand from "./components/LinkedInBrand";
import ProcessSection from "./components/Process";
import OPCard from "./components/OP_Card";
import FAQSection from "./components/FAQ";
import Footer from "./components/Footer";
import CTASection from "./components/CTA";


export default function Home() {
  return (
    <div className="bg-main">
      <Navbar />
      <Showcase />
      <Specs />
      <Services />
      <OPCard />
      <ProcessSection />
      <FAQSection />
      <LinkedInBrand />
      <CTASection />
      <Footer />
    </div>
  );
}
