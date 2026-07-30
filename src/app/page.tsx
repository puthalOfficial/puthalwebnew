import Header from "./components/Header";
import Hero from "./components/Hero";
import MissionValues from "./components/MissionValues";
import Team from "./components/Team";
import Stats from "./components/Stats";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import MicroInteractions from "./components/MicroInteractions";

export default function Home() {
  return (
    <>
      <Header />
      <main className="wave-bg">
        <Hero />
        <MissionValues />
        <Team />
        <Stats />
        <CTA />
      </main>
      <Footer />
      <MicroInteractions />
    </>
  );
}
