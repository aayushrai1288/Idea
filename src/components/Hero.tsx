import { ArrowRight, Sparkles } from 'lucide-react';
import Button from './Button';

interface HeroProps {
  onGetStarted: () => void;
  onJoinWaitlist: () => void;
}

export default function Hero({ onGetStarted, onJoinWaitlist }: HeroProps) {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative">
        <div className="text-center">
          <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 text-sm font-medium">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Learning Companion
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Finish what you start.
            <br />
            <span className="text-blue-600">Learn without burnout.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            LearnLoop is your personalized learning companion that builds habits, reduces stress, and keeps you motivated to complete every course you start.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" size="lg" onClick={onGetStarted}>
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" onClick={onJoinWaitlist}>
              Join the Waitlist
            </Button>
          </div>

          <div className="mt-16 relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto border border-gray-200">
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-700">Plan</p>
                </div>

                <div className="hidden md:block text-gray-300">→</div>

                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold text-green-600">2</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-700">Learn</p>
                </div>

                <div className="hidden md:block text-gray-300">→</div>

                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold text-teal-600">3</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-700">Break</p>
                </div>

                <div className="hidden md:block text-gray-300">→</div>

                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold text-cyan-600">4</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-700">Play</p>
                </div>

                <div className="hidden md:block text-gray-300">→</div>

                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold text-blue-600">5</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-700">Progress</p>
                </div>
              </div>
              <p className="text-center mt-6 text-gray-600 font-medium">Your personalized learning loop</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
