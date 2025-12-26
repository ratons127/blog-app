# SkillWave Academy

A production-ready educational website built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. The project includes responsive layouts, dark mode, SEO-friendly metadata, course and blog pages, and a lightweight admin dashboard with demo authentication.

## ✨ Features

- Modern, responsive UI (mobile/tablet/desktop)
- Light/dark mode toggle
- Home, Courses, Course Details, Blog, Blog Details, About, Contact, FAQ, Privacy, Terms
- Search, filtering, sorting, and pagination for courses and blog posts
- Admin dashboard with in-memory CRUD (demo password protected)
- Framer Motion animations
- React Hook Form + Zod validation for contact form
- SEO metadata, OpenGraph, sitemap, and robots.txt

## 🧰 Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form + Zod
- next-themes for dark mode

## ✅ Setup

```bash
npm install
```

## 🔐 Environment Variables

Create a `.env.local` file with:

```bash
ADMIN_DEMO_PASSWORD=your-demo-password
```

## 🚀 Run the project

```bash
npm run dev
```

## 🏗️ Build for production

```bash
npm run build
npm run start
```

## 📂 Project Structure

```
src/
  app/              # App Router pages
  components/       # Reusable UI components
  data/             # Mock JSON data for courses and blog posts
  lib/              # Types, utils, validation
  styles/           # Global styles
public/             # Placeholder images
```

## ✅ Checklist

**Completed**
- [x] Full page structure (home, courses, course details, blog, blog details, about, contact, FAQ, privacy, terms)
- [x] SEO metadata, sitemap, robots.txt
- [x] Reusable UI components
- [x] Light/dark mode
- [x] Framer Motion animations
- [x] Contact form validation with Zod + React Hook Form
- [x] Admin dashboard with demo password and in-memory CRUD

**Future Enhancements**
- [ ] Payment gateway integration
- [ ] Real authentication (OAuth or email login)
- [ ] CMS integration for dynamic content
- [ ] Real-time course progress tracking

---

Built for modern learners. ⚡
