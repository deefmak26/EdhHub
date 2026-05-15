import React from 'react';
import { Search, PlusCircle, BookOpen, User, Library, PlayCircle, Mic2, ClipboardCheck, Gamepad2 } from 'lucide-react';

export default function App() {
  const categories = [
    { title: 'الدراسة', desc: 'محاضرات وملخصات', icon: <BookOpen color="#60a5fa" /> },
    { title: 'المكتبة', desc: 'كتب ومراجع PDF', icon: <Library color="#c084fc" /> },
    { title: 'الفيديوهات', desc: 'شروحات مرئية', icon: <PlayCircle color="#f87171" /> },
    { title: 'الصوتيات', desc: 'محاضرات مسموعة', icon: <Mic2 color="#4ade80" /> },
    { title: 'الاختبارات', desc: 'بنك الأسئلة', icon: <ClipboardCheck color="#facc15" /> },
    { title: 'الترفيه', desc: 'معلومات منوعة', icon: <Gamepad2 color="#f472b6" /> },
  ];

  // ستايل الحاوية الرئيسية لضمان المسافات
  const containerStyle = {
    padding: '0 24px',
    maxWidth: '1000px',
    margin: '0 auto',
    backgroundColor: '#050a15',
    minHeight: '100vh',
    direction: 'rtl'
  };

  return (
    <div style={containerStyle}>
      {/* الهيدر */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px', borderBottom: '1px solid #1e293b', marginBottom: '40px' }}>
        <div style={{ fontSize: '24px', fontWeight: '900', color: '#2563eb', fontStyle: 'italic' }}>
          EdhHub <span style={{ color: '#ffffff', fontSize: '12px' }}>FIX</span>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <button style={{ backgroundColor: '#2563eb', border: 'none', padding: '8px', borderRadius: '8px' }}><PlusCircle color="white" size={20}/></button>
          <div style={{ width: '40px', height: '40px', backgroundColor: '#1e293b', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb', fontWeight: 'bold', border: '1px solid #334155' }}>ع</div>
        </div>
      </nav>

      {/* المحتوى */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '900', marginBottom: '16px', color: 'white' }}>مركز التعليم <span style={{ color: '#2563eb' }}>الذكي</span></h1>
        <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.6' }}>منصة شاملة للملفات الطبية والمحاضرات التفاعلية</p>
      </div>

      {/* شريط البحث */}
      <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px', padding: '12px', display: 'flex', alignItems: 'center', marginBottom: '48px' }}>
        <Search color="#64748b" size={20} style={{ marginLeft: '12px' }} />
        <input type="text" placeholder="ابحث عن محاضرات..." style={{ background: 'none', border: 'none', outline: 'none', color: 'white', width: '100%', textAlign: 'right' }} />
      </div>

      {/* الشبكة */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', paddingBottom: '80px' }}>
        {categories.map((item, index) => (
          <div key={index} style={{ backgroundColor: '#0f172a', padding: '24px', borderRadius: '32px', border: '1px solid #1e293b', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '12px', borderRadius: '12px' }}>{item.icon}</div>
            <h3 style={{ fontSize: '14px', fontWeight: 'bold', color: 'white', margin: '0' }}>{item.title}</h3>
            <p style={{ fontSize: '10px', color: '#64748b', margin: '0' }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
