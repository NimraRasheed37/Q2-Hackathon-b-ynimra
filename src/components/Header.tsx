import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
      <>
      <div className="w-full flex justify-between items-center h-[84px] bg-[#F0F2F3] px-4 sm:px-12 md:px-28">
        <div className="flex justify-center gap-2">
        <Image src="/img/logo/logo.png" alt="logo" width={40} height={40} />
        <h1 className="text-[26px] font-inter font-semibold text-[#272343]">Comforty</h1>
        </div>

        <div className="bg-white w-[130px] sm:w-[160px] h-[54px] p-1 sm:p-2 rounded-md flex justify-center items-center gap-4">
          <Link href="/pages/shop"><Image src="/img/logo/cart.png" alt="" width={22} height={22} /></Link>
          <Link href="/pages/shop"><h2 className="text[12px] font-inter font-[500] text-[#272343]">Cart</h2></Link>
          <p className="rounded-full bg-[#007580] text-[12px] text-center font-bold w-8 h-8 content-center text-white">2</p>
        </div>
      </div>
      </>
    );
  }
  