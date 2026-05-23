'use client';
import { useState } from 'react';
import { Flame, Zap, TrendingUp, Clock, Apple, ChevronRight, Check, Calendar } from 'lucide-react';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import { useStore } from '@/lib/store';

const iconMap: Record<string, typeof Flame> = {
  Flame,
  Zap,
  TrendingUp,
};

export default function Goals() {
  const { currentGoal, setGoal } = useStore();
  const [selectedGoal, setSelectedGoal] = useState(currentGoal.type);
  const [scheduleType, setScheduleType] = useState<'daily' | 'weekly'>('daily');
  const [calories, setCalories] = useState(currentGoal.dailyCalories);
  const [duration, setDuration] = useState(currentGoal.workoutDuration);
  const [frequency, setFrequency] = useState(currentGoal.weeklyFrequency);

  const goalOptions = [
    { id: 'lose-fat', title: '科学减脂', description: '高效燃烧卡路里，塑造紧致线条', icon: 'Flame', recommended: true },
    { id: 'gain-muscle', title: '增肌强身', description: '强化肌肉维度，提升核心爆发力', icon: 'Zap', recommended: false },
    { id: 'shape', title: '综合塑形', description: '平衡耐力与柔韧性，保持理想体态', icon: 'TrendingUp', recommended: false },
  ];

  const handleSave = () => {
    setGoal({
      type: selectedGoal as 'lose-fat' | 'gain-muscle' | 'shape',
      dailyCalories: calories,
      workoutDuration: duration,
      weeklyFrequency: frequency,
    });
  };

  return (
    <div className="min-h-screen pb-20">
      <Header showSearch title="设定您的目标" showBack showMenu />
      
      <main className="px-4 py-4">
        <section className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-gray-800">核心目标</h2>
            {goalOptions.find((g) => g.id === selectedGoal && g.recommended) && (
              <span className="text-secondary text-xs font-medium">推荐</span>
            )}
          </div>
          <div className="space-y-3">
            {goalOptions.map((option) => {
              const Icon = iconMap[option.icon];
              const isSelected = selectedGoal === option.id;
              return (
                <button
                  key={option.id}
                  onClick={() => setSelectedGoal(option.id as 'lose-fat' | 'gain-muscle' | 'shape')}
                  className={`w-full p-4 rounded-xl flex items-center gap-4 transition-all ${
                    isSelected
                      ? 'bg-secondary/10 border-2 border-secondary'
                      : 'bg-white border-2 border-transparent shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    isSelected ? 'bg-secondary' : 'bg-gray-100'
                  }`}>
                    <Icon size={24} className={isSelected ? 'text-white' : 'text-gray-500'} />
                  </div>
                  <div className="flex-1 text-left">
                    <p className={`font-bold ${isSelected ? 'text-secondary' : 'text-gray-800'}`}>
                      {option.title}
                    </p>
                    <p className="text-sm text-gray-500">{option.description}</p>
                  </div>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    isSelected ? 'bg-secondary' : 'bg-gray-200'
                  }`}>
                    {isSelected && <Check size={14} className="text-white" />}
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        <section className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Calendar size={18} className="text-gray-400" />
            <h2 className="font-bold text-gray-800">计划周期</h2>
          </div>
          <div className="flex bg-gray-100 rounded-xl p-1">
            <button
              onClick={() => setScheduleType('daily')}
              className={`flex-1 py-3 rounded-lg font-medium transition-colors ${
                scheduleType === 'daily'
                  ? 'bg-white text-gray-800 shadow-sm'
                  : 'text-gray-500'
              }`}
            >
              每日计划
            </button>
            <button
              onClick={() => setScheduleType('weekly')}
              className={`flex-1 py-3 rounded-lg font-medium transition-colors ${
                scheduleType === 'weekly'
                  ? 'bg-white text-gray-800 shadow-sm'
                  : 'text-gray-500'
              }`}
            >
              每周计划
            </button>
          </div>
        </section>

        <section className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Flame size={18} className="text-gray-400" />
            <h2 className="font-bold text-gray-800">详细配置</h2>
          </div>
          
          <div className="bg-white rounded-xl p-4 mb-3 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Apple size={20} className="text-green-500" />
                </div>
                <div>
                  <p className="text-gray-600">每日卡路里目标</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-2xl font-bold text-secondary">{calories.toLocaleString()}</span>
                <span className="text-gray-500">kcal</span>
                <ChevronRight size={20} className="text-gray-400" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 mb-3 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <Clock size={20} className="text-orange-500" />
                </div>
                <div>
                  <p className="text-gray-600">单次训练时长</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-2xl font-bold text-secondary">{duration}</span>
                <span className="text-gray-500">min</span>
              </div>
            </div>
            <div className="relative">
              <input
                type="range"
                min="15"
                max="120"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #00D9FF 0%, #00D9FF ${((duration - 15) / 105) * 100}%, #E5E7EB ${((duration - 15) / 105) * 100}%, #E5E7EB 100%)`,
                }}
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>15min</span>
                <span>120min</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Calendar size={20} className="text-secondary" />
                </div>
                <div>
                  <p className="text-gray-600">每周训练频率</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-2xl font-bold text-secondary">{frequency}</span>
                <span className="text-gray-500">天</span>
                <ChevronRight size={20} className="text-gray-400" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-4">
        <button
          onClick={handleSave}
          className="w-full bg-secondary hover:bg-secondary/90 text-white py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors"
        >
          <Check size={20} />
          保存并开启计划
        </button>
        <p className="text-center text-xs text-gray-400 mt-2">
          设置目标后，AI 教练将为您动态调整每日推荐课程。
        </p>
      </div>

      <BottomNav currentPage="profile" />
    </div>
  );
}
