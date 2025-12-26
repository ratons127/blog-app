"use client";

import { cn } from "@/lib/utils";

export default function SearchFilterBar({
  search,
  onSearchChange,
  sort,
  onSortChange,
  children
}: {
  search: string;
  onSearchChange: (value: string) => void;
  sort: string;
  onSortChange: (value: string) => void;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <label className="flex-1">
          <span className="sr-only">Search</span>
          <input
            type="search"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search by title or keyword"
            className={cn(
              "focus-ring w-full rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
            )}
            aria-label="Search"
          />
        </label>
        <label className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
          Sort by
          <select
            value={sort}
            onChange={(event) => onSortChange(event.target.value)}
            className="focus-ring rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
            aria-label="Sort"
          >
            <option value="latest">Latest</option>
            <option value="popular">Popular</option>
            <option value="price">Price</option>
          </select>
        </label>
      </div>
      {children ? <div className="flex flex-wrap gap-2">{children}</div> : null}
    </div>
  );
}
