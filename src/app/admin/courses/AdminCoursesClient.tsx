"use client";

import { useState } from "react";
import type { Course } from "@/lib/types";
import { courseData } from "@/lib/data";

export default function AdminCoursesClient() {
  const [courses, setCourses] = useState<Course[]>(courseData);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("99");

  const addCourse = () => {
    if (!title.trim()) return;
    const newCourse: Course = {
      id: `course-${courses.length + 1}`,
      slug: title.toLowerCase().replace(/\s+/g, "-"),
      title,
      category: "Custom",
      level: "Beginner",
      duration: "4 weeks",
      rating: 4.5,
      price: Number(price),
      shortDescription: "New course draft",
      image: "/images/placeholder.svg",
      instructor: {
        name: "Staff Instructor",
        role: "Instructor",
        company: "SkillWave Academy",
        bio: "Draft instructor profile.",
        avatar: "/images/placeholder.svg"
      },
      overview: "Draft overview",
      whatYouWillLearn: ["Learning outcome"],
      curriculum: [
        {
          title: "Module 1",
          lessons: ["Lesson 1"]
        }
      ]
    };

    setCourses((prev) => [newCourse, ...prev]);
    setTitle("");
  };

  const removeCourse = (id: string) => {
    setCourses((prev) => prev.filter((course) => course.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Add a course</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-[2fr_1fr_auto]">
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Course title"
            className="focus-ring rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
          />
          <input
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            placeholder="Price"
            className="focus-ring rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
          />
          <button
            type="button"
            onClick={addCourse}
            className="focus-ring rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white"
          >
            Add
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:flex-row md:items-center md:justify-between"
          >
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">{course.title}</p>
              <p className="text-xs text-slate-500">{course.category} • ${course.price}</p>
            </div>
            <button
              type="button"
              onClick={() => removeCourse(course.id)}
              className="focus-ring rounded-full border border-red-200 px-4 py-2 text-xs font-semibold text-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
