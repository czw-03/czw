import { Course, User, TodayStats } from '@/types';

export const currentUser: User = {
  id: '88294012',
  name: '林小雅',
  avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200',
  level: 5,
  levelTitle: '达人',
  points: 1250,
  totalWorkouts: 42,
  totalCalories: 12800,
  streakDays: 15,
};

export const todayStats: TodayStats = {
  duration: 42,
  calories: 580,
  completionRate: 8.2,
};

export const courses: Course[] = [
  {
    id: '1',
    title: '全身燃脂 HIIT 挑战',
    description: '高强度间歇训练，快速燃烧卡路里，提升心肺功能',
    coverImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600',
    duration: 25,
    calories: 320,
    difficulty: 'intermediate',
    category: '减脂',
    targetArea: '全身',
    price: 0,
    originalPrice: 0,
    participants: 12400,
    isHot: true,
    exercises: [],
  },
  {
    id: '2',
    title: '深蹲与核心力量强化',
    description: '强化下肢与核心力量，提升运动表现',
    coverImage: 'https://images.unsplash.com/photo-1563089162725-22b4089291d2?w=600',
    duration: 40,
    calories: 450,
    difficulty: 'advanced',
    category: '增肌',
    targetArea: '全身',
    price: 0,
    originalPrice: 0,
    participants: 8900,
    exercises: [],
  },
  {
    id: '3',
    title: '晨间舒缓瑜伽流',
    description: '唤醒身体，舒缓压力，提升柔韧性',
    coverImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600',
    duration: 15,
    calories: 120,
    difficulty: 'beginner',
    category: '塑形',
    targetArea: '全身',
    price: 0,
    originalPrice: 0,
    participants: 5700,
    exercises: [],
  },
  {
    id: '4',
    title: '撕裂胸肌：进阶增肌计划',
    description: '本课程由专业健身教练团队设计，专注于胸部肌肉的围度增长与形态塑造。结合了大重量复合动作与孤立刺激，通过科学的容量管理，助你突破增肌瓶颈期。',
    coverImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600',
    duration: 45,
    calories: 400,
    difficulty: 'advanced',
    category: '增肌',
    targetArea: '胸部/三头',
    price: 199,
    originalPrice: 399,
    participants: 1240,
    isHot: true,
    exercises: [
      {
        id: 'e1',
        name: '哑铃平地卧推',
        sets: 4,
        reps: 12,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=150',
      },
      {
        id: 'e2',
        name: '上斜哑铃飞鸟',
        sets: 3,
        reps: 15,
        image: 'https://plus.unsplash.com/premium_photo-1661914075223-385639436566?w=150',
      },
      {
        id: 'e3',
        name: '杠铃窄距卧推',
        sets: 4,
        reps: 10,
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=150',
      },
      {
        id: 'e4',
        name: '绳索夹胸',
        sets: 3,
        reps: 20,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=150',
      },
    ],
  },
];

export const challenges = [
  {
    id: '1',
    title: '7天极速燃脂挑战',
    description: '专业教练带练，周消耗3500大卡',
    image: 'https://images.unsplash.com/photo-1534430480872-4165e4c733da?w=600',
    tag: '火热报名',
  },
];

export const goalOptions = [
  {
    id: 'lose-fat',
    title: '科学减脂',
    description: '高效燃烧卡路里，塑造紧致线条',
    icon: 'Flame',
    recommended: true,
  },
  {
    id: 'gain-muscle',
    title: '增肌强身',
    description: '强化肌肉维度，提升核心爆发力',
    icon: 'Zap',
    recommended: false,
  },
  {
    id: 'shape',
    title: '综合塑形',
    description: '平衡耐力与柔韧性，保持理想体态',
    icon: 'TrendingUp',
    recommended: false,
  },
];
