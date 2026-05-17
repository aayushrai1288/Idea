import random

class UserSentimentAI:
    """
    Analyzes user feedback or check-in notes to determine emotional state.
    Uses basic keyword matching to simulate a Sentiment Analysis model 
    (like BERT or VADER).
    """
    def __init__(self):
        self.keywords = {
            "stressed": ["tired", "exhausted", "hard", "difficult", "anxious", "overwhelmed"],
            "positive": ["happy", "great", "easy", "fun", "excited", "productive"],
            "neutral": ["okay", "done", "finished", "good"]
        }
        
    def analyze_sentiment(self, text):
        text = text.lower()
        
        # Simulating sentiment classification
        for sentiment, words in self.keywords.items():
            if any(word in text for word in words):
                return sentiment
        return "neutral"

    def get_break_recommendation(self, sentiment):
        if sentiment == "stressed":
            return "Recommendation: 5-minute Deep Breathing Exercise & Guided Meditation."
        elif sentiment == "positive":
            return "Recommendation: High-energy 'Power Pose' or a quick celebratory dance!"
        else:
            return "Recommendation: Standard 2-minute stretch."

if __name__ == "__main__":
    feedbacks = [
        "I'm feeling really overwhelmed with the new project.",
        "Today was a great day, I finished all my tasks!",
        "Just finished my daily math module."
    ]
    
    ai = UserSentimentAI()
    
    for feedback in feedbacks:
        sentiment = ai.analyze_sentiment(feedback)
        rec = ai.get_break_recommendation(sentiment)
        print(f"User Feedback: '{feedback}'")
        print(f"Detected Sentiment: {sentiment.upper()}")
        print(f"{rec}\n")

    print("[Interview Tip]: Explain that this feature uses NLP (Natural Language Processing). "
          "In a real-world app, you'd use a fine-tuned DistilBERT model to handle nuances like sarcasm or complex phrasing.")
