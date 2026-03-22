export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md shadow-sm">
      <nav className="flex justify-between items-center px-12 py-4">
        
        <div className="text-2xl font-bold text-primary font-headline">
          Uttar Pradesh
        </div>

        <div className="hidden md:flex gap-8">
          {["Home", "Festivals", "Stories"].map((item, i) => (
            <a key={i} href="#" className="font-headline text-lg hover:text-primary">
              {item}
            </a>
          ))}
        </div>

        <button className="bg-gradient-to-r from-primary to-primary-container text-white px-6 py-2 rounded-full">
          Plan Journey
        </button>
      </nav>
    </header>
  );
}