import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import ServicesBento from "./components/ServicesBento";
import RecoveryJourney from "./components/RecoveryJourney";
import SupportCTA from "./components/SupportCTA";
import Footer from "./components/Footer";
import Process from "./components/Process";
import Testimonials from "./components/Testinomial";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBy />
      <ServicesBento />
      <Process/>
      <Testimonials/>
      <SupportCTA />
      <Footer />
    </>
  );
}
