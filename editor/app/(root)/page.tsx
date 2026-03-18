// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { ArrowUpRight } from "lucide-react";
// import { Button } from "@/components/ui/button";

// // "use client";
// // import {ThemeToggle} from "@/components/ui/theme-toggle";

// const navLinks = ["Features", "Pricing", "Support"];

// export default function Home() {
//   const [expanded, setExpanded] = useState(false);


//   return (
//     <div className="">
//       {/* <ThemeToggle /> */}
//       <header className="relative z-10 py-4 md:py-6">
//         <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          
//           {expanded && (
//             <nav>
//               <div className="px-1 py-8">
//                 <div className="grid gap-y-7">
//                   {navLinks.map((label) => (
//                     <a
//                       key={label}
//                       href="#"
//                       className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded hover:bg-gray-50 font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
//                     >
//                       {label}
//                     </a>
//                   ))}
//                   <a
//                     href="/dashboard"
//                     className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
//                   >
//                     Try for free
//                   </a>
//                 </div>
//               </div>
//             </nav>
//           )}
//         </div>
//       </header>

//       <section className="relative py-12 sm:py-16 lg:pb-40">
//         <div className="absolute bottom-0 right-0 overflow-hidden">
//           <img
//             className="w-full h-full origin-bottom-right transform scale-150 lg:w-auto lg:mx-auto lg:object-cover lg:scale-75"
//             src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/background-pattern.png"
//             alt="Background pattern"
//           />
//         </div>

//         <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 gap-y-4 lg:items-center lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
//             <div className="text-center xl:col-span-1 lg:text-left md:px-16 lg:px-0 xl:pr-20">
//       <h1 className=" z-20 text-6xl mt-5 font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-red-500 to-pink-500 dark:from-rose-400 dark:via-red-400 dark:to-pink-400 tracking-tight leading-[1.3] ">
//                 An editor that helps you write clean codes.
//               </h1>
// <p className="mt-2 text-lg text-center text-gray-600 dark:text-gray-400 px-5 py-10 max-w-2xl">                 {/* <p className="mt-2 text-lg text-center text-gray-600 dark:text-gray-400 px-5 py-10 max-w-2xl"> */}
//         Rareblock Editor is a powerful and intelligent code editor that enhances
//         your coding experience with advanced features and seamless integration.
//         It is designed to help you write, debug, and optimize your code
//         efficiently.
//       </p> 

//               <a
//                 href="/dashboard"
//                 className="inline-flex px-8 py-4 mt-8 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded sm:mt-10 font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
//               >
//                 Try our free editor
//               </a>

//               <div className="mt-8 sm:mt-16">
//                 <div className="flex items-center justify-center lg:justify-start space-x-2">
//                   {[...Array(5)].map((_, index) => (
//                     <svg
//                       key={index}
//                       className="w-5 h-5 text-[#FDB241]"
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>
//                   ))}
//                 </div>

//                 <blockquote className="mt-6">
//                   <p className="text-lg font-bold text-gray-900 font-pj">Best code editor in market!</p>
//                   <p className="mt-3 text-base leading-7 text-gray-400 font-inter">
//                     Consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu, aliquam nulla tincidunt gravida. Cursus convallis dolor semper pretium ornare.
//                   </p>
//                 </blockquote>

//                 <div className="flex items-center justify-center mt-3 lg:justify-start">
//                   <img
//                     className="flex-shrink-0 object-cover w-6 h-6 rounded-full"
//                     src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/avatar-female.png"
//                     alt="Reviewer"
//                   />
//                   <p className="ml-2 text-base font-bold text-gray-900 font-pj">Denny Jones</p>
//                 </div>
//               </div>
//             </div>

//             <div className="xl:col-span-1">
//               <img
//                 className="w-full mx-auto"
//                 src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/illustration.png"
//                 alt="Hero illustration"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
       
  
//     </div>
//   );
// }
"use client";
import UserButton from "../../features/auth/components/user-button";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// "use client";
// import {ThemeToggle} from "@/components/ui/theme-toggle";

const navLinks = ["Features", "Use-Cases", "Pricing", "Docs"];

