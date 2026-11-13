"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  FileText,
  ArrowUpRight,
  Sparkles,
  Check,
  Copy,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import { SITE } from "@/constants";

export default function QuickConnectHero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(SITE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section
      id="quick-contact"
      aria-label="Direct Contact & Channels"
      className="relative z-30 w-full bg-[#060608] border-y border-white/[0.08] px-4 sm:px-8 md:px-14 lg:px-20 py-16 sm:py-20 md:py-24 text-[#f5f1e8] overflow-hidden"
    >
      {/* Top & Bottom Hairline Gold Accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c8a882]/40 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
      />

      {/* Ambient Radial Lights (Gold + Subtle Violet) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/4 w-[600px] h-[400px] opacity-25 blur-[140px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(200,168,130,0.3), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 right-1/4 w-[500px] h-[350px] opacity-15 blur-[140px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(167,139,250,0.25), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl space-y-10 sm:space-y-12">
        {/* Header Strip with Cormorant Display Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#c8a882]/35 bg-[#c8a882]/[0.08] px-3.5 py-1 text-[11px] font-mono uppercase tracking-[0.24em] text-[#e8d5c0]">
                <Sparkles className="h-3 w-3 text-[#c8a882]" />
                <span>Direct Communications · Protocol</span>
              </div>
              <span className="hidden sm:inline-block h-px w-12 bg-gradient-to-r from-[#c8a882]/40 to-transparent" />
            </div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.08]"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              Connect with{" "}
              <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#f0e2d3] to-[#c8a882]">
                Jay Parmar
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#a8a398] font-light max-w-2xl leading-relaxed">
              Direct channels for AI/ML engineering, quantitative finance architecture, and product leadership partnerships. All inquiries routed with immediate priority.
            </p>
          </div>

          {/* Luxury Live Availability Badge */}
          <div className="inline-flex items-center gap-2.5 self-start md:self-auto rounded-full border border-emerald-500/30 bg-emerald-500/[0.08] backdrop-blur-md px-4 py-2 text-xs font-mono text-emerald-300 shadow-[0_0_24px_-4px_rgba(16,185,129,0.25)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span>Available for Q2/Q3 Inquiries</span>
          </div>
        </div>

        {/* 4 Interactive Luxury Glass Monoliths */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* 1. LinkedIn (Refined Indigo/Gold Glass) */}
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl border border-white/[0.08] hover:border-[#79c5f2]/50 bg-gradient-to-b from-white/[0.04] via-white/[0.015] to-transparent p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-15px_rgba(0,119,181,0.22)] active:scale-[0.98] min-h-[190px] overflow-hidden"
          >
            {/* Top hairline hover sheen */}
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#79c5f2]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
            />
            {/* Corner ambient glow */}
            <div
              aria-hidden
              className="absolute -right-8 -top-8 w-24 h-24 bg-[#0077b5]/15 rounded-full blur-xl pointer-events-none group-hover:bg-[#0077b5]/25 transition-colors"
            />

            <div className="flex items-center justify-between relative z-10">
              <div className="w-11 h-11 rounded-xl bg-[#0077b5]/15 border border-[#0077b5]/30 text-[#79c5f2] flex items-center justify-center font-bold text-sm shadow-[0_0_20px_rgba(0,119,181,0.25)] group-hover:scale-105 transition-transform">
                in
              </div>
              <span className="inline-flex items-center text-xs font-mono uppercase tracking-wider text-[#79c5f2] group-hover:text-white transition-colors gap-1">
                <span>Profile</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>

            <div className="pt-6 relative z-10">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#8fa8be] uppercase tracking-wider">
                <span>01 · Network</span>
                <span className="text-[#79c5f2]">✓</span>
              </div>
              <p className="text-base sm:text-lg font-bold text-white mt-1 group-hover:text-[#79c5f2] transition-colors">
                in/jay-parmar-ai
              </p>
              <p className="text-xs text-[#a0a5ad] mt-1 font-light">
                Leadership &amp; field endorsements
              </p>
            </div>
          </a>

          {/* 2. Direct Email (Warm Amber/Gold Glass) */}
          <div className="group relative rounded-2xl border border-white/[0.08] hover:border-[#c8a882]/50 bg-gradient-to-b from-white/[0.04] via-white/[0.015] to-transparent p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-15px_rgba(200,168,130,0.2)] active:scale-[0.98] min-h-[190px] overflow-hidden">
            {/* Top hairline hover sheen */}
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c8a882]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
            />
            {/* Corner ambient glow */}
            <div
              aria-hidden
              className="absolute -right-8 -top-8 w-24 h-24 bg-[#c8a882]/15 rounded-full blur-xl pointer-events-none group-hover:bg-[#c8a882]/25 transition-colors"
            />

            <div className="flex items-center justify-between relative z-10">
              <div className="w-11 h-11 rounded-xl bg-[#c8a882]/15 border border-[#c8a882]/30 text-[#c8a882] flex items-center justify-center shadow-[0_0_20px_rgba(200,168,130,0.2)] group-hover:scale-105 transition-transform">
                <Mail className="h-5 w-5" />
              </div>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.1] active:scale-90 transition-all duration-150 cursor-pointer"
                title="Copy Email Address"
              >
                {copied ? (
                  <span className="inline-flex items-center text-emerald-400 font-semibold">
                    <Check className="h-3 w-3 mr-1" /> Copied!
                  </span>
                ) : (
                  <span className="inline-flex items-center">
                    <Copy className="h-3 w-3 mr-1" /> Copy
                  </span>
                )}
              </button>
            </div>

            <div className="pt-6 relative z-10">
              <p className="text-[11px] font-mono text-[#a39c90] uppercase tracking-wider">
                02 · Direct Dispatch
              </p>
              <a
                href={`mailto:${SITE.email}`}
                className="text-sm sm:text-base font-semibold text-white hover:text-[#c8a882] transition-colors break-all block mt-1"
              >
                {SITE.email}
              </a>
              <p className="text-xs text-[#8c887e] mt-1 font-light">
                Personal &amp; strategic inquiries
              </p>
            </div>
          </div>

          {/* 3. Phone / Direct Call (Emerald/Bronze Glass) */}
          <a
            href={`tel:${SITE.phone.replace(/[^0-9+]/g, "")}`}
            className="group relative rounded-2xl border border-white/[0.08] hover:border-emerald-500/40 bg-gradient-to-b from-white/[0.04] via-white/[0.015] to-transparent p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-15px_rgba(16,185,129,0.18)] active:scale-[0.98] min-h-[190px] overflow-hidden"
          >
            {/* Top hairline hover sheen */}
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
            />
            {/* Corner ambient glow */}
            <div
              aria-hidden
              className="absolute -right-8 -top-8 w-24 h-24 bg-emerald-500/15 rounded-full blur-xl pointer-events-none group-hover:bg-emerald-500/25 transition-colors"
            />

            <div className="flex items-center justify-between relative z-10">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.2)] group-hover:scale-105 transition-transform">
                <Phone className="h-5 w-5" />
              </div>
              <span className="inline-flex items-center text-xs font-mono uppercase tracking-wider text-neutral-400 group-hover:text-emerald-300 transition-colors gap-1">
                <span>Call / WA</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>

            <div className="pt-6 relative z-10">
              <p className="text-[11px] font-mono text-[#8fad9c] uppercase tracking-wider">
                03 · Voice &amp; WhatsApp
              </p>
              <p className="text-base sm:text-lg font-bold text-white mt-1 group-hover:text-emerald-300 transition-colors">
                {SITE.phone}
              </p>
              <p className="text-xs text-[#8c887e] mt-1 font-light">
                India (IST) · Instant WhatsApp line
              </p>
            </div>
          </a>

          {/* 4. Complete Resume PDF (Flagship Gold Monolith) */}
          <a
            href={SITE.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl border border-[#c8a882]/45 bg-gradient-to-b from-[#c8a882]/18 via-[#c8a882]/[0.06] to-black/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:border-[#c8a882] hover:shadow-[0_20px_60px_-10px_rgba(200,168,130,0.35)] active:scale-[0.98] min-h-[190px] overflow-hidden"
          >
            {/* Top hairline persistent gold sheen */}
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c8a882] to-transparent"
            />
            {/* Corner golden glow */}
            <div
              aria-hidden
              className="absolute -right-8 -top-8 w-28 h-28 bg-[#c8a882]/25 rounded-full blur-xl pointer-events-none group-hover:bg-[#c8a882]/40 transition-colors"
            />

            <div className="flex items-center justify-between relative z-10">
              <div className="w-11 h-11 rounded-xl bg-[#c8a882] text-[#0a0a0c] flex items-center justify-center font-bold shadow-[0_0_24px_rgba(200,168,130,0.4)] group-hover:scale-105 transition-transform">
                <FileText className="h-5 w-5" />
              </div>
              <span className="inline-flex items-center text-[11px] font-mono font-bold uppercase tracking-wider text-[#0a0a0c] bg-[#c8a882] group-hover:bg-white px-2.5 py-1 rounded-full shadow-sm transition-colors gap-1">
                <span>PDF ↗</span>
              </span>
            </div>

            <div className="pt-6 relative z-10">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#d8c8b4] uppercase tracking-wider font-semibold">
                <ShieldCheck className="h-3.5 w-3.5 text-[#c8a882]" />
                <span>04 · Verified Dossier</span>
              </div>
              <p className="text-base sm:text-lg font-bold text-white mt-1 group-hover:text-[#c8a882] transition-colors">
                Download Résumé
              </p>
              <p className="text-xs text-[#baa995] mt-1 font-light">
                Complete 2026 academic &amp; field credentials
              </p>
            </div>
          </a>

        </div>

        {/* Micro-Telemetry & Quick Pathways Strip */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/[0.08] text-xs font-mono text-[#9c978e]">
          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-[#c8a882] shrink-0" />
            <span>Bhilai, Chhattisgarh, India · Indian Institute of Management Bangalore (DBE)</span>
          </div>

          <div className="flex flex-wrap items-center gap-5 sm:gap-6">
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>GitHub</span>
              <ExternalLink className="h-3 w-3 opacity-60" />
            </a>
            <a
              href="/articles"
              className="text-[#c8a882] hover:text-white transition-colors flex items-center gap-1 font-semibold"
            >
              <span>13 Field Essays</span>
              <ExternalLink className="h-3 w-3 opacity-80" />
            </a>
            <a
              href="#dossier-overview"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Executive Dossier ↓</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}


