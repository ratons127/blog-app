import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/types";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
      <div className="relative h-40 w-full">
        <Image
          src={post.cover}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
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
        <div>
          <h3 className="text-lg font-semibold text-slate-900 group-hover:text-brand-600 dark:text-white">
            {post.title}
          </h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{post.excerpt}</p>
        </div>
        <div className="mt-auto flex items-center justify-between text-xs text-slate-500 dark:text-slate-300">
          <span>{post.author}</span>
          <span>{new Date(post.date).toLocaleDateString()}</span>
        </div>
        <Link
          href={`/blog/${post.slug}`}
          className="focus-ring mt-2 inline-flex items-center justify-center rounded-full border border-brand-500 px-4 py-2 text-sm font-semibold text-brand-600 transition hover:bg-brand-500 hover:text-white"
        >
          Read article
        </Link>
      </div>
    </article>
  );
}
