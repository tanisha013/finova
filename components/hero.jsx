"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
 

const HeroSection = () => {
  const imageRef=useRef()
  useEffect(() => {
    const imageElement=imageRef.current;

    window.addEventListener("scroll", handleScroll)
  })
  return (
  <div className="pb-20 px-4">
    <div className="container mx-autp text-center">
      <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
        Manage Your Finances <br/> with Intelligence
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        An AI-powered financial management platform that helps you track, analyze, and optimize your spending with real-time insights.
      </p>
      <div className="flex justify-center space-x-4">
        <Link href="/dashboard">
          <button className="btn btn-lg bg-black text-white rounded-xl shadow hover:bg-neutral-700 px-5">Get Started</button>
        </Link>
        <Link href="#features">
          <button className="btn btn-lg px-5 rounded-xl">Explore Features</button>
        </Link>
      </div>
      <div className="hero-image-wrapper">
        <div ref={imageRef} className="hero-image">
          <Image 
            src='/banner.jpeg'  width={1200}
            height={720}
            alt="Dashboard Preview"
            className="rounded-lg shadow-2xl border mx-auto"
            priority
          />  
        </div>
      </div>
    </div>
  </div>
  );
}

export default HeroSection