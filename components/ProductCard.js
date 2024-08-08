"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const ProductCard = ({ product }) => {
  const { t } = useTranslation("common");

  return (
    <Link href={`/products/${product.slug}`}>
      <a className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 ease-in-out">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={200}
          className="object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">{product.name}</h3>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-lg font-bold mt-4">${product.price}</p>
        </div>
      </a>
    </Link>
  );
};

export default ProductCard;