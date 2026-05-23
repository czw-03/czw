import Image from 'next/image';
import Link from 'next/link';
import { Play, Clock, Target, Users, ChevronRight, Check, Dumbbell } from 'lucide-react';
import Header from '@/components/Header';
import { courses } from '@/lib/data';

interface CourseDetailProps {
  params: { id: string };
}

const difficultyLabels: Record<string, string> = {
  beginner: '初级',
  intermediate: '中级',
  advanced: '进阶',
};

export default function CourseDetail({ params }: CourseDetailProps) {
  const course = courses.find((c) => c.id === params.id);
  
  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">课程不存在</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-24">
      <Header showSearch title="课程详情" showBack showHeart showShare />
      
      <div className="relative">
        <Image
          src={course.coverImage}
          alt={course.title}
          width={600}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium">
            热门推荐
          </span>
          <h1 className="text-xl font-bold text-white mt-2">{course.title}</h1>
        </div>
      </div>

      <div className="px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs text-gray-500">限时特惠</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-secondary">¥{course.price}</span>
              <span className="text-sm text-gray-400 line-through">¥{course.originalPrice}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white" />
                <div className="w-6 h-6 rounded-full bg-gray-400 border-2 border-white" />
                <div className="w-6 h-6 rounded-full bg-gray-500 border-2 border-white" />
              </div>
              <span className="text-xs text-gray-500">.2k</span>
            </div>
            <p className="text-xs text-gray-400">1,240 人已参与训练</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <div className="w-10 h-10 mx-auto rounded-full bg-secondary/20 flex items-center justify-center mb-2">
              <Play size={20} className="text-secondary" />
            </div>
            <p className="text-xs text-gray-500 mb-1">难度</p>
            <p className="font-bold text-gray-800">{difficultyLabels[course.difficulty]}</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <div className="w-10 h-10 mx-auto rounded-full bg-orange-100 flex items-center justify-center mb-2">
              <Clock size={20} className="text-orange-500" />
            </div>
            <p className="text-xs text-gray-500 mb-1">时长</p>
            <p className="font-bold text-gray-800">{course.duration}分钟</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <div className="w-10 h-10 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-2">
              <Target size={20} className="text-green-500" />
            </div>
            <p className="text-xs text-gray-500 mb-1">部位</p>
            <p className="font-bold text-gray-800">{course.targetArea}</p>
          </div>
        </div>

        <section className="mb-6">
          <h2 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
            课程介绍
            <Users size={18} className="text-gray-400" />
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">{course.description}</p>
        </section>

        <section className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-gray-800">包含动作</h2>
            <span className="text-secondary text-sm font-medium">共 {course.exercises.length} 个动作</span>
          </div>
          <div className="space-y-3">
            {course.exercises.map((exercise, index) => (
              <div key={exercise.id} className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm">
                <div className="relative">
                  <Image
                    src={exercise.image}
                    alt={exercise.name}
                    width={100}
                    height={80}
                    className="w-20 h-16 rounded-lg object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center">
                      <Play size={16} className="text-secondary" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-orange-100 text-orange-600 text-xs flex items-center justify-center font-medium">
                      {index + 1}
                    </span>
                    <span className="font-medium text-gray-800">{exercise.name}</span>
                  </div>
                  <p className="text-xs text-gray-500">
                    {exercise.reps} 次 × {exercise.sets} 组
                  </p>
                </div>
                <ChevronRight size={20} className="text-gray-400" />
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-secondary/10 to-green-100 rounded-xl p-4 mb-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
              <Dumbbell size={20} className="text-secondary" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-1">训练准备</h3>
              <p className="text-sm text-gray-600">
                建议准备可调试哑铃、卧推凳及充足的饮用水。开始前请确保进行 5-10 分钟热身。
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-3 flex gap-3">
        <button className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
          <Play size={20} className="text-gray-600" />
        </button>
        <button className="flex-1 bg-secondary hover:bg-secondary/90 text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors">
          <Check size={20} />
          开始训练
        </button>
      </div>
    </div>
  );
}
