import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-padding">
      <div className="container-wide space-y-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">404</p>
        <h1 className="font-display text-3xl font-semibold text-slate-900 dark:text-white">
          Page not found
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          The page you are looking for does not exist. Try returning to the home page.
        </p>
        <Link
          href="/"
          className="focus-ring inline-flex items-center rounded-full bg-brand-500 px-5 py-2 text-sm font-semibold text-white"
        >
          Go home
        </Link>
      </div>
    </section>
  );
}
