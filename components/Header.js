"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { usePathname } from "next/navigation";

const Header = () => {
  const { t } = useTranslation("common");
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/">
          <a className="flex items-center">
            <Image
              src="/assets/icons/logo.svg"
              alt="Washing Machine Shop Logo"
              width={100}
              height={40}
            />
            <span className="ml-2 text-xl font-bold">{t("shopName")}</span>
          </a>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link href="/">
                <a
                  className={`py-2 px-4 rounded-md ${
                    pathname === "/" ? "bg-blue-500 text-white" : "text-gray-700"
                  }`}
                >
                  {t("home")}
                </a>
              </Link>
            </li>
            <li>
              <Link href="/products">
                <a
                  className={`py-2 px-4 rounded-md ${
                    pathname === "/products" ? "bg-blue-500 text-white" : "text-gray-700"
                  }`}
                >
                  {t("products")}
                </a>
              </Link>
            </li>
            <li>
              <Link href="/repairs">
                <a
                  className={`py-2 px-4 rounded-md ${
                    pathname === "/repairs" ? "bg-blue-500 text-white" : "text-gray-700"
                  }`}
                >
                  {t("repairs")}
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a
                  className={`py-2 px-4 rounded-md ${
                    pathname === "/about" ? "bg-blue-500 text-white" : "text-gray-700"
                  }`}
                >
                  {t("about")}
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a
                  className={`py-2 px-4 rounded-md ${
                    pathname === "/blog" ? "bg-blue-500 text-white" : "text-gray-700"
                  }`}
                >
                  {t("blog")}
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a
                  className={`py-2 px-4 rounded-md ${
                    pathname === "/contact" ? "bg-blue-500 text-white" : "text-gray-700"
                  }`}
                >
                  {t("contact")}
                </a>
              </Link>
            </li>
          </ul>
        </nav>

        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
        >
          <svg
            className={`${isMenuOpen ? "fill-current text-blue-500" : "text-gray-700"}`}
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
            ) : (
              <path d="M4 6h16v2H4V6zm0 5h16v2H4V11zm0 5h16v2H4v-2z" />
            )}
          </svg>
        </button>

        <div
          className={`md:hidden fixed inset-0 flex flex-col justify-center items-center z-50 bg-gray-900 bg-opacity-75 transition-opacity duration-300 ease-in-out ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="bg-white rounded-lg shadow-lg py-8 px-4 w-full max-w-md">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link href="/">
                  <a className="py-2 px-4 rounded-md text-gray-700 hover:bg-gray-100">
                    {t("home")}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <a className="py-2 px-4 rounded-md text-gray-700 hover:bg-gray-100">
                    {t("products")}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/repairs">
                  <a className="py-2 px-4 rounded-md text-gray-700 hover:bg-gray-100">
                    {t("repairs")}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="py-2 px-4 rounded-md text-gray-700 hover:bg-gray-100">
                    {t("about")}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a className="py-2 px-4 rounded-md text-gray-700 hover:bg-gray-100">
                    {t("blog")}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="py-2 px-4 rounded-md text-gray-700 hover:bg-gray-100">
                    {t("contact")}
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;