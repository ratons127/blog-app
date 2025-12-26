import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogData } from "@/lib/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogData.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params
}: {
  params: { slug: string };
}): Metadata {
  const post = blogData.find((item) => item.slug === params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt
    }
  };
}

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function BlogDetailsPage({
  params
}: {
  params: { slug: string };
}) {
  const post = blogData.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  const toc = post.content.map((block) => ({
    id: slugify(block.heading),
    label: block.heading
  }));

  return (
    <section className="section-padding">
      <div className="container-wide space-y-10">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2 text-xs text-brand-600">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-brand-50 px-3 py-1 text-brand-700 dark:bg-slate-800 dark:text-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-display text-4xl font-semibold text-slate-900 dark:text-white">{post.title}</h1>
          <p className="text-sm text-slate-500 dark:text-slate-300">
            {post.author} • {new Date(post.date).toLocaleDateString()}
          </p>
        </div>

        <div className="relative h-72 w-full overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 70vw"
          />
        </div>

        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          <article className="space-y-8 text-sm text-slate-600 dark:text-slate-300">
            {post.content.map((block) => (
              <section key={block.heading} id={slugify(block.heading)} className="space-y-3">
                <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
                  {block.heading}
                </h2>
                <p>{block.body}</p>
              </section>
            ))}
          </article>
          <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Table of contents</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {toc.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="hover:text-brand-600">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
