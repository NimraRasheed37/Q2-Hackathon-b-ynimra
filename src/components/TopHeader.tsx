"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

export default function TopHeader() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* Top Header */}
      <div className="bg-[#272343] w-full h-[48px] flex justify-between items-center px-4 sm:px-12 md:px-28">
        <FaBars
          className="sm:hidden flex text-2xl cursor-pointer text-white"
          onClick={() => setIsSidebarOpen(true)}
        />
        <div className="lg:w-[255px] h-[16px] sm:flex justify-center gap-2 hidden">
          <Image src="/img/top/check.png" alt="" width={18} height={18} />
          <p className="text-white text-[13px] font-inter font-[400]">
            Free shipping on all orders over $50
          </p>
        </div>

        <div>
          <ul className="flex justify-center items-center gap-4 text-white text-[13px] ">
            <li className="flex justify-center gap-2 hover:text-gray-300">
              ENG
              <Image
                src="/img/top/dd.svg"
                alt="drop down"
                width={14}
                height={14}
                className="cursor-pointer"
              />
            </li>
            <Link href="/pages/faqs">
              <li className="hover:text-gray-300">faqs</li>
            </Link>
            <Link href="/pages/contact">
              <li className="flex justify-center gap-2 hover:text-gray-300">
                <Image
                  src="/img/top/alert.svg"
                  alt="alert"
                  width={16}
                  height={16}
                />
                Need Help
              </li>
            </Link>
          </ul>
        </div>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 h-full w-2/3 bg-white z-50 shadow-lg flex flex-col p-6 sm:hidden">
          <button
            className="text-gray-600 text-2xl mb-4 self-end"
            onClick={() => setIsSidebarOpen(false)}
          >
            &times;
          </button>
          <ul className="flex flex-col gap-4">
            <Link href="/">
              <li
                className="text-[14px] text-[#636270] font-inter font-semibold hover:text-[#007580]"
                onClick={() => setIsSidebarOpen(false)}
              >
                Home
              </li>
            </Link>
            <Link href="/pages/shop">
              <li
                className="text-[14px] text-[#636270] font-inter font-semibold hover:text-[#007580]"
                onClick={() => setIsSidebarOpen(false)}
              >
                Shop
              </li>
            </Link>
            <Link href="/pages/product">
              <li
                className="text-[14px] text-[#636270] font-inter font-semibold hover:text-[#007580]"
                onClick={() => setIsSidebarOpen(false)}
              >
                Product
              </li>
            </Link>
            <Link href="">
              <li
                className="text-[14px] text-[#636270] font-inter font-semibold hover:text-[#007580]"
                onClick={() => setIsSidebarOpen(false)}
              >
                Pages
              </li>
            </Link>
            <Link href="/pages/about">
              <li
                className="text-[14px] text-[#636270] font-inter font-semibold hover:text-[#007580]"
                onClick={() => setIsSidebarOpen(false)}
              >
                About
              </li>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
}
