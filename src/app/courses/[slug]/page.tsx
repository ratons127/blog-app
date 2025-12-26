import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { courseData } from "@/lib/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return courseData.map((course) => ({ slug: course.slug }));
}

export function generateMetadata({
  params
}: {
  params: { slug: string };
}): Metadata {
  const course = courseData.find((item) => item.slug === params.slug);
  if (!course) return {};

  return {
    title: course.title,
    description: course.shortDescription,
    openGraph: {
      title: course.title,
      description: course.shortDescription
    }
  };
}

export default function CourseDetailsPage({
  params
}: {
  params: { slug: string };
}) {
  const course = courseData.find((item) => item.slug === params.slug);

  if (!course) {
    notFound();
  }

  return (
    <section className="section-padding">
      <div className="container-wide space-y-10">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-300">
              <span className="rounded-full bg-brand-50 px-3 py-1 text-brand-700 dark:bg-slate-800 dark:text-slate-200">
                {course.category}
              </span>
              <span>{course.level}</span>
              <span>{course.duration}</span>
              <span>⭐ {course.rating.toFixed(1)}</span>
            </div>
            <h1 className="font-display text-4xl font-semibold text-slate-900 dark:text-white">
              {course.title}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">{course.overview}</p>
            <div className="relative h-72 w-full overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </div>
          </div>
          <aside className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
              <p className="text-sm text-slate-500 dark:text-slate-300">Course price</p>
              <p className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">${course.price}</p>
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                Includes lifetime access, cohort access, and project feedback.
              </p>
              <button className="focus-ring mt-6 w-full rounded-full bg-brand-500 px-4 py-3 text-sm font-semibold text-white">
                Enroll now
              </button>
              <Link
                href="/contact"
                className="focus-ring mt-3 inline-flex w-full items-center justify-center rounded-full border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-200"
              >
                Talk to an advisor
              </Link>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full border border-slate-200">
                  <Image src={course.instructor.avatar} alt={course.instructor.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {course.instructor.name}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {course.instructor.role} • {course.instructor.company}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{course.instructor.bio}</p>
            </div>
          </aside>
        </div>

        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-8">
            <section>
              <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
                What you&apos;ll learn
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {course.whatYouWillLearn.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">Curriculum</h2>
              <div className="mt-4 space-y-3">
                {course.curriculum.map((section) => (
                  <details
                    key={section.title}
                    className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                  >
                    <summary className="cursor-pointer text-sm font-semibold text-slate-900 dark:text-white">
                      {section.title}
                    </summary>
                    <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                      {section.lessons.map((lesson) => (
                        <li key={lesson}>• {lesson}</li>
                      ))}
                    </ul>
                  </details>
                ))}
              </div>
            </section>
          </div>
          <div className="rounded-3xl border border-brand-100 bg-brand-50 p-6 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Course overview</h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              {course.shortDescription}
            </p>
            <div className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-center justify-between">
                <span>Duration</span>
                <span className="font-semibold text-slate-900 dark:text-white">{course.duration}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Level</span>
                <span className="font-semibold text-slate-900 dark:text-white">{course.level}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Rating</span>
                <span className="font-semibold text-slate-900 dark:text-white">{course.rating}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
