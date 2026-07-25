import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="fixed top-5 inset-x-0 z-50 flex justify-center px-4">
      <nav className="flex items-center justify-between w-full max-w-4xl px-6 py-3 rounded-full bg-slate-900/75 backdrop-blur-md border border-white/10 shadow-2xl transition-all">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-lg font-bold text-white tracking-tight hover:opacity-90 transition-opacity"
        >
          DevBrand
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <li>
            <Link href="#home" className="text-white transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="#features" className="hover:text-white transition-colors">
              Features
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-white transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </li>
        </ul>

        {/* Call to Action Button */}
        <Link
          href="#cta"
          className="bg-sky-400 hover:bg-sky-300 text-slate-950 font-semibold text-sm px-4 py-2 rounded-full transition-all hover:-translate-y-0.5 active:translate-y-0"
        >
          Get Started
        </Link>
      </nav>
    </div>
  );
}