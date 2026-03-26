'use client';

import Container from "@/components/layout/Container";
import { TypeAnimation } from "react-type-animation";

// Instead of dumping info, guide the user.

// 4 clickable cards:

// 🛕 Spiritual
// 🍛 Food
// 🏛️ History
// 🌿 Nature
// something like this we will do here!
//2nd section

const ExploreCard = () => {
    return (
        <Container className="text-center">
            <p className="tracking-widest uppercase mb-4 text-red sm:text-xl text-lg ">
            Not just a state…
            </p>
            
            <h2 className="font-bold md:text-6xl sm:text-4xl text-3xl mt-6">
            This is where India begins.
            </h2>

            <p className="mx-auto text-lg text-on-surface-variant mt-8 md:mt-16 mb-8 mb-12">
            From ancient cities to living traditions, every corner carries a story. <br /> A landscape where the divine meets the temporal, weaving a <br /> tapestry of civilization that spans millennia.
            </p>
            
            <TypeAnimation
                sequence={[
                    "240 Million People.",
                    1500,
                    "Ancient Living Cities.",
                    1500,
                    "Birthplace of Ram.",
                    1500,
                    "Ganga’s Sacred Flow.",
                    1500
                ]}
                wrapper="span"
                speed={20}
                repeat={Infinity}
                className="text-xl text-neutral-600 font-semibold bg-orange-200/70 rounded-full px-6 py-2"
            />
        </Container>
    )
}
export default ExploreCard;