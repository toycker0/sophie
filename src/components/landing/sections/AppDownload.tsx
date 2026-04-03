"use client";

import React from "react";
import QRCode from "react-qr-code";
import { useLanguage } from "@/context/LanguageContext";

const APPLE_STORE_URL =
  "https://apps.apple.com/us/app/speak-with-sophie/id6759192122";
const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=ai.speakwithsophie.app";
const QR_TARGET_URL = "https://www.speakwithsophie.ai/";

const AppDownload = () => {
  const { messages } = useLanguage();

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6">
            {messages.appDownload.title}
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {messages.appDownload.subtitle}
          </p>
        </div>

        {/* Content Card */}
        <div className="max-w-3xl mx-auto">
          <div className="rounded-3xl bg-gray-50 border border-gray-100 p-10 md:p-14">
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">

              {/* Store Badges */}
              <div className="flex flex-col items-center gap-4">
                {/* Apple App Store — must appear first per Apple guidelines */}
                <a
                  href={APPLE_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105 active:scale-95"
                >
                  <img
                    src="/badges/apple-app-store-badge.svg"
                    alt="Download on the App Store"
                    className="h-[52px] w-auto"
                  />
                </a>

                {/* Google Play Store */}
                <a
                  href={GOOGLE_PLAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105 active:scale-95"
                >
                  <img
                    src="/badges/google-play-badge.svg"
                    alt="Get it on Google Play"
                    className="h-[52px] w-auto"
                  />
                </a>

                <p className="text-sm text-gray-400 mt-1">
                  {messages.appDownload.availableOn}
                </p>
              </div>

              {/* Vertical divider on desktop / horizontal on mobile */}
              <div className="hidden md:block w-px h-32 bg-gray-200" />
              <div className="block md:hidden h-px w-32 bg-gray-200" />

              {/* QR Code */}
              <div className="flex flex-col items-center gap-4">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                  <QRCode
                    value={QR_TARGET_URL}
                    size={140}
                    level="M"
                    bgColor="#FFFFFF"
                    fgColor="#000000"
                  />
                </div>
                <p className="text-sm text-gray-400">
                  {messages.appDownload.scanQrCode}
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
