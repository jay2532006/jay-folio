"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  ArrowUpRight,
  Sparkles,
  Check,
  Copy,
  ExternalLink,
  ShieldCheck,
  Mail,
  Phone,
  MessageCircle,
  FileDown,
} from "lucide-react";
import { SITE } from "@/constants";

export default function QuickConnectHero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(SITE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section
      id="quick-contact"
      aria-label="Direct Executive Channels"
      className="relative z-30 w-full bg-[#050508] border-y border-white/[0.08] px-4 sm:px-8 md:px-14 lg:px-20 py-16 sm:py-24 text-[#f5f1e8] overflow-hidden"
    >
      {/* Top & Bottom Hairline Gold Accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c8a882]/45 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
      />

      {/* Volumetric Radial Glows tailored to luxury ink & gold scheme */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 left-1/3 w-[700px] h-[450px] opacity-25 blur-[150px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(200,168,130,0.35), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 right-1/4 w-[600px] h-[400px] opacity-15 blur-[150px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(37,211,102,0.25), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl space-y-12 sm:space-y-14">
        {/* Header Strip with Cormorant Display Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
          <div className="space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#c8a882]/40 bg-[#c8a882]/[0.08] backdrop-blur-md px-3.5 py-1 text-[11px] font-mono uppercase tracking-[0.24em] text-[#e8d5c0] shadow-[0_0_20px_rgba(200,168,130,0.15)]">
                <Sparkles className="h-3 w-3 text-[#c8a882]" />
                <span>Executive Channels · Direct Protocol</span>
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
              Direct channels for AI/ML engineering architectures, quantitative finance systems, and product leadership partnerships. All inquiries routed with immediate priority.
            </p>
          </div>

          {/* Luxury Live Availability Badge */}
          <div className="inline-flex items-center gap-2.5 self-start md:self-auto rounded-full border border-emerald-500/35 bg-emerald-500/[0.08] backdrop-blur-md px-4 py-2 text-xs font-mono text-emerald-300 shadow-[0_0_24px_-4px_rgba(16,185,129,0.3)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span>Available for Immediate Strategic Inquiries</span>
          </div>
        </div>

        {/* 4 Grand Glass Monoliths featuring Official Brand Logos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          
          {/* 1. LinkedIn Monolith with Official Logo */}
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl border border-white/[0.1] hover:border-[#0077b5]/60 bg-gradient-to-b from-[#0077b5]/[0.08] via-white/[0.02] to-black/70 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_-15px_rgba(0,119,181,0.32)] active:scale-[0.98] min-h-[260px] overflow-hidden"
          >
            {/* Top specular glow */}
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0077b5]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
            />
            {/* Corner ambient glow */}
            <div
              aria-hidden
              className="absolute -right-8 -top-8 w-28 h-28 bg-[#0077b5]/20 rounded-full blur-2xl pointer-events-none group-hover:bg-[#0077b5]/35 transition-colors"
            />

            {/* Header with Official LinkedIn Logo */}
            <div className="flex items-center justify-between relative z-10">
              <div className="h-11 px-3 rounded-xl bg-white/[0.06] border border-white/[0.12] backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(0,119,181,0.2)] group-hover:border-[#0077b5]/50 group-hover:scale-105 transition-all">
                <Image
                  src="/assets/icons/linkedin-logo.png"
                  alt="LinkedIn"
                  width={96}
                  height={24}
                  className="object-contain filter drop-shadow-[0_0_8px_rgba(0,119,181,0.4)]"
                />
              </div>
              <span className="inline-flex items-center text-[11px] font-mono uppercase tracking-wider text-[#79c5f2] group-hover:text-white transition-colors gap-1 bg-[#0077b5]/15 px-2.5 py-1 rounded-full border border-[#0077b5]/30">
                <span>Connect</span>
                <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>

            {/* Body */}
            <div className="pt-6 relative z-10 space-y-1.5">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#8fa8be] uppercase tracking-wider">
                <span>01 · Network</span>
                <span className="text-[#0077b5]">●</span>
              </div>
              <p className="text-base sm:text-lg font-bold text-white group-hover:text-[#79c5f2] transition-colors tracking-tight">
                in/jay-parmar-ai
              </p>
              <p className="text-xs text-[#a0a5ad] font-light leading-relaxed">
                AI/ML Engineering, Quantitative Systems &amp; Leadership endorsements
              </p>
            </div>

            {/* Footer Action Strip */}
            <div className="pt-5 border-t border-white/[0.08] relative z-10 flex items-center justify-between text-xs font-mono text-[#79c5f2] group-hover:text-white transition-colors">
              <span>View Profile</span>
              <span className="text-[11px] text-neutral-400">Direct Message ↗</span>
            </div>
          </a>

          {/* 2. Direct Gmail Monolith with Official Logo */}
          <div className="group relative rounded-2xl border border-white/[0.1] hover:border-[#ea4335]/50 bg-gradient-to-b from-[#ea4335]/[0.07] via-white/[0.02] to-black/70 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_-15px_rgba(234,67,53,0.25)] active:scale-[0.98] min-h-[260px] overflow-hidden">
            {/* Top specular glow */}
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ea4335]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
            />
            {/* Corner ambient prism glow */}
            <div
              aria-hidden
              className="absolute -right-8 -top-8 w-28 h-28 bg-[#ea4335]/18 rounded-full blur-2xl pointer-events-none group-hover:bg-[#ea4335]/30 transition-colors"
            />

            {/* Header with Official Gmail Icon & Copy Pill */}
            <div className="flex items-center justify-between relative z-10">
              <div className="h-11 px-2.5 rounded-xl bg-white/[0.06] border border-white/[0.12] backdrop-blur-md flex items-center gap-2 shadow-[0_0_20px_rgba(234,67,53,0.18)] group-hover:border-[#ea4335]/50 group-hover:scale-105 transition-all">
                <Image
                  src="/assets/icons/gmail-icon-square.png"
                  alt="Gmail"
                  width={28}
                  height={28}
                  className="object-contain filter drop-shadow-[0_0_8px_rgba(234,67,53,0.4)]"
                />
                <span className="text-xs font-bold tracking-tight text-white font-sans pr-1">
                  Gmail
                </span>
              </div>
              
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-neutral-300 hover:text-white px-3 py-1 rounded-full border border-white/15 bg-white/[0.06] hover:bg-white/[0.12] active:scale-95 transition-all cursor-pointer shadow-sm"
                title="Copy Email Address"
              >
                {copied ? (
                  <span className="inline-flex items-center text-emerald-400 font-semibold">
                    <Check className="h-3 w-3 mr-1" /> Copied!
                  </span>
                ) : (
                  <span className="inline-flex items-center">
                    <Copy className="h-3 w-3 mr-1 text-[#ea4335]" /> Copy
                  </span>
                )}
              </button>
            </div>

            {/* Body */}
            <div className="pt-6 relative z-10 space-y-1.5">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#a39c90] uppercase tracking-wider">
                <span>02 · Direct Dispatch</span>
                <span className="text-[#ea4335]">●</span>
              </div>
              <a
                href={`mailto:${SITE.email}`}
                className="text-sm sm:text-base font-semibold text-white hover:text-[#ea4335] transition-colors break-all block tracking-tight"
              >
                {SITE.email}
              </a>
              <p className="text-xs text-[#8c887e] font-light leading-relaxed">
                Personal &amp; strategic inquiries · Direct routing to personal inbox
              </p>
            </div>

            {/* Footer Action Strip */}
            <div className="pt-5 border-t border-white/[0.08] relative z-10 flex items-center justify-between text-xs font-mono">
              <a
                href={`mailto:${SITE.email}`}
                className="text-[#ea4335] group-hover:text-white transition-colors flex items-center gap-1"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Compose Mail</span>
              </a>
              <span className="text-[11px] text-neutral-400">Response &lt; 2h</span>
            </div>
          </div>

          {/* 3. WhatsApp & Voice Monolith with Official Logo */}
          <div className="group relative rounded-2xl border border-white/[0.1] hover:border-[#25D366]/50 bg-gradient-to-b from-[#25D366]/[0.08] via-white/[0.02] to-black/70 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_-15px_rgba(37,211,102,0.28)] active:scale-[0.98] min-h-[260px] overflow-hidden">
            {/* Top specular glow */}
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#25D366]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
            />
            {/* Corner ambient emerald glow */}
            <div
              aria-hidden
              className="absolute -right-8 -top-8 w-28 h-28 bg-[#25D366]/20 rounded-full blur-2xl pointer-events-none group-hover:bg-[#25D366]/35 transition-colors"
            />

            {/* Header with Official WhatsApp Icon */}
            <div className="flex items-center justify-between relative z-10">
              <div className="h-11 px-2.5 rounded-xl bg-white/[0.06] border border-white/[0.12] backdrop-blur-md flex items-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.2)] group-hover:border-[#25D366]/50 group-hover:scale-105 transition-all">
                <Image
                  src="/assets/icons/whatsapp-icon-transparent.png"
                  alt="WhatsApp"
                  width={28}
                  height={28}
                  className="object-contain filter drop-shadow-[0_0_8px_rgba(37,211,102,0.5)]"
                />
                <span className="text-xs font-bold tracking-tight text-white font-sans pr-1">
                  WhatsApp
                </span>
              </div>
              
              <a
                href={`https://wa.me/917773060203?text=${encodeURIComponent(
                  "Hi Jay, saw your portfolio and would love to connect!"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[11px] font-mono uppercase tracking-wider text-emerald-400 group-hover:text-white transition-colors gap-1 bg-[#25D366]/15 px-2.5 py-1 rounded-full border border-[#25D366]/30 shadow-sm"
              >
                <span>Chat</span>
                <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Body */}
            <div className="pt-6 relative z-10 space-y-1.5">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#8fad9c] uppercase tracking-wider">
                <span>03 · Voice &amp; WhatsApp</span>
                <span className="text-[#25D366]">●</span>
              </div>
              <p className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors tracking-tight">
                {SITE.phone}
              </p>
              <p className="text-xs text-[#8c887e] font-light leading-relaxed">
                India (IST) · Instant WhatsApp direct chat and voice line
              </p>
            </div>

            {/* Footer Action Strip */}
            <div className="pt-5 border-t border-white/[0.08] relative z-10 flex items-center justify-between text-xs font-mono">
              <a
                href={`https://wa.me/917773060203?text=${encodeURIComponent(
                  "Hi Jay, saw your portfolio and would love to connect!"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 group-hover:text-white transition-colors flex items-center gap-1"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                <span>Start Chat</span>
              </a>
              <a
                href={`tel:${SITE.phone.replace(/[^0-9+]/g, "")}`}
                className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1"
              >
                <Phone className="h-3 w-3" />
                <span>Call Direct</span>
              </a>
            </div>
          </div>

          {/* 4. Complete Resume PDF (Flagship Gold Monolith) */}
          <a
            href={SITE.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl border border-[#c8a882]/45 bg-gradient-to-b from-[#c8a882]/20 via-[#c8a882]/[0.06] to-black/70 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-[#c8a882] hover:shadow-[0_24px_70px_-10px_rgba(200,168,130,0.38)] active:scale-[0.98] min-h-[260px] overflow-hidden"
          >
            {/* Top persistent gold sheen */}
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c8a882] to-transparent"
            />
            {/* Corner golden glow */}
            <div
              aria-hidden
              className="absolute -right-8 -top-8 w-32 h-32 bg-[#c8a882]/25 rounded-full blur-2xl pointer-events-none group-hover:bg-[#c8a882]/40 transition-colors"
            />

            {/* Header with Luxury Gold Emblem */}
            <div className="flex items-center justify-between relative z-10">
              <div className="h-11 px-3 rounded-xl bg-[#c8a882] text-[#0a0a0c] flex items-center gap-2 font-bold shadow-[0_0_24px_rgba(200,168,130,0.4)] group-hover:scale-105 transition-transform">
                <FileDown className="h-5 w-5" />
                <span className="text-xs font-mono tracking-wider uppercase font-extrabold">
                  Dossier
                </span>
              </div>
              <span className="inline-flex items-center text-[11px] font-mono font-bold uppercase tracking-wider text-[#0a0a0c] bg-[#c8a882] group-hover:bg-white px-2.5 py-1 rounded-full shadow-sm transition-colors gap-1">
                <span>PDF 2026</span>
                <ArrowUpRight className="h-3 w-3" />
              </span>
            </div>

            {/* Body */}
            <div className="pt-6 relative z-10 space-y-1.5">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#d8c8b4] uppercase tracking-wider font-semibold">
                <ShieldCheck className="h-3.5 w-3.5 text-[#c8a882]" />
                <span>04 · Verified Dossier</span>
              </div>
              <p className="text-base sm:text-lg font-bold text-white group-hover:text-[#c8a882] transition-colors tracking-tight">
                Download Résumé
              </p>
              <p className="text-xs text-[#baa995] font-light leading-relaxed">
                Complete 2026 academic, research &amp; commercial track record
              </p>
            </div>

            {/* Footer Action Strip */}
            <div className="pt-5 border-t border-white/[0.08] relative z-10 flex items-center justify-between text-xs font-mono text-[#c8a882] group-hover:text-white transition-colors">
              <span>Instant Download</span>
              <span className="text-[11px] text-[#baa995]">Verified Authentic ↗</span>
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
