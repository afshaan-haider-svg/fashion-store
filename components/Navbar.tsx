export default function Navbar() {
  return (
    <nav className="px-8 py-5 shadow-sm bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-extrabold tracking-wide">
          M.A Premium Wear
        </h1>

        <ul className="hidden md:flex gap-10 text-sm font-medium">
          <li className="hover:text-pink-600 cursor-pointer transition">
            Home
          </li>

          <li className="hover:text-pink-600 cursor-pointer transition">
            Shop
          </li>

          <li className="hover:text-pink-600 cursor-pointer transition">
            New Arrivals
          </li>

          <li className="hover:text-pink-600 cursor-pointer transition">
            Contact
          </li>
        </ul>

        <a
          href="https://wa.me/923057792102"
          target="_blank"
          className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition duration-300"
        >
          WhatsApp
        </a>
      </div>
    </nav>
  );
}