"use client";

import { prisma } from "@/lib/prisma";

export const fetchProducts = async () => {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        name: true,
        slug: true,
        description: true,
        image: true,
        brand: true,
        type: true,
        capacity: true,
        price: true,
      },
    });

    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};