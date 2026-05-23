import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Heart, Settings, FileText, Target, User, Flame, Clock, Calendar } from 'lucide-react';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import { currentUser } from '@/lib/data';

export default function Profile() {
  const menuItems = [
    { icon: FileText, label: '训练记录', desc: '回顾你的每一次汗水', href: '/' },
    { icon: FileText, label: '数据报告', desc: '周度/月度运动表现深度分析', href: '/stats' },
    { icon: Target, label: '目标设置', desc: '重新定义你的健身目标', href: '/goals' },
    { icon: Heart, label: '我的收藏', desc: '心仪的课程都在这里', href: '/' },
    { icon: Settings, label: '系统设置', desc: '账号、隐私与通知管理', href: '/' },
  ];

  return (
    <div className="min-h-screen pb-20">
      <Header showSearch title="个人中心" />
      
      <main className="px-4 py-4">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <Image
              src={currentUser.avatar}
              alt={currentUser.name}
              width={100}
              height={100}
              className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-lg"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-green-500 border-2 border-white flex items-center justify-center">
              <User size={12} className="text-white" />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-gray-800">{currentUser.name}</h2>
              <span className="bg-secondary/20 text-secondary text-xs px-2 py-0.5 rounded-full font-medium">
                Lv.{currentUser.level} {currentUser.levelTitle}
              </span>
            </div>
            <p className="text-sm text-gray-500">ID: {currentUser.id}</p>
            <p className="flex items-center gap-1 text-secondary text-sm">
              <Heart size={14} className="text-red-400" fill="currentColor" />
              {currentUser.points.toLocaleString()} 积分
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-4 mb-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-800">{currentUser.totalWorkouts}</p>
            <p className="text-xs text-gray-500">累计训练</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-800">{(currentUser.totalCalories / 1000).toFixed(1)}k</p>
            <p className="text-xs text-gray-500">消耗千卡</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-800">{currentUser.streakDays}</p>
            <p className="text-xs text-gray-500">连续天数</p>
          </div>
        </div>

        <div className="bg-gray-900 rounded-xl p-4 mb-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">👑</span>
                <span className="font-bold text-lg">PRO 会员</span>
              </div>
              <p className="text-sm text-white/70">解锁 200+ 高级训练课程与专业指导</p>
            </div>
            <button className="bg-secondary hover:bg-secondary/90 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
              立即续费
            </button>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
            <Flame size={18} className="text-gray-400" />
            我的健身
          </h3>
          <div className="space-y-2">
            {menuItems.slice(0, 3).map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Icon size={20} className="text-secondary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{item.label}</p>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                  <ChevronRight size={20} className="text-gray-400" />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
            <Settings size={18} className="text-gray-400" />
            其他服务
          </h3>
          <div className="space-y-2">
            {menuItems.slice(3).map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <Icon size={20} className="text-gray-500" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{item.label}</p>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                  <ChevronRight size={20} className="text-gray-400" />
                </Link>
              );
            })}
          </div>
        </div>

        <button className="w-full bg-white border-2 border-red-200 text-red-500 py-3 rounded-xl font-medium hover:bg-red-50 transition-colors">
          退出当前账号
        </button>
      </main>

      <BottomNav currentPage="profile" />
    </div>
  );
}
