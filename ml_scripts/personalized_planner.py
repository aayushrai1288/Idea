import random
import json

class LearningPlanGenerator:
    """
    Simulates an AI-based Personalized Planner.
    In a real scenario, this would use a Transformer-based model (like GPT-4) 
    or a Recommender System to tailor content.
    """
    def __init__(self, user_profile):
        self.user_profile = user_profile
        self.subjects = ["Mathematics", "Physics", "Computer Science", "Biology", "Literature"]
        
    def generate_plan(self):
        goal = self.user_profile.get("goal", "General Learning")
        pace = self.user_profile.get("pace", "Moderate")
        hours_per_day = self.user_profile.get("hours_per_day", 2)
        
        plan = {
            "user_goal": goal,
            "daily_schedule": [],
            "recommendations": []
        }
        
        # Simulating AI logic for schedule generation
        for day in range(1, 8):
            day_plan = {
                "day": day,
                "tasks": [
                    {
                        "topic": f"{goal} - Module {day}",
                        "duration": f"{hours_per_day} hours",
                        "difficulty": "Adapted to progress"
                    }
                ],
                "break_activity": random.choice(["Guided Breathing", "Quick Stretch", "Walk"])
            }
            plan["daily_schedule"].append(day_plan)
            
        # Simulating content recommendation
        plan["recommendations"] = random.sample(self.subjects, 2)
        
        return plan

if __name__ == "__main__":
    # Example User Profile
    mock_user = {
        "name": "Alex",
        "goal": "Data Science",
        "pace": "Fast",
        "hours_per_day": 3,
        "current_level": "Beginner"
    }
    
    generator = LearningPlanGenerator(mock_user)
    plan = generator.generate_plan()
    
    print("--- AI-Generated Personalized Learning Plan ---")
    print(json.dumps(plan, indent=4))
    print("\n[Interview Tip]: Mention that this uses a feedback loop where user performance "
          "data updates the 'current_level', which in turn modifies the plan complexity.")
