import React from 'react';
import './index.css';
import { BookOpen, Library, PlayCircle, Mic2, PlusCircle, Search, Menu } from 'lucide-react';

export default function App() {
  const categories = [
    { title: 'المكتبة', desc: 'كتب ومراجع PDF', icon: <Library size={28} /> },
    { title: 'الدراسة', desc: 'محاضرات وملخصات', icon: <BookOpen size={28} /> },
    { title: 'الصوتيات', desc: 'محاضرات مسموعة', icon: <Mic2 size={28} /> },
    { title: 'الفيديوهات', desc: 'شروحات مرئية', icon: <PlayCircle size={28} /> }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans p-5" dir="rtl">
      <header className="flex justify-between items-center mb-8">
        <button className="bg-blue-600 px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-bold shadow-lg">
          <PlusCircle size={18} /> رفع محتوى
        </button>
        <div className="text-lg font-semibold tracking-tight text-slate-300">EdhHub</div>
      </header>

      <div className="flex justify-center mb-10">
        <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50 shadow-xl">
          <Menu size={32} className="text-slate-300" />
        </div>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">مركز التعليم الذكي</h1>
        <p className="text-slate-400 text-sm mb-8 leading-relaxed">منصة شاملة للملفات الطبية والمحاضرات التفاعلية</p>
        <div className="relative max-w-md mx-auto">
          <input type="text" placeholder="ابحث عن محاضرات، كتب..." className="w-full bg-[#111827] border border-slate-800 p-4 rounded-2xl text-right text-xs outline-none text-white focus:border-blue-500" />
          <div className="flex justify-center mt-4"><Search className="text-slate-500" size={24} /></div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {categories.map((cat, i) => (
          <div key={i} className="bg-[#0f172a] p-8 rounded-[2.5rem] border border-slate-800/60 text-center flex flex-col items-center justify-center shadow-2xl">
            <div className="bg-[#1e293b] p-5 rounded-2xl mb-6 text-slate-200">{cat.icon}</div>
            <h3 className="font-bold text-xl mb-3">{cat.title}</h3>
            <p className="text-[11px] text-slate-500">{cat.desc}</p>
          </div>
        ))}
      </div>

      <footer className="mt-16 text-center text-slate-600 text-[10px] pb-6">
        <p>© EdhHub 2026 - منصة للطلاب العرب</p>
      </footer>
    </div>
  );
}
