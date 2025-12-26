import { cn } from "@/lib/utils";

export default function Pagination({
  page,
  totalPages,
  onPageChange
}: {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex flex-wrap items-center justify-center gap-2" role="navigation" aria-label="Pagination">
      {Array.from({ length: totalPages }).map((_, index) => {
        const pageNumber = index + 1;
        return (
          <button
            key={pageNumber}
            type="button"
            onClick={() => onPageChange(pageNumber)}
            className={cn(
              "focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold",
              page === pageNumber
                ? "border-brand-500 bg-brand-500 text-white"
                : "border-slate-200 bg-white text-slate-600 hover:border-brand-200 hover:text-brand-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
            )}
            aria-current={page === pageNumber ? "page" : undefined}
          >
            {pageNumber}
          </button>
        );
      })}
    </div>
  );
}
