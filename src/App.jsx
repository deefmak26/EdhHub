import React from 'react';
import { BookOpen, Library, PlayCircle, Mic2, PlusCircle, Search } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-6 font-sans" dir="rtl">
      <nav className="flex justify-between items-center mb-10">
        <div className="text-2xl font-black">EduHub</div>
        <button className="bg-blue-600 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2">
          <PlusCircle size={18} /> رفع محتوى
        </button>
      </nav>

      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4">مركز التعليم الذكي</h1>
        <div className="relative max-w-md mx-auto">
          <Search className="absolute right-3 top-2.5 text-slate-400" size={20} />
          <input type="text" placeholder="ماذا تريد أن تتعلم اليوم؟" className="w-full bg-slate-900 border border-slate-700 p-2.5 pr-10 rounded-xl outline-none focus:border-blue-500 text-white" />
        </div>
      </header>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[#1e293b] p-6 rounded-2xl border border-slate-700 text-center shadow-lg">
          <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <BookOpen className="text-white" />
          </div>
          <h3 className="font-bold text-lg mb-1">الدراسة</h3>
          <p className="text-xs text-slate-400">محاضرات وملخصات</p>
        </div>

        <div className="bg-[#1e293b] p-6 rounded-2xl border border-slate-700 text-center shadow-lg">
          <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Library className="text-white" />
          </div>
          <h3 className="font-bold text-lg mb-1">المكتبة</h3>
          <p className="text-xs text-slate-400">مراجع PDF طبية</p>
        </div>

        <div className="bg-[#1e293b] p-6 rounded-2xl border border-slate-700 text-center shadow-lg">
          <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <PlayCircle className="text-white" />
          </div>
          <h3 className="font-bold text-lg mb-1">الفيديوهات</h3>
          <p className="text-xs text-slate-400">شروحات مرئية</p>
        </div>

        <div className="bg-[#1e293b] p-6 rounded-2xl border border-slate-700 text-center shadow-lg">
          <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Mic2 className="text-white" />
          </div>
          <h3 className="font-bold text-lg mb-1">الصوتيات</h3>
          <p className="text-xs text-slate-400">تسجيلات محاضرات</p>
        </div>
      </div>

      <footer className="mt-12 text-center text-slate-500 text-xs">
        <p>© 2026 EduHub - منصة للطلاب العرب</p>
      </footer>
    </div>
  );
}

export default App;

