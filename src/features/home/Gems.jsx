import Container from "@/components/layout/Container";

// 7sec
const Gems = () => {
    return (
        <section className="py-32 bg-black text-white px-6">
            <Container>
                <p className="tracking-widest uppercase mb-4 text-red sm:text-xl text-lg ">
                    Built centuries ago…
                </p>
                <h2 className="font-bold md:text-6xl sm:text-4xl text-3xl">
                    Still standing. Still speaking.
                </h2>

                <div className="grid md:grid-cols-2 justify-center md:mt-14 gap-16">
                    <p className="sm:text-xl text-sm leading-relaxed pt-12 text-neutral-400  text-justify">
                        From the Taj Mahal to forgotten forts, history isn’t past — it’s present. These stones have witnessed empires rise and fall, yet they hold their secrets close, waiting for those who listen.
                    </p>

                    <img src="/taj.png" className="rounded-xl" />
                </div>
                
            </Container>
        </section>
    )
}
export default Gems;