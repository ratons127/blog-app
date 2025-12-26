export type Instructor = {
  name: string;
  role: string;
  company: string;
  bio: string;
  avatar: string;
};

export type CurriculumSection = {
  title: string;
  lessons: string[];
};

export type Course = {
  id: string;
  slug: string;
  title: string;
  category: string;
  level: string;
  duration: string;
  rating: number;
  price: number;
  shortDescription: string;
  image: string;
  instructor: Instructor;
  overview: string;
  whatYouWillLearn: string[];
  curriculum: CurriculumSection[];
};

export type BlogContentBlock = {
  heading: string;
  body: string;
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  author: string;
  date: string;
  tags: string[];
  content: BlogContentBlock[];
};
