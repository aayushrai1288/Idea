import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FeaturePage from './pages/FeaturePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/feature/:featureName" element={<FeaturePage />} />
    </Routes>
  );
}

export default App;