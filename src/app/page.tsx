import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesBento from "@/components/ServicesBento";
import RecoveryJourney from "@/components/RecoveryJourney";
import SupportCTA from "@/components/SupportCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesBento />
      <RecoveryJourney />
      <SupportCTA />
      <Footer />
    </>
  );
}
