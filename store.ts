import { create } from 'zustand';
import { Goal } from '@/types';

interface AppState {
  currentGoal: Goal;
  setGoal: (goal: Goal) => void;
  selectedDifficulty: string;
  setSelectedDifficulty: (difficulty: string) => void;
  selectedArea: string;
  setSelectedArea: (area: string) => void;
}

export const useStore = create<AppState>((set) => ({
  currentGoal: {
    type: 'lose-fat',
    dailyCalories: 2400,
    workoutDuration: 45,
    weeklyFrequency: 4,
  },
  setGoal: (goal) => set({ currentGoal: goal }),
  selectedDifficulty: '全部',
  setSelectedDifficulty: (difficulty) => set({ selectedDifficulty: difficulty }),
  selectedArea: '全部',
  setSelectedArea: (area) => set({ selectedArea: area }),
}));
