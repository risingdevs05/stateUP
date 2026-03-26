//3rd sec
import Container from "@/components/layout/Container";
import Image from "next/image";
const SpiritualSection = () => {
    return (
        <section className="bg-surface-container-low flex items-center">
        
            <Container className="grid lg:grid-cols-2 gap-12">
                <div className="flex flex-col space-y-14 ">
                    <h2 className="font-bold md:text-6xl sm:text-4xl text-3xl">
                        They start with chants.
                    </h2>

                    <p className="text-base text-on-surface-variant leading-relaxed md:text-xl sm:text-lg text-justify">
                        From the first light over the Ganga to the evening aartis that illuminate the ghats, 
                        spirituality flows through every street. Temples, prayers, and centuries-old rituals
                        make this land not just a place on the map, but a sacred experience.
                    </p>
                    
                    <p className="tracking-widest uppercase mb-4 text-red sm:text-xl text-lg ">
                        Varanasi, Ayodhya, Mathura—faith lives here.
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <Image
                        src="/ganga.jpg"
                        alt="Ganga"
                        width={900}
                        height={900}
                        className="rotate-3 rounded-xl shadow-xl h-auto w-140"
                    />

                    <div className="relative rounded-2xl bg-white/90 backdrop-blur-md shadow-xl p-8 w-fit -mt-4 sm:-mt-10">
                        
                        {/* Left Accent */}
                        <div className="absolute left-0 top-0 h-full w-2 bg-tertiary rounded-l-2xl" />

                        {/* Text */}
                        <p className="font-headline text-on-surface leading-relaxed max-w-100">
                        "The soul of the nation breathes in the ghats of the eternal city."
                        </p>
                        
                    </div>
                </div>
            </Container>
        </section>
    )
}
export default SpiritualSection;