import React from "react";
import Image from "next/image";

export default function Featured() {
  const products = [
    {
      id: 1,
      image: "/img/products/c7.png",
      title: "Library Stool Chair",
      price: "$20",
      badge: "New",
    },
    {
      id: 2,
      image: "/img/products/c3.png",
      title: "Library Stool Chair",
      price: "$20",
      badge: "Sales",
    },
    {
      id: 3,
      image: "/img/products/c9.png",
      title: "Library Stool Chair",
      price: "$20",
    },
    {
      id: 4,
      image: "/img/products/c1.png",
      title: "Library Stool Chair",
      price: "$20",
    },
    {
        id: 5,
        image: "/img/products/c6.png",
        title: "Library Stool Chair",
        price: "$20",
      },
  ];

  return (
    <div className="px-4 sm:px-12 lg:px-28">
      {/* Header with View All link */}
      <div className="flex justify-between items-center mb-4 mt-6">
        <h1 className="font-bold text-[#272343] font-inter text-xl lg:text-[32px]">
          Featured Products
        </h1>
        <a
          href="#"
          className="text-black text-lg font-semibold hover:underline px-4 hover:underline-offset-8"
        >
          View All
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mx-auto py-8 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white shadow-md hover:shadow-2xl overflow-hidden cursor-pointer hover:rounded-lg"
          >
            {/* Badge */}
            {product.badge && (
              <div
                className={`absolute top-3 left-3 px-2 py-1 text-xs font-semibold text-white rounded ${
                  product.badge === "New"
                    ? "bg-green-500"
                    : product.badge === "Sales"
                    ? "bg-orange-500"
                    : ""
                }`}
              >
                {product.badge}
              </div>
            )}

            {/* Image */}
            <Image
              src={product.image}
              alt={product.title}
              layout="responsive"
              width={250}
              height={300}
              className="w-full h-auto object-cover"
            />

            {/* Details */}
            <div className="p-4">
              <div className="flex justify-between items-center">
                <h3 className="text-[16px] font-medium text-[#272343] hover:text-[#007580]">
                  {product.title}
                </h3>
                <p className="text-lg font-semibold text-gray-800">
                  {product.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
