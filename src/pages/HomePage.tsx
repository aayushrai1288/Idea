import { useRef } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Comparison from '../components/Comparison';
import FutureVision from '../components/FutureVision';
import WaitlistCTA from '../components/WaitlistCTA';
import Footer from '../components/Footer';
import { useScrollToHash } from '../hooks/useScrollToHash';

export default function HomePage() {
  const waitlistRef = useRef<HTMLDivElement>(null);
  useScrollToHash();

  const scrollToWaitlist = () => {
    waitlistRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onJoinWaitlist={scrollToWaitlist} />

      <main className="pt-16 md:pt-20">
        <Hero onGetStarted={scrollToWaitlist} onJoinWaitlist={scrollToWaitlist} />
        <Problem />
        <Solution />
        <Features />
        <HowItWorks />
        <Comparison />
        <FutureVision />
        <div ref={waitlistRef}>
          <WaitlistCTA />
        </div>
      </main>

      <Footer />
    </div>
  );
}
