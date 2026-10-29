import { useState, useRef } from "react";
import { certifications } from "../constants";

const CertCard = ({ title, issuer, date, icon, credential, skills }) => {
  return (
    <a
      href={credential}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col justify-between p-6 rounded-2xl border border-white/[0.04] bg-white/[0.02] overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300 w-full"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-royal/5 via-transparent to-lavender/5 pointer-events-none" />

      {/* Top section */}
      <div className="relative z-10">
        <div className="flex items-start gap-4 mb-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.06] shrink-0 overflow-hidden">
            <img
              src={icon}
              alt={issuer}
              className="w-8 h-8 object-contain"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-white leading-tight group-hover:text-lavender transition-colors duration-300 truncate">
              {title}
            </h3>
            <p className="text-sm text-neutral-400 mt-1 truncate">{issuer}</p>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="relative z-10 mt-auto">
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-medium rounded-full bg-royal/10 text-lavender/80 border border-royal/15"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs text-neutral-500">{date}</span>
          <span className="flex items-center gap-1 text-xs text-neutral-400 group-hover:text-white transition-colors duration-300">
            View Credential
            <svg
              className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-gradient-to-br from-royal/5 to-transparent blur-2xl group-hover:from-royal/15 transition-all duration-500" />
    </a>
  );
};

const Certifications = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      // Get the width of a single card plus gap
      const scrollAmount = window.innerWidth > 768 ? 400 : 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="c-space mt-20" id="certifications">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-heading">Certifications</h2>
          <p className="subtext mt-4 max-w-2xl">
            Validated skills and completed courses from recognized institutions and platforms.
          </p>
        </div>
        
        {/* Navigation Buttons */}
        <div className="hidden md:flex gap-3">
          <button 
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center hover:bg-white/[0.1] transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button 
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center hover:bg-white/[0.1] transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Slider Container */}
      <div className="relative">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-5 snap-x snap-mandatory scrollbar-hide pb-8 -mx-4 px-4 md:mx-0 md:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {certifications.map((cert) => (
            <div 
              key={cert.id} 
              className="min-w-[85vw] sm:min-w-[45vw] lg:min-w-[380px] snap-center flex shrink-0"
            >
              <CertCard {...cert} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Mobile Navigation Buttons */}
      <div className="flex md:hidden justify-center gap-4 mt-2">
        <button 
          onClick={() => scroll("left")}
          className="w-12 h-12 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center hover:bg-white/[0.1] transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button 
          onClick={() => scroll("right")}
          className="w-12 h-12 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center hover:bg-white/[0.1] transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Certifications;
