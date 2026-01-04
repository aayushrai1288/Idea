import { CheckCircle2 } from 'lucide-react';
import Section from './Section';

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Set Your Learning Goal',
      description: 'Tell us what you want to learn and when you want to finish.',
    },
    {
      number: 2,
      title: 'AI Builds Your Daily Plan',
      description: 'Get a personalized micro-plan with bite-sized daily sessions that fit your schedule.',
    },
    {
      number: 3,
      title: 'Study + Take Breaks',
      description: 'Follow your plan with smart breaks. Breathe, stretch, walk. Keep your mind fresh.',
    },
    {
      number: 4,
      title: 'Play Mini Games',
      description: 'Reinforce what you learned with fun puzzles and challenges during breaks.',
    },
    {
      number: 5,
      title: 'Track Streaks & Rewards',
      description: 'Build daily habits, earn badges, and get insights on your progress.',
    },
    {
      number: 6,
      title: 'Complete Your Goal',
      description: 'Finish with confidence. Celebrate your achievement and start your next goal.',
    },
  ];

  return (
    <Section background="white" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          How LearnLoop Works
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A simple, proven process to help you finish what you start
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-green-500 hidden md:block"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                  {step.number}
                </div>
                <div className="flex-1 bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    {step.title}
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
