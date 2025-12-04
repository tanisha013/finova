"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
 

const HeroSection = () => {
  const imageRef=useRef(null)

  useEffect(() => {
    const imageElement=imageRef.current;
  
    if (!imageElement) return; // <-- Important safety check

    const handleScroll = () => {
      const scrollPosition=window.scrollY;
      const scrollThreshold=100;

      imageElement.classList.toggle("scrolled", scrollPosition > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative h-screen flex items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('banner_hero.png')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-4 py-2 ml-10 text-white font-extrabold">
        <h1 className="text-4xl md:text-6xl lg:text-[60px] pb-6 mt-5">
          Manage Your Finances <br/> with Intelligence
        </h1>

        <p className="max-w-xl mb-10">
          An AI-powered financial management platform that helps you track, analyze, and optimize your spending with real-time insights.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/dashboard" className="inline-block">
          <button className="btn px-12 py-6 text-lg bg-blue-600 border-blue-600 hover:bg-blue-800 rounded-md w-auto">
          GET STARTED
          </button>
          </Link>

          <Link href="#features">
          <button className="btn text-lg px-7 py-6 border border-white bg-transparent text-white rounded-md hover:bg-white hover:text-black transition">
            EXPLORE FEATURES
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection