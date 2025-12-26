import type { Metadata } from "next";
import BlogClient from "@/app/blog/BlogClient";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read learning insights, study tips, and cohort stories from SkillWave Academy."
};

export default function BlogPage() {
  return (
    <section className="section-padding">
      <div className="container-wide space-y-6">
        <div>
          <h1 className="font-display text-3xl font-semibold text-slate-900 dark:text-white">Blog</h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Fresh insights on learning science, remote collaboration, and career growth.
          </p>
        </div>
        <BlogClient />
      </div>
    </section>
  );
}
