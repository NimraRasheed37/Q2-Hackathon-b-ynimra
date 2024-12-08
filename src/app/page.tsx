import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import Navbar from "@/components/Navbar";
import TopHeader from "@/components/TopHeader";

export default function Home() {
  return (
    <>
    <TopHeader />
    <Header />
    <Navbar />
    <Hero />
    <Logos />

    <Footer/>
    </>
  );
}
