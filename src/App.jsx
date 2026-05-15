import React, { useState } from 'react';
import { BookOpen, Library, PlayCircle, Mic2, PlusCircle, LogIn, Search, User } from 'lucide-react';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-6 font-sans" dir="rtl">
      {/* Header */}
      <nav className="flex justify-between items-center mb-10 border-b border-slate-800 pb-4">
        <div className="text-2xl font-black">EduHub</div>
        <div className="flex gap-2">
          <button 
            onClick={() => setIsLoggedIn(!isLoggedIn)} 
            className="bg-slate-800 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 border border-slate-700"
          >
            {isLoggedIn ? <><User size={16}/> عبد الملك</> : <><LogIn size={16}/> دخول</>}
          </button>
          <button className="bg-blue-600 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2">
            <PlusCircle size={16} /> رفع
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-6">مستقبلك يبدأ من هنا</h1>
        <div className="relative max-w-md mx-auto">
          <Search className="absolute right-3 top-2.5 text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="ماذا تريد أن تتعلم اليوم؟" 
            className="w-full bg-slate-900 border border-slate-700 p-2.5 pr-10 rounded-xl outline-none focus:border-blue-500 text-white" 
          />
        </div>
      </header>

      {/* Grid Categories */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[#1e293b] p-6 rounded-2xl border border-slate-700 text-center shadow-lg">
          <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 text-white"><BookOpen /></div>
          <h3 className="font-bold text-lg">الدراسة</h3>
          <p className="text-[10px] text-slate-400">محاضرات وملخصات</p>
        </div>
        
        <div className="bg-[#1e293b] p-6 rounded-2xl border border-slate-700 text-center shadow-lg">
          <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 text-white"><Library /></div>
          <h3 className="font-bold text-lg">المكتبة</h3>
          <p className="text-[10px] text-slate-400">مراجع PDF طبية</p>
        </div>

        <div className="bg-[#1e293b] p-6 rounded-2xl border border-slate-700 text-center shadow-lg">
          <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mx-auto mb-4 text-white"><PlayCircle /></div>
          <h3 className="font-bold text-lg">الفيديوهات</h3>
          <p className="text-[10px] text-slate-400">شروحات مرئية</p>
        </div>

        <div className="bg-[#1e293b] p-6 rounded-2xl border border-slate-700 text-center shadow-lg">
          <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4 text-white"><Mic2 /></div>
          <h3 className="font-bold text-lg">الصوتيات</h3>
          <p className="text-[10px] text-slate-400">تسجيلات محاضرات</p>
        </div>
      </div>

      <footer className="mt-12 text-center text-slate-600 text-[10px]">
        © 2026 EduHub - جامعة المحويت
      </footer>
    </div>
  );
}

