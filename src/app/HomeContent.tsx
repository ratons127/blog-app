"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CourseCard from "@/components/CourseCard";
import CategoryPill from "@/components/CategoryPill";
import TestimonialCard from "@/components/TestimonialCard";
import { courseData, categories } from "@/lib/data";

const testimonials = [
  {
    name: "Riley Chen",
    role: "Product Manager",
    quote: "The learning path kept me focused every week. I shipped a portfolio-ready project in six weeks."
  },
  {
    name: "Tasha Wallace",
    role: "UX Designer",
    quote: "I loved the feedback rituals and the structure. SkillWave made it easy to stay consistent."
  },
  {
    name: "Liam Patel",
    role: "Data Analyst",
    quote: "The course labs felt like real projects. I felt ready to take on analytics work immediately."
  }
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 }
};

export default function HomeContent() {
  return (
    <div>
      <section className="section-padding">
        <div className="container-wide grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center rounded-full bg-brand-50 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-brand-700 dark:bg-slate-800 dark:text-slate-200">
              SkillWave Academy
            </span>
            <h1 className="font-display text-4xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-5xl">
              Learn with focus. Grow with momentum.
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              SkillWave Academy combines expert-led courses, curated learning paths, and hands-on projects so you can
              build skills that move your career forward.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/courses"
                className="focus-ring inline-flex items-center rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white shadow-soft"
              >
                Browse courses
              </Link>
              <Link
                href="/about"
                className="focus-ring inline-flex items-center rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-200 hover:text-brand-600 dark:border-slate-800 dark:text-slate-200"
              >
                How it works
              </Link>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
              <div>
                <p className="text-lg font-semibold text-slate-900 dark:text-white">120+</p>
                <p>Guided lessons</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-slate-900 dark:text-white">45</p>
                <p>Expert mentors</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-slate-900 dark:text-white">98%</p>
                <p>Completion rate</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.1 }}
            className="gradient-card rounded-3xl border border-slate-200 bg-white p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Weekly Cohort</p>
                  <p className="text-xs text-slate-500">Next start: Monday</p>
                </div>
                <span className="rounded-full bg-accent-500/10 px-3 py-1 text-xs font-semibold text-accent-600">
                  Live sessions
                </span>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Learning highlights</p>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <li>• Weekly studio reviews</li>
                  <li>• Curated action plans</li>
                  <li>• Community accountability</li>
                  <li>• Expert office hours</li>
                </ul>
              </div>
              <button className="focus-ring w-full rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white dark:bg-white dark:text-slate-900">
                Reserve your seat
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-slate-50 dark:bg-slate-900/30">
        <div className="container-wide space-y-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-display text-3xl font-semibold text-slate-900 dark:text-white">Featured courses</h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Explore trending programs designed for real-world impact.
              </p>
            </div>
            <Link href="/courses" className="text-sm font-semibold text-brand-600">
              View all courses →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courseData.slice(0, 3).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide space-y-8">
          <div>
            <h2 className="font-display text-3xl font-semibold text-slate-900 dark:text-white">Browse by category</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Choose the skill track that matches your goals.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <CategoryPill key={category} label={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50 dark:bg-slate-900/30">
        <div className="container-wide grid gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            <h2 className="font-display text-3xl font-semibold text-slate-900 dark:text-white">Why choose SkillWave</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              We pair curriculum clarity with accountability so learners finish what they start and apply it in the
              real world.
            </p>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li>• Structured learning paths with weekly milestones</li>
              <li>• Real-world projects and portfolio coaching</li>
              <li>• Mentors who provide feedback and guidance</li>
              <li>• Community rituals that keep you inspired</li>
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: "Guided paths", description: "Stay on track with structured milestones and progress tracking." },
              { title: "Expert mentors", description: "Learn directly from practitioners in every field." },
              { title: "Live sessions", description: "Join weekly studios and get feedback on your work." },
              { title: "Career-ready", description: "Finish with deliverables you can share with hiring teams." }
            ].map((item) => (
              <div
                key={item.title}
                className="gradient-card rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <p className="font-semibold text-slate-900 dark:text-white">{item.title}</p>
                <p className="mt-2 text-slate-600 dark:text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide space-y-8">
          <div>
            <h2 className="font-display text-3xl font-semibold text-slate-900 dark:text-white">Learner testimonials</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Hear from learners who completed their SkillWave journeys.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-600 text-white">
        <div className="container-wide flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="space-y-3">
            <h2 className="font-display text-3xl font-semibold">Ready to build your next skill?</h2>
            <p className="text-sm text-white/80">
              Join SkillWave and start a learning path designed around real outcomes.
            </p>
          </div>
          <Link
            href="/contact"
            className="focus-ring inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700"
          >
            Talk to an advisor
          </Link>
        </div>
      </section>
    </div>
  );
}
