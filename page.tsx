import Image from 'next/image';
import Link from 'next/link';
import { Settings, Clock, Flame, ChevronRight, Zap } from 'lucide-react';
import BottomNav from '@/components/BottomNav';
import FeatureEntry from '@/components/FeatureEntry';
import DataWidget from '@/components/DataWidget';
import { courses, challenges, todayStats } from '@/lib/data';

export default function Home() {
  return (
    <div className="min-h-screen pb-20">
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm z-40 border-b border-gray-100 px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <Zap size={18} className="text-white" />
          </div>
          <span className="text-lg font-bold text-gray-800">ApexFit</span>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Settings size={22} className="text-gray-600" />
        </button>
      </header>

      <main className="px-4 py-4">
        <div className="relative rounded-2xl overflow-hidden mb-4">
          {challenges.map((challenge) => (
            <div key={challenge.id}>
              <Image
                src={challenge.image}
                alt={challenge.title}
                width={600}
                height={200}
                className="w-full h-32 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute top-3 left-3">
                <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                  {challenge.tag}
                </span>
              </div>
              <div className="absolute bottom-3 left-3 text-white">
                <h2 className="text-xl font-bold mb-1">{challenge.title}</h2>
                <p className="text-sm text-white/80">{challenge.description}</p>
              </div>
            </div>
          ))}
        </div>

        <FeatureEntry />

        <DataWidget stats={todayStats} />

        <section className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-bold text-gray-800">为你推荐</h3>
              <p className="text-xs text-gray-500">基于你的运动偏好智能匹配</p>
            </div>
            <Link href="/courses" className="text-secondary text-sm font-medium">
              全部课程 →
            </Link>
          </div>
          <div className="space-y-4">
            {courses.slice(0, 2).map((course) => (
              <div key={course.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="relative">
                  <Image
                    src={course.coverImage}
                    alt={course.title}
                    width={600}
                    height={200}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-black/60 text-white text-xs px-2 py-1 rounded">
                      {course.difficulty === 'beginner' ? '初级' : course.difficulty === 'intermediate' ? '中级' : '进阶'}
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <h4 className="font-bold text-gray-800 mb-2">{course.title}</h4>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {course.duration} min
                      </span>
                      <span className="flex items-center gap-1">
                        <Flame size={14} />
                        {course.calories} kcal
                      </span>
                    </div>
                    <ChevronRight size={20} className="text-gray-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <Zap size={20} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold">设定本周运动目标</h4>
                <p className="text-xs text-white/70">科学增肌，离理想身材更近一步</p>
              </div>
            </div>
            <Link
              href="/goals"
              className="bg-white text-gray-900 text-sm px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              去设置
            </Link>
          </div>
        </section>
      </main>

      <BottomNav currentPage="home" />
    </div>
  );
}
