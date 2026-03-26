import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import IntroSection from "@/features/home/IntroSection";
import ExploreCard from "@/features/home/ExploreCards";
import SpiritualSection from "@/features/home/SpiritualSection";
import Places from "@/features/home/Places";
import Image from "next/image";
import Food from "@/features/home/Food";
import Gems from "@/features/home/Gems";
import Culture from "@/features/home/Culture";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <IntroSection/>
      {/* IDENTITY */}
      <ExploreCard/>

      {/* SPIRITUAL */}
      <SpiritualSection />
      
      <Places/>
  
      <Food/>
      
      <Gems/>

      <Culture/>
      {/* CTA */}
      <section className="py-32 text-center">
        <h2 className="text-6xl font-bold mb-8">
          Or you can experience it.
        </h2>

        <button className="bg-primary text-white px-10 py-4 rounded-full">
          Explore Uttar Pradesh
        </button>
      </section>

      <Footer />
    </main>
  );
}