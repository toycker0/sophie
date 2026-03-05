"use client";

import React, { useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RainbowBorder } from "@/components/ui/RainbowBorder";
import SignupModal from "@/components/landing/modals/SignupModal";
import { motion, Variants } from "framer-motion";
import { useDemo } from "@/context/DemoContext";
import { Colors } from "@/lib/constants";
import { RainbowGradient } from "@/components/ui/RainbowGradient";
import { RainbowIcon } from "@/components/ui/RainbowIcon";
import { RainbowText } from "@/components/ui/RainbowText";

type SbbPlanId = "6mo" | "12mo" | "18mo" | "24mo";

type SbbPlan = {
  id: SbbPlanId;
  label: string;
  monthlyPrice: number;
  billedTotal: number;
  billedCycleLabel: string;
  savePercent: number;
};

const sbbPlans: readonly SbbPlan[] = [
  {
    id: "6mo",
    label: "6mo",
    monthlyPrice: 10,
    billedTotal: 60,
    billedCycleLabel: "6 months",
    savePercent: 50,
  },
  {
    id: "12mo",
    label: "12mo",
    monthlyPrice: 9,
    billedTotal: 108,
    billedCycleLabel: "12 months",
    savePercent: 55,
  },
  {
    id: "18mo",
    label: "18mo",
    monthlyPrice: 8,
    billedTotal: 144,
    billedCycleLabel: "18 months",
    savePercent: 60,
  },
  {
    id: "24mo",
    label: "24mo",
    monthlyPrice: 7,
    billedTotal: 168,
    billedCycleLabel: "24 months",
    savePercent: 65,
  },
];

