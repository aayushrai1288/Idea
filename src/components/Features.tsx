import { Link } from 'react-router-dom';
import Section from './Section';
import FeatureCard from './FeatureCard';
import { features } from '../lib/features';

export default function Features() {

  return (
    <Section id="features" background="gray" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          Everything You Need to Succeed
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          LearnLoop combines AI, psychology, and gamification to keep you motivated and consistent.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Link to={`/feature/${feature.slug}`} key={index}>
            <FeatureCard
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          </Link>
        ))}
      </div>
    </Section>
  );
}
