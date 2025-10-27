import Hero from "./components/Hero";
import WhatIsBJJ from "./components/WhatIsBJJ";
import Benefits from "./components/Benefits";
import PedagogyAndCurriculum from "./components/PedagogyAndCurriculum";
import SafetyAndInstructors from "./components/SafetyAndInstructors";
import MeetTheCoaches from "./components/MeetTheCoaches";
import Competitions from "./components/Competitions";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Hero />
      <WhatIsBJJ />
      <Benefits />
      <PedagogyAndCurriculum />
      <SafetyAndInstructors />
      <MeetTheCoaches />
      <Competitions />
      <FAQ />
      <Footer />
    </div>
  );
}
