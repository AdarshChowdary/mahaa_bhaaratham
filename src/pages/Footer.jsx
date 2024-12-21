const Footer = () => {
  return (
    <footer className="w-full bg-[#1b4965] py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        <p className="text-[#bee9e8] text-sm">
          © 2024 The Fifth Veda. All rights reserved.
        </p>
        <div className="flex gap-5 items-center">
          <a
            href="https://instagram.com/the_fifth_veda_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#62b6cb] hover:text-[#bee9e8] transition duration-200"
            aria-label="Follow us on Instagram" 
          >
            <img 
              src="../instagram.svg" 
              alt="Instagram Logo" 
              className="h-6 w-6" 
            />
            <span>Follow us on Instagram</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
