import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

function initialsOf(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
}

export default function Testimonials() {
  return (
    <section id="reviews" className="scroll-mt-24 px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-soft">
            Reviews
          </p>
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
            Loved by learners everywhere
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-white/8 bg-surface/70 p-6"
            >
              <Quote
                size={26}
                className="mb-4 text-violet-soft"
                aria-hidden="true"
              />
              <blockquote className="mb-5 flex-1 text-sm leading-relaxed text-white/80">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: t.accent }}
                  aria-hidden="true"
                >
                  {initialsOf(t.name)}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">
                    {t.name}
                  </span>
                  <span className="block text-xs text-white/55">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
