import { useEffect, useState } from 'react';
import { GraduationCap, ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { features } from '../lib/features';

interface HeaderProps {
  onJoinWaitlist: () => void;
}

export default function Header({ onJoinWaitlist }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-gray-900">LearnLoop</h1>
                <p className="text-xs text-gray-600 hidden md:block">Learn Consistently. Grow Confidently.</p>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-4">
            {features.slice(0, 3).map((feature) => (
              <Link
                key={feature.slug}
                to={`/feature/${feature.slug}`}
                className="font-semibold text-gray-600 hover:text-blue-600"
              >
                {feature.title}
              </Link>
            ))}
            <Link to="/#features" className="font-semibold text-gray-600 hover:text-blue-600">
              More
            </Link>
            <Button variant="primary" size="sm" onClick={onJoinWaitlist}>
              Join Waitlist
            </Button>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4">
          <div className="px-4 space-y-2">
            {features.map((feature) => (
              <Link
                key={feature.slug}
                to={`/feature/${feature.slug}`}
                className="block px-4 py-2 text-gray-800 hover:bg-blue-50 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {feature.title}
              </Link>
            ))}
            <div className="pt-4">
              <Button variant="primary" size="sm" onClick={onJoinWaitlist} className="w-full">
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
