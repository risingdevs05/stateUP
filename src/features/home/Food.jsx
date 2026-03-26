import Container from "@/components/layout/Container";
import Image from "next/image";
// 5th sec
const Food = () => {
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

                <div className="bg-[#d9d9d9] rounded-2xl px-10 py-8 max-w-2xl border-b-4 border-blue-600 flex justify-center items-center">
                    <p className="text-blue-700 text-lg leading-relaxed">
                    UP doesn’t slow down, and that’s its beauty. It’s an unapologetic
                    explosion of life in its purest, most raw form.
                    </p>
                </div>
            
            </div>

        </Container>
    );
}
export default Food;