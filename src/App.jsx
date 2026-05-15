import React from 'react';
import { Menu, Bell, Search, PlusCircle, BookOpen, User } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050a15] text-white font-sans selection:bg-blue-500/30" dir="rtl">
      
      {/* القائمة العلوية */}
      <nav className="border-b border-slate-800 bg-[#0f172a]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-black italic tracking-tighter text-blue-500">
              Edu<span className="text-white">Hub</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-blue-500 transition-all flex items-center gap-2">
              <PlusCircle size={18} />
              <span className="hidden sm:inline">رفع ملف</span>
            </button>
            <div className="w-10 h-10 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-blue-500 font-bold border-2 border-blue-500/20">
              <User size={20} />
            </div>
          </div>
        </div>
      </nav>

      {/* واجهة الترحيب والبحث */}
      <main className="max-w-5xl mx-auto px-6 pt-20 pb-12 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-xs font-bold mb-6 border border-blue-500/20">
          <BookOpen size={14} />
          <span>منصة طلاب الطب - جامعة المحويت</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
          كل ما تحتاجه في رحلتك <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-blue-600">الطبية في مكان واحد</span>
        </h1>
        
        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          وصول سريع للمحاضرات، الملخصات، والمراجع الطبية الموثوقة. ابحث الآن وابدأ التعلم.
        </p>

        <div className="relative max-w-2xl mx-auto">
          <div className="flex items-center bg-slate-900 border border-slate-800 p-2 rounded-2xl shadow-2xl focus-within:border-blue-500 transition-all">
            <div className="p-3 text-slate-500">
              <Search size={24} />
            </div>
            <input 
              type="text" 
              placeholder="ابحث عن تشريح، كيمياء حيوية، ملخصات..." 
              className="w-full bg-transparent border-none outline-none text-white text-lg px-2 text-right placeholder:text-slate-600"
            />
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 w-full p-6 text-center text-slate-600 text-[10px]">
        © 2026 EdhHub - مستقبل التعليم الطبي
      </footer>
    </div>
  );
}
