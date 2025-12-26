"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { logoutAdmin } from "@/app/admin/actions";

export default function AdminLogoutButton() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <button
      type="button"
      onClick={() => {
        startTransition(async () => {
          await logoutAdmin();
          router.push("/admin/login");
          router.refresh();
        });
      }}
      className="focus-ring rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-200"
      disabled={isPending}
    >
      {isPending ? "Signing out..." : "Sign out"}
    </button>
  );
}
