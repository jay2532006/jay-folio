"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles, FileText, MapPin, ExternalLink } from "lucide-react";
import { SITE } from "@/constants";

export default function QuickConnectHero() {
  const channels = [
    {
      id: "linkedin",
      name: "LinkedIn",
      href: SITE.linkedin,
      target: "_blank",
      rel: "noopener noreferrer",
      logoSrc: "/assets/icons/linkedin-icon-hires.png",
      logoAlt: "LinkedIn",
      haloGradient: "radial-gradient(circle, rgba(0,119,181,0.4) 0%, rgba(10,102,194,0.1) 70%, transparent 100%)",
      borderHover: "hover:border-[#0077b5]/70",
      shadowHover: "hover:shadow-[0_20px_60px_-10px_rgba(0,119,181,0.45)]",
      textColor: "group-hover:text-[#79c5f2]",
      badge: "Network",
    },
    {
      id: "gmail",
      name: "Gmail",
      href: `mailto:${SITE.email}`,
      target: undefined,
      rel: undefined,
      logoSrc: "/assets/icons/gmail-icon-clean.png",
      logoAlt: "Gmail",
      haloGradient: "radial-gradient(circle, rgba(234,67,53,0.35) 0%, rgba(66,133,244,0.2) 50%, transparent 100%)",
      borderHover: "hover:border-[#ea4335]/70",
      shadowHover: "hover:shadow-[0_20px_60px_-10px_rgba(234,67,53,0.4)]",
      textColor: "group-hover:text-[#ff8a80]",
      badge: "Email",
    },
    {
      id: "whatsapp",
      name: "WhatsApp",
      href: `https://wa.me/917773060203?text=${encodeURIComponent(
        "Hi Jay, saw your portfolio and would love to connect!"
      )}`,
      target: "_blank",
      rel: "noopener noreferrer",
      logoSrc: "/assets/icons/whatsapp-icon-clean.png",
      logoAlt: "WhatsApp",
      haloGradient: "radial-gradient(circle, rgba(37,211,102,0.4) 0%, rgba(18,140,126,0.15) 70%, transparent 100%)",
      borderHover: "hover:border-[#25D366]/70",
      shadowHover: "hover:shadow-[0_20px_60px_-10px_rgba(37,211,102,0.45)]",
      textColor: "group-hover:text-[#69f0ae]",
      badge: "Chat",
    },
    {
      id: "resume",
      name: "Résumé PDF",
      href: SITE.resumeUrl,
      target: "_blank",
      rel: "noopener noreferrer",
      logoSrc: null, // Custom gold emblem below
      logoAlt: "Verified Résumé",
      haloGradient: "radial-gradient(circle, rgba(200,168,130,0.45) 0%, rgba(160,130,95,0.15) 70%, transparent 100%)",
      borderHover: "hover:border-[#c8a882]",
      shadowHover: "hover:shadow-[0_20px_60px_-10px_rgba(200,168,130,0.5)]",
      textColor: "group-hover:text-[#f0e2d3]",
      badge: "Dossier",
    },
  ];

  return (
    <section
      id="quick-contact"
      aria-label="Direct Channels"
      className="relative z-30 w-full bg-[#050508] border-y border-white/[0.08] px-4 sm:px-8 md:px-14 lg:px-20 py-20 sm:py-28 text-[#f5f1e8] overflow-hidden"
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

      {/* Volumetric Radial Glows - lightweight on mobile to preserve GPU fill-rate */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] opacity-20 blur-3xl md:blur-[120px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(200,168,130,0.35), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl space-y-12 sm:space-y-16">
        {/* Cinematic Minimalist Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#c8a882]/40 bg-[#c8a882]/[0.08] backdrop-blur-md px-3.5 py-1 text-[11px] font-mono uppercase tracking-[0.24em] text-[#e8d5c0] shadow-[0_0_20px_rgba(200,168,130,0.15)]">
                <Sparkles className="h-3 w-3 text-[#c8a882]" />
                <span>Executive Channels · 1-Click Direct Access</span>
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

            <p className="text-sm sm:text-base text-[#a8a398] font-light max-w-xl">
              Tap any official channel below for instant direct communication.
            </p>
          </div>

          {/* Live Availability Pill */}
          <div className="inline-flex items-center gap-2.5 self-start md:self-auto rounded-full border border-emerald-500/35 bg-emerald-500/[0.08] backdrop-blur-md px-4 py-2 text-xs font-mono text-emerald-300 shadow-[0_0_24px_-4px_rgba(16,185,129,0.3)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span>Live &amp; Available for Inquiries</span>
          </div>
        </div>

        {/* 4 Majestic Visual Monoliths (Enlarged Logos Only · Edge-to-Edge Clickable) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {channels.map((ch) => (
            <a
              key={ch.id}
              href={ch.href}
              target={ch.target}
              rel={ch.rel}
              aria-label={`Open ${ch.name}`}
              className={`group relative rounded-3xl border border-white/[0.12] ${ch.borderHover} bg-gradient-to-b from-white/[0.05] via-white/[0.015] to-black/75 backdrop-blur-md md:backdrop-blur-xl p-6 sm:p-8 flex flex-col items-center justify-center min-h-[200px] sm:min-h-[240px] md:min-h-[270px] transition-all duration-300 hover:-translate-y-3 hover:scale-[1.04] ${ch.shadowHover} active:scale-95 cursor-pointer overflow-hidden`}
            >
              {/* Top specular reflection sweep */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              {/* Bespoke Volumetric Brand Glow behind the logo */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 flex items-center justify-center"
              >
                <div
                  className="w-36 h-36 sm:w-44 sm:h-44 rounded-full blur-xl md:blur-2xl opacity-40 group-hover:opacity-90 group-hover:scale-125 transition-all duration-500"
                  style={{ background: ch.haloGradient }}
                />
              </div>

              {/* Centered Enlarged Logo */}
              <div className="relative z-10 flex flex-col items-center justify-center space-y-4 sm:space-y-5">
                {ch.logoSrc ? (
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={ch.logoSrc}
                      alt={ch.logoAlt}
                      width={112}
                      height={112}
                      className="object-contain filter drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  /* Luxury 24K Gold Dossier Seal for Résumé */
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br from-[#e0cfb8] via-[#c8a882] to-[#8c6d48] p-0.5 shadow-[0_8px_30px_rgba(200,168,130,0.35)] transition-transform duration-300 group-hover:scale-110">
                    <div className="w-full h-full rounded-[14px] bg-[#0c0c0e] flex flex-col items-center justify-center text-[#c8a882] group-hover:text-white transition-colors">
                      <FileText className="h-10 w-10 sm:h-12 sm:w-12 drop-shadow-[0_0_12px_rgba(200,168,130,0.6)]" />
                      <span className="mt-1 text-[10px] font-mono font-bold tracking-widest uppercase text-[#c8a882]">
                        PDF
                      </span>
                    </div>
                  </div>
                )}

                {/* Minimalist Brand Name with redirect arrow */}
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-mono tracking-wider uppercase text-neutral-400 transition-colors">
                  <span className={`${ch.textColor} font-semibold transition-colors`}>
                    {ch.name}
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Micro-Telemetry Strip */}
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
