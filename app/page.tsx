import { ChevronRight, MoreHorizontal } from 'lucide-react';
import { Sidebar } from '@/components/Sidebar';
import { CaseDetails } from '@/components/CaseDetails';
import { ChatArea } from '@/components/ChatArea';
import { BillingPanel } from '@/components/BillingPanel';

export default function Page() {
  return (
    <div className="flex h-screen w-full overflow-hidden text-white">
      <Sidebar />
      
      <main className="flex-1 flex flex-col min-w-0 px-8 py-6 gap-6 h-screen overflow-hidden relative z-10">
        <header className="flex justify-between items-end flex-shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-white/60 font-medium text-sm">Cases</span>
              <ChevronRight className="w-3.5 h-3.5 text-white/40" />
              <span className="text-white/80 font-medium text-sm">WM-2023-892</span>
            </div>
            <h1 className="font-display font-bold text-3xl text-white tracking-tight drop-shadow-sm">Case Room</h1>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="p-2 text-white/70 hover:text-white bg-white/10 rounded-lg border border-white/20 shadow-sm transition-colors hover:bg-white/20 backdrop-blur-sm">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
        </header>

        <div className="flex flex-1 gap-6 min-h-0 overflow-hidden">
          <CaseDetails />
          <ChatArea />
          <BillingPanel />
        </div>
      </main>
    </div>
  );
}
