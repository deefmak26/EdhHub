import React, { useState } from 'react';
import { BookOpen, Library, PlayCircle, Mic2, PlusCircle, Search, X, Upload, User, Lock, Mail, LogIn } from 'lucide-react';

export default function App() {
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user] = useState({ name: 'عبد الملك' });

  const categories = [
    { id: 'study', title: 'الدراسة', desc: 'محاضرات وملخصات', icon: <BookOpen />, color: 'bg-blue-600' },
    { id: 'library', title: 'المكتبة', desc: 'مراجع PDF طبية', icon: <Library />, color: 'bg-indigo-600' },
    { id: 'video', title: 'الفيديوهات', desc: 'شروحات مرئية', icon: <PlayCircle />, color: 'bg-red-600' },
    { id: 'audio', title: 'الصوتيات', desc: 'تسجيلات محاضرات', icon: <Mic2 />, color: 'bg-emerald-600' }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans" dir="rtl">
      {/* Header */}
      <nav className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 p-4 flex justify-between items-center">
        <div className="text-2xl font-black text-white italic">Edu<span className="text-blue-500">Hub</span></div>
        <div className="flex gap-2">
          {isLoggedIn ? (
            <div className="flex items-center gap-2 bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xs text-white">{user.name[0]}</div>
              <span className="text-sm hidden sm:block">{user.name}</span>
            </div>
          ) : (
            <button onClick={() => setIsLoginOpen(true)} className="text-slate-400 hover:text-white px-3 py-2 text-sm font-bold flex items-center gap-2 transition-colors">
              <LogIn size={18} /> دخول
            </button>
          )}
          <button onClick={() => setIsUploadOpen(true)} className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-bold transition-all">
            <PlusCircle size={18} /> رفع
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto p-6">
        <header className="text-center my-16">
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-white">مستقبلك يبدأ من <span className="text-blue-500">هنا</span></h1>
          <div className="relative max-w-xl mx-auto group">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500" size={20} />
            <input type="text" placeholder="ماذا تريد أن تتعلم اليوم؟" className="w-full bg-slate-900 border border-slate-700 p-4 pr-12 rounded-2xl focus:border-blue-500 outline-none shadow-2xl text-white" />
          </div>
        </header>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className="bg-slate-900 p-8 rounded-3xl border border-slate-800 text-center hover:border-blue-500 transition-all hover:-translate-y-2 cursor-pointer group">
              <div className={`w-14 h-14 ${cat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform text-white`}>
                {cat.icon}
              </div>
              <h3 className="font-bold text-lg text-white">{cat.title}</h3>
              <p className="text-xs text-slate-500 mt-2">{cat.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Modals (Login & Upload) */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-all">
          <div className="bg-slate-900 w-full max-w-sm rounded-3xl border border-slate-800 p-8 relative shadow-2xl">
            <button onClick={() => setIsLoginOpen(false)} className="absolute left-4 top-4 text-slate-500 hover:text-white"><X size={24}/></button>
            <h3 className="text-2xl font-black text-center mb-8 text-white">تسجيل الدخول</h3>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); setIsLoginOpen(false); }}>
              <input type="email" placeholder="البريد الإلكتروني" className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl focus:border-blue-500 outline-none text-white" required />
              <input type="password" placeholder="كلمة المرور" className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl focus:border-blue-500 outline-none text-white" required />
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3.5 rounded-xl font-bold mt-4 shadow-lg shadow-blue-900/20">دخول</button>
            </form>
          </div>
        </div>
      )}

      {isUploadOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-all">
          <div className="bg-slate-900 w-full max-w-md rounded-3xl border border-slate-800 p-8 relative shadow-2xl">
            <button onClick={() => setIsUploadOpen(false)} className="absolute left-4 top-4 text-slate-500 hover:text-white"><X size={24}/></button>
            <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2"><Upload className="text-blue-500"/> رفع محتوى للمراجعة</h3>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsUploadOpen(false); alert('تم الإرسال بنجاح'); }}>
              <input type="text" placeholder="عنوان الملف" className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl outline-none text-white" required />
              <input type="url" placeholder="رابط الملف (Drive)" className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl outline-none text-white" required />
              <button type="submit" className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20">إرسال للمراجعة</button>
            </form>
          </div>
        </div>
      )}
      
      <footer className="mt-24 border-t border-slate-800 py-10 text-center">
        <p className="text-slate-500 text-sm">© 2026 EduHub - منصة للطلاب العرب</p>
      </footer>
    </div>
  );
}

