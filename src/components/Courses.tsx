import { BookOpen, Clock, Layers } from "lucide-react";
import { COURSES } from "@/lib/data";

const LEVEL_STYLES: Record<string, string> = {
  Beginner: "bg-[#2FBF9E]/15 text-[#4fd8b8]",
  Intermediate: "bg-violet/15 text-violet-soft",
  Advanced: "bg-[#F0658D]/15 text-[#ff89a8]",
};

export default function Courses() {
  return (
    <section id="courses" className="scroll-mt-24 px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-soft">
            Courses
          </p>
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
            Structured paths to level up
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/60">
            Self-paced courses built by mentors, pairable with 1:1 sessions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((c) => (
            <article
              key={c.id}
              className="group flex flex-col rounded-2xl border border-white/8 bg-surface/70 p-6 transition-all hover:-translate-y-1 hover:border-violet/40 hover:shadow-card"
            >
              <div className="mb-4 flex items-center justify-between">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    LEVEL_STYLES[c.level]
                  }`}
                >
                  {c.level}
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-violet-soft transition-colors group-hover:bg-violet/15">
                  <BookOpen size={18} aria-hidden="true" />
                </span>
              </div>

              <h3 className="mb-2 font-display text-lg font-bold text-white">
                {c.title}
              </h3>
              <p className="mb-5 flex-1 text-sm leading-relaxed text-white/65">
                {c.desc}
              </p>

              <div className="flex items-center gap-4 border-t border-white/8 pt-4 text-xs text-white/60">
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={14} aria-hidden="true" />
                  {c.duration}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Layers size={14} aria-hidden="true" />
                  {c.lessons} lessons
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
