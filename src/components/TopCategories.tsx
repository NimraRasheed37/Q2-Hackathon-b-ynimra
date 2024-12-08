import React from "react";
import Image from "next/image";

export default function TopCategories() {
  const categories = [
    {
      id: 1,
      image: "/img/products/c6.png",
      title: "Wing Chair",
      productCount: "3,584 Products",
    },
    {
      id: 2,
      image: "/img/products/c8.png",
      title: "Wooden Chair",
      productCount: "157 Products",
    },
    {
      id: 3,
      image: "/img/products/c9.png",
      title: "Desk Chair",
      productCount: "154 Products",
    },
  ];

  return (
    <section className="px-4 sm:px-12 lg:px-28 py-12">
      <h2 className="text-center lg:text-left font-bold mb-8 mt-6 text-[#272343] font-inter text-xl lg:text-[32px]">Top Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl group"
          >
            {/* Image */}
            <div className="relative w-[424px] h-[424px] cursor-pointer">
              <Image
                src={category.image}
                alt={category.title}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Overlay Content */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-black opacity-70 p-4">
              <h3 className="text-white text-lg font-semibold">{category.title}</h3>
              <p className="text-gray-300 text-sm">{category.productCount}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
