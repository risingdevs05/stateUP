import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <img
          src="/hero.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 hero-gradient" />

        <div className="relative z-10 text-white px-6">
          <p className="tracking-widest uppercase mb-4">
            Some places are seen…
          </p>

          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            Some places are felt.
          </h1>

          <p className="text-xl italic">
            Uttar Pradesh is one of them.
          </p>
        </div>
      </section>

      {/* IDENTITY */}
      <section className="py-32 px-6 text-center">
        <p className="tracking-widest uppercase mb-4 text-red">
          Not just a state…
        </p>
        
        <h2 className="text-5xl font-bold mb-6">
          This is where India begins.
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-on-surface-variant">
          From ancient cities to living traditions, every corner carries a story. A landscape where the divine meets the temporal, weaving a tapestry of civilization that spans millennia.
        </p>
      </section>

      {/* SPIRITUAL */}
      <section className="py-32 px-6 bg-surface-container-low grid lg:grid-cols-2 gap-12 items-center">
        
        <div>
          <h2 className="text-5xl font-bold mb-6">
            They start with chants.
          </h2>

          <p className="text-lg text-on-surface-variant">
            Varanasi, Ayodhya, Mathura—faith lives here.
          </p>
        </div>

        <div>
          <img
            src="/ganga.jpg"
            className="rotate-3 rounded-xl shadow-xl"
          />
          <div className="relative max-w-md rounded-2xl bg-white/90 backdrop-blur-md shadow-xl p-8 -mt-20 -ml-20">
            
            {/* Left Accent */}
            <div className="absolute left-0 top-0 h-full w-2 bg-tertiary rounded-l-2xl" />

            {/* Text */}
            <p className="font-headline text-lg md:text-xl text-on-surface leading-relaxed">
              "The soul of the nation breathes in the ghats of the eternal city."
            </p>

          </div>
        </div>
        
      </section>

      {/* LIFE */}
      <section className="py-32 px-6">
        <h2 className="text-5xl font-bold mb-12">
          And everything comes alive.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <img src="/market.png" className="rounded-xl col-span-2" />
          <img src="/food.png" className="rounded-xl" />
        </div>
      </section>

      {/* HISTORY */}
      <section className="py-32 bg-black text-white px-6">
        <h2 className="text-6xl font-bold mb-6">
          Still standing. Still speaking.
        </h2>

        <img src="/taj.png" className="rounded-xl mt-8" />
      </section>

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