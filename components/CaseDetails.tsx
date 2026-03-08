import { Lock, FileText } from 'lucide-react';
import Image from 'next/image';

export function CaseDetails() {
  return (
    <div className="w-[280px] flex flex-col gap-4 overflow-y-auto pb-4 pr-1 flex-shrink-0">
      <div className="glass-panel p-5 rounded-2xl">
        <div className="flex justify-between items-start mb-4">
          <div className="text-[10px] font-bold text-white/60 uppercase tracking-wider">Case Details</div>
          <div className="w-2 h-2 rounded-full bg-neon shadow-[0_0_8px_rgba(216,255,95,0.6)]"></div>
        </div>
        
        <h2 className="font-display font-bold text-lg text-white leading-tight mb-5 drop-shadow-sm">Cognitive Capacity Evaluation</h2>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center pb-3 border-b border-white/10">
            <span className="text-sm text-white/60">System Ref</span>
            <span className="text-sm font-medium text-white">#WM-2023-892</span>
          </div>
          <div className="flex justify-between items-center pb-3 border-b border-white/10">
            <span className="text-sm text-white/60">Client Ref</span>
            <span className="text-sm font-mono font-medium text-white">#CL-8842-X</span>
          </div>
          <div className="flex justify-between items-center pb-3 border-b border-white/10">
            <span className="text-sm text-white/60">Instruction Date</span>
            <span className="text-sm font-medium text-white">Oct 24, 2023</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-white/60">Case Type</span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-neon text-black">Fixed Fee Base</span>
          </div>
        </div>

        <div className="mt-5 pt-5 border-t border-white/10">
          <div className="text-[10px] font-bold text-white/60 uppercase tracking-wider mb-3">Instructing Advisor</div>
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20 shadow-sm">
              <Image src="https://picsum.photos/seed/advisor/100/100" alt="Elena R." fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Elena R.</div>
              <div className="text-xs text-white/50">FA-9921 • Capstone Fin.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-panel p-5 rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
        
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-white text-[11px] font-bold uppercase tracking-wider mb-4 border border-white/20">
          <Lock className="w-3 h-3" />
          Payment Secured
        </div>
        
        <div className="font-display font-bold text-4xl text-neon mb-1 tracking-tight drop-shadow-md">£8,500</div>
        <div className="text-xs text-white/60 leading-snug">
          Held in secure escrow.<br />Released upon final report submission.
        </div>
      </div>

      <a href="#" className="flex justify-center items-center gap-2 w-full py-3 glass-panel rounded-xl text-sm font-medium text-white hover:bg-white/20 transition-all">
        <FileText className="w-4 h-4" />
        View Full Case Brief
      </a>
    </div>
  );
}
