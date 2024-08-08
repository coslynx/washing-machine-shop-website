"use client";

import { prisma } from "@/lib/prisma";

export const getBlogPosts = async () => {
  try {
    const blogPosts = await prisma.blogPost.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        slug: true,
        title: true,
        content: true,
        author: true,
        date: true,
      },
    });

    return blogPosts.map((post) => ({
      slug: post.slug,
      title: post.title,
      content: post.content,
      author: post.author,
      date: post.date.toISOString().split("T")[0],
    }));
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
};

export const getBlogPost = async (slug) => {
  try {
    const blogPost = await prisma.blogPost.findUnique({
      where: {
        slug,
      },
      select: {
        title: true,
        content: true,
        author: true,
        date: true,
      },
    });

    if (!blogPost) {
      return null;
    }

    return {
      title: blogPost.title,
      content: blogPost.content,
      author: blogPost.author,
      date: blogPost.date.toISOString().split("T")[0],
    };
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
};