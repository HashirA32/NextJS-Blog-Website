"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const BlogsPage = () => {
  const blogs = [
    {
      title: "Mastering React Hooks",
      description: "Learn how to use React Hooks to build powerful components.",
      slug: "mastering-react-hooks",
      date: "2025-04-20",
      author: "John Doe",
      img: "./file.svg",
    },
    {
      title: "Next.js SEO Best Practices",
      description:
        "Optimize your Next.js app for search engines with these tips.",
      slug: "nextjs-seo-best-practices",
      date: "2025-04-18",
      author: "Jane Smith",
      img: "/Porfolio.jfif",
    },
    {
      title: "Styling with TailwindCSS",
      description: "Build sleek and responsive UIs faster with TailwindCSS.",
      slug: "styling-with-tailwindcss",
      date: "2025-04-15",
      author: "Alex Brown",
      img: "/globe.svg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Latest Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.15,
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            whileHover={{
              scale: 1.015,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.08)",
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            className="border rounded-xl shadow-sm overflow-hidden transition-all bg-white"
          >
            <Image
              src={blog.img}
              alt={blog.title}
              width={500}
              height={250}
              className="w-full h-40 object-cover"
            />
            <div className="p-3">
              <h2 className="text-lg font-semibold mb-1">{blog.title}</h2>
              <p className="text-sm text-gray-700 mb-3">{blog.description}</p>
              <div className="text-xs text-gray-500 mb-3">
                {new Date(blog.date).toDateString()} • {blog.author}
              </div>
              <Link href={`/blogsPage/${blog.slug}`}>
                <Button variant="destructive" className="text-sm px-4 py-2">
                  Read More
                </Button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
