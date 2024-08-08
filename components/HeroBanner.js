"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const HeroBanner = () => {
  const { t } = useTranslation("common");

  return (
    <div className="relative bg-gray-100 py-24">
      <Image
        src="/assets/images/hero-banner.jpg"
        alt="Hero Banner"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      <div className="container mx-auto px-4 text-center z-10">
        <h1 className="text-4xl font-bold text-white mb-4">
          {t("heroBannerTitle")}
        </h1>
        <p className="text-lg text-white mb-8">{t("heroBannerDescription")}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
          {t("heroBannerButton")}
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;