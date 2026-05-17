import numpy as np
import random

class StreakPredictor:
    """
    Predicts the probability of a user breaking their streak.
    In production, this could be a Logistic Regression or an LSTM model 
    trained on historical engagement data.
    """
    def predict_churn_risk(self, user_engagement_history):
        # Simulating a model that looks at engagement decay
        # user_engagement_history: list of daily minutes spent (last 7 days)
        
        avg_engagement = np.mean(user_engagement_history)
        trend = np.polyfit(range(len(user_engagement_history)), user_engagement_history, 1)[0]
        
        # Risk increases if average is low or trend is negative
        risk_score = 1.0 / (1.0 + np.exp(avg_engagement * 0.1 + trend * 0.5))
        
        return round(risk_score, 2)

if __name__ == "__main__":
    # Case 1: Active User
    active_user_history = [45, 50, 40, 60, 55, 70, 65]
    # Case 2: At-risk User (decreasing engagement)
    at_risk_user_history = [60, 50, 40, 30, 20, 10, 5]
    
    predictor = StreakPredictor()
    
    risk_active = predictor.predict_churn_risk(active_user_history)
    risk_at_risk = predictor.predict_churn_risk(at_risk_user_history)
    
    print(f"Active User Churn Risk: {risk_active}")
    print(f"At-Risk User Churn Risk: {risk_at_risk}")
    
    if risk_at_risk > 0.5:
        print("\n[Action]: Triggering a 'Smart Nudge' - 'Hey! We noticed you're falling behind. "
              "How about a 5-minute quick session today?'")
        
    print("\n[Interview Tip]: Explain that this is a Binary Classification problem. "
          "Features include: streak length, session duration, time of day, and frequency of app opens.")
