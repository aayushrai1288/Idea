import { AlertCircle, TrendingDown, Frown } from 'lucide-react';
import Section from './Section';

export default function Problem() {
  return (
    <Section background="white" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          The Learning Problem Nobody Talks About
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          You're motivated when you start. But somewhere along the way, it falls apart.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="bg-red-50 p-8 rounded-xl border-2 border-red-200">
          <div className="w-14 h-14 bg-red-200 rounded-full flex items-center justify-center mb-4 mx-auto">
            <TrendingDown className="w-7 h-7 text-red-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">85% Drop Out</h3>
          <p className="text-gray-700 text-center leading-relaxed">
            Most online learners never finish what they start. Life gets busy. Motivation fades. Courses pile up.
          </p>
        </div>

        <div className="bg-orange-50 p-8 rounded-xl border-2 border-orange-200">
          <div className="w-14 h-14 bg-orange-200 rounded-full flex items-center justify-center mb-4 mx-auto">
            <AlertCircle className="w-7 h-7 text-orange-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">No Accountability</h3>
          <p className="text-gray-700 text-center leading-relaxed">
            Learning alone is hard. There's no one to keep you on track, celebrate wins, or push you forward.
          </p>
        </div>

        <div className="bg-yellow-50 p-8 rounded-xl border-2 border-yellow-200">
          <div className="w-14 h-14 bg-yellow-200 rounded-full flex items-center justify-center mb-4 mx-auto">
            <Frown className="w-7 h-7 text-yellow-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Burnout & Stress</h3>
          <p className="text-gray-700 text-center leading-relaxed">
            Cramming for hours leads to exhaustion. You push too hard, burn out, and quit before the finish line.
          </p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-2xl md:text-3xl font-semibold text-gray-800 max-w-3xl mx-auto leading-relaxed">
          The problem isn't the content.
          <br />
          <span className="text-blue-600">It's staying consistent and avoiding burnout.</span>
        </p>
      </div>
    </Section>
  );
}
