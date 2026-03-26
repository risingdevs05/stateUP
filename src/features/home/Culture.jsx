// 6th
import Container from "@/components/layout/Container";
import { Landmark, Palette } from "lucide-react";
import { Playfair_Display } from "next/font/google";

export default function Culture() {
  return (
    <section className="w-full bg-[#F6EFE6] py-28 px-6">
      <Container className="text-center">
        
        {/* Top Label */}
        <p className="tracking-widest uppercase mb-4 text-red sm:text-xl text-lg">
          This isn’t celebration...
        </p>

        <h1 className={`font-bold md:text-6xl sm:text-4xl text-3xl`}>
          This is emotion.
        </h1>

        <div className="grid md:grid-cols-2 gap-20 mt-20">
          
          {/* Festivals */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-[#E9D3A5] flex items-center justify-center mb-6 transition-transform duration-300  hover:scale-105">
              
              {/* Temple SVG */}
              <Landmark size={30} className="text-blue-700"/>
            </div>

            <h3 className="text-lg font-medium text-[#2B2118] mb-2">
              The Festivals
            </h3>

            <p className="text-sm text-[#6F6257] max-w-xs leading-relaxed">
              Festivals here aren’t events—they’re experiences you feel.
              A collective heartbeat that unites millions.
            </p>
          </div>

          {/* Crafts */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-[#E9D3A5] flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-105">
              
              {/* Palette SVG */}
              <Palette size={30} className="text-blue-700" />
            </div>

            <h3 className="text-lg font-medium text-[#2B2118] mb-2">
              The Crafts
            </h3>

            <p className="text-sm text-[#6F6257] max-w-xs leading-relaxed">
              Chikankari, Brassware, Silk—every thread is a lineage of artistry
              passed through generations.
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}