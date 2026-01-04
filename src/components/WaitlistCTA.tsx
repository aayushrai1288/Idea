import { useState } from 'react';
import { Mail, Rocket, CheckCircle2, AlertCircle } from 'lucide-react';
import Section from './Section';
import Button from './Button';

export default function WaitlistCTA() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [userType, setUserType] = useState('student');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      setLoading(false);
      return;
    }

    // Simulate network request
    setTimeout(() => {
      setSuccess(true);
      setLoading(false);
      setEmail('');
      setName('');
      setUserType('student');
    }, 1000);
  };

  return (
    <Section background="gray" className="py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Rocket className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Build habits. Beat burnout.
            <br />
            <span className="text-blue-600">Finish your goals.</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Join thousands of learners who are taking control of their learning journey with LearnLoop.
          </p>
        </div>

        {success ? (
          <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-8 max-w-2xl mx-auto">
            <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">You're on the list!</h3>
            <p className="text-lg text-gray-700">
              We'll keep you updated on LearnLoop's launch. Get ready to transform your learning journey!
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-blue-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-left">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Name (optional)
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>

                <div className="text-left">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="text-left">
                <label htmlFor="userType" className="block text-sm font-semibold text-gray-700 mb-2">
                  I am a...
                </label>
                <select
                  id="userType"
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                >
                  <option value="student">College Student</option>
                  <option value="professional">Working Professional</option>
                  <option value="graduate">Fresh Graduate</option>
                  <option value="self-learner">Self-Learner</option>
                  <option value="educator">Educator</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {error && (
                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              )}

              <Button type="submit" variant="primary" size="lg" disabled={loading} className="w-full">
                {loading ? (
                  'Joining...'
                ) : (
                  <>
                    <Mail className="w-5 h-5 mr-2" />
                    Join the Waitlist
                  </>
                )}
              </Button>

              <p className="text-sm text-gray-500">
                By joining, you'll be the first to know when LearnLoop launches.
              </p>
            </form>
          </div>
        )}
      </div>
    </Section>
  );
}