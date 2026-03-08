import { Phone, Video, UploadCloud, File, Trash2, CheckCircle2, Check, FileText, Paperclip, Send } from 'lucide-react';
import Image from 'next/image';

export function ChatArea() {
  return (
    <div className="flex-1 glass-panel rounded-2xl flex flex-col overflow-hidden min-w-[400px]">
      <div className="px-5 py-3.5 border-b border-white/10 flex justify-between items-center bg-white/5 z-10 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="relative w-9 h-9 rounded-full overflow-hidden shadow-sm">
              <Image src="https://picsum.photos/seed/advisor/100/100" alt="Elena R." fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#16A34A] border-2 border-[#4B4964] rounded-full"></div>
          </div>
          <div>
            <div className="font-bold text-sm text-white leading-tight">Elena R.</div>
            <div className="text-[11px] font-medium text-white/60">Financial Advisor</div>
          </div>
        </div>
        <div className="flex gap-1.5">
          <button className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
            <Phone className="w-[18px] h-[18px]" />
          </button>
          <button className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
            <Video className="w-[18px] h-[18px]" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto flex flex-col bg-transparent">
        <div className="p-5 border-b border-white/10 bg-white/5">
          <div className="border-2 border-dashed border-white/20 bg-white/5 hover:bg-white/10 transition-colors rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer group backdrop-blur-sm">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shadow-sm mb-3 text-white group-hover:scale-110 transition-transform backdrop-blur-md">
              <UploadCloud className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium text-white mb-1 drop-shadow-sm">Drop your final PDF assessment here</span>
            <span className="text-xs text-white/60">or click to browse from your computer</span>
          </div>
          
          <div className="mt-3 flex items-center justify-between p-3 bg-white/10 border border-white/10 rounded-lg backdrop-blur-md shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-red-500/20 flex items-center justify-center text-red-300 backdrop-blur-sm">
                <File className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-white">Draft_Assessment_v1.pdf</span>
                <span className="text-[11px] text-white/60">1.2 MB • Uploaded Just now</span>
              </div>
            </div>
            <button className="p-1.5 text-white/50 hover:text-red-300 hover:bg-red-500/20 rounded transition-colors">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="p-5 flex flex-col gap-5">
          <div className="flex justify-center my-1">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-[11px] font-semibold text-white/80 backdrop-blur-md">
              <CheckCircle2 className="w-3 h-3" />
              Case Initialized • Oct 24, 2023
            </div>
          </div>

          <div className="flex gap-3 max-w-[85%] self-end flex-row-reverse">
            <div className="relative w-8 h-8 rounded-full flex-shrink-0 mt-1 shadow-md border border-white/10 overflow-hidden">
              <Image src="https://picsum.photos/seed/doctor/100/100" alt="You" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="flex flex-col items-end">
              <div className="text-[11px] text-white/50 mb-1 mr-1 font-medium">You • 09:15 AM</div>
              <div className="bg-white/20 backdrop-blur-md border border-white/10 text-white p-3.5 rounded-2xl rounded-tr-sm text-[14px] leading-relaxed shadow-lg">
                Hello Elena. I have received the instruction for this cognitive capacity evaluation. Before we proceed with scheduling the assessment, I will need to review the client's complete medical history, specifically records from their primary GP.
              </div>
            </div>
          </div>

          <div className="flex justify-center my-1">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-[11px] font-bold text-white/80 backdrop-blur-md">
              <Check className="w-3 h-3" strokeWidth={3} />
              Instruction Confirmed by Expert
            </div>
          </div>

          <div className="flex gap-3 max-w-[85%]">
            <div className="relative w-8 h-8 rounded-full flex-shrink-0 mt-1 shadow-md border border-white/10 overflow-hidden">
              <Image src="https://picsum.photos/seed/advisor/100/100" alt="Elena R." fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="flex flex-col items-start">
              <div className="text-[11px] text-white/50 mb-1 ml-1 font-medium">Elena R. • 10:30 AM</div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 text-white p-3.5 rounded-2xl rounded-tl-sm text-[14px] leading-relaxed shadow-lg">
                Hi Dr. Markus. I've just requested those documents from the GP's office. They confirmed it's being processed and should be uploaded to our portal by tomorrow afternoon. I will notify you once they are available.
              </div>
            </div>
          </div>

          <div className="flex gap-3 max-w-[85%]">
            <div className="w-8 h-8 rounded-full flex-shrink-0"></div> 
            <div className="flex flex-col items-start w-full">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-lg flex items-center gap-3 pr-8">
                <div className="w-10 h-10 bg-white/10 border border-white/10 rounded-lg flex items-center justify-center text-white">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white leading-tight">GP_Medical_Records_Redacted.pdf</div>
                  <div className="text-[11px] text-white/50 mt-0.5">Uploaded Oct 25 • 4.2 MB</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 max-w-[85%] self-end flex-row-reverse">
            <div className="relative w-8 h-8 rounded-full flex-shrink-0 mt-1 shadow-md border border-white/10 overflow-hidden">
              <Image src="https://picsum.photos/seed/doctor/100/100" alt="You" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="flex flex-col items-end">
              <div className="text-[11px] text-white/50 mb-1 mr-1 font-medium">You • 02:15 PM</div>
              <div className="bg-white/20 backdrop-blur-md border border-white/10 text-white p-3.5 rounded-2xl rounded-tr-sm text-[14px] leading-relaxed shadow-lg">
                Excellent, I see the file. I have reviewed these notes and we are fine to proceed. Could you confirm the client's availability for a video consultation next Tuesday?
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-white/5 border-t border-white/10 flex items-center gap-3 backdrop-blur-md">
        <button className="p-2 text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/10">
          <Paperclip className="w-5 h-5" />
        </button>
        
        <div className="flex-1 bg-white/10 rounded-full flex items-center px-4 py-2 focus-within:ring-2 focus-within:ring-white/30 focus-within:bg-white/20 border border-white/20 transition-all shadow-inner">
          <input type="text" placeholder="Type a message..." className="bg-transparent border-none w-full text-sm text-white focus:outline-none placeholder-white/50" />
          <button className="text-white/50 hover:text-white transition-colors ml-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
          </button>
        </div>

        <button className="w-10 h-10 rounded-full bg-neon hover:bg-[#c9f24d] text-black flex items-center justify-center transition-colors shadow-md flex-shrink-0">
          <Send className="w-[18px] h-[18px] ml-0.5" />
        </button>
      </div>
    </div>
  );
}
