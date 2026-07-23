"use client";

import { Github, Linkedin, Twitter, Youtube } from "lucide-react";
import Logo from "./Logo";

const COLUMNS = [
  {
    title: "Platform",
    links: [
      { label: "Browse mentors", href: "#mentors" },
      { label: "Courses", href: "#courses" },
      { label: "How it works", href: "#how" },
      { label: "Reviews", href: "#reviews" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#top" },
      { label: "Careers", href: "#top" },
      { label: "Blog", href: "#top" },
      { label: "Contact", href: "#top" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Help center", href: "#top" },
      { label: "Community", href: "#top" },
      { label: "Privacy", href: "#top" },
      { label: "Terms", href: "#top" },
    ],
  },
];

const SOCIALS = [
  { label: "Twitter", Icon: Twitter },
  { label: "LinkedIn", Icon: Linkedin },
  { label: "GitHub", Icon: Github },
  { label: "YouTube", Icon: Youtube },
];

export default function Footer() {
  const handleNav = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    document
      .querySelector(href)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="border-t border-white/8 px-5 pb-10 pt-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              Premium mentorship & learning that connects you with vetted
              experts. Learn faster, build real things.
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#top"
                  onClick={(e) => handleNav(e, "#top")}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-violet/40 hover:text-white"
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="mb-4 text-sm font-semibold text-white">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      onClick={(e) => handleNav(e, l.href)}
                      className="text-sm text-white/55 transition-colors hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/8 pt-6 sm:flex-row">
          <p className="text-sm text-white/50">
            © 2026 EduMentor · A Nexum Projects build
          </p>
          <p className="text-xs text-white/40">
            Crafted with care for lifelong learners.
          </p>
        </div>
      </div>
    </footer>
  );
}
