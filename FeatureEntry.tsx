import Link from 'next/link';
import { Dumbbell, BookOpen, CircleDot, Apple } from 'lucide-react';

export default function FeatureEntry() {
  const features = [
    { icon: Dumbbell, label: '训练', href: '/courses' },
    { icon: BookOpen, label: '课程', href: '/courses' },
    { icon: CircleDot, label: '器械', href: '/' },
    { icon: Apple, label: '饮食', href: '/' },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 py-4">
      {features.map((feature) => {
        const Icon = feature.icon;
        return (
          <Link
            key={feature.label}
            href={feature.href}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
              <Icon size={28} className="text-secondary" />
            </div>
            <span className="text-sm text-gray-600 font-medium">{feature.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
