import React from 'react';
import { Search, PlusCircle, BookOpen, User, Library, PlayCircle, Mic2, ClipboardCheck, Gamepad2 } from 'lucide-react';

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
    <div className="min-h-screen text-slate-100 font-sans pb-20">
      <nav className="h-20 flex items-center justify-between border-b border-white/5 mb-10">
        <div className="text-2xl font-black italic text-blue-500">EduHub <span className="text-white text-sm">v2</span></div>
        <div className="flex items-center gap-3">
          <button className="bg-blue-600 p-2 rounded-lg"><PlusCircle size={20}/></button>
          <div className="w-10 h-10 bg-slate-800 rounded-full border border-blue-500/30 flex items-center justify-center font-bold">ع</div>
        </div>
      </nav>

      <main>
        <div className="text-center mb-12">
           <h1 className="text-4xl font-black mb-4">مركز التعليم <span className="text-blue-500">الذكي</span></h1>
           <p className="text-slate-400 text-sm px-10">منصة شاملة للملفات الطبية والمحاضرات التفاعلية</p>
        </div>

        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-2 mb-12 flex items-center">
          <Search className="text-slate-500 mx-3" size={20} />
          <input type="text" placeholder="ابحث هنا..." className="bg-transparent border-none outline-none text-white w-full text-right py-2" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {categories.map((item, index) => (
            <div key={index} className="bg-[#0f172a] p-6 rounded-[2rem] border border-slate-800 text-center flex flex-col items-center gap-3">
              <div className="bg-slate-800 p-3 rounded-xl">{item.icon}</div>
              <h3 className="font-bold text-sm">{item.title}</h3>
              <p className="text-[10px] text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
