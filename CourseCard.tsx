import Image from 'next/image';
import Link from 'next/link';
import { Clock, Flame, Users } from 'lucide-react';
import { Course } from '@/types';

interface CourseCardProps {
  course: Course;
}

const difficultyLabels: Record<string, string> = {
  beginner: '初级',
  intermediate: '中级',
  advanced: '进阶',
};

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm mb-4">
      <div className="relative">
        <Image
          src={course.coverImage}
          alt={course.title}
          width={600}
          height={300}
          className="w-full h-48 object-cover"
        />
        {course.isHot && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-medium">
            HOT热门
          </div>
        )}
        <div className="absolute bottom-3 left-3 flex gap-2">
          <span className="bg-black/60 text-white text-xs px-2 py-1 rounded">
            {course.category}
          </span>
          <span className="bg-black/60 text-white text-xs px-2 py-1 rounded">
            {difficultyLabels[course.difficulty]}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{course.title}</h3>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {course.duration}分钟
            </span>
            <span className="flex items-center gap-1">
              <Flame size={14} />
              {course.calories} kcal
            </span>
          </div>
          <span className="flex items-center gap-1">
            <Users size={14} />
            {course.participants >= 1000
              ? `${(course.participants / 1000).toFixed(1)}k+`
              : course.participants}
          </span>
        </div>
        <Link
          href={`/courses/${course.id}`}
          className="block w-full bg-secondary hover:bg-secondary/90 text-white py-3 rounded-lg font-medium text-center transition-colors"
        >
          {course.price > 0 ? `立即加入 ¥${course.price}` : '立即加入'}
          <span className="inline-block ml-1">→</span>
        </Link>
      </div>
    </div>
  );
}
