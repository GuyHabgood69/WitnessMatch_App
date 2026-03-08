import { LayoutGrid, Briefcase, Globe, CreditCard } from 'lucide-react';
import Image from 'next/image';

export function Sidebar() {
  return (
    <aside className="w-[260px] bg-black/10 flex flex-col z-20 flex-shrink-0 relative border-r border-white/5">
      <div className="p-6 flex items-center gap-3">
        <Image src="https://cdn.prod.website-files.com/6914457c21927073ca78e9ac/6914714810e2e5e3e52e72a6_WitnessMatch.svg" alt="WitnessMatch Logo" width={163} height={38} className="w-auto h-auto" />
      </div>

      <nav className="flex-1 px-4 py-2 flex flex-col gap-1.5">
        <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors font-medium text-sm">
          <LayoutGrid className="w-[18px] h-[18px]" />
          Overview
        </a>
        <a href="#" className="flex items-center justify-between px-3 py-2.5 rounded-lg text-white bg-white/10 font-semibold text-sm transition-colors">
          <div className="flex items-center gap-3">
            <Briefcase className="w-[18px] h-[18px]" />
            Cases
          </div>
          <div className="w-2 h-2 rounded-full bg-neon shadow-[0_0_8px_rgba(216,255,95,0.6)]"></div>
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors font-medium text-sm">
          <Globe className="w-[18px] h-[18px]" />
          Network
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors font-medium text-sm">
          <CreditCard className="w-[18px] h-[18px]" />
          Wallet
        </a>
      </nav>

      <div className="p-4 border-t border-white/10 bg-transparent">
        <div className="text-[10px] font-bold text-white/50 uppercase tracking-wider mb-3 px-1">Clinical Expert</div>
        <div className="flex items-center gap-3 px-1">
          <div className="w-10 h-10 rounded-full bg-white/10 border-2 border-white/20 shadow-sm overflow-hidden flex-shrink-0 relative">
            <Image src="https://picsum.photos/seed/doctor/100/100" alt="Dr. Markus" fill className="object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-white leading-none">Dr. Markus T.</span>
            <span className="text-xs text-white/50 mt-1">ID: EX-4490</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
