import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'blue' | 'green';
  id?: string;
}

export default function Section({ children, className = '', background = 'white', id }: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    blue: 'bg-blue-50',
    green: 'bg-green-50',
  };

  return (
    <section id={id} className={`${backgrounds[background]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
