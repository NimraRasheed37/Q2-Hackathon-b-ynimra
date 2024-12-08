import React from "react";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";

export default function AllProducts() {
  const products = [
    {
      id: 1,
      image: "/img/products/c3.png",
      title: "Library Stool Chair",
      price: "$20",
      badge: "New",
    },
    {
      id: 2,
      image: "/img/products/c5.png",
      title: "Library Stool Chair",
      price: "$20",
      originalPrice: "$30",
      badge: "Sales",
    },
    {
      id: 3,
      image: "/img/products/c1.png",
      title: "Library Stool Chair",
      price: "$20",
    },
    {
      id: 4,
      image: "/img/products/c2.png",
      title: "Library Stool Chair",
      price: "$20",
    },
    {
        id: 5,
        image: "/img/products/c8.png",
        title: "Library Stool Chair",
        price: "$20",
        badge: "New",
      },
      {
        id: 6,
        image: "/img/products/c4.png",
        title: "Library Stool Chair",
        price: "$20",
        originalPrice: "$30",
        badge: "Sales",
      },
      {
        id: 7,
        image: "/img/products/c7.png",
        title: "Library Stool Chair",
        price: "$20",
      },
      {
        id: 8,
        image: "/img/products/c3.png",
        title: "Library Stool Chair",
        price: "$20",
      },
      {
        id: 9,
        image: "/img/products/c6.png",
        title: "Library Stool Chair",
        price: "$20",
        badge: "New",
      },
      {
        id: 10,
        image: "/img/products/c5.png",
        title: "Library Stool Chair",
        price: "$20",
        originalPrice: "$30",
        badge: "Sales",
      },
      {
        id: 11,
        image: "/img/products/c1.png",
        title: "Library Stool Chair",
        price: "$20",
      },
      {
        id: 12,
        image: "/img/products/c9.png",
        title: "Library Stool Chair",
        price: "$20",
      },
  ];

  return (
    <div className="px-4 sm:px-12 lg:px-28">
      <h1 className="text-center md:text-left font-bold mb-4 mt-6 text-[#272343] font-inter text-xl lg:text-[32px]">All Products</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto py-8 ">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative bg-white shadow-md hover:shadow-2xl overflow-hidden cursor-pointer"
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
            <h3 className="text-[16px] font-medium text-[#272343] hover:text-[#007580] mb-2">{product.title}</h3>
            <div className="flex items-center space-x-2">
              <p className="text-lg font-semibold text-gray-800">{product.price}</p>
              {product.originalPrice && (
                <p className="text-sm line-through text-[#272343]">
                  {product.originalPrice}
                </p>
              )}
            </div>
          </div>
          {/* Shopping Cart */}
          <div className="absolute bottom-3 right-3">
            <button className="p-2 bg-gray-100 rounded-md hover:text-white  hover:bg-[#029FAE]">
              <FaShoppingCart  />
            </button> 
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
