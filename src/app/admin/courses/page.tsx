import type { Metadata } from "next";
import Link from "next/link";
import AdminCoursesClient from "@/app/admin/courses/AdminCoursesClient";
import AdminLogoutButton from "@/app/admin/AdminLogoutButton";

export const metadata: Metadata = {
  title: "Manage Courses"
};

export default function AdminCoursesPage() {
  return (
    <section className="section-padding">
      <div className="container-wide space-y-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">Admin</p>
            <h1 className="font-display text-3xl font-semibold text-slate-900 dark:text-white">Course manager</h1>
            <Link href="/admin" className="text-sm text-brand-600">
              ← Back to dashboard
            </Link>
          </div>
          <AdminLogoutButton />
        </div>
        <AdminCoursesClient />
      </div>
    </section>
  );
}
