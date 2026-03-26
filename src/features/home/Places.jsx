//4 th sectionimport Image from "next/image";

import Container from "@/components/layout/Container";
import Image from "next/image";

export default function Places() {
  return (
    <Container>

      <p className="tracking-widest uppercase mb-4 text-red sm:text-xl text-lg ">
        Step into the streets…
      </p>
      <h2 className="font-bold md:text-6xl sm:text-4xl text-3xl">
        And everything comes alive.
      </h2>

      <div className="grid lg:grid-cols-3 gap-6 mt-10 md:mt-20 items-stretch">

        <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-lg flex-1">
          
          <Image
            src="/market.png"
            alt="market"
            width={900}
            height={900}
            className="object-cover shadow-xl h-auto w-full"
          />

          <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-10">
            <h2 className="text-white font-semibold">
              The Rhythm of Streets
            </h2>
            <p className="text-gray-200 md:text-base">
              Flavors, voices, colors—UP doesn’t slow down.
            </p>
          </div>
        </div>

        <div className="lg:col-span-1 bg-[#E6D0A7] rounded-2xl shadow-xl sm:p-10 p-8 border-b-4 border-amber-700 flex flex-col justify-center">
          
          <p className="sm:text-lg text-sm leading-relaxed text-neutral-800">
            "Chaos here is a dance, a symphony of survival and celebration
            that never rests."
          </p>

          <p className="mt-2 text-neutral-700">
            — A Traveler’s Journal
          </p>

        </div>
        
      </div>

    </Container>
  );
}