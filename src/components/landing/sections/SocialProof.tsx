"use client";

import React from "react";
import { useDemo } from "@/context/DemoContext";
import { demoLanguages } from "@/lib/demo-languages";

const languages = [
  { name: "Español" },
  { name: "Deutsch" },
  { name: "English" },
  { name: "中文" },
  { name: "日本語" },
  { name: "हिन्दी" },
  { name: "粵語" },
  { name: "Français" },
  { name: "Italiano" },
  { name: "Português" },
  { name: "العربية" },
  { name: "Русский" },
  { name: "한국어" },
  { name: "اردو" },
  { name: "தமிழ்" },
  { name: "বাংলা" },
  { name: "Svenska" },
  { name: "Tiếng Việt" },
  { name: "Kiswahili" },
  { name: "Bahasa Indonesia" },
];

const SocialProof = () => {
  const { currentLanguage } = useDemo();

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-10">
        <p className="text-xl md:text-2xl text-black leading-relaxed">
          Powering the next generation of polyglots
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group max-w-7xl mx-auto mask-linear-fade">
        <div className="flex animate-marquee whitespace-nowrap gap-16 items-center pr-16">
          {[...languages, ...languages].map((lang, i) => {
            const config = demoLanguages.find(d => d.nativeName === lang.name);
            const isActive = lang.name === currentLanguage.nativeName;

            return (
              <span
                key={i}
                className={`text-2xl font-medium transition-all duration-700 cursor-default select-none ${isActive ? "scale-110 opacity-100" : "opacity-60 hover:opacity-100 hover:scale-105"
                  }`}
                style={config ? {
                  backgroundImage: `linear-gradient(to right, ${config.from}, ${config.via}, ${config.to})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                } : {}}
              >
                {lang.name}
              </span>
            );
          })}
        </div>

        <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap gap-16 items-center pr-16">
          {[...languages, ...languages].map((lang, i) => {
            const config = demoLanguages.find(d => d.nativeName === lang.name);
            const isActive = lang.name === currentLanguage.nativeName;

            return (
              <span
                key={i}
                className={`text-2xl font-medium transition-all duration-700 cursor-default select-none ${isActive ? "scale-110 opacity-100" : "opacity-60 hover:opacity-100 hover:scale-105"
                  }`}
                style={config ? {
                  backgroundImage: `linear-gradient(to right, ${config.from}, ${config.via}, ${config.to})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                } : {}}
              >
                {lang.name}
              </span>
            );
          })}
        </div>

        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default SocialProof;

