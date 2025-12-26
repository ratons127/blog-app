import { cn } from "@/lib/utils";

export default function CategoryPill({
  label,
  active,
  onClick
}: {
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "focus-ring inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium transition",
        active
          ? "border-brand-500 bg-brand-500 text-white"
          : "border-slate-200 bg-white text-slate-600 hover:border-brand-200 hover:text-brand-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
      )}
    >
      {label}
    </button>
  );
}
