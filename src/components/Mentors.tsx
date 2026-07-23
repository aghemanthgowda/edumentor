"use client";

import { useMemo, useState } from "react";
import { Search, Star } from "lucide-react";
import { CATEGORIES, MENTORS, type Mentor } from "@/lib/data";
import BookingModal from "./BookingModal";

function initialsOf(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
}

export default function Mentors() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [active, setActive] = useState<Mentor | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return MENTORS.filter((m) => {
      const matchesCategory = category === "All" || m.category === category;
      const matchesQuery =
        !q ||
        m.name.toLowerCase().includes(q) ||
        m.expertise.toLowerCase().includes(q) ||
        m.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <section id="mentors" className="scroll-mt-24 px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-soft">
            Browse mentors
          </p>
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
            Find the right mentor for you
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/60">
            Search by name or skill, filter by domain, and book a session in
            minutes.
          </p>
        </div>

        {/* Controls */}
        <div className="mb-8 flex flex-col gap-4">
          <div className="relative mx-auto w-full max-w-md">
            <Search
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search mentors or skills…"
              aria-label="Search mentors by name or skill"
              className="w-full rounded-full border border-white/12 bg-white/5 py-3 pl-11 pr-4 text-sm text-white outline-none transition-all placeholder:text-white/35 focus:border-violet focus:shadow-[0_0_0_3px_rgba(124,92,255,0.25)]"
            />
          </div>

          <div
            className="no-scrollbar flex flex-wrap items-center justify-center gap-2 overflow-x-auto"
            role="group"
            aria-label="Filter mentors by category"
          >
            {CATEGORIES.map((c) => {
              const selected = category === c;
              return (
                <button
                  key={c}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setCategory(c)}
                  className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    selected
                      ? "border-violet bg-violet text-white shadow-glow"
                      : "border-white/12 bg-white/5 text-white/70 hover:border-white/25 hover:text-white"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((m) => (
              <article
                key={m.id}
                className="group flex flex-col rounded-2xl border border-white/8 bg-surface/70 p-6 transition-all hover:-translate-y-1 hover:border-violet/40 hover:shadow-card"
              >
                <div className="mb-4 flex items-center gap-4">
                  <span
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-lg font-bold text-white"
                    style={{ backgroundColor: m.accent }}
                    aria-hidden="true"
                  >
                    {initialsOf(m.name)}
                  </span>
                  <div className="min-w-0">
                    <h3 className="truncate font-display text-lg font-bold text-white">
                      {m.name}
                    </h3>
                    <p className="truncate text-sm text-white/60">
                      {m.expertise}
                    </p>
                  </div>
                </div>

                <div className="mb-3 flex items-center gap-2">
                  <span className="rounded-full bg-violet/12 px-3 py-1 text-xs font-medium text-violet-soft">
                    {m.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-white/70">
                    <Star
                      size={13}
                      className="fill-violet-soft text-violet-soft"
                      aria-hidden="true"
                    />
                    {m.rating.toFixed(1)}
                  </span>
                </div>

                <p className="mb-5 flex-1 text-sm leading-relaxed text-white/65">
                  {m.bio}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/80">
                    <span className="font-display text-lg font-bold text-white">
                      ${m.price}
                    </span>
                    <span className="text-white/50">/hr</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => setActive(m)}
                    className="rounded-full bg-violet px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-violet-deep"
                  >
                    Book session
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-white/8 bg-surface/60 py-16 text-center">
            <p className="text-white/70">
              No mentors match your search. Try a different keyword or category.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory("All");
              }}
              className="mt-4 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {active && (
        <BookingModal mentor={active} onClose={() => setActive(null)} />
      )}
    </section>
  );
}
