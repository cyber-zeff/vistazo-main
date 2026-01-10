import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Showcase from "./components/Showcase";
import Specs from "./components/Specs";
import LinkedInBrand from "./components/LinkedInBrand";
import ProcessSection from "./components/Process";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div className="bg-main">
      <Navbar />
      <Showcase />
      <Specs />
      <Services />
      <LinkedInBrand />
      <ProcessSection />
      <Footer />
    </div>
  );
}
