import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Review the terms for using SkillWave Academy services."
};

export default function TermsPage() {
  return (
    <section className="section-padding">
      <div className="container-wide space-y-6">
        <h1 className="font-display text-4xl font-semibold text-slate-900 dark:text-white">Terms & Conditions</h1>
        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
          <p>
            By accessing SkillWave Academy, you agree to use the platform responsibly and respect intellectual property
            owned by SkillWave and its instructors.
          </p>
          <p>
            Course materials are for personal use only and may not be redistributed without permission. Violations may
            result in suspension of access.
          </p>
          <p>
            Subscription or course access may be updated or cancelled by SkillWave with reasonable notice. For questions,
            contact support@skillwave.academy.
          </p>
        </div>
      </div>
    </section>
  );
}
