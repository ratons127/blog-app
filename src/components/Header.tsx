import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/80">
      <div className="container-wide flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500 text-white shadow">
            SW
          </span>
          <span>SkillWave Academy</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-brand-600 dark:text-slate-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link
            href="/courses"
            className="focus-ring inline-flex items-center rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-600"
          >
            Explore Courses
          </Link>
        </div>
        <details className="relative md:hidden">
          <summary className="focus-ring flex cursor-pointer list-none items-center rounded-full border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-slate-800 dark:text-slate-200">
            Menu
          </summary>
          <div className="absolute right-0 mt-2 w-48 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg dark:border-slate-800 dark:bg-slate-900">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-brand-600 dark:text-slate-300"
                >
                  {link.label}
                </Link>
              ))}
              <ThemeToggle />
              <Link
                href="/courses"
                className="inline-flex items-center justify-center rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white"
              >
                Explore Courses
              </Link>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
