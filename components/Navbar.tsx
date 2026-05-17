import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#C8A96B]/20 bg-[#FAF7F2]/95 backdrop-blur-xl shadow-sm">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group">
          <img
            src="/logo.png"
            alt="The Libas Studio Logo"
            className="h-14 w-14 object-contain"
          />

          <div className="leading-tight">
            <h1 className="text-3xl font-extrabold tracking-wide text-[#1E1E1E] group-hover:text-[#C8A96B] transition">
              The Libas Studio
            </h1>

            <p className="text-xs tracking-[0.35em] uppercase text-[#C8A96B] mt-1 font-semibold">
              Luxury Lawn Wear
            </p>
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-10 text-sm font-semibold text-[#1E1E1E]">
          <li>
            <Link href="/" className="hover:text-[#C8A96B] transition">
              Home
            </Link>
          </li>

          <li>
            <Link href="/products" className="hover:text-[#C8A96B] transition">
              Collection
            </Link>
          </li>

          <li>
            <Link href="/about" className="hover:text-[#C8A96B] transition">
              About
            </Link>
          </li>

          <li>
            <Link href="/contact" className="hover:text-[#C8A96B] transition">
              Contact
            </Link>
          </li>
        </ul>

        <a
          href="https://wa.me/923057792102"
          target="_blank"
          className="bg-green-600 text-white px-7 py-3 rounded-full shadow-lg hover:bg-green-700 hover:scale-105 transition duration-300 font-semibold"
        >
          WhatsApp
        </a>
      </div>
    </nav>
  );
}