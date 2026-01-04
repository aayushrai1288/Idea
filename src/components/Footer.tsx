import { GraduationCap, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">LearnLoop</h3>
                <p className="text-sm text-gray-400">Learn Consistently. Grow Confidently.</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your AI-powered learning companion that helps you finish what you start without burning out.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Features</li>
              <li>How It Works</li>
              <li>Pricing (Coming Soon)</li>
              <li>Integrations</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>About Us</li>
              <li>Blog (Coming Soon)</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for learners everywhere
          </p>
          <p className="text-gray-500 text-xs mt-2">2026 LearnLoop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
