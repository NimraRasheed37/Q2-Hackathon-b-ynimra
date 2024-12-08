import Image from "next/image";
import { FaHeart, FaTrash } from "react-icons/fa";

export default function CartBag() {
  return (
    <>
      <div className="px-4 sm:px-12 lg:px-28 bg-gray-100 lg:h-[630px] h-auto flex flex-col lg:flex-row gap-12 justify-between items-start py-12 lg:py-24">
        {/* Cart Bag */}
        <div className="md:w-[65%] w-full">
          <h1 className="text-[#111111] text-left font-medium text-md my-4 sm:text-[22px]">
            Bag
          </h1>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-10">
              <div className="flex justify-start items-center gap-4 sm:gap-8 relative">
                <Image
                  src="/img/products/c1.png"
                  alt="cart 1"
                  width={80}
                  height={80}
                  className="sm:w-[150px] sm:h-[150px]"
                />
                <div className="flex flex-col justify-between items-start gap-2 sm:gap-4 text-left w-full">
                  <div className="flex justify-between items-center w-full">
                    <h1 className="text-[14px] sm:text-[16px] text-[#272343] font-inter mb-0 sm:mb-2">
                      Library Stool Chair
                    </h1>
                    <div className="text-right text-sm text-[#757575]">
                      <p>
                        MRP: <span>$99</span>
                      </p>
                    </div>
                  </div>
                  <p className="text-[12px] sm:text-[15px] text-[#757575]">
                    {`Ashen Slate/Cobalt Bliss`}
                  </p>
                  <div className="flex justify-between gap-4 sm:gap-12 ">
                    <p className="text-[12px] sm:text-[15px] text-[#757575]">
                      {`Size: `}
                      <span>L</span>
                    </p>
                    <p className="text-[12px] sm:text-[15px] text-[#757575]">
                      {`Quantity: `}
                      <span>1</span>
                    </p>
                  </div>
                  <div className="flex justify-start items-center gap-2 sm:gap-4">
                    <button className="p-2 bg-transparent hover:bg-gray-200 rounded-full border-transparent border-2 hover:border-[#029FAE]">
                      <FaHeart
                        size={12}
                        className="text-[#757575] hover:text-[#029FAE]"
                      />
                    </button>
                    <button className="p-2 bg-transparent hover:bg-gray-200 border-transparent border-2 hover:border-[#029FAE] rounded-full">
                      <FaTrash
                        size={12}
                        className="text-[#757575] hover:text-[#029FAE]"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <hr className="text-black" />
            <div className="flex flex-col gap-10">
              <div className="flex justify-start items-center gap-4 sm:gap-8 relative">
                <Image
                  src="/img/products/c6.png"
                  alt="cart 1"
                  width={80}
                  height={80}
                  className="sm:w-[150px] sm:h-[150px]"
                />
                <div className="flex flex-col justify-between items-start gap-2 sm:gap-4 text-left w-full">
                  <div className="flex justify-between items-center w-full">
                    <h1 className="text-[14px] sm:text-[16px] text-[#272343] font-inter mb-0 sm:mb-2">
                      Library Stool Chair
                    </h1>
                    <div className="text-right text-sm text-[#757575]">
                      <p>
                        MRP: <span>$99</span>
                      </p>
                    </div>
                  </div>
                  <p className="text-[12px] sm:text-[15px] text-[#757575]">
                    {`Ashen Slate/Cobalt Bliss`}
                  </p>
                  <div className="flex justify-between gap-4 sm:gap-12 ">
                    <p className="text-[12px] sm:text-[15px] text-[#757575]">
                      {`Size: `}
                      <span>L</span>
                    </p>
                    <p className="text-[12px] sm:text-[15px] text-[#757575]">
                      {`Quantity: `}
                      <span>1</span>
                    </p>
                  </div>
                  <div className="flex justify-start items-center gap-2 sm:gap-4">
                    <button className="p-2 bg-transparent hover:bg-gray-200 rounded-full border-transparent border-2 hover:border-[#029FAE]">
                      <FaHeart
                        size={12}
                        className="text-[#757575] hover:text-[#029FAE]"
                      />
                    </button>
                    <button className="p-2 bg-transparent hover:bg-gray-200 border-transparent border-2 hover:border-[#029FAE] rounded-full">
                      <FaTrash
                        size={12}
                        className="text-[#757575] hover:text-[#029FAE]"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* Summary and Checkout */}
        <div className="w-full md:w-[40%] gap-4 ">
          <h1 className=" text-[#111111] font-medium text-md my-4 sm:text-[22px] mb-6">
            Summary
          </h1>
          <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-[#111111]">Subtotal</p>
        <p className="text-sm text-[#111111]">$198.00</p>
      </div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-[#111111]">Estimated Delivery & Handling</p>
        <p className="text-sm text-[#111111]">Free</p>
      </div>
      <hr className="border-gray-300 my-4" />
      <div className="flex justify-between items-center mb-8">
        <p className="text-base font-medium text-[#111111]">Total</p>
        <p className="text-base font-medium text-[#111111]">$198.00</p>
      </div>
      <hr className="border-gray-300 my-4" />
      <button className="w-full bg-[#00A9A9] text-white text-center font-medium text-sm py-3 md:w-[334] h-[64] rounded-full hover:bg-[#008f8f] transition mt-8">
        Member Checkout
      </button>
        </div>
      </div>
    </>
  );
}
