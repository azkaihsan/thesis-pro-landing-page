import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  FileText, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  GraduationCap, 
  Zap, 
  ArrowRight,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg">
              <FileText className="h-6 w-6 text-accent" />
            </div>
            <span className="font-bold text-xl text-primary tracking-tight">Thesis Pro</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#fitur" className="text-gray-600 hover:text-primary font-medium transition">Fitur</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-primary font-medium transition">Cara Kerja</a>
            <a href="#harga" className="text-gray-600 hover:text-primary font-medium transition">Harga</a>
          </div>

          {/* CTA & Login */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-primary font-semibold hover:underline">Masuk</a>
            <button className="bg-accent hover:bg-accent/90 text-white px-6 py-2.5 rounded-full font-bold shadow-lg hover:shadow-accent/30 transition-all transform hover:-translate-y-0.5">
              Coba 1 Bab Gratis
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="p-4 flex flex-col space-y-4">
              <a href="#fitur" onClick={() => setIsOpen(false)} className="text-gray-600 font-medium p-2 hover:bg-muted rounded-lg">Fitur</a>
              <a href="#how-it-works" onClick={() => setIsOpen(false)} className="text-gray-600 font-medium p-2 hover:bg-muted rounded-lg">Cara Kerja</a>
              <a href="#harga" onClick={() => setIsOpen(false)} className="text-gray-600 font-medium p-2 hover:bg-muted rounded-lg">Harga</a>
              <a href="#" onClick={() => setIsOpen(false)} className="text-primary font-bold p-2 hover:bg-muted rounded-lg">Masuk</a>
              <button className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-xl font-bold w-full transition-colors">
                Coba 1 Bab Gratis
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-background overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 z-10"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-primary leading-tight">
              Sudah Lelah Mikirin Konten, <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Jangan Mau Stres</span> Gara-gara Format.
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Ubah draf skripsi yang 'berdarah-darah' jadi format rapi standar kampusmu dalam hitungan detik. Fokus saja sama idemu, biar kami yang urus margin, typo, dan ejaannya. #AutoACC
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                Coba Perbaiki 1 Bab Gratis <ArrowRight className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-2 text-sm text-gray-500 px-4 py-2">
                <ShieldCheck className="h-5 w-5 text-green-500" />
                <span>Tanpa Kartu Kredit</span>
              </div>
            </div>

            <p className="text-sm text-gray-500 italic">
              "Sudah menyelamatkan IPK mahasiswa UI, UGM, ITB, dan 50+ kampus lainnya."
            </p>
          </motion.div>

          {/* Right Content - Visual Comparison */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mt-10 lg:mt-0"
          >
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-200/30 blur-3xl rounded-full -z-10"></div>

            <div className="relative flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-center">
              
              {/* Card 1: The Messy Draft */}
              <motion.div 
                whileHover={{ rotate: -8, scale: 1.05 }}
                className="w-64 h-80 bg-white rounded-xl shadow-lg border-2 border-dashed border-red-300 transform md:-rotate-6 md:translate-x-8 z-0 p-4 relative opacity-90 transition-all duration-300"
              >
                <div className="absolute -top-4 -left-4 bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold border border-red-200 flex items-center gap-1">
                  <XCircle className="h-3 w-3" /> REVISI MAYOR
                </div>
                <div className="space-y-3 opacity-50">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-20 bg-red-50 rounded w-full border border-red-100 flex items-center justify-center text-red-400 text-xs p-2 text-center">
                    Margin Error: 4cm needed
                  </div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                </div>
                <div className="absolute bottom-4 right-4 text-red-400">
                  <span className="text-4xl font-mono">:(</span>
                </div>
              </motion.div>

              {/* Card 2: The Clean Result */}
              <motion.div 
                whileHover={{ rotate: 0, scale: 1.05 }}
                className="w-72 h-96 bg-white rounded-xl shadow-2xl border border-green-100 transform md:rotate-3 z-10 p-6 relative transition-all duration-300"
              >
                <div className="absolute -top-5 -right-5 bg-green-500 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4" /> SIAP SIDANG
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-2">
                    <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                    <div className="text-[10px] text-gray-400">BAB I: PENDAHULUAN</div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-100 rounded w-full"></div>
                    <div className="h-3 bg-gray-100 rounded w-full"></div>
                    <div className="h-3 bg-gray-100 rounded w-5/6"></div>
                    <div className="h-3 bg-gray-100 rounded w-full"></div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                    <div className="flex gap-2 items-center mb-1">
                      <Sparkles className="h-3 w-3 text-accent" />
                      <span className="text-[10px] font-bold text-blue-800">AI Optimization</span>
                    </div>
                    <p className="text-[10px] text-blue-600 leading-tight">
                      Typo "analisa" diubah menjadi "analisis" sesuai KBBI. Spasi ganda dihapus.
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-6 right-6">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center border-2 border-green-500 shadow-inner">
                    <span className="text-green-700 font-bold text-xs -rotate-12 block border-2 border-green-700 px-1">ACC</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const TrustSection = () => {
  const universities = ["UI", "UGM", "ITB", "UNPAD", "ITS", "UB", "UNDIP", "UNAIR"];
  
  return (
    <section className="py-10 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
          Mendukung Template Standar Kampus Favoritmu:
        </h3>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {universities.map((uni, idx) => (
            <motion.div 
              whileHover={{ scale: 1.1, color: "var(--primary)" }}
              key={idx} 
              className="text-2xl font-black text-gray-400 font-serif cursor-default transition-colors duration-300"
            >
              {uni}
            </motion.div>
          ))}
          <span className="text-gray-400 font-medium self-center text-sm">+50 Lainnya</span>
        </div>
      </div>
    </section>
  );
};

const PainPoints = () => {
  const points = [
    {
      icon: <FileText className="h-8 w-8 text-red-500" />,
      title: "Format Berantakan",
      desc: "Pindah dari laptop A ke laptop B, margin lari semua. Daftar isi nggak lurus. Dosen ngamuk cuma gara-gara spasi."
    },
    {
      icon: <XCircle className="h-8 w-8 text-orange-500" />,
      title: "Typo Tak Terlihat",
      desc: "Salah ketik 'di' dipisah/disambung, istilah asing nggak miring. Hal kecil yang bikin coretan merah di mana-mana."
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-500" />,
      title: "Waktu Terbuang",
      desc: "Besok sidang, malah begadang ngurusin nomor halaman romawi vs angka. Harusnya fokus belajar materi!"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Musuh Terbesar Skripsi Bukan Dosen Killer, Tapi...</h2>
          <p className="text-gray-600">Masalah teknis sepele yang bikin mental breakdown.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {points.map((item, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={idx} 
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group"
            >
              <div className="mb-6 bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary">3 Langkah Menuju Auto-ACC</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 w-2/3 h-0.5 bg-gray-100 -z-10"></div>

          {/* Step 1 */}
          <div className="relative text-center group">
            <div className="w-24 h-24 mx-auto bg-blue-50 rounded-full flex items-center justify-center border-4 border-white shadow-lg mb-6 group-hover:bg-blue-100 transition-colors">
              <span className="text-3xl font-bold text-primary">1</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Paste & Panic</h3>
            <p className="text-gray-600 text-sm px-4">Copy teks dari draf kotormu yang penuh dosa formatting itu ke platform kami.</p>
          </div>

          {/* Step 2 */}
          <div className="relative text-center group">
            <div className="w-24 h-24 mx-auto bg-orange-50 rounded-full flex items-center justify-center border-4 border-white shadow-lg mb-6 group-hover:bg-orange-100 transition-colors">
              <Sparkles className="h-10 w-10 text-accent animate-pulse" />
            </div>
            <h3 className="text-xl font-bold mb-2">Magic Wash</h3>
            <p className="text-gray-600 text-sm px-4">AI Hybrid kami membersihkan format, benerin PUEBI, & cek sitasi.</p>
          </div>

          {/* Step 3 */}
          <div className="relative text-center group">
            <div className="w-24 h-24 mx-auto bg-green-50 rounded-full flex items-center justify-center border-4 border-white shadow-lg mb-6 group-hover:bg-green-100 transition-colors">
              <CheckCircle2 className="h-10 w-10 text-green-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Download & Smile</h3>
            <p className="text-gray-600 text-sm px-4">Unduh file .docx yang sudah ganteng sesuai template kampusmu.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section id="fitur" className="py-24 bg-primary text-white rounded-t-[3rem] relative z-20 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Bukan Sekadar Rapi-rapi</h2>
            <p className="text-blue-200 mb-8 text-lg">Kami paham kamu bukan cuma butuh dokumen bersih, tapi juga butuh ngerti kenapa itu salah biar bisa jawab pas sidang.</p>
            
            <div className="space-y-6">
              <div className="flex gap-4 group">
                <div className="bg-blue-800 p-3 rounded-lg h-fit group-hover:bg-accent transition-colors duration-300">
                  <GraduationCap className="text-orange-400 group-hover:text-white h-6 w-6 transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Local Compliance</h4>
                  <p className="text-blue-200 text-sm">Nggak perlu atur margin manual. Database kami tahu persis bedanya margin UI vs UGM.</p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="bg-blue-800 p-3 rounded-lg h-fit group-hover:bg-accent transition-colors duration-300">
                  <Zap className="text-orange-400 group-hover:text-white h-6 w-6 transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">The 'Why' Mode</h4>
                  <p className="text-blue-200 text-sm">Bukan cuma benerin, kami kasih tau KENAPA itu salah. Jadi kamu makin pinter dan siap debat sama penguji.</p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="bg-blue-800 p-3 rounded-lg h-fit group-hover:bg-accent transition-colors duration-300">
                  <Sparkles className="text-orange-400 group-hover:text-white h-6 w-6 transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Hybrid Engine</h4>
                  <p className="text-blue-200 text-sm">Gabungan ketepatan kode (Python) buat margin presisi dan keluwesan bahasa (AI) buat ejaan.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 p-8 rounded-2xl border border-white/20 backdrop-blur-sm shadow-2xl"
          >
            <div className="bg-white text-gray-800 p-4 rounded-lg shadow-lg mb-4">
              <div className="flex justify-between items-start mb-2">
                <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded font-bold">Original</span>
              </div>
              <p className="text-sm font-mono line-through text-gray-400">
                berdasar pada analisa diatas maka penulis menyimpulkan...
              </p>
            </div>
            
            <div className="flex justify-center mb-4">
              <ArrowRight className="text-orange-400 rotate-90 md:rotate-0 h-6 w-6" />
            </div>

            <div className="bg-green-50 text-gray-800 p-4 rounded-lg shadow-lg border border-green-200">
              <div className="flex justify-between items-start mb-2">
                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded font-bold">Thesis Pro Fix</span>
              </div>
              <p className="text-sm font-medium text-gray-800">
                <span className="text-green-600 bg-green-100 px-1 rounded">Berdasarkan</span> <span className="text-green-600 bg-green-100 px-1 rounded">analisis</span> di atas, penulis menyimpulkan...
              </p>
              <div className="mt-3 text-xs text-blue-600 border-t border-green-200 pt-2">
                💡 <strong>Catatan:</strong> Kata "analisa" tidak baku menurut KBBI. Gunakan "analisis".
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="harga" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">Investasi Seharga Sekali Ngopi</h2>
        <p className="text-gray-600 mb-12">Nggak perlu langganan bulanan yang bikin boncos. Aktifkan cuma pas kamu butuh (misal: H-7 deadline).</p>
        
        <motion.div 
          whileHover={{ y: -8 }}
          className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-3xl p-1 shadow-xl transition-transform duration-300 max-w-md mx-auto"
        >
          <div className="bg-white rounded-[20px] p-8 md:p-12 relative overflow-hidden h-full">
            
            {/* Ribbon */}
            <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-8 py-2 transform rotate-45 translate-x-8 translate-y-4 shadow-md">
              BEST VALUE
            </div>

            <h3 className="text-2xl font-bold text-gray-900">Panic Pass</h3>
            <div className="my-6">
              <span className="text-5xl font-extrabold text-primary">Rp 29.000</span>
              <span className="text-gray-500 font-medium"> / minggu</span>
            </div>
            
            <ul className="text-left space-y-4 mb-8 max-w-xs mx-auto text-gray-700">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" /> 
                <span>Unlimited Words Cleaning</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" /> 
                <span>Full Export Format Kampus</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" /> 
                <span>Penjelasan AI ("Why Mode")</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" /> 
                <span>Prioritas Support 24/7</span>
              </li>
            </ul>

            <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 transition-all transform hover:-translate-y-0.5">
              Aktifkan Panic Pass Sekarang
            </button>
            <p className="mt-4 text-xs text-gray-400">Pembayaran via QRIS, GoPay, OVO, ShopeePay</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [active, setActive] = useState<number | null>(null);

  const toggle = (i: number) => setActive(active === i ? null : i);

  const faqs = [
    {
      q: "Apakah data skripsi saya aman? Nanti dicuri gimana?",
      a: "Tenang bestie. Privasi adalah prioritas nomor 1. Dokumen kamu dienkripsi dan akan otomatis dihapus dari server kami setelah 24 jam. Kami nggak akan pernah menjual atau mempublikasikan karyamu."
    },
    {
      q: "Ini Joki Skripsi bukan sih?",
      a: "Bukan! Ini 100% legal. Kami cuma 'tukang bersih-bersih'. Ide, konten, dan penelitian tetap murni milikmu. Kami cuma bantu biar marginnya nggak lari dan bahasanya baku. Dosen malah seneng kalau skripsimu rapi."
    },
    {
      q: "Kalau format kampusku aneh banget gimana?",
      a: "Hybrid Engine kami cukup fleksibel. Tapi kalau ada format super spesifik yang lolos, tim support kami siap bantu manual adjustment gratis buat pemegang Panic Pass."
    }
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">Yang Sering Ditanyain (FAQ)</h2>
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-200">
              <button 
                onClick={() => toggle(idx)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-gray-800 pr-8">{item.q}</span>
                <span className="shrink-0">
                  {active === idx ? <ChevronUp className="text-accent h-5 w-5" /> : <ChevronDown className="text-gray-400 h-5 w-5" />}
                </span>
              </button>
              <AnimatePresence>
                {active === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Masih Ragu? <br className="hidden md:block"/> Coba Aja Dulu, Gratis Kok!
        </h2>
        <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">
          Nggak ada rugi, nggak butuh kartu kredit. Cukup upload 1 bab, lihat hasilnya dalam hitungan detik, baru putuskan.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-accent/20 transition-all transform hover:-translate-y-1">
            Perbaiki Bab 1 Sekarang
          </button>
          <button className="bg-transparent border-2 border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all">
            Lihat Contoh Hasil
          </button>
        </div>
        
        <p className="mt-8 text-sm text-blue-300 opacity-80 flex items-center justify-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          Bergabung dengan 10.000+ pejuang skripsi yang sudah wisuda lebih cepat.
        </p>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-12 border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-blue-400/60">
          <p>&copy; {new Date().getFullYear()} Thesis Pro. Dibuat dengan sepenuh hati untuk Pejuang Skripsi Indonesia.</p>
        </div>
      </div>
    </footer>
  );
};

export default function LandingPage() {
  return (
    <div className="min-h-screen font-sans antialiased bg-background text-foreground scroll-smooth selection:bg-accent/30">
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <PainPoints />
        <HowItWorks />
        <Features />
        <Pricing />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}