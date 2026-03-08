import { Clock, ChevronDown, Activity } from 'lucide-react';

export function BillingPanel() {
  return (
    <div className="w-[320px] glass-panel rounded-2xl flex flex-col overflow-hidden flex-shrink-0">
      <div className="p-5 border-b border-white/10 bg-transparent">
        <h2 className="font-display font-bold text-lg text-white leading-none drop-shadow-sm">Case Progress & Billing</h2>
      </div>

      <div className="flex-1 overflow-y-auto flex flex-col">
        <div className="p-5 border-b border-white/10">
          <div className="text-[10px] font-bold text-white/70 uppercase tracking-wider mb-4 flex items-center gap-2">
            <Clock className="w-3 h-3" />
            Log Hourly Work
          </div>
          
          <div className="space-y-4">
            <div className="relative">
              <select className="w-full appearance-none bg-white/10 border border-white/20 rounded-lg pl-3 pr-8 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/30 shadow-sm backdrop-blur-sm">
                <option className="bg-gray-800 text-white">Today, Oct 26</option>
                <option className="bg-gray-800 text-white">Yesterday, Oct 25</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-white/50">
                <ChevronDown className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-1 bg-white/5 border border-white/10 rounded-lg p-3 text-center backdrop-blur-sm">
                <div className="text-[10px] text-white/50 font-medium mb-1">HOURS</div>
                <div className="font-display font-bold text-2xl text-white drop-shadow-sm">6.5<span className="text-sm text-white/50 font-normal ml-1">hrs</span></div>
              </div>
              <div className="flex-1 bg-white/5 border border-white/10 rounded-lg p-3 text-center backdrop-blur-sm">
                <div className="text-[10px] text-white/50 font-medium mb-1">RATE</div>
                <div className="font-display font-bold text-xl text-white mt-1 drop-shadow-sm">£250</div>
              </div>
            </div>

            <textarea className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/30 shadow-sm resize-none h-20 placeholder-white/50 backdrop-blur-sm" placeholder="Description of work completed..."></textarea>
            
            <div className="flex items-center justify-between pt-1">
              <div className="text-sm font-medium text-white/60">Entry Total:</div>
              <div className="font-bold text-white drop-shadow-sm">£1,625</div>
            </div>
            
            <button className="w-full py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg text-sm transition-colors border border-white/20 shadow-sm backdrop-blur-sm">
              Submit for Approval
            </button>
          </div>
        </div>

        <div className="p-5 bg-transparent border-b border-white/10">
          <div className="space-y-2 mb-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-white/60">Approved Hours Logged</span>
              <span className="font-medium text-white">6.5 hrs</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-white/60">Hourly Billable</span>
              <span className="font-medium text-white">£1,625</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-white/60">Fixed Fee Base</span>
              <span className="font-medium text-white">£8,500</span>
            </div>
          </div>
          <div className="pt-3 border-t border-white/10 flex justify-between items-center">
            <span className="text-sm font-bold text-white drop-shadow-sm">Total Earned</span>
            <span className="font-display font-bold text-2xl text-neon drop-shadow-md">£10,125</span>
          </div>
        </div>

        <div className="p-5 flex-1">
          <div className="text-[10px] font-bold text-white/70 uppercase tracking-wider mb-5 flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-neon/20 text-neon flex items-center justify-center backdrop-blur-sm">
              <Activity className="w-2.5 h-2.5" />
            </div>
            AI Case Ledger
          </div>

          <div className="relative timeline-container pl-6 space-y-6">
            <div className="relative timeline-item">
              <div className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-neon ring-4 ring-white/10 shadow-[0_0_8px_rgba(216,255,95,0.6)] z-10"></div>
              <div>
                <div className="text-[10px] font-bold text-neon uppercase tracking-wider mb-0.5 drop-shadow-sm">Oct 24, 09:15 AM</div>
                <div className="text-sm font-medium text-white leading-snug drop-shadow-sm">Instruction Received</div>
                <div className="text-xs text-white/60 mt-1">Confirmed by Dr. Markus.</div>
              </div>
            </div>

            <div className="relative timeline-item">
              <div className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-neon ring-4 ring-white/10 shadow-[0_0_8px_rgba(216,255,95,0.6)] z-10"></div>
              <div>
                <div className="text-[10px] font-bold text-neon uppercase tracking-wider mb-0.5 drop-shadow-sm">Oct 25, 02:15 PM</div>
                <div className="text-sm font-medium text-white leading-snug drop-shadow-sm">GP Records Reviewed</div>
                <div className="text-xs text-white/60 mt-1">Clearance given to schedule assessment.</div>
              </div>
            </div>

            <div className="relative timeline-item">
              <div className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-neon ring-4 ring-white/10 shadow-[0_0_8px_rgba(216,255,95,0.6)] z-10"></div>
              <div>
                <div className="text-[10px] font-bold text-neon uppercase tracking-wider mb-0.5 drop-shadow-sm">Just Now</div>
                <div className="text-sm font-medium text-white leading-snug drop-shadow-sm">Draft Assessment Submitted</div>
                <div className="text-xs text-white/60 mt-1">File uploaded to secure room.</div>
              </div>
            </div>

            <div className="relative timeline-item">
              <div className="timeline-line-cover"></div>
              <div className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-white/30 ring-4 ring-white/10 z-10 backdrop-blur-sm"></div>
              <div>
                <div className="text-[10px] font-bold text-white/40 uppercase tracking-wider mb-0.5">Pending Action</div>
                <div className="text-sm font-medium text-white/50 leading-snug">Final Report Due</div>
                <div className="text-xs text-white/40 mt-1">Awaiting advisor approval on draft.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
