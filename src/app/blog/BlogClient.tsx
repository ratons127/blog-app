"use client";

import { useMemo, useState } from "react";
import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/Pagination";
import SearchFilterBar from "@/components/SearchFilterBar";
import CategoryPill from "@/components/CategoryPill";
import { blogData, blogTags } from "@/lib/data";

const PAGE_SIZE = 6;

export default function BlogClient() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("latest");
  const [activeTag, setActiveTag] = useState("All");
  const [page, setPage] = useState(1);

  const filteredPosts = useMemo(() => {
    let data = [...blogData];

    if (activeTag !== "All") {
      data = data.filter((post) => post.tags.includes(activeTag));
    }

    if (search) {
      const query = search.toLowerCase();
      data = data.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query)
      );
    }

    if (sort === "latest") {
      data.sort((a, b) => b.date.localeCompare(a.date));
    }

    if (sort === "popular") {
      data.sort((a, b) => b.tags.length - a.tags.length);
    }

    if (sort === "price") {
      data.sort((a, b) => a.title.localeCompare(b.title));
    }

    return data;
  }, [activeTag, search, sort]);

  const totalPages = Math.ceil(filteredPosts.length / PAGE_SIZE);
  const paginatedPosts = filteredPosts.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  const handleTagChange = (tag: string) => {
    setActiveTag(tag);
    setPage(1);
  };

  return (
    <div className="space-y-8">
      <SearchFilterBar
        search={search}
        onSearchChange={setSearch}
        sort={sort}
        onSortChange={setSort}
      >
        <CategoryPill
          label="All"
          active={activeTag === "All"}
          onClick={() => handleTagChange("All")}
        />
        {blogTags.map((tag) => (
          <CategoryPill
            key={tag}
            label={tag}
            active={activeTag === tag}
            onClick={() => handleTagChange(tag)}
          />
        ))}
      </SearchFilterBar>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {paginatedPosts.length ? (
          paginatedPosts.map((post) => <BlogCard key={post.id} post={post} />)
        ) : (
          <div className="col-span-full rounded-2xl border border-dashed border-slate-300 p-10 text-center text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
            No posts match your filters yet. Try another tag or keyword.
          </div>
        )}
      </div>

      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}
