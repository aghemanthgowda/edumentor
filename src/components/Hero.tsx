"use client";

import { ArrowRight, Sparkles, Star } from "lucide-react";

export default function Hero() {
  const scrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    document
      .querySelector(href)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pt-40"
    >
      {/* animated gradient accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-24 left-1/4 h-72 w-72 animate-float rounded-full bg-violet/30 blur-[120px]" />
        <div className="absolute right-10 top-40 h-80 w-80 animate-pulse-slow rounded-full bg-[#5B8DEF]/20 blur-[130px]" />
        <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-deep/20 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(124,92,255,0.10),_transparent_55%)]" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex animate-fade-up items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80">
          <Sparkles size={14} className="text-violet-soft" />
          Trusted by 5,000+ learners worldwide
        </div>

        <h1 className="animate-fade-up font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl">
          Learn faster with{" "}
          <span className="text-gradient">expert mentors</span> in your corner
        </h1>

        <p className="mx-auto mt-6 max-w-2xl animate-fade-up text-base leading-relaxed text-white/70 sm:text-lg">
          EduMentor pairs you with vetted engineers, designers, and data
          scientists for personalized 1:1 sessions. Get unstuck, build real
          projects, and reach your goals with guidance that actually fits you.
        </p>

        <div className="mt-9 flex animate-fade-up flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#mentors"
            onClick={(e) => scrollTo(e, "#mentors")}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-violet px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03] hover:bg-violet-deep sm:w-auto"
          >
            Browse mentors
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#courses"
            onClick={(e) => scrollTo(e, "#courses")}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
          >
            Explore courses
          </a>
        </div>

        <div className="mt-8 flex animate-fade-up items-center justify-center gap-2 text-sm text-white/60">
          <span className="flex" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star
                key={i}
                size={16}
                className="fill-violet-soft text-violet-soft"
              />
            ))}
          </span>
          <span>4.9 average from 1,200+ reviews</span>
        </div>
      </div>
    </section>
  );
}
