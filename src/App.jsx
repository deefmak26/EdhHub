import React, { useState } from 'react';
import { 
  BookOpen, Library, PlayCircle, Mic2, 
  PlusCircle, Search, X, Upload, 
  User, Lock, Mail, LogIn
} from 'lucide-react';

function App() {
  // الحالات (States)
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // تجريبي
  const [user, setUser] = useState({ name: 'عبد الملك' });

  const categories = [
    { id: 'study', title: 'الدراسة', desc: 'محاضرات وملخصات', icon: <BookOpen />, color: 'bg-blue-600' },
    { id: 'library', title: 'المكتبة', desc: 'مراجع PDF طبية', icon: <Library />, color: 'bg-indigo-600' },
    { id: 'video', title: 'الفيديوهات', desc: 'شروحات مرئية', icon: <PlayCircle />, color: 'bg-red-600' },
    { id: 'audio', title: 'الصوتيات', desc: 'تسجيلات محاضرات', icon: <Mic2 />, color: 'bg-emerald-600' }
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 font-sans" dir="rtl">
      {/* Header المطور */}
      <nav className="sticky top-0 z-40 bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-800 p-4 flex justify-between items-center">
        <div className="text-2xl font-black text-white">Edu<span className="text-blue-500">Hub</span></div>
        
        <div className="flex gap-2">
          {isLoggedIn ? (
            <div className="flex items-center gap-2 bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold">{user.name[0]}</div>
              <span className="text-sm hidden md:block">{user.name}</span>
            </div>
          ) : (
            <button 
              onClick={() => setIsLoginOpen(true)}
              className="text-slate-400 hover:text-white px-4 py-2 text-sm font-bold flex items-center gap-2"
            >
              <LogIn size={18} /> تسجيل الدخول
            </button>
          )}
          
          <button 
            onClick={() => setIsUploadOpen(true)}
            className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-bold shadow-lg shadow-blue-900/20"
          >
            <PlusCircle size={18} /> رفع
          </button>
        </div>
      </nav>

      {/* المحتوى الرئيسي */}
      <main className="max-w-4xl mx-auto p-6">
        <header className="text-center my-12">
          <h1 className="text-4xl font-black mb-4 tracking-tight">مستقبلك يبدأ من <span className="text-blue-500 text-5xl">هنا</span></h1>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
            <input type="text" placeholder="ماذا تريد أن تتعلم اليوم؟" className="w-full bg-[#1e293b] border border-slate-700 p-4 pr-12 rounded-2xl focus:border-blue-500 outline-none shadow-xl shadow-black/20" />
          </div>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div key={cat.id} className="bg-[#1e293b] p-6 rounded-3xl border border-slate-700 text-center hover:border-blue-500 transition-all hover:-translate-y-1 cursor-pointer">
              <div className={`w-12 h-12 ${cat.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-black/30`}>{cat.icon}</div>
              <h3 className="font-bold">{cat.title}</h3>
            </div>
          ))}
        </div>
      </main>

      {/* نافذة تسجيل الدخول (Login Modal) */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-[#1e293b] w-full max-w-sm rounded-3xl border border-slate-700 p-8 shadow-2xl relative">
            <button onClick={() => setIsLoginOpen(false)} className="absolute left-4 top-4 text-slate-500 hover:text-white"><X size={24}/></button>
            
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-600/20 text-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <User size={32} />
              </div>
              <h3 className="text-2xl font-black">أهلاً بك مجدداً</h3>
              <p className="text-slate-400 text-sm mt-1">سجل دخولك للوصول لكامل الميزات</p>
            </div>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); setIsLoginOpen(false); }}>
              <div className="space-y-2">
                <label className="text-sm text-slate-400 flex items-center gap-2"><Mail size={14}/> البريد الإلكتروني</label>
                <input type="email" placeholder="name@example.com" className="w-full bg-[#0f172a] border border-slate-700 p-3 rounded-xl focus:border-blue-500 outline-none text-sm" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-slate-400 flex items-center gap-2"><Lock size={14}/> كلمة المرور</label>
                <input type="password" placeholder="••••••••" className="w-full bg-[#0f172a] border border-slate-700 p-3 rounded-xl focus:border-blue-500 outline-none text-sm" required />
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 py-3.5 rounded-xl font-bold transition-all mt-6 shadow-lg shadow-blue-900/40">
                دخول
              </button>
            </form>
          </div>
        </div>
      )}

      {/* نافذة الرفع (Upload Modal) تبقى كما هي */}
      {isUploadOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in">
          <div className="bg-[#1e293b] w-full max-w-md rounded-3xl border border-slate-700 p-8 relative">
            <button onClick={() => setIsUploadOpen(false)} className="absolute left-4 top-4 text-slate-500"><X size={24}/></button>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Upload className="text-blue-500"/> رفع محتوى للمراجعة</h3>
            <p className="text-sm text-yellow-500 bg-yellow-500/10 p-3 rounded-xl mb-6">ملاحظة: سيتم مراجعة الملف من قبل الإدارة قبل النشر.</p>
            {/* بقية فورم الرفع هنا... */}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
            <p className="text-slate-500 text-[10px]">{item.desc}</p>
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="mt-10 p-6 text-center text-slate-600 text-[12px]">
        <p>© 2026 EdhHub - صنع بكل فخر لطلاب العلم</p>
      </footer>
    </div>
  )
}

export default App

