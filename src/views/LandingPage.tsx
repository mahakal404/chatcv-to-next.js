'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Sparkles, Layout, Download, Zap, Wand2, ChevronDown, CheckCircle2, ArrowRight, ShieldCheck, Globe, HelpCircle, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import RNEXTSignature from '@/components/branding/RNEXTSignature';
import AnimatedHeroMockup from '@/components/AnimatedHeroMockup';

const desktopLogo = '/chatcv_desk.webp';

export default function LandingPage() {
  const { user } = useAuth();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Scroll Down
      } else {
        setIsVisible(true);  // Scroll Up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const faqs = [
    {
      q: "Is this AI resume builder free?",
      a: "Yes! ChatCV offers a completely free online resume builder. You can create, edit, and export your professional CV to PDF without any hidden costs or watermarks."
    },
    {
      q: "What is an ATS-friendly resume?",
      a: "An ATS-friendly resume is designed to be easily read by Applicant Tracking Systems used by recruiters. ChatCV uses professional templates that ensure your data is structured correctly for these systems, increasing your chances of getting an interview."
    },
    {
      q: "Can I export my resume to PDF?",
      a: "Absolutely. Once you're happy with your CV, you can instantly export it to a high-quality, print-ready PDF format that maintains perfect formatting across all devices."
    },
    {
      q: "How does the AI CV Maker work?",
      a: "Our AI CV Maker uses advanced language models to help you write impactful bullet points, summarize your experience, and even extract details from your existing documents or LinkedIn profile through a simple chat interface."
    }
  ];

  return (
    <div className="min-h-screen bg-magic-gradient font-sans">
      {/* Navbar */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 bg-white/80 backdrop-blur-md border-b border-gray-100 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container mx-auto px-4 md:px-6 py-4 flex flex-row justify-between items-center w-full">
          <Link href="/" className="flex items-center flex-shrink-0">
            <img src={desktopLogo} alt="ChatCV Logo" className="h-10 md:h-16 w-auto object-contain" />
          </Link>
          <div className="flex items-center justify-end gap-2 sm:gap-4">
            {!user && (
              <Link href="/login" className="text-sm md:text-base font-medium text-slate-600 hover:text-slate-900 transition-all whitespace-nowrap">
                Sign In
              </Link>
            )}
            <Link 
              href={user ? "/dashboard" : "/builder"} 
              className="bg-brand-dark text-white px-3 py-1.5 md:px-5 md:py-2.5 rounded-full text-sm md:text-base font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 whitespace-nowrap"
            >
              {user ? 'Dashboard' : 'Get Started'}
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      {/* Hero Section */}
      <section className="px-8 py-20 lg:py-32 flex flex-col items-center text-center max-w-5xl mx-auto pt-32 lg:pt-40 relative">
        {/* Ambient Glow Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[600px] bg-gradient-to-r from-purple-500/20 via-pink-500/10 to-blue-500/20 blur-[120px] -z-10 rounded-full" />
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="relative z-10 w-full"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 30, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } } }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-bold uppercase tracking-widest mb-8 border border-brand-purple/20">
              <Sparkles className="w-3 h-3" />
              AI-Powered CV Maker & Resume Builder
            </div>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 30, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } } }}>
            <h1 className="text-6xl lg:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8 drop-shadow-sm">
              Free AI Resume Builder & <span className="text-magic-gradient">ATS-Friendly</span> CV Maker
            </h1>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 30, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } } }}>
            <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              Stop struggling with formatting and writer's block. Build a professional, ATS-friendly resume in minutes using our intuitive <strong>Free Online Resume</strong> builder or just by chatting with our AI.
            </p>
          </motion.div>

          <motion.div 
            variants={{ hidden: { opacity: 0, y: 30, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } } }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link 
              href="/builder" 
              className="bg-button-gradient text-white px-10 py-5 rounded-2xl text-lg font-black flex items-center gap-3 hover:scale-105 transition-all magic-button-glow hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]"
            >
              <Sparkles className="w-6 h-6" />
              Magic AI Builder
            </Link>
            <Link 
              href="/builder" 
              className="bg-brand-dark text-white px-10 py-5 rounded-2xl text-lg font-black flex items-center gap-3 hover:scale-105 transition-all shadow-xl shadow-slate-900/20"
            >
              <FileText className="w-6 h-6" />
              Standard (Manual)
            </Link>
          </motion.div>

          {/* Animated Resume Mockup Section */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 30, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } } }}
          >
            <AnimatedHeroMockup />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="px-8 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Powerful Features for Your Career</h2>
          <p className="text-slate-500 font-medium">Everything you need in a professional CV Maker</p>
        </motion.div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: Zap, 
              color: 'bg-indigo-100 text-indigo-600',
              title: "AI Content Generation", 
              desc: "Chat naturally with our AI assistant. It extracts your skills and crafts compelling bullet points automatically." 
            },
            { 
              icon: Layout, 
              color: 'bg-purple-100 text-purple-600',
              title: "Live A4 Preview", 
              desc: "See exactly what your resume looks like as you type. Real-time updates with perfect A4 proportions." 
            },
            { 
              icon: Download, 
              color: 'bg-pink-100 text-pink-600',
              title: "Instant PDF Export", 
              desc: "One click download to a high-quality PDF. No watermarks, no paywalls. Ready to send to recruiters." 
            }
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.5, ease: "easeOut" }}
              className="p-10 rounded-[32px] bg-white shadow-2xl shadow-slate-200/50 flex flex-col items-center text-center group hover:scale-[1.02] transition-all"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${feature.color} group-hover:scale-110 transition-all`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-8 py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">How It Works</h2>
            <p className="text-slate-500 font-medium">Create your professional CV in three simple steps</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0" />
            {[
              { step: "01", title: "Choose Your Builder", desc: "Select between our Magic AI Chat builder or our structured Standard editor for full control." },
              { step: "02", title: "Chat or Fill Details", desc: "Use our AI to generate impactful content or manually enter your professional history into our templates." },
              { step: "03", title: "Export to PDF", desc: "Download your ATS-optimized, high-quality PDF resume instantly and start applying to your dream jobs." }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.15, duration: 0.5, ease: "easeOut" }}
                className="relative z-10 flex flex-col items-center text-center bg-white p-8 rounded-[32px] shadow-xl shadow-slate-200/30 border border-slate-100"
              >
                <div className="w-12 h-12 rounded-full bg-brand-purple text-white flex items-center justify-center font-black text-lg mb-6 shadow-lg shadow-brand-purple/20">
                  {item.step}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-8 py-24 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Frequently Asked Questions</h2>
          <p className="text-slate-500 font-medium">Everything you need to know about our Free AI Resume Builder</p>
        </motion.div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.5, ease: "easeOut" }}
              className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all hover:border-brand-purple/30"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors"
              >
                <span className="font-bold text-slate-900">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed font-medium border-t border-slate-50 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full py-20 px-4 mt-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl shadow-2xl relative overflow-hidden mb-12 max-w-6xl mx-auto"
      >
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Ready to land your dream job?
          </h2>
          <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl">
            Join thousands of professionals who have successfully built their ATS-friendly resumes with ChatCV. It's free, fast, and secure.
          </p>
          <button 
            onClick={() => router.push(user ? '/dashboard' : '/builder')}
            className="px-10 py-5 bg-white text-blue-700 font-bold rounded-full text-lg hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-xl flex items-center gap-2"
          >
            <span className="whitespace-nowrap">Get Started for Free</span>
            <span>🚀</span>
          </button>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 pt-20 pb-12 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center mb-6 hover:opacity-90 transition-opacity">
              <img src={desktopLogo} alt="ChatCV Logo" className="h-10 w-auto object-contain" />
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed font-medium mb-6">
              The world's most advanced <strong>Free AI Resume Builder</strong>. Create professional templates and ATS-friendly CVs in minutes.
            </p>
            <div className="flex gap-4">
              <Globe className="w-5 h-5 text-slate-400 hover:text-brand-purple cursor-pointer transition-colors" />
              <ShieldCheck className="w-5 h-5 text-slate-400 hover:text-brand-purple cursor-pointer transition-colors" />
              <HelpCircle className="w-5 h-5 text-slate-400 hover:text-brand-purple cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest mb-6">Product</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-500">
              <li><Link href="/ai-builder" className="hover:text-brand-purple transition-colors">Magic AI Builder</Link></li>
              <li><Link href="/dashboard" className="hover:text-brand-purple transition-colors">Standard Editor</Link></li>
              <li><Link href="/" className="hover:text-brand-purple transition-colors">Professional Templates</Link></li>
              <li><Link href="/" className="hover:text-brand-purple transition-colors">ATS-Friendly CV Maker</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest mb-6">Resources</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-500">
              <li><a href="#" className="hover:text-brand-purple transition-colors">Resume Blog</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Career Guides</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">CV Examples</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Help Center</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest mb-6">Legal</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-500">
              <li><a href="#" className="hover:text-brand-purple transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">GDPR</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-start w-full pt-8 mt-12 border-t border-gray-200 gap-2 md:gap-4">
          <p className="text-sm text-gray-500 font-medium text-center md:text-left">
            © {new Date().getFullYear()} ChatCV. All rights reserved.
          </p>
          
          <RNEXTSignature />
        </div>
      </footer>
    </div>
  );
}
