# 🚀 AI-Based Personalized Planner

An intelligent learning platform designed to help students and professionals achieve their goals through adaptive scheduling, behavioral nudges, and stress-aware productivity tools.

---

## 🌟 Key Features

- **🧠 AI-Personalized Learning Plans:** Dynamically generated schedules tailored to your goals, pace, and availability.
- **🔥 Habit & Streak Tracking:** Advanced prediction models to identify when you're at risk of breaking a streak and provide "Smart Nudges."
- **🌿 Stress-Aware Breaks:** Sentiment analysis of user check-ins to recommend the perfect break (meditation, stretches, or walks).
- **📊 Progress Dashboard:** Visual insights into consistency and milestones.
- **🎮 Learning Games:** Gamified reinforcement of concepts during breaks.
- **👥 Peer Accountability:** Study groups and challenges to keep you motivated.

---

## 🛠️ Tech Stack

### Frontend
- **React (TypeScript)**
- **Vite** (Fast Build Tool)
- **Tailwind CSS** (Styling)
- **Lucide React** (Iconography)
- **React Router** (Navigation)

### Backend & Infrastructure
- **Supabase** (Authentication, Database, and Real-time subscriptions)
- **Vercel** (Deployment)

### AI/ML Layer (Simulated/Experimental)
- **Python**
- **NumPy** (Data Processing)
- **NLP/Sentiment Analysis** concepts

---

## 🤖 Machine Learning Integration

This project includes a dedicated `ml_scripts/` directory that demonstrates the logic behind its "AI" features. These are designed for interview demonstrations and architectural planning.

- **`personalized_planner.py`**: Generative logic for adaptive learning paths.
- **`streak_predictor.py`**: Predictive model (Binary Classification) for user engagement.
- **`sentiment_analysis.py`**: NLP logic for detecting user emotional states.

> **Note:** For detailed implementation details and interview talking points, refer to [README_ML.md](./README_ML.md).

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn
- Python (for ML scripts)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd Idea
   ```

2. **Install Frontend Dependencies:**
   ```bash
   npm install
   ```

3. **Install ML Dependencies:**
   ```bash
   pip install numpy
   ```

4. **Environment Setup:**
   - Copy `.env.example` to `.env`
   - Add your Supabase credentials.

### Running the App

- **Development Server:**
  ```bash
  npm run dev
  ```

- **Run AI Simulations:**
  ```bash
  python ml_scripts/streak_predictor.py
  ```

---

## 🗺️ Roadmap
- [ ] Integration of real LLM APIs (OpenAI/Gemini) for dynamic content generation.
- [ ] Real-time Computer Vision for focus tracking.
- [ ] Mobile application using React Native.
- [ ] Gamification engine for peer challenges.

---

## 📄 License
This project is licensed under the MIT License.
