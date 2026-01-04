import { useParams, Link } from 'react-router-dom';
import { features } from '../lib/features';
import { ArrowLeft } from 'lucide-react';

export default function FeaturePage() {
  const { featureName } = useParams();
  const feature = features.find(f => f.slug === featureName);

  if (!feature) {
    return (
      <div className="min-h-screen bg-gray-50 py-20 text-center">
        <h1 className="text-4xl font-bold">Feature not found</h1>
        <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">
          Go back home
        </Link>
      </div>
    );
  }

  const Icon = feature.icon;

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
            <Icon className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {feature.title}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            {feature.description}
          </p>
          <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-md inline-block">
            <p className="font-bold">Just a model solution to our idea.</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About this feature</h2>
          <p className="text-gray-600 leading-relaxed">
            This page provides a glimpse into the "{feature.title}" feature. In a real application, this page would contain detailed information, use cases, and perhaps a live demo of the feature. For now, it serves as a placeholder to demonstrate the navigation and structure of the application.
          </p>
        </div>

        <div className="mt-12 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
