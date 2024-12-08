import React from "react";
import Image from "next/image";

export default function PopularStyles() {
  return (
    <section className="relative mx-auto px-4 sm:px-12 lg:px-28 py-12">
        <h1 className="lg:hidden font-roboto uppercase text-[black] text-xl py-4 sm:text-[34px] text-center font-bold ">
            Explore New Styles
          </h1>
      {/* Vertical Text */}
      {/* <div className="hidden lg:absolute  top-1/2 rotate-[-90deg] text-lg font-semibold text-gray-600">
        EXPLORE NEW AND POPULAR STYLES
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Main Image with H1 */}
        <div className="relative md:col-span-2">
          
          <Image
            src="/img/products/c1.png"
            alt="Orange Chair"
            layout="responsive"
            width={500}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Images */}
        <div className="grid grid-cols-2 gap-4 md:col-span-2">
          <div className="relative">
            <Image
              src="/img/products/c2.png"
              alt="White Chair 1"
              layout="responsive"
              width={250}
              height={250}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative">
            <Image
              src="/img/products/c3.png"
              alt="White Chair 2"
              layout="responsive"
              width={250}
              height={250}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative">
            <Image
              src="/img/products/c4.png"
              alt="Gray Chair"
              layout="responsive"
              width={250}
              height={250}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative">
            <Image
              src="/img/products/c3.png"
              alt="White Chair 3"
              layout="responsive"
              width={250}
              height={250}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
