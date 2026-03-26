export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50">
      <nav className="mx-auto flex items-center justify-between px-12 h-20
        bg-black/40 backdrop-blur-md border-b border-white/10">

        {/* Logo */}
        <div className="text-2xl font-bold text-white font-headline">
          Uttar Pradesh
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex gap-8 text-base">
          {["Home", "Festivals", "Stories"].map((item, i) => (
            <a
              key={i}
              href="#"
              className="font-headline text-white/90 hover:text-white transition"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Button */}
        <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition text-sm">
          Connect
        </button>

      </nav>
    </header>
  );
}