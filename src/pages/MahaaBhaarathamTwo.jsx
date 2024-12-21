// src/pages/Mahaabhaaratham.jsx

import { Link } from "react-router-dom";

const MahaabhaarathamTwo = () => {
    return (
        <main className="w-full h-[100vh] flex flex-col items-center justify-center text-center gap-4 bg-[#1b4965]">
            <section className="flex flex-col items-center">
                <h1 className="text-4xl font-bold text-[#bee9e8]">The Mahaa Bhaaratham</h1>
                <h3 className="text-[#62b6cb] text-2xl font-extralight">
                    Explore the epic tale of duty, righteousness, and the complexities of life.
                </h3>
            </section>

            {/* Button Group */}
            <div className="flex gap-4 mt-6">
                <Link
                    to="/mahaabhaaratham/characters"
                    className="bg-[#62b6cb] text-[#1b4965] px-6 py-3 font-medium inline-block hover:bg-[#8ed3e0] transition duration-200"
                >
                    Characters
                </Link>
                <Link
                    to="/mahaabhaaratham/parvas"
                    className="bg-[#62b6cb] text-[#1b4965] px-6 py-3 font-medium inline-block hover:bg-[#8ed3e0] transition duration-200"
                >
                    Parvas
                </Link>
            </div>
        </main>
    );
};

export default MahaabhaarathamTwo;
