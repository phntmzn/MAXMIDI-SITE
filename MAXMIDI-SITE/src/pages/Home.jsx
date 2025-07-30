

import React from 'react';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import ProgramCard from '../components/ProgramCard';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <main className="py-8 px-4">
        <section className="space-y-6">
          <ProgramCard
            title="Program One"
            description="Basic MIDI Output using C++ and CoreMIDI."
          />
          <ProgramCard
            title="Program Two"
            description="Realtime MIDI Input and Basic Synthesis with JUCE."
          />
          <ProgramCard
            title="Program Three"
            description="Visual MIDI Feedback with Metal Integration."
          />
        </section>
      </main>
      <Footer />
    </>
  );
}