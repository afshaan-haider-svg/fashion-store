import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white border-t border-[#C8A96B]/20 pb-20 md:pb-0">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-14">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">
              The Libas Studio
            </h2>

            <p className="mt-4 text-[#C8A96B] tracking-[0.25em] md:tracking-[0.3em] uppercase text-xs md:text-sm">
              Luxury Lawn Wear
            </p>

            <p className="mt-6 text-gray-300 leading-8 text-sm md:text-base">
              Premium lawn collections crafted for modern women who love
              elegance, comfort, sophistication, and timeless fashion.
            </p>

            <a
              href="https://wa.me/923057792102"
              target="_blank"
              className="inline-block mt-6 bg-green-600 text-white px-7 py-3 rounded-full hover:bg-green-700 transition duration-300 font-semibold"
            >
              WhatsApp Order
            </a>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-5 md:mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 md:gap-4 text-gray-300 text-sm md:text-base">
              <Link href="/" className="hover:text-[#C8A96B] transition">
                Home
              </Link>

              <Link
                href="/products"
                className="hover:text-[#C8A96B] transition"
              >
                Products
              </Link>

              <Link href="/about" className="hover:text-[#C8A96B] transition">
                About
              </Link>

              <Link href="/contact" className="hover:text-[#C8A96B] transition">
                Contact
              </Link>

              <Link
                href="/admin/login"
                className="hover:text-[#C8A96B] transition"
              >
                Admin Login
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-5 md:mb-6">
              Collections
            </h3>

            <div className="flex flex-col gap-3 md:gap-4 text-gray-300 text-sm md:text-base">
              <Link
                href="/products"
                className="hover:text-[#C8A96B] transition"
              >
                2 Piece Lawn
              </Link>

              <Link
                href="/products"
                className="hover:text-[#C8A96B] transition"
              >
                3 Piece Lawn
              </Link>

              <Link
                href="/products"
                className="hover:text-[#C8A96B] transition"
              >
                Premium Collection
              </Link>

              <Link
                href="/products"
                className="hover:text-[#C8A96B] transition"
              >
                Summer Collection
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-5 md:mb-6">
              Contact Info
            </h3>

            <div className="space-y-4 md:space-y-5 text-gray-300 text-sm md:text-base">
              <p>📱 03057792102</p>

              <p className="break-all">
                📧 afshaanhaider264@gmail.com
              </p>

              <p>⏰ Monday - Saturday</p>

              <p>📍 Pakistan</p>

              <div className="flex gap-3 pt-2">
                <a
                  href="https://wa.me/923057792102"
                  target="_blank"
                  className="h-11 w-11 rounded-full bg-green-600 flex items-center justify-center hover:bg-green-700 transition"
                >
                  🛒
                </a>

                <a
                  href="mailto:afshaanhaider264@gmail.com"
                  className="h-11 w-11 rounded-full bg-[#C8A96B] text-[#1E1E1E] flex items-center justify-center hover:bg-white transition"
                >
                  ✉
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 md:mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-gray-400 text-xs md:text-sm">
            © 2026 The Libas Studio. All rights reserved.
          </p>

          <p className="text-[#C8A96B] text-xs md:text-sm tracking-[0.2em] uppercase">
            Luxury Boutique Fashion
          </p>
        </div>
      </div>
    </footer>
  );
}