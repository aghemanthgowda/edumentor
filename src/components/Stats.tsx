import { STATS } from "@/lib/data";

export default function Stats() {
  return (
    <section className="px-5 py-8 sm:px-8" aria-label="Platform statistics">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 rounded-3xl border border-white/8 bg-surface/60 p-6 sm:gap-6 sm:p-8 md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-3xl font-extrabold text-gradient sm:text-4xl">
              {s.value}
            </div>
            <div className="mt-1 text-xs font-medium text-white/60 sm:text-sm">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
