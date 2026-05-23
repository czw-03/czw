export interface Course {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  duration: number;
  calories: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  targetArea: string;
  price: number;
  originalPrice: number;
  participants: number;
  isHot?: boolean;
  exercises: Exercise[];
}

export interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: number;
  image: string;
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  level: number;
  levelTitle: string;
  points: number;
  totalWorkouts: number;
  totalCalories: number;
  streakDays: number;
}

export interface Goal {
  type: 'lose-fat' | 'gain-muscle' | 'shape';
  dailyCalories: number;
  workoutDuration: number;
  weeklyFrequency: number;
}

export interface TodayStats {
  duration: number;
  calories: number;
  completionRate: number;
}
