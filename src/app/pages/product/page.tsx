import AllProducts from "@/components/AllProduct";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import TopHeader from "@/components/TopHeader";

export default function Product() {
  return (
    <>
    <TopHeader />
    <Header />
    <Navbar/>
    <AllProducts/>
    <Footer/>
    </>
  );
}
