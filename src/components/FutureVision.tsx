import { MessageSquare, BrainCircuit, Building2 } from 'lucide-react';
import Section from './Section';

export default function FutureVision() {
  const visions = [
    {
      icon: MessageSquare,
      title: 'AI Mentor Chat',
      description: 'Get instant answers, explanations, and encouragement from your personal AI learning mentor.',
    },
    {
      icon: BrainCircuit,
      title: 'Mental Health-Aware Pacing',
      description: "AI that understands when you're stressed or overwhelmed and adjusts your plan accordingly.",
    },
    {
      icon: Building2,
      title: 'Corporate & Campus Adoption',
      description: 'Enterprise solutions for companies and universities to improve learning completion rates.',
    },
  ];

  return (
    <Section background="green" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          The Future of LearnLoop
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          {"We're just getting started. Here's where we're heading next."}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {visions.map((vision, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-green-200"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <vision.icon className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{vision.title}</h3>
            <p className="text-gray-600 text-center leading-relaxed">{vision.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-white p-10 rounded-2xl shadow-xl max-w-4xl mx-auto border-2 border-green-300">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4">
          Join Us on This Journey
        </h3>
        <p className="text-lg text-gray-600 text-center leading-relaxed">
          {"We're building the future of personalized, human-centered learning. Be part of the movement that transforms how people learn and grow."}
        </p>
      </div>
    </Section>
  );
}
