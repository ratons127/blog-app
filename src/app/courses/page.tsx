import type { Metadata } from "next";
import CoursesClient from "@/app/courses/CoursesClient";

export const metadata: Metadata = {
  title: "Courses",
  description: "Browse SkillWave Academy courses across design, development, business, and more."
};

export default function CoursesPage() {
  return (
    <section className="section-padding">
      <div className="container-wide space-y-6">
        <div>
          <h1 className="font-display text-3xl font-semibold text-slate-900 dark:text-white">Courses</h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Discover guided programs with real-world projects, mentor feedback, and career-ready outcomes.
          </p>
        </div>
        <CoursesClient />
      </div>
    </section>
  );
}
