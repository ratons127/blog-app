"use client";

import { useMemo, useState } from "react";
import CourseCard from "@/components/CourseCard";
import Pagination from "@/components/Pagination";
import SearchFilterBar from "@/components/SearchFilterBar";
import CategoryPill from "@/components/CategoryPill";
import { categories, courseData } from "@/lib/data";

const PAGE_SIZE = 6;

export default function CoursesClient() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("latest");
  const [activeCategory, setActiveCategory] = useState("All");
  const [page, setPage] = useState(1);

  const filteredCourses = useMemo(() => {
    let data = [...courseData];

    if (activeCategory !== "All") {
      data = data.filter((course) => course.category === activeCategory);
    }

    if (search) {
      const query = search.toLowerCase();
      data = data.filter(
        (course) =>
          course.title.toLowerCase().includes(query) ||
          course.shortDescription.toLowerCase().includes(query)
      );
    }

    if (sort === "popular") {
      data.sort((a, b) => b.rating - a.rating);
    }

    if (sort === "price") {
      data.sort((a, b) => a.price - b.price);
    }

    if (sort === "latest") {
      data.sort((a, b) => b.id.localeCompare(a.id));
    }

    return data;
  }, [activeCategory, search, sort]);

  const totalPages = Math.ceil(filteredCourses.length / PAGE_SIZE);
  const paginatedCourses = filteredCourses.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
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
          active={activeCategory === "All"}
          onClick={() => handleCategoryChange("All")}
        />
        {categories.map((category) => (
          <CategoryPill
            key={category}
            label={category}
            active={activeCategory === category}
            onClick={() => handleCategoryChange(category)}
          />
        ))}
      </SearchFilterBar>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {paginatedCourses.length ? (
          paginatedCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <div className="col-span-full rounded-2xl border border-dashed border-slate-300 p-10 text-center text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
            No courses match your filters yet. Try another category or keyword.
          </div>
        )}
      </div>

      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}
