import Image from "next/image";
import Link from "next/link";

export default function TopHeader() {
  return (
    <>
      <div className="bg-[#272343] w-full h-[48px] flex justify-between items-center px-12 md:px-28">
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
              <Image src="/img/top/dd.svg" alt="drop down" width={14} height={14} className="cursor-pointer"/>
            </li>
            <Link href="/pages/faqs">
              <li className="hover:text-gray-300">faqs</li>
            </Link>
            <Link href="/pages/contact">
              <li className="flex justify-center gap-2 hover:text-gray-300">
                <Image src="/img/top/alert.svg" alt="alert" width={16} height={16} />
                Need Help
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
