'use client';
import { useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import CourseCard from '@/components/CourseCard';
import { courses } from '@/lib/data';

const difficulties = ['全部', '初级', '中级', '高级'];
const areas = ['全部', '全身', '胸部', '背部', '腿部', '腹部'];

export default function Courses() {
  const [selectedDifficulty, setSelectedDifficulty] = useState('全部');
  const [selectedArea, setSelectedArea] = useState('全部');

  const filteredCourses = courses.filter((course) => {
    const difficultyMatch = selectedDifficulty === '全部' || 
      (selectedDifficulty === '初级' && course.difficulty === 'beginner') ||
      (selectedDifficulty === '中级' && course.difficulty === 'intermediate') ||
      (selectedDifficulty === '高级' && course.difficulty === 'advanced');
    
    const areaMatch = selectedArea === '全部' || course.targetArea.includes(selectedArea);
    
    return difficultyMatch && areaMatch;
  });

  return (
    <div className="min-h-screen pb-20">
      <Header showSearch title="探索课程" showBack />
      
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <SlidersHorizontal size={16} className="text-gray-500" />
          <span className="text-sm text-gray-600">筛选</span>
        </div>
        <span className="text-xs text-gray-400">找到 {filteredCourses.length} 个相关课程</span>
      </div>

      <div className="px-4 py-3">
        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-2">按难度筛选</p>
          <div className="flex flex-wrap gap-2">
            {difficulties.map((diff) => (
              <button
                key={diff}
                onClick={() => setSelectedDifficulty(diff)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedDifficulty === diff
                    ? 'bg-secondary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <p className="text-xs text-gray-500 mb-2">按部位筛选</p>
          <div className="flex flex-wrap gap-2">
            {areas.map((area) => (
              <button
                key={area}
                onClick={() => setSelectedArea(area)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedArea === area
                    ? 'bg-secondary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {area}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4">
        <h2 className="font-bold text-gray-800 mb-4">推荐训练计划</h2>
        <div className="space-y-4">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>

      <BottomNav currentPage="courses" />
    </div>
  );
}
