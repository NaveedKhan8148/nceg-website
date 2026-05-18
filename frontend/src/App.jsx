import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import ResearchAndProjects from "./components/ResearchAndProjects";
import DirectorMessage from "./components/DirectorMessage";
import NewsUpdates from "./components/NewsUpdates";
import Laboratories from "./components/Laboratories";
import UsefulLinks from "./components/UsefulLinks";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-body overflow-x-hidden">
      <Navbar />
      <Hero />
      <StatsBar />
      <ResearchAndProjects />
      <DirectorMessage />
      <Laboratories />
      <NewsUpdates />
      <UsefulLinks />
      <Footer />
    </div>
  );
}
