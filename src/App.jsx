import React, { useState } from 'react';
import { BookOpen, Library, PlayCircle, Mic2, PlusCircle, LogIn, X, Search, User } from 'lucide-react';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const categories = [
    { title: 'الدراسة', desc: 'محاضرات وملخصات', icon: <BookOpen className="text-white" />, color: 'bg-blue-500' },
    { title: 'المكتبة', desc: 'مراجع PDF طبية', icon: <Library className="text-white" />, color: 'bg-purple-500' },
    { title: 'الفيديوهات', desc: 'شروحات مرئية', icon: <PlayCircle className="text-white" />, color: 'bg-red-500' },
    { title: 'الصوتيات', desc: 'تسجيلات محاضرات', icon: <Mic2 className="text-white" />, color: 'bg-green-500' }
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-6 font-sans" dir="rtl">
      {/* Header - الزر على اليمين كما طلبت */}
      <nav className="flex justify-between items-center mb-10 border-b border-slate-800 pb-4">
        <div className="text-2xl font-black">EduHub</div>
        <div className="flex gap-2">
          {isLoggedIn ? (
            <div className="bg-slate-800 p-2 rounded-lg flex items-center gap-2">
              <User size={18} /> <span>عبد الملك</span>
            </div>
          ) : (
            <button onClick={() => setIsLoginOpen(true)} className="bg-slate-800 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2">
              <LogIn size={18} /> تسجيل دخول
            </button>
          )}
          <button className="bg-blue-600 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2">
            <PlusCircle size={18} /> رفع
          </button>
        </div>
      </nav>

      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4">مستقبلك يبدأ من هنا</h1>
        <div className="relative max-w-md mx-auto">
          <Search className="absolute right-3 top-2.5 text-slate-400" size={20} />
          <input type="text" placeholder="ماذا تريد أن تتعلم اليوم؟" className="w-full bg-slate-900 border border-slate-700 p-2.5 pr-10 rounded-xl outline-none focus:border-blue-500" />
        </div>
      </header>

      {/* الأقسام - الشبكة الأصلية التي كانت تعمل */}
      <div className="grid grid-cols-2 gap-4">
        {categories.map((cat, index) => (
          <div key={index} className="bg-[#1e293b] p-6 rounded-2xl border border-slate-700 text-center shadow-lg">
            <div className={`w-12 h-12 ${cat.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
              {cat.icon}
            </div>
            <h3 className="font-bold text-lg mb-1">{cat.title}</h3>
            <p className="text-xs text-slate-400">{cat.desc}</p>
          </div>
        ))}
      </div>

      {/* نافذة الدخول */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#1e293b] w-full max-w-xs rounded-2xl border border-slate-700 p-6 relative">
            <button onClick={() => setIsLoginOpen(false)} className="absolute left-4 top-4 text-slate-400"><X size={20}/></button>
            <h2 className="text-xl font-bold mb-6 text-center">دخول النظام</h2>
            <form onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); setIsLoginOpen(false); }} className="space-y-4">
              <input type="email" placeholder="البريد الإلكتروني" className="w-full bg-[#0f172a] border border-slate-700 p-2.5 rounded-lg outline-none" required />
              <input type="password" placeholder="كلمة المرور" className="w-full bg-[#0f172a] border border-slate-700 p-2.5 rounded-lg outline-none" required />
              <button className="w-full bg-blue-600 py-2.5 rounded-lg font-bold">دخول</button>
            </form>
          </div>
        </div>
      )}

      <footer className="mt-12 text-center text-slate-500 text-xs">
        <p>© 2026 EduHub - منصة للطلاب العرب</p>
      </footer>
    </div>
  );
}

export default App;

