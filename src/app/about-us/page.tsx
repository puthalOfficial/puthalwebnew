import Hero from "./Hero";
import MissionValues from "./MissionValues";
import Team from "./Team";
import Stats from "./Stats";
import CTA from "./CTA";
import Footer from "../components/Footer";
import MicroInteractions from "./MicroInteractions";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="">
        <Hero />
        <MissionValues />
        <Team />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  );
}