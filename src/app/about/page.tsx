import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn how SkillWave Academy designs learning paths for modern professionals."
};

export default function AboutPage() {
  return (
    <section className="section-padding">
      <div className="container-wide grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <h1 className="font-display text-4xl font-semibold text-slate-900 dark:text-white">
            About SkillWave Academy
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            SkillWave Academy is a learning platform built for people who want to grow with clarity, community, and
            real-world outcomes. We combine thoughtful curriculum design with hands-on mentorship so you can move from
            learning to applying.
          </p>
          <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <p>
              Our team partners with industry mentors to build learning experiences that feel engaging and practical.
              Every program includes live feedback, community rituals, and structured milestones.
            </p>
            <p>
              We believe education should be flexible, inclusive, and designed for real people. That is why SkillWave
              prioritizes flexible cohorts, personalized plans, and a welcoming community space.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
            <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">Our mission</h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              To empower learners everywhere with skills that create opportunity and growth.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
            <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">Our values</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li>• Curiosity-driven learning</li>
              <li>• Transparent progress</li>
              <li>• Community collaboration</li>
              <li>• Practical, portfolio-ready outcomes</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
