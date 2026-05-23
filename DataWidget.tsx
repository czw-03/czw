import { Clock, Flame, Target } from 'lucide-react';
import { TodayStats } from '@/types';

interface DataWidgetProps {
  stats: TodayStats;
}

export default function DataWidget({ stats }: DataWidgetProps) {
  const dataItems = [
    { icon: Clock, value: stats.duration, unit: '分钟时长', color: 'text-secondary' },
    { icon: Flame, value: stats.calories, unit: '消耗(大卡)', color: 'text-orange-500' },
    { icon: Target, value: stats.completionRate, unit: '完成率(%)', color: 'text-green-500' },
  ];

  return (
    <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-2xl p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-gray-800">今日运动数据</h3>
        <button className="text-secondary text-sm font-medium">详情报告 →</button>
      </div>
      <div className="flex justify-around">
        {dataItems.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.unit} className="flex flex-col items-center gap-2">
              <div className={`w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm`}>
                <Icon size={24} className={item.color} />
              </div>
              <span className="text-2xl font-bold text-gray-800">{item.value}</span>
              <span className="text-xs text-gray-500">{item.unit}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
