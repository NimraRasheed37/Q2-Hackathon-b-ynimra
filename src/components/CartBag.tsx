import Image from "next/image";
import { FaHeart, FaTrash } from "react-icons/fa";

export default function CartBag() {
  return (
    <>
      <div className="px-4 sm:px-12 lg:px-28 bg-gray-100 lg:h-[630px] h-auto flex flex-col md:flex-row justify-between items-center">
        {/* Cart Bag */}
        <div className="md:w-2/3 w-full">
          <h1 className="text-[#111111] font-medium text-md my-4 sm:text-[22px]">
            Bag
          </h1>
          <div className="flex flex-col gap-10">
            <div className="flex justify-start items-center gap-8">
              <Image
                src="/img/products/c1.png"
                alt="cart 1"
                width={150}
                height={150}
              />
              <div className="flex flex-col justify-between items-start gap-4 text-left">
                <h1 className="text-[16px] text-[#272343] font-inter mb-2">
                  Library Stool Chair
                </h1>
                <p className="text-[15px] text-[#757575]">
                  {`Ashen Slate/Cobalt Bliss`}
                </p>
                <div className="flex justify-between gap-12 ">
                  <p className="text-[15px] text-[#757575]">
                    {`Size: `}<span>L</span>
                  </p>
                  <p className="text-[15px] text-[#757575]">
                    {`Quantity: `}<span>1</span>
                  </p>
                </div>
                <div className="flex justify-start items-center gap-4">
                  <button className="p-2 bg-transparent hover:bg-gray-200 rounded-full border-transparent border-2 hover:border-[#029FAE]">
                    <FaHeart
                      size={14}
                      className="text-[#757575] hover:text-[#029FAE]"
                    />
                  </button>
                  <button className="p-2 bg-transparent hover:bg-gray-200 border-transparent border-2 hover:border-[#029FAE] rounded-full">
                    <FaTrash
                      size={14}
                      className="text-[#757575] hover:text-[#029FAE]"
                    />
                  </button>
                </div>
              </div>
              <div className="">
                <p>{`MRP:`}<span>{`$99`}</span></p>
              </div>
            </div>
            <hr className="text-black" />
            <div className="flex justify-start items-center gap-8">
              <Image
                src="/img/products/c1.png"
                alt="cart 1"
                width={150}
                height={150}
              />
              <div className="flex flex-col justify-between items-start gap-4 text-left">
                <h1 className="text-[16px] text-[#272343] font-inter mb-2">
                  Library Stool Chair
                </h1>
                <p className="text-[15px] text-[#757575]">
                  Ashen Slate/Cobalt Bliss
                </p>
                <div className="flex justify-between gap-12 ">
                  <p className="text-[15px] text-[#757575]">
                    Size: <span>L</span>
                  </p>
                  <p className="text-[15px] text-[#757575]">
                    Quantity: <span>1</span>
                  </p>
                </div>
                <div className="flex justify-start items-center gap-4">
                  <button className="p-2 bg-transparent hover:bg-gray-200 rounded-full border-transparent border-2 hover:border-[#029FAE]">
                    <FaHeart
                      size={14}
                      className="text-[#757575] hover:text-[#029FAE]"
                    />
                  </button>
                  <button className="p-2 bg-transparent hover:bg-gray-200 border-transparent border-2 hover:border-[#029FAE] rounded-full">
                    <FaTrash
                      size={14}
                      className="text-[#757575] hover:text-[#029FAE]"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Summary and Checkout */}
        <div className="flex flex-col w-full md:w-1/3 justify-between items-center gap-4">
          <h1 className="text-[#111111] font-medium text-md my-4 sm:text-[22px]">
            Summary
          </h1>
          <div></div>
        </div>
      </div>
    </>
  );
}
