import Link from "next/link";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" }
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50/60 py-12 dark:border-slate-800 dark:bg-slate-950">
      <div className="container-wide grid gap-10 md:grid-cols-[2fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-2 font-display text-lg font-semibold">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500 text-white shadow">
              SW
            </span>
            <span>SkillWave Academy</span>
          </div>
          <p className="prose-light max-w-md text-sm">
            SkillWave Academy is built for learners who want clarity, momentum, and outcomes. Explore curated
            courses, mentorship, and resources that help you grow at every step.
          </p>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <a className="focus-ring" href="https://twitter.com" aria-label="Twitter">
              🐦
            </a>
            <a className="focus-ring" href="https://instagram.com" aria-label="Instagram">
              📷
            </a>
            <a className="focus-ring" href="https://linkedin.com" aria-label="LinkedIn">
              💼
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-brand-500">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Stay in the loop</h3>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
            Join our newsletter for fresh learning paths and platform updates.
          </p>
          <form className="mt-4 flex flex-col gap-3" aria-label="Newsletter subscribe form">
            <input
              type="email"
              placeholder="you@example.com"
              className="focus-ring rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="focus-ring rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-soft"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="container-wide mt-10 flex flex-col items-center justify-between gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 dark:border-slate-800 sm:flex-row">
        <span>© 2024 SkillWave Academy. All rights reserved.</span>
        <span>Built for modern learners.</span>
      </div>
    </footer>
  );
}
