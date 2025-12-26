import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about SkillWave Academy."
};

const faqs = [
  {
    question: "How do SkillWave learning paths work?",
    answer:
      "Each path combines self-paced lessons, weekly milestones, and mentor feedback so you stay on track."
  },
  {
    question: "Are courses live or on-demand?",
    answer:
      "Courses are primarily on-demand with optional live cohort sessions and office hours."
  },
  {
    question: "Can I switch cohorts or pause?",
    answer:
      "Yes, you can move to a future cohort or pause your access. Our advisors can help you plan your schedule."
  },
  {
    question: "Do I get a certificate?",
    answer:
      "Learners receive a shareable completion badge and project portfolio feedback at the end of each course."
  }
];

export default function FAQPage() {
  return (
    <section className="section-padding">
      <div className="container-wide space-y-8">
        <div>
          <h1 className="font-display text-4xl font-semibold text-slate-900 dark:text-white">FAQ</h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Everything you need to know about learning with SkillWave Academy.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <summary className="cursor-pointer text-sm font-semibold text-slate-900 dark:text-white">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
