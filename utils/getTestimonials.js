"use client";

import { prisma } from "@/lib/prisma";

export const getTestimonials = async () => {
  try {
    const testimonials = await prisma.testimonial.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        content: true,
        name: true,
        company: true,
        image: true,
      },
    });

    return testimonials;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
};