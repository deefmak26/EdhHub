import React, { useState } from 'react';
import { 
  BookOpen, Library, PlayCircle, Mic2, 
  PlusCircle, Search, X, Upload, 
  User, Lock, Mail, LogIn
} from 'lucide-react';

function App() {
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ name: 'عبد الملك' });

  const categories = [
    { id: 'study', title: 'الدراسة', desc: 'محاضرات وملخصات', icon: <BookOpen />, color: 'bg-blue-600' },
    { id: 'library', title: 'المكتبة', desc: 'مراجع PDF طبية', icon: <Library />, color: 'bg-indigo-600' },
    { id: 'video', title: 'الفيديوهات', desc: 'شروحات مرئية', icon: <PlayCircle />, color: 'bg-red-600' },
    { id: 'audio', title: 'الصوتيات', desc: 'تسجيلات محاضرات', icon: <Mic2 />, color: 'bg-emerald-600' }
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 font-sans" dir="rtl">
      <nav className="sticky top-0 z-40 bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-800 p-4 flex justify-between items-center">
        <div className="text-2xl font-black text-white">Edu<span className="text-blue-500">Hub</span></div>
        <div className="flex gap-2">
          {isLoggedIn ? (
            <div className="flex items-center gap-2 bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xs">{user.name[0]}</div>
              <span className="text-sm hidden md:block">{user.name}</span>
            </div>
          ) : (
            <button onClick={() => setIsLoginOpen(true)} className="text-slate-400 hover:text-white px-2 py-2 text-sm font-bold flex items-center gap-2">
              <LogIn size={18} /> دخول
            </button>
          )}
          <button onClick={() => setIsUploadOpen(true)} className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-bold">
            <PlusCircle size={18} /> رفع
          </button>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto p-6">
        <header className="text-center my-12">
          <h1 className="text-4xl font-black mb-4 tracking-tight">مستقبلك يبدأ من <span className="text-blue-500 text-5xl">هنا</span></h1>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
            <input type="text" placeholder="ماذا تريد أن تتعلم اليوم؟" className="w-full bg-[#1e293b] border border-slate-700 p-4 pr-12 rounded-2xl focus:border-blue-500 outline-none shadow-xl shadow-black/20 text-white" />
          </div>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div key={cat.id} className="bg-[#1e293b] p-6 rounded-3xl border border-slate-700 text-center hover:border-blue-500 transition-all hover:-translate-y-1 cursor-pointer">
              <div className={`w-12 h-12 ${cat.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-black/30`}>{cat.icon}</div>
              <h3 className="font-bold">{cat.title}</h3>
              <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-widest">{cat.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {isLoginOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <div className="bg-[#1e293b] w-full max-w-sm rounded-3xl border border-slate-700 p-8 relative">
            <button onClick={() => setIsLoginOpen(false)} className="absolute left-4 top-4 text-slate-500 hover:text-white"><X size={24}/></button>
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-600/20 text-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4"><User size={32} /></div>
              <h3 className="text-2xl font-black text-white">أهلاً بك</h3>
            </div>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); setIsLoginOpen(false); }}>
              <input type="email" placeholder="البريد الإلكتروني" className="w-full bg-[#0f172a] border border-slate-700 p-3 rounded-xl focus:border-blue-500 outline-none text-sm text-white" required />
              <input type="password" placeholder="كلمة المرور" className="w-full bg-[#0f172a] border border-slate-700 p-3 rounded-xl focus:border-blue-500 outline-none text-sm text-white" required />
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 py-3.5 rounded-xl font-bold transition-all mt-4">دخول</button>
            </form>
          </div>
        </div>
      )}

      {isUploadOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <div className="bg-[#1e293b] w-full max-w-md rounded-3xl border border-slate-700 p-8 relative">
            <button onClick={() => setIsUploadOpen(false)} className="absolute left-4 top-4 text-slate-500 hover:text-white"><X size={24}/></button>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-white"><Upload className="text-blue-500"/> رفع محتوى للمراجعة</h3>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsUploadOpen(false); alert('تم الإرسال بنجاح للمراجعة'); }}>
               <input type="text" placeholder="عنوان الملف" className="w-full bg-[#0f172a] border border-slate-700 p-3 rounded-xl outline-none text-white" required />
               <input type="url" placeholder="رابط الملف (Google Drive)" className="w-full bg-[#0f172a] border border-slate-700 p-3 rounded-xl outline-none text-white" required />
               <button type="submit" className="w-full bg-blue-600 py-3.5 rounded-xl font-bold text-white transition-all">إرسال</button>
            </form>
          </div>
        </div>
      )}

      <footer className="mt-20 border-t border-slate-800 p-10 text-center text-slate-500 text-xs">
        <p>© 2026 EduHub - منصة للطلاب العرب</p>
      </footer>
    </div>
  );
}

export default App;

