import type { Metadata } from "next";
import Link from "next/link";
import AdminLogoutButton from "@/app/admin/AdminLogoutButton";
import { blogData, courseData } from "@/lib/data";

export const metadata: Metadata = {
  title: "Admin Dashboard"
};

export default function AdminDashboardPage() {
  return (
    <section className="section-padding">
      <div className="container-wide space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">Admin</p>
            <h1 className="font-display text-3xl font-semibold text-slate-900 dark:text-white">
              Dashboard overview
            </h1>
          </div>
          <AdminLogoutButton />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm text-slate-500">Courses</p>
            <p className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">
              {courseData.length}
            </p>
            <p className="mt-2 text-xs text-slate-500">Live programs in catalog</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm text-slate-500">Blog posts</p>
            <p className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">
              {blogData.length}
            </p>
            <p className="mt-2 text-xs text-slate-500">Published articles</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm text-slate-500">Active cohort</p>
            <p className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">Spring</p>
            <p className="mt-2 text-xs text-slate-500">78 learners enrolled</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/admin/courses"
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900"
          >
            <h2 className="text-lg font-semibold text-slate-900 group-hover:text-brand-600 dark:text-white">
              Manage courses
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Update catalog entries, pricing, and curriculum details.
            </p>
          </Link>
          <Link
            href="/admin/blogs"
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900"
          >
            <h2 className="text-lg font-semibold text-slate-900 group-hover:text-brand-600 dark:text-white">
              Manage blog
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Create and review articles in the learning journal.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
