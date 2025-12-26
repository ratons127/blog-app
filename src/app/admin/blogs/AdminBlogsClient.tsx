"use client";

import { useState } from "react";
import type { BlogPost } from "@/lib/types";
import { blogData } from "@/lib/data";

export default function AdminBlogsClient() {
  const [posts, setPosts] = useState<BlogPost[]>(blogData);
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("Insights");

  const addPost = () => {
    if (!title.trim()) return;
    const newPost: BlogPost = {
      id: `blog-${posts.length + 1}`,
      slug: title.toLowerCase().replace(/\s+/g, "-"),
      title,
      excerpt: "Draft blog summary",
      cover: "/images/placeholder.svg",
      author: "Editorial Team",
      date: new Date().toISOString().split("T")[0],
      tags: [tag],
      content: [
        {
          heading: "Draft heading",
          body: "Draft content body."
        }
      ]
    };

    setPosts((prev) => [newPost, ...prev]);
    setTitle("");
  };

  const removePost = (id: string) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Add a blog post</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-[2fr_1fr_auto]">
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Post title"
            className="focus-ring rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
          />
          <input
            value={tag}
            onChange={(event) => setTag(event.target.value)}
            placeholder="Tag"
            className="focus-ring rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
          />
          <button
            type="button"
            onClick={addPost}
            className="focus-ring rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white"
          >
            Add
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:flex-row md:items-center md:justify-between"
          >
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">{post.title}</p>
              <p className="text-xs text-slate-500">{post.tags.join(", ")} • {post.date}</p>
            </div>
            <button
              type="button"
              onClick={() => removePost(post.id)}
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