export default function Home() {
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState("api");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#02050b] text-slate-300 font-sans selection:bg-cyan-500/30 overflow-hidden relative">
      
      {/* =========================================
          GLOBAL BACKGROUND & ANIMATIONS 
          ========================================= */}
      
      {/* 1. Subtle Animated Grid */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          animation: 'slideGrid 60s linear infinite',
        }}
      ></div>

      {/* 2. Ambient Slow Breathing Glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none z-0">
        <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px] animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute top-[40%] left-[5%] w-[500px] h-[500px] bg-[#1a2b3c]/30 rounded-full blur-[150px] animate-[pulse_10s_ease-in-out_infinite_alternate]"></div>
        <div className="absolute bottom-[-10%] right-[20%] w-[700px] h-[500px] bg-cyan-900/20 rounded-full blur-[150px] animate-[pulse_12s_ease-in-out_infinite]"></div>
      </div>

      {/* 3. Floating Particles (CSS only) */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {[...Array(15)].map((_, i) => {
            // Seeded "random" values based on index - same on server and client
            const seed = (num: number, index: number) => {
              const x = Math.sin(index * 12.9898 + num * 78.233) * 43758.5453;
              return x - Math.floor(x);
            };
            
            return (
              <div 
                key={i}
                className="absolute rounded-full bg-cyan-400/20 animate-[ping_7s_cubic-bezier(0,0,0.2,1)_infinite]"
                style={{
                  top: `${seed(1, i) * 100}%`,
                  left: `${seed(2, i) * 100}%`,
                  width: `${seed(3, i) * 4 + 1}px`,
                  height: `${seed(4, i) * 4 + 1}px`,
                  animationDelay: `${seed(5, i ) * 5}s`,
                  animationDuration: `${seed(6, i) * 10 + 5}s`
                }}
              ></div>
            );
          })}
        </div>
      )}

      {/* Inline style for grid animation since we can't edit tailwind config */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideGrid { from { background-position: 0 0; } to { background-position: 100px 100px; } }
      `}} />

      {/* =========================================
          HEADER 
          ========================================= */}
      <header className="relative z-50 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl border-b border-white/5 pb-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-white text-[#0A0D14] flex items-center justify-center font-bold text-xl shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform">
                R
              </div>
              <span className="text-white font-bold text-xl tracking-tight">Rareblock</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-full p-1 backdrop-blur-md">
              <a href="#" className="px-5 py-2 text-sm font-medium text-white bg-white/10 rounded-full shadow-sm">
                Home
              </a>
              {navLinks.map((label) => (
                <a key={label} href={`#${label.toLowerCase()}`} className="px-5 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors rounded-full hover:bg-white/5">
                  {label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
             <UserButton/>
            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button onClick={() => setExpanded(!expanded)} className="p-2 text-slate-400 hover:text-white focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {expanded ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
                </svg>
              </button>
            </div>
          </div>

          {expanded && (
            <div className="md:hidden mt-4 p-4 bg-[#111622]/90 backdrop-blur-xl border border-white/10 rounded-2xl absolute left-4 right-4 z-50 shadow-2xl">
              <div className="flex flex-col space-y-1">
                <a href="#" className="px-4 py-3 text-sm font-medium text-white bg-white/5 rounded-xl">Home</a>
                {navLinks.map((label) => (
                  <a key={label} href={`#${label.toLowerCase()}`} className="px-4 py-3 text-sm font-medium text-slate-400 rounded-xl hover:bg-white/5 hover:text-white transition-colors">
                    {label}
                  </a>
                ))}
                <div className="pt-4 mt-2 border-t border-white/10">
                  <a href="/dashboard" className="flex w-full items-center justify-center px-6 py-3 text-sm font-semibold text-[#0A0D14] transition-all duration-200 bg-cyan-400 rounded-xl hover:bg-cyan-300">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* =========================================
          HERO SECTION 
          ========================================= */}
      <section className="relative pt-12 sm:pt-20 pb-20 lg:pt-20 lg:pb-32 z-10">
        <div className="container mx-auto px-4 max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-16 lg:items-center lg:grid-cols-2 lg:gap-x-16">
            
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start lg:pr-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-[11px] font-bold tracking-widest uppercase mb-6 border border-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.15)] group hover:bg-cyan-500/20 transition-colors cursor-pointer">
                <span className="flex h-4 w-4 items-center justify-center">
                  <span className="absolute inline-flex h-2 w-2 rounded-full bg-cyan-400 opacity-75 animate-ping"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-400"></span>
                </span>
                BEST CODE EDITOR
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-bold text-white tracking-tight leading-[1.05] mb-6 drop-shadow-lg">
                An editor that helps you write clean codes.
              </h1>
              <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Rareblock Editor is a powerful and intelligent code editor that enhances your coding experience with advanced features and seamless integration.
              </p> 
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 w-full sm:w-auto">
                <a href="/dashboard" className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 text-sm font-bold text-[#0A0D14] transition-all duration-200 bg-cyan-400 border border-transparent rounded-full hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] focus:outline-none">
                  Get Started
                  <span className="ml-2 w-5 h-5 rounded-full bg-cyan-900/10 flex items-center justify-center">
                    <svg className="w-3 h-3 text-[#0A0D14]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                  </span>
                </a>
                <a href="#video" className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 bg-transparent rounded-full hover:text-cyan-400 focus:outline-none group">
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 group-hover:bg-cyan-500/20 transition-colors shadow-inner">
                    <svg className="w-3 h-3 text-white group-hover:text-cyan-400" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                  </span>
                  Play Video
                </a>
              </div>
            </div>

            {/* Hero Right - 3D Models & Mockup */}
            <div className="relative w-full max-w-xl mx-auto mt-10 lg:mt-0 xl:max-w-2xl pl-0 lg:pl-10" style={{ perspective: '1200px' }}>
              {/* Floating Spheres */}
              <div className="absolute -top-16 -right-8 w-28 h-28 z-0 animate-[bounce_6s_ease-in-out_infinite]">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-300 via-cyan-600 to-[#0A0D14] shadow-[0_0_50px_rgba(34,211,238,0.4)] border border-cyan-300/20 overflow-hidden relative" style={{ transform: 'rotateX(20deg) rotateY(-20deg) translateZ(-50px)' }}>
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-white/70 mix-blend-overlay"></div>
                </div>
              </div>
              <div className="absolute top-1/4 -left-8 sm:-left-20 z-30 animate-[bounce_5s_ease-in-out_infinite]" style={{ animationDelay: '1s' }}>
                <div className="bg-[#111622]/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-500 min-w-[190px] cursor-pointer hover:!transform-none" style={{ transform: 'rotateX(15deg) rotateY(15deg) translateZ(30px)' }}>
                  <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2">
                    <span className="text-[10px] text-slate-400 font-mono tracking-wider">compiler.ts</span>
                  </div>
                  <div className="space-y-1.5 font-mono text-[11px] leading-relaxed">
                    <div className="text-cyan-400"><span className="text-pink-500">import</span> &#123; core &#125; <span className="text-pink-500">from</span> <span className="text-amber-200">'@engine'</span>;</div>
                    <div className="text-slate-300">core.<span className="text-blue-400">compile</span>(<span className="text-amber-200">'app'</span>);</div>
                    <div className="text-emerald-400 flex items-center gap-2 mt-2 pt-2 border-t border-white/5">
                      <span className="animate-pulse">▶</span> Success (12ms)
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Window */}
              <div className="relative bg-gradient-to-b from-white/10 to-white/0 rounded-3xl p-[1px] shadow-2xl overflow-hidden group border border-white/10 transition-transform duration-700 hover:-translate-y-2 z-10">
                <div className="relative h-full bg-[#111622] rounded-[23px] overflow-hidden flex flex-col">
                  <div className="flex items-center px-4 py-3 bg-[#0d121c] border-b border-white/5">
                    <div className="flex space-x-2"><div className="w-3 h-3 rounded-full bg-rose-500/80"></div><div className="w-3 h-3 rounded-full bg-amber-500/80"></div><div className="w-3 h-3 rounded-full bg-emerald-500/80"></div></div>
                  </div>
                  
                  <div className="relative flex-1 bg-[#0f141f] p-4 lg:p-6 min-h-[400px]">
                    {/* Placeholder for Hero image - REPLACE IN PUBLIC FOLDER */}
                    <img
                      className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-screen"
                      src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/illustration.png"
                      alt="Hero illustration"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-transparent to-[#0A0D14]/20 pointer-events-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          LOGOS / TRUSTED BY 
          ========================================= */}
      <section className="relative py-12 border-y border-white/5 bg-white/[0.01] z-10">
        <div className="container mx-auto px-4 max-w-7xl sm:px-6 lg:px-8">
          <p className="text-center text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase mb-8">
            Our platform <span className="text-white">trusted</span> by startups and big companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xl font-bold font-serif text-white tracking-widest">MERCK</span>
            <span className="text-xl font-bold text-white flex items-center"><span className="text-cyan-400 mr-2 bg-white/10 rounded px-1.5 inline-block">M</span> miro</span>
            <span className="text-xl font-bold text-white uppercase tracking-wider">Adobe</span>
            <span className="text-2xl font-bold text-white tracking-tight">HSBC</span>
            <span className="text-xl font-bold text-white">stripe</span>
          </div>
        </div>
      </section>

      {/* =========================================
          DOCUMENTATION SECTION 1: MAIN FEATURES 
          ========================================= */}
      <section id="features" className="relative py-20 lg:py-32 z-10">
        <div className="container mx-auto px-4 max-w-7xl sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4 border border-cyan-500/20">
              Main Features
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Empower Workflow With Intuitive Chat Logic
            </h2>
            <p className="text-lg text-slate-400">
              No more clunky tools / complex setups based and deploy your logic securely.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Feature Image Area (User to replace in public folder) */}
            <div className="relative p-1 rounded-3xl bg-gradient-to-tr from-white/5 to-cyan-500/20 shadow-2xl group">
              <div className="bg-[#111622] rounded-[22px] overflow-hidden p-2 relative h-[350px] lg:h-[500px]">
                {/* 
                  TODO: ADD YOUR IMAGE HERE 
                  Save your image in the public folder as: /images/doc-workflow.png
                */}
                <img 
                  src="/images/doc-workflow.png" 
                  alt="Workflow logic visualization" 
                  className="w-full h-full object-cover rounded-xl"
                  onError={(e) => {
                    // Fallback visual if image doesn't exist yet
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                
                {/* Fallback Glass Placeholder (shows if image not found) */}
                <div className="hidden absolute inset-0 m-2 rounded-xl border-2 border-dashed border-white/10 bg-white/5 backdrop-blur-sm flex-col items-center justify-center text-slate-500 text-sm">
                  <svg className="w-10 h-10 mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  <span className="font-mono">public/images/doc-workflow.png</span>
                  <span className="text-[10px] mt-1 text-slate-600">Suggested Size: 800x600</span>
                </div>
              </div>

              {/* Decorative abstract elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl"></div>
            </div>

            {/* Documentation text / Tabs */}
            <div className="space-y-8">
              <div className="flex flex-col gap-6">
                
                <div 
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${activeTab === 'api' ? 'bg-white/5 border-cyan-500/30 shadow-[0_0_20px_rgba(34,211,238,0.1)]' : 'bg-transparent border-transparent hover:bg-white/5'}`}
                  onClick={() => setActiveTab('api')}
                >
                  <h3 className="text-xl font-bold text-white flex items-center mb-3">
                    <span className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center mr-3 text-sm">01</span>
                    Response Customization
                  </h3>
                  <p className="text-slate-400 pl-11 text-sm leading-relaxed">
                    Customize every response with rich text, media, and formatting giving your clarity, structure, and personality straight from the editor.
                  </p>
                </div>

                <div 
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${activeTab === 'logic' ? 'bg-white/5 border-cyan-500/30 shadow-[0_0_20px_rgba(34,211,238,0.1)]' : 'bg-transparent border-transparent hover:bg-white/5'}`}
                  onClick={() => setActiveTab('logic')}
                >
                  <h3 className="text-xl font-bold text-white flex items-center mb-3">
                    <span className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center mr-3 text-sm">02</span>
                    Conversation Paths
                  </h3>
                  <p className="text-slate-400 pl-11 text-sm leading-relaxed">
                    Easily build branching conversation logic, adapts to user input & guides them through dynamic, goal-based flows effortlessly.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          DOCUMENTATION SECTION 2: INTEGRATIONS GRID 
          ========================================= */}
      <section className="relative py-20 bg-[#0c1018] z-10 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-7xl sm:px-6 lg:px-8">
          
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4 border border-cyan-500/20">
                Integration
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Connect To Other Platforms
              </h2>
              <p className="text-slate-400 mt-4">
                Deploy your editors to platforms like WhatsApp, Telegram, Discord, or similar platforms instantly and securely.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Integration Card 1 */}
            <div className="bg-[#111622] rounded-3xl p-6 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 group">
              <div className="h-[200px] w-full bg-[#161c27] rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center border border-white/5">
                {/* TODO: Image Placeholder */}
                <img src="/images/int-whatsapp.png" className="w-full h-full object-cover hidden" onLoad={(e) => e.target.classList.remove('hidden')} />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500">
                   <div className="w-12 h-12 rounded-full bg-white/5 mb-3 flex items-center justify-center">
                     <span className="text-emerald-400 text-xl font-bold">W</span>
                   </div>
                   <span className="font-mono text-xs">/images/int-whatsapp.png</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-white flex items-center">
                <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 shadow-[0_0_8px_theme(colors.emerald.400)]"></span> WhatsApp Sync
              </h3>
            </div>

            {/* Integration Card 2 */}
            <div className="bg-[#111622] rounded-3xl p-6 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 group">
              <div className="h-[200px] w-full bg-[#161c27] rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center border border-white/5">
                {/* TODO: Image Placeholder */}
                <img src="/images/int-telegram.png" className="w-full h-full object-cover hidden" onLoad={(e) => e.target.classList.remove('hidden')} />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500">
                   <div className="w-12 h-12 rounded-full bg-white/5 mb-3 flex items-center justify-center">
                     <span className="text-blue-400 text-xl font-bold">T</span>
                   </div>
                   <span className="font-mono text-xs">/images/int-telegram.png</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-white flex items-center">
                <span className="w-2 h-2 rounded-full bg-blue-400 mr-2 shadow-[0_0_8px_theme(colors.blue.400)]"></span> Telegram Bot
              </h3>
            </div>

            {/* Integration Card 3 */}
            <div className="bg-[#111622] rounded-3xl p-6 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 group">
              <div className="h-[200px] w-full bg-[#161c27] rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center border border-white/5">
                {/* TODO: Image Placeholder */}
                <img src="/images/int-discord.png" className="w-full h-full object-cover hidden" onLoad={(e) => e.target.classList.remove('hidden')} />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500">
                   <div className="w-12 h-12 rounded-full bg-white/5 mb-3 flex items-center justify-center">
                     <span className="text-indigo-400 text-xl font-bold">D</span>
                   </div>
                   <span className="font-mono text-xs">/images/int-discord.png</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-white flex items-center">
                <span className="w-2 h-2 rounded-full bg-indigo-400 mr-2 shadow-[0_0_8px_theme(colors.indigo.400)]"></span> Discord API
              </h3>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          PRICING SECTION 
          ========================================= */}
      <section id="pricing" className="relative py-20 lg:py-32 z-10 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-7xl sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4 border border-cyan-500/20">
              Our Pricing
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Choose Your Plan That Fits Your Workflow
            </h2>
            <p className="text-slate-400">
              No hidden fees. Scale as your team grows seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Basic Plan */}
            <div className="bg-[#111622] rounded-3xl p-8 border border-white/5 flex flex-col hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-shadow">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Basic Plan</p>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold text-white">$120</span>
                <span className="text-slate-500 ml-2">USD / Month</span>
              </div>
              <p className="text-sm text-slate-400 mb-8 pb-8 border-b border-white/5">
                Ideal for individuals or small teams launching structured editors.
              </p>
              <ul className="space-y-4 mb-8 flex-1">
                {['Full control over logic paths', 'Custom response formatting', 'Smart branching system', 'Web embed & share link'].map((feat, i) => (
                  <li key={i} className="flex items-start text-sm text-slate-300">
                    <svg className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {feat}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-full bg-white/5 text-white font-semibold hover:bg-white/10 transition-colors border border-white/10">
                Subscribe
              </button>
            </div>

            {/* Pro Plan (Highlighted) */}
            <div className="bg-gradient-to-b from-cyan-900/20 to-[#111622] rounded-3xl p-8 border border-cyan-500/30 flex flex-col relative shadow-[0_0_40px_rgba(34,211,238,0.1)]">
              <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-cyan-400 text-[#0A0D14] text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                Most Popular
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2">Enterprise Plan</p>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold text-white">$210</span>
                <span className="text-slate-500 ml-2">USD / Month</span>
              </div>
              <p className="text-sm text-slate-400 mb-8 pb-8 border-b border-white/5">
                Growing organizations with deeper analytics, advanced workflows with multiuser.
              </p>
              <ul className="space-y-4 mb-8 flex-1">
                {['All features from the Starting Plan', 'Custom workflow for complex flows', 'Advanced reporting & analytics', 'Priority customer support (24/7)', 'Expert integration API access'].map((feat, i) => (
                  <li key={i} className="flex items-start text-sm text-slate-300">
                    <svg className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {feat}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-full bg-cyan-400 text-[#0A0D14] font-semibold hover:bg-cyan-300 transition-colors shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                Subscribe Now
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          FOOTER 
          ========================================= */}
      <footer className="relative py-12 border-t border-white/5 bg-[#080a0f] z-10">
        <div className="container mx-auto px-4 max-w-7xl sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-white text-[#0A0D14] flex items-center justify-center font-bold text-xs">R</div>
            <span className="text-white font-bold text-sm tracking-tight">Rareblock Inc.</span>
          </div>
          <div className="text-xs text-slate-500">
            © {new Date().getFullYear()} Rareblock. All rights reserved. Designed for the future.
          </div>
          <div className="flex space-x-4">
             {/* Social placeholders */}
             <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-500/20 hover:text-cyan-400 text-slate-400 transition-colors"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></a>
             <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-500/20 hover:text-cyan-400 text-slate-400 transition-colors"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
          </div>
        </div>
      </footer>

    </div>
  );
}
