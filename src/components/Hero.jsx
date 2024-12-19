import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div id="hero" className="w-full h-[100vh] flex flex-col items-center justify-center text-center gap-2 bg-[#1b4965]">
      <h1 className="text-4xl font-bold text-[#bee9e8]">The Mahaa Bhaaratham</h1>
      <h3 className="text-[#62b6cb] text-2xl font-extralight">A place where you can find answer for Everything.</h3>
      <div className="flex gap-5 items-center">
        <Link 
          to="/mahaabhaaratham" 
          className="bg-[#62b6cb] text-[#1b4965] px-4 py-2 font-medium inline-block hover:bg-[#8ed3e0] transition duration-200"
        >
          Get started
        </Link>

        <Link to="/todaystory">
          <button className="hover-underline-animation">
              Today&apos;s Story
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Hero