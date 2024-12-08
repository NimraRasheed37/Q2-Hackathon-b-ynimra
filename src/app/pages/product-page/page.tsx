import Featured from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import TopHeader from "@/components/TopHeader";

export default function ProductPage() {
  return (
    <>
    <TopHeader />
    <Header />
    <Navbar />
    <Featured/>
    <Footer/>
    </>
  );
}
