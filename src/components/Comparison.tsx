import { Check, X } from 'lucide-react';
import Section from './Section';

export default function Comparison() {
  const features = [
    {
      feature: 'Focus on completion',
      learnloop: true,
      coursera: false,
      udemy: false,
      duolingo: false,
    },
    {
      feature: 'Habit building',
      learnloop: true,
      coursera: false,
      udemy: false,
      duolingo: true,
    },
    {
      feature: 'Stress-aware breaks',
      learnloop: true,
      coursera: false,
      udemy: false,
      duolingo: false,
    },
    {
      feature: 'AI personalized planning',
      learnloop: true,
      coursera: false,
      udemy: false,
      duolingo: false,
    },
    {
      feature: 'Learning games',
      learnloop: true,
      coursera: false,
      udemy: false,
      duolingo: true,
    },
    {
      feature: 'Peer accountability',
      learnloop: true,
      coursera: false,
      udemy: false,
      duolingo: false,
    },
    {
      feature: 'Mental well-being focus',
      learnloop: true,
      coursera: false,
      udemy: false,
      duolingo: false,
    },
    {
      feature: 'Works with any platform',
      learnloop: true,
      coursera: false,
      udemy: false,
      duolingo: false,
    },
  ];

  return (
    <Section background="blue" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          Why LearnLoop Is Different
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          We're not a content platform. We're your companion to finish any course, anywhere.
        </p>
      </div>

      <div className="max-w-5xl mx-auto overflow-x-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left p-6 font-bold text-gray-900 text-lg">Feature</th>
                <th className="text-center p-6 font-bold text-blue-600 text-lg bg-blue-50">LearnLoop</th>
                <th className="text-center p-6 font-semibold text-gray-600">Coursera</th>
                <th className="text-center p-6 font-semibold text-gray-600">Udemy</th>
                <th className="text-center p-6 font-semibold text-gray-600">Duolingo</th>
              </tr>
            </thead>
            <tbody>
              {features.map((item, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="p-6 text-gray-800 font-medium">{item.feature}</td>
                  <td className="p-6 text-center bg-blue-50">
                    {item.learnloop ? (
                      <Check className="w-6 h-6 text-green-600 mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-red-400 mx-auto" />
                    )}
                  </td>
                  <td className="p-6 text-center">
                    {item.coursera ? (
                      <Check className="w-6 h-6 text-green-600 mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-gray-300 mx-auto" />
                    )}
                  </td>
                  <td className="p-6 text-center">
                    {item.udemy ? (
                      <Check className="w-6 h-6 text-green-600 mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-gray-300 mx-auto" />
                    )}
                  </td>
                  <td className="p-6 text-center">
                    {item.duolingo ? (
                      <Check className="w-6 h-6 text-green-600 mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-gray-300 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-2xl font-semibold text-gray-800">
          We complement, not compete. LearnLoop makes <span className="text-blue-600">any platform</span> better.
        </p>
      </div>
    </Section>
  );
}
