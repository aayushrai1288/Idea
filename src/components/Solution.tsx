import { Heart, Target, Zap } from 'lucide-react';
import Section from './Section';

export default function Solution() {
  return (
    <Section background="blue" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          Meet LearnLoop: Your Learning Companion
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          We don't create courses. We help you finish them. LearnLoop focuses on behavior, not content.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
            <Target className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Habit-First Approach</h3>
          <p className="text-gray-600 text-center leading-relaxed">
            Build consistent learning habits with daily micro-goals, streaks, and smart reminders that keep you on track.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
            <Heart className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Stress-Aware Learning</h3>
          <p className="text-gray-600 text-center leading-relaxed">
            Take breaks when you need them. Breathing exercises, stretches, and walks keep your mind fresh and focused.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-6 mx-auto">
            <Zap className="w-8 h-8 text-cyan-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">AI-Powered Planning</h3>
          <p className="text-gray-600 text-center leading-relaxed">
            Get a personalized daily plan that adapts to your schedule, energy levels, and learning pace.
          </p>
        </div>
      </div>

      <div className="mt-16 bg-white p-10 rounded-2xl shadow-xl max-w-4xl mx-auto border-2 border-blue-200">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4">
          We Integrate With What You Already Use
        </h3>
        <p className="text-lg text-gray-600 text-center leading-relaxed mb-6">
          Connect LearnLoop with Coursera, Udemy, your college LMS, or any learning platform. We help you finish, not replace your content.
        </p>
        <div className="flex flex-wrap justify-center gap-6 items-center">
          <div className="bg-gray-100 px-6 py-3 rounded-lg font-semibold text-gray-700">Coursera</div>
          <div className="bg-gray-100 px-6 py-3 rounded-lg font-semibold text-gray-700">Udemy</div>
          <div className="bg-gray-100 px-6 py-3 rounded-lg font-semibold text-gray-700">College LMS</div>
          <div className="bg-gray-100 px-6 py-3 rounded-lg font-semibold text-gray-700">YouTube</div>
        </div>
      </div>
    </Section>
  );
}
