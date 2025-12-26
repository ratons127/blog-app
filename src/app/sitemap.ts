import type { MetadataRoute } from "next";
import { blogData, courseData } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://skillwave.academy";

  const routes = [
    "",
    "/courses",
    "/blog",
    "/about",
    "/contact",
    "/faq",
    "/privacy",
    "/terms",
    "/admin/login"
  ];

  const courseRoutes = courseData.map((course) => `/courses/${course.slug}`);
  const blogRoutes = blogData.map((post) => `/blog/${post.slug}`);

  return [...routes, ...courseRoutes, ...blogRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString()
  }));
}
