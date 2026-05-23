import Link from 'next/link';
import { Home, Search, BarChart3, User } from 'lucide-react';

interface BottomNavProps {
  currentPage: string;
}

export default function BottomNav({ currentPage }: BottomNavProps) {
  const navItems = [
    { id: 'home', label: '首页', icon: Home, href: '/' },
    { id: 'courses', label: '课程', icon: Search, href: '/courses' },
    { id: 'stats', label: '统计', icon: BarChart3, href: '/stats' },
    { id: 'profile', label: '我的', icon: User, href: '/profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50 md:hidden">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all ${
                isActive
                  ? 'text-secondary'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
