"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { loginAdmin } from "@/app/admin/actions";

export default function AdminLoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage(null);
    startTransition(async () => {
      const result = await loginAdmin(password);
      if (result.success) {
        router.push("/admin");
        router.refresh();
      } else {
        setMessage(result.message);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
        Demo password
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="focus-ring w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
          required
        />
      </label>
      <button
        type="submit"
        disabled={isPending}
        className="focus-ring w-full rounded-full bg-brand-500 px-4 py-3 text-sm font-semibold text-white shadow-soft disabled:opacity-60"
      >
        {isPending ? "Signing in..." : "Sign in"}
      </button>
      {message ? (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 dark:border-red-800 dark:bg-red-950/40">
          {message}
        </p>
      ) : null}
    </form>
  );
}
