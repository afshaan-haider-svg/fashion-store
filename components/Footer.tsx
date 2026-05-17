import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white border-t border-[#C8A96B]/20">
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-4 gap-14">
          <div>
            <h2 className="text-4xl font-extrabold">
              The Libas Studio
            </h2>

            <p className="mt-4 text-[#C8A96B] tracking-[0.3em] uppercase text-sm">
              Luxury Lawn Wear
            </p>

            <p className="mt-6 text-gray-300 leading-8">
              Premium lawn collections crafted for modern women who
              love elegance, comfort, sophistication, and timeless fashion.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 text-gray-300">
              <Link
                href="/"
                className="hover:text-[#C8A96B] transition"
              >
                Home
              </Link>

              <Link
                href="/products"
                className="hover:text-[#C8A96B] transition"
              >
                Products
              </Link>

              <Link
                href="/about"
                className="hover:text-[#C8A96B] transition"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="hover:text-[#C8A96B] transition"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">
              Collections
            </h3>

            <div className="flex flex-col gap-4 text-gray-300">
              <p className="hover:text-[#C8A96B] transition cursor-pointer">
                2 Piece Lawn
              </p>

              <p className="hover:text-[#C8A96B] transition cursor-pointer">
                3 Piece Lawn
              </p>

              <p className="hover:text-[#C8A96B] transition cursor-pointer">
                Premium Collection
              </p>

              <p className="hover:text-[#C8A96B] transition cursor-pointer">
                Summer Collection
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">
              Contact Info
            </h3>

            <div className="space-y-5 text-gray-300">
              <p>
                📱 03057792102
              </p>

              <p className="break-all">
                📧 afshaanhaider264@gmail.com
              </p>

              <p>
                ⏰ Monday - Saturday
              </p>

              <a
                href="https://wa.me/923057792102"
                target="_blank"
                className="inline-block mt-4 bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition duration-300 font-semibold"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-gray-400 text-sm">
            © 2026 The Libas Studio. All rights reserved.
          </p>

          <p className="text-[#C8A96B] text-sm tracking-[0.2em] uppercase">
            Luxury Boutique Fashion
          </p>
        </div>
      </div>
    </footer>
  );
}