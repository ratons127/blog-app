import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/lib/types";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
      <div className="relative h-40 w-full">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-300">
          <span className="rounded-full bg-brand-50 px-3 py-1 text-brand-700 dark:bg-slate-800 dark:text-slate-200">
            {course.category}
          </span>
          <span>{course.duration}</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900 group-hover:text-brand-600 dark:text-white">
            {course.title}
          </h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            {course.shortDescription}
          </p>
        </div>
        <div className="mt-auto flex items-center justify-between text-sm text-slate-500 dark:text-slate-300">
          <span>{course.level}</span>
          <span className="font-semibold text-slate-900 dark:text-white">${course.price}</span>
        </div>
        <Link
          href={`/courses/${course.slug}`}
          className="focus-ring mt-2 inline-flex items-center justify-center rounded-full border border-brand-500 px-4 py-2 text-sm font-semibold text-brand-600 transition hover:bg-brand-500 hover:text-white"
        >
          View details
        </Link>
      </div>
    </article>
  );
}
