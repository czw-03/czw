import Link from 'next/link';
import { ArrowLeft, Heart, Share2, Search, MoreVertical, Menu } from 'lucide-react';
interface HeaderProps {
 title?: string;
 showBack?: boolean;
 showSearch?: boolean;
 showHeart?: boolean;
 showShare?: boolean;
 showMenu?: boolean;
}
export default function Header({ title, showBack = false, showSearch = false, showHeart = false, showShare = false, showMenu = false, }: HeaderProps) {
 return (<header className="sticky top-0 bg-white/95 backdrop-blur-sm z-40 border-b border-gray-100">
 <div className="flex items-center justify-between px-4 h-14">
 <div className="flex items-center gap-3">
 {showBack && (<Link href="/" className="p-1 hover:bg-gray-100 rounded-full transition-colors">
 <ArrowLeft size={22} className="text-gray-600"/>
 </Link>)}
 {showSearch && (<div className="flex-1 max-w-xs">
 <div className="relative">
 <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
 <input type="text" placeholder={title} className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50"/>
 </div>
 </div>)}
 {!showSearch && title && (<h1 className="text-lg font-bold text-gray-800">{title}</h1>)}
 </div>
 <div className="flex items-center gap-2">
 {showHeart && (<button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
 <Heart size={22} className="text-gray-600"/>
 </button>)}
 {showShare && (<button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
 <Share2 size={22} className="text-gray-600"/>
 </button>)}
 {showMenu && (<button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
 <MoreVertical size={22} className="text-gray-600"/>
 </button>)}
 </div>
 </div>
 </header>);
}

