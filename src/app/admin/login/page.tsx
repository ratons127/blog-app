import type { Metadata } from "next";
import Link from "next/link";
import AdminLoginForm from "@/app/admin/login/AdminLoginForm";

export const metadata: Metadata = {
  title: "Admin Login"
};

export default function AdminLoginPage() {
  return (
    <section className="section-padding">
      <div className="container-wide max-w-xl space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">Admin access</p>
          <h1 className="font-display text-3xl font-semibold text-slate-900 dark:text-white">SkillWave Admin</h1>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Enter the demo password from your environment to access the admin dashboard.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
          <AdminLoginForm />
        </div>
        <Link href="/" className="text-sm font-semibold text-brand-600">
          ← Back to site
        </Link>
      </div>
    </section>
  );
}
