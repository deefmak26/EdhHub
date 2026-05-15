import React from 'react'
import './index.css'
import { 
  BookOpen, 
  Library, 
  PlayCircle, 
  Mic2, 
  ClipboardCheck, 
  Gamepad2, 
  Search, 
  PlusCircle,
  Menu
} from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen text-slate-100 font-sans text-right" dir="rtl" style={{backgroundColor: '#050a15', color: '#e2e8f0'}}>
      
      {/* Header */}
      <nav className="flex justify-between items-center p-4 border-b border-slate-800 bg-[#0f172a]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="text-2xl font-black text-blue-500 tracking-tighter">EdhHub</div>
        <div className="flex gap-3" dir="ltr">
          <button style={{backgroundColor: '#2563eb', color: 'white', padding: '8px 16px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 'bold'}}>
             <PlusCircle size={18} /> رفع محتوى
          </button>
          <button style={{border: '1px solid #334155', padding: '8px', borderRadius: '10px'}}><Menu size={20}/></button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-12 px-6 text-center">
        <h1 className="text-4xl font-black mb-4 leading-tight">مركز التعليم <span className="text-blue-500 underline decoration-blue-800">الذكي</span></h1>
        <p className="text-slate-400 text-sm mb-8">منصة شاملة للملفات الطبية والمحاضرات التفاعلية</p>
        
        <div className="max-w-md mx-auto relative">
          <input 
            type="text" 
            placeholder="ابحث عن محاضرات، كتب، أو مراجع..." 
            style={{width: '100%', padding: '16px 45px 16px 20px', borderRadius: '16px', backgroundColor: '#1e293b', border: '1px solid #334155', color: 'white', textAlign: 'right', outline: 'none'}}
          />
          <Search className="absolute right-4 top-4 text-slate-500" size={20} />
        </div>
      </header>

      {/* Categories Grid */}
      <main className="max-w-6xl mx-auto p-4" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px'}}>
        {[
          { title: 'الدراسة', desc: 'محاضرات وملخصات', icon: <BookOpen className="text-blue-400" /> },
          { title: 'المكتبة', desc: 'كتب ومراجع PDF', icon: <Library className="text-purple-400" /> },
          { title: 'الفيديوهات', desc: 'شروحات مرئية', icon: <PlayCircle className="text-red-400" /> },
          { title: 'الصوتيات', desc: 'محاضرات مسموعة', icon: <Mic2 className="text-green-400" /> },
          { title: 'الاختبارات', desc: 'بنك الأسئلة', icon: <ClipboardCheck className="text-yellow-400" /> },
          { title: 'الترفيه', desc: 'معلومات منوعة', icon: <Gamepad2 className="text-pink-400" /> },
        ].map((item, index) => (
          <div key={index} style={{backgroundColor: '#111827', padding: '20px', borderRadius: '24px', border: '1px solid #1e293b', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px'}}>
            <div style={{backgroundColor: '#1e293b', padding: '12px', borderRadius: '16px'}}>
              {item.icon}
            </div>
            <h3 className="text-lg font-bold">{item.title}</h3>
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
