import LinkedInBrand from "./components/LinkedInBrand";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Showcase from "./components/Showcase";
import Specs from "./components/Specs";

export default function Home() {
  return (
    <div className="bg-main">
      <Navbar />
      <Showcase />
      <Specs />
      <LinkedInBrand />
      <Services />
{/* <svg
  viewBox="0 0 1440 120"
  preserveAspectRatio="none"
  className="absolute top-0 left-0 w-screen h-[120px] -z-10"
>
  <path
    d="M0 0H1440V100C1299.13 110.751 1220 110.541 1080 100C938.643 89.3329 859.883 89.417 720 100C579.17 110.683 500.269 110.611 360 100C218.401 89.4141 139.631 89.4863 0 100V0Z"
    fill="#361E98"
  />
</svg> */}
    </div>
  );
}
