import type { Metadata } from "next";
import ContactForm from "@/app/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact SkillWave Academy for course guidance, partnerships, or support."
};

export default function ContactPage() {
  return (
    <section className="section-padding">
      <div className="container-wide grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <h1 className="font-display text-4xl font-semibold text-slate-900 dark:text-white">
            Let&apos;s connect
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Reach out for course recommendations, partnership ideas, or help with your learning plan.
          </p>
          <ContactForm />
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Support hours</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Monday - Friday • 9:00am - 6:00pm (ET)
            </p>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
              Email us: <span className="font-semibold">hello@skillwave.academy</span>
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Learning advisors</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Book a 20-minute call to map out your next learning sprint.
            </p>
            <button className="focus-ring mt-4 rounded-full border border-brand-500 px-4 py-2 text-sm font-semibold text-brand-600">
              Schedule a call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
