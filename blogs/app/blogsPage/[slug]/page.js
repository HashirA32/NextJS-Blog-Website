import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const blogs = [
  {
    title: "Mastering React Hooks",
    description:
      "Learn how to use React Hooks to build powerful components.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia reprehenderit, commodi dolorem deserunt praesentium dolor, reiciendis laboriosam voluptate voluptatem totam voluptas eius? Mollitia provident blanditiis alias iusto ut voluptates voluptatibus.",
    slug: "mastering-react-hooks",
    date: "2025-04-20",
    author: "John Doe",
    img: "/file.svg",
    content: `Hooks are functions that let you “hook into” React state and lifecycle features from function components...`,
  },
  {
    title: "Next.js SEO Best Practices",
    description:
      "Optimize your Next.js app for search engines with these tips.",
    slug: "nextjs-seo-best-practices",
    date: "2025-04-18",
    author: "Jane Smith",
    img: "/Porfolio.jfif",
    content: `Make sure your app has meta tags, proper slugs, and sitemap.xml...`,
  },
  {
    title: "Styling with TailwindCSS",
    description: "Build sleek and responsive UIs faster with TailwindCSS.",
    slug: "styling-with-tailwindcss",
    date: "2025-04-15",
    author: "Alex Brown",
    img: "/globe.svg",
    content: `TailwindCSS provides utility classes that help you rapidly build modern UIs...`,
  },
];

export async function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogDetailsPage({ params }) {
  const { slug } = params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <div className="text-sm mb-6">
        {new Date(blog.date).toDateString()} | {blog.author}
      </div>
      <Image
        src={blog.img}
        alt={blog.title}
        width={800}
        height={400}
        className="w-full h-64 object-cover rounded-lg mb-6 bg-contain"
      />
      <p className="text-lg leading-relaxed mb-8">{blog.description}</p>
      <Link href="/blogs">
        <Button variant="destructive">Back to Blogs</Button>
      </Link>
    </div>
  );
}
