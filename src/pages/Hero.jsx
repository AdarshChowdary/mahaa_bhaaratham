import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <header id="hero" className="w-full h-[100vh] flex flex-col items-center justify-center text-center gap-2 bg-[#1b4965]">
      <section className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-[#bee9e8]">The Mahaa Bhaaratham</h1>
        <h2 className="text-[#62b6cb] text-2xl font-extralight">
          A place where you can find answers to Everything.
        </h2>
      </section>
      <div className="flex gap-5 items-center">
        <Link
          to="/mahaabhaaratham"
          className="bg-[#62b6cb] text-[#1b4965] px-4 py-2 font-medium inline-block hover:bg-[#8ed3e0] transition duration-200"
          role="button" // Optional: adds semantic meaning
          aria-label="Get started with Mahabharata" // Accessibility improvement
        >
          Get started
        </Link>

        <Link to="/todaystory">
          <button className="hover-underline-animation" aria-label="Read today's story">Today&apos;s Story</button>
        </Link>
      </div>
    </header>
  );
};

export default Hero;
