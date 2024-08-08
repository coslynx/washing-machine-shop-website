"use client";

import React from "react";
import { useTranslation } from "next-i18next";
import HeroBanner from "@/components/HeroBanner";
import ShopDescription from "@/components/ShopDescription";
import CallToAction from "@/components/CallToAction";

const Home = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <HeroBanner />
      <ShopDescription />
      <CallToAction buttonText={t("viewProducts")} buttonLink="/products" />
    </>
  );
};

export default Home;