import { BarChart3, TrendingUp, Target, Award, Calendar, Flame } from 'lucide-react';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';

export default function Stats() {
  const weeklyData = [
    { day: '周一', value: 45 },
    { day: '周二', value: 30 },
    { day: '周三', value: 60 },
    { day: '周四', value: 40 },
    { day: '周五', value: 55 },
    { day: '周六', value: 70 },
    { day: '周日', value: 35 },
  ];

  const achievements = [
    { icon: Flame, label: '连续7天', value: '🔥 坚持奖' },
    { icon: Target, label: '完成率', value: '⭐ 达成奖' },
    { icon: Award, label: '总训练', value: '🏆 里程奖' },
  ];

  return (
    <div className="min-h-screen pb-20">
      <Header title="数据统计" showBack />
      
      <main className="px-4 py-4">
        <div className="bg-gradient-to-br from-secondary to-green-400 rounded-2xl p-4 text-white mb-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <TrendingUp size={24} />
            </div>
            <div>
              <p className="text-white/80 text-sm">本周总运动时长</p>
              <p className="text-3xl font-bold">375 <span className="text-lg">分钟</span></p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold">2,800</p>
              <p className="text-xs text-white/70">消耗(大卡)</p>
            </div>
            <div>
              <p className="text-2xl font-bold">6</p>
              <p className="text-xs text-white/70">训练次数</p>
            </div>
            <div>
              <p className="text-2xl font-bold">85%</p>
              <p className="text-xs text-white/70">完成率</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-800 flex items-center gap-2">
              <Calendar size={18} className="text-gray-400" />
              本周训练时长
            </h3>
            <span className="text-secondary text-sm font-medium">查看趋势 →</span>
          </div>
          <div className="flex items-end justify-between h-32 gap-2">
            {weeklyData.map((item) => (
              <div key={item.day} className="flex-1 flex flex-col items-center">
                <div className="w-full flex flex-col items-center">
                  <span className="text-xs text-gray-500 mb-1">{item.day}</span>
                  <div 
                    className="w-full bg-secondary/20 rounded-t-lg transition-all hover:bg-secondary/30"
                    style={{ height: `${(item.value / 70) * 100}%`, minHeight: '8px' }}
                  />
                  <span className="text-xs text-gray-400 mt-1">{item.value}min</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
          <h3 className="font-bold text-gray-800 flex items-center gap-2 mb-4">
            <BarChart3 size={18} className="text-gray-400" />
            月度统计
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">训练时长</span>
              <span className="font-bold text-gray-800">1,560 分钟</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div className="bg-secondary h-2 rounded-full" style={{ width: '75%' }} />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">消耗热量</span>
              <span className="font-bold text-gray-800">12,480 大卡</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div className="bg-orange-500 h-2 rounded-full" style={{ width: '68%' }} />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">完成课程</span>
              <span className="font-bold text-gray-800">24 节</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '88%' }} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="font-bold text-gray-800 flex items-center gap-2 mb-4">
            <Award size={18} className="text-gray-400" />
            成就徽章
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {achievements.map((item, index) => {
              const Icon = item.icon;
              const isUnlocked = index < 2;
              return (
                <div 
                  key={item.label}
                  className={`flex flex-col items-center p-3 rounded-xl ${
                    isUnlocked ? 'bg-gray-50' : 'bg-gray-100'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                    isUnlocked ? 'bg-secondary/20' : 'bg-gray-200'
                  }`}>
                    <Icon size={24} className={isUnlocked ? 'text-secondary' : 'text-gray-400'} />
                  </div>
                  <p className={`text-sm font-medium ${isUnlocked ? 'text-gray-800' : 'text-gray-400'}`}>
                    {isUnlocked ? item.value : '未解锁'}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <BottomNav currentPage="stats" />
    </div>
  );
}
