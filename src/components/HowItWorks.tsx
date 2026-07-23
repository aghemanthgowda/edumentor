import { STEPS } from "@/lib/data";

export default function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-24 px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-soft">
            How it works
          </p>
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
            From stuck to shipping in four steps
          </h2>
        </div>

        <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-white/8 bg-surface/70 p-6"
            >
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-violet/15 font-display text-lg font-bold text-violet-soft">
                {i + 1}
              </span>
              <h3 className="mb-2 font-display text-lg font-bold text-white">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/65">
                {step.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
