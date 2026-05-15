import React from 'react';
import { Menu, Search, PlusCircle, BookOpen, User, Library, PlayCircle, Mic2, ClipboardCheck, Gamepad2 } from 'lucide-react';

export default function App() {
  const categories = [
    { title: 'الدراسة', desc: 'محاضرات وملخصات', icon: <BookOpen className="text-blue-400" /> },
    { title: 'المكتبة', desc: 'كتب ومراجع PDF', icon: <Library className="text-purple-400" /> },
    { title: 'الفيديوهات', desc: 'شروحات مرئية', icon: <PlayCircle className="text-red-400" /> },
    { title: 'الصوتيات', desc: 'محاضرات مسموعة', icon: <Mic2 className="text-green-400" /> },
    { title: 'الاختبارات', desc: 'بنك الأسئلة', icon: <ClipboardCheck className="text-yellow-400" /> },
    { title: 'الترفيه', desc: 'معلومات منوعة', icon: <Gamepad2 className="text-pink-400" /> },
  ];

  return (
    <div className="min-h-screen bg-[#050a15] text-slate-100 font-sans selection:bg-blue-500/30" dir="rtl">
      
      {/* 1. القائمة العلوية */}
      <nav className="border-b border-slate-800 bg-[#0f172a]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-black italic tracking-tighter text-blue-500">
              Edu<span className="text-white">Hub</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-lg shadow-blue-900/20">
              <PlusCircle size={16} />
              <span className="hidden sm:inline">رفع ملف</span>
            </button>
            <div className="w-9 h-9 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-blue-500 font-bold border-2 border-blue-500/20">
              <User size={18} />
            </div>
          </div>
        </div>
      </nav>

      {/* 2. واجهة الترحيب */}
      <main className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-[10px] font-black mb-6 border border-blue-500/20 uppercase tracking-widest">
            <BookOpen size={12} />
            <span>جامعة المحويت - كلية الطب</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            مركز التعليم <span className="text-blue-500 underline decoration-blue-800/50 underline-offset-8">الذكي</span>
          </h1>
          
          <p className="text-slate-400 text-sm md:text-base mb-10 max-w-2xl mx-auto leading-relaxed">
            منصة شاملة للملفات الطبية والمحاضرات التفاعلية المخصصة لطلابنا.
          </p>

          {/* 3. شريط البحث */}
          <div className="relative max-w-2xl mx-auto">
            <div className="relative flex items-center bg-slate-900/50 border border-slate-800 p-1.5 rounded-2xl focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10 transition-all">
              <div className="pr-4 pl-2 text-slate-500">
                <Search size={22} />
              </div>
              <input 
                type="text" 
                placeholder="ابحث عن محاضرات، كتب، أو مراجع..." 
                className="w-full bg-transparent border-none outline-none text-white text-sm md:text-base py-3 px-2 text-right placeholder:text-slate-600"
              />
            </div>
          </div>
        </div>

        {/* 4. شبكة الأقسام - بدون px-2 زائد */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-16">
          {categories.map((item, index) => (
            <div key={index} className="group bg-slate-900/40 p-6 rounded-[2rem] border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/40 transition-all duration-300 text-center flex flex-col items-center justify-center gap-3 cursor-pointer shadow-xl">
              <div className="bg-slate-800 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-inner border border-slate-700">
                {item.icon}
              </div>
              <h3 className="text-sm md:text-lg font-bold text-white">{item.title}</h3>
              <p className="text-slate-500 text-[10px] md:text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </main>

      {/* 5. تذييل الصفحة */}
      <footer className="py-12 border-t border-slate-900 text-center text-slate-600 text-[10px] md:text-xs">
        <p>© 2026 EdhHub - صُنع لطلاب العلم في اليمن</p>
      </footer>
    </div>
  );
}
