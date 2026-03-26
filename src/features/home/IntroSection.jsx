"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Container from "@/components/layout/Container"

const images = [
    "/hero1.jpg",
    "/hero2.jpg",
    "/hero3.png",
    "/hero4.png",
]   
    
const IntroSection = () => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length)
        }, 6000)

        return () => clearInterval(interval)
    }, [])
    
    return (
        <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">

            <AnimatePresence>
                <motion.img
                key={images[index]}
                src={images[index]}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut"  }}
                className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

            <Container>
                <div className="relative z-10 text-white px-6">
                    <p className="tracking-widest uppercase mb-4 sm:text-xl text-lg">
                        Some places are seen…
                    </p>

                    <h1 className="font-bold mb-6 leading-tight md:text-6xl sm:text-4xl text-3xl">
                        Some places are felt.
                    </h1>

                    <p className="italic sm:text-2xl text-xl">
                        Uttar Pradesh is one of them.
                    </p>
                </div>
            </Container>

        </section>
    )
}

export default IntroSection;
