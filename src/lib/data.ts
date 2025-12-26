import courses from "@/data/courses.json";
import blogPosts from "@/data/blog.json";
import type { BlogPost, Course } from "@/lib/types";

export const courseData = courses as Course[];
export const blogData = blogPosts as BlogPost[];

export const categories = Array.from(new Set(courseData.map((course) => course.category)));
export const blogTags = Array.from(
  new Set(blogData.flatMap((post) => post.tags))
);