const Pricing = () => {
  const { currentLanguage } = useDemo();
  const [activeSbbPlanId, setActiveSbbPlanId] = useState<SbbPlanId>("6mo");
  const activeSbbPlan =
    sbbPlans.find((plan) => plan.id === activeSbbPlanId) ?? sbbPlans[0];

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.6,
      }
    },
  };

  return (
    <section id="pricing" className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6">
              Invest in your{" "}
              <span
                style={{
                  backgroundImage: `linear-gradient(to right, ${currentLanguage.from}, ${currentLanguage.via}, ${currentLanguage.to})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                className="font-bold"
              >
                {currentLanguage.name} fluency.
              </span>
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Cheaper than one hour with a private tutor.
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {/* Free Tier */}
          <div
            className="relative bg-white rounded-3xl border border-gray-100 shadow-sm lg:p-8 p-6 h-full flex flex-col"
          >
            <div className="mb-8 space-y-2">
              <h3 className="text-2xl font-bold text-black">M&G</h3>
              <p className="text-gray-500 text-sm">
                Meet and Greet Sophie
              </p>
            </div>

            <div className="flex items-baseline gap-2 mb-6">
              <div className="text-5xl font-bold text-black">
                <span>$0/</span>{" "}
                <span className="text-xl font-medium">7 days</span>
              </div>
            </div>

            <ul className="space-y-4 mb-10">
              {[
                "App in 15 languages",
                "Natural conversations with Sophie in 50+ languages",
                "Sophie's translation from any to any available language",
                "Unlimited vocabulary saver in all available languages.",
                "100+ conversational scenarios",
              ].map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center space-x-3 text-sm font-medium text-gray-600"
                >
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-white shadow-sm">
                    <RainbowIcon icon={Check} size={14} strokeWidth={2.5} />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <SignupModal triggerLocation="pricing_free">
                <RainbowBorder
                  className="w-full cursor-pointer"
                  borderWidth={2}
                  borderRadius={9999}
                  innerClassName="relative bg-white w-full h-12 px-12 py-3 flex items-center justify-center overflow-hidden"
                >
                  <RainbowGradient className="absolute inset-0 opacity-0 hover:opacity-30 transition-opacity duration-300" />
                  <span className="relative z-10 font-medium text-black">Join Waitlist</span>
                </RainbowBorder>
              </SignupModal>
            </div>
          </div>

          {/* Premium Tier - Highlighted */}
          <div
            className="relative rounded-3xl shadow-2xl transform lg:-translate-y-4 md:translate-y-1/2 group p-[2px] h-full"
            style={{
              backgroundImage: `linear-gradient(to right, ${currentLanguage.from}, ${currentLanguage.via}, ${currentLanguage.to})`,
            }}
          >
            <div className="relative bg-white rounded-[calc(1.5rem-2px)] lg:p-8 p-6 h-full flex flex-col">
              <div className="mb-8">
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-bold text-black flex items-center gap-2">
                      SCF
                      {/* <Sparkles className="w-5 h-5 text-[#FFD700] fill-current" /> */}
                    </h3>
                    <span
                      style={{
                        backgroundImage: `linear-gradient(to right, ${currentLanguage.from}, ${currentLanguage.via}, ${currentLanguage.to})`,
                        borderColor: currentLanguage.from,
                      }}
                      className="bg-clip-text text-transparent text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider border-2"
                    >
                      Popular
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">
                    Sophie Close Friend
                  </p>
                </div>
              </div>

              <div className="mb-6 space-y-2">
                <div className="text-5xl font-bold tracking-tight text-black">
                  <span>$20/</span>{" "}
                  <span className="text-xl font-medium">Month regular price</span>
                </div>
                <div className="text-gray-500 font-medium text-lg">$14/Month launch price</div>
              </div>

              <ul className="space-y-4 mb-10">
                {[
                  "Everything is included in the free trial.",
                  "24/7 Customer support. Guaranteed.",
                  "Unrestricted app usage",
                  "Strategic ambassador option.",
                ].map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center space-x-3 text-sm font-medium text-gray-600"
                  >
                    <div
                      key={`check-${currentLanguage.id}`}
                      style={{
                        backgroundImage: `linear-gradient(to right, ${currentLanguage.from}, ${currentLanguage.via}, ${currentLanguage.to})`,
                      }}
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-white shadow-md"
                    >
                      <Check size={14} strokeWidth={2.5} />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <SignupModal triggerLocation="pricing_plus">
                  <button
                    className="relative h-14 w-full p-0.5 rounded-full transition-all duration-300 group"
                    style={{
                      background: `linear-gradient(to right, ${currentLanguage.from}, ${currentLanguage.via}, ${currentLanguage.to})`,
                    }}
                  >
                    <div className="h-full px-12 rounded-full bg-white flex items-center justify-center font-medium text-black hover:bg-white/90 transition-colors">
                      Start Free Trial
                    </div>
                  </button>
                </SignupModal>
              </div>
            </div>
          </div>

          {/* Pro Tier */}
          <div className="relative bg-white rounded-3xl border border-gray-100 shadow-sm lg:p-8 p-6 h-full flex flex-col">
            <div className="h-full flex flex-col">
              <div className="mb-8">
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-bold text-black flex items-center gap-2">
                      SBB
                      {/* <RainbowIcon icon={Sparkles} size={18} strokeWidth={2.3} /> */}
                    </h3>
                    <RainbowBorder
                      borderWidth={1}
                      borderRadius={9999}
                      className="inline-flex"
                      innerClassName="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider bg-white"
                    >
                      <RainbowText text="Best Value" />
                    </RainbowBorder>
                  </div>
                  <p className="text-gray-500 text-sm">
                    Sophie Best Buddy
                  </p>
                </div>
              </div>

              <div className="mb-7 space-y-3">
                <div className="text-5xl font-bold tracking-tight text-black">
                  <span>${activeSbbPlan.monthlyPrice}/</span>{" "}
                  <span className="text-xl font-medium">month</span>
                </div>
                <div className="text-gray-500 font-medium text-lg">
                  billed ${activeSbbPlan.billedTotal} every {activeSbbPlan.billedCycleLabel}
                </div>
                <RainbowBorder
                  borderWidth={1}
                  borderRadius={9999}
                  className="inline-flex"
                  innerClassName="px-5 py-2 text-sm font-semibold bg-white text-black"
                >
                  <span className="mr-2" aria-hidden>$</span>
                  Save {activeSbbPlan.savePercent}% vs monthly
                </RainbowBorder>
              </div>

              <div className="mb-8 grid grid-cols-4 gap-3">
                {sbbPlans.map((plan) => {
                  const isActive = activeSbbPlan.id === plan.id;

                  return (
                    <RainbowBorder
                      key={plan.id}
                      borderWidth={1}
                      borderRadius={9999}
                      className="h-8 w-full"
                      innerClassName="h-full w-full rounded-full overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => setActiveSbbPlanId(plan.id)}
                        className={`relative h-full w-full text-base font-medium transition-colors duration-200 ${
                          isActive
                            ? "text-white"
                            : "bg-white text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {isActive ? (
                          <RainbowGradient className="absolute inset-0 opacity-30" />
                        ) : null}
                        <span className="relative text-black">{plan.label}</span>
                      </button>
                    </RainbowBorder>
                  );
                })}
              </div>

              <ul className="space-y-4 mb-10">
                {[
                  "Everything in Sophie Close Friend",
                  "Priority 24/7 support",
                  "Exclusive content & early access",
                  "Custom learning path",
                  "Dedicated account manager",
                ].map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center space-x-3 text-sm font-medium text-gray-700"
                  >
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-white shadow-sm">
                      <RainbowIcon icon={Check} size={14} strokeWidth={2.5} />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <SignupModal triggerLocation="pricing_pro">
                  <RainbowBorder
                    className="w-full cursor-pointer"
                    borderWidth={2}
                    borderRadius={9999}
                    innerClassName="relative bg-white w-full h-12 px-12 py-3 flex items-center justify-center overflow-hidden"
                  >
                    <RainbowGradient className="absolute inset-0 opacity-0 hover:opacity-30 transition-opacity duration-300" />
                    <span className="relative z-10 font-medium text-black">Join Waitlist</span>
                  </RainbowBorder>
                </SignupModal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
