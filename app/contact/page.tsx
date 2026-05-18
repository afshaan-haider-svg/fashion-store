import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#1E1E1E] pb-20 md:pb-0">
      <Navbar />

      <section className="relative py-16 md:py-28 bg-[#F1E7D8] text-center overflow-hidden border-b border-[#C8A96B]/20 px-5">
        <div className="absolute top-0 left-0 w-60 md:w-80 h-60 md:h-80 bg-white/40 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-60 md:w-80 h-60 md:h-80 bg-[#C8A96B]/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="uppercase tracking-[0.25em] md:tracking-[0.35em] text-[#C8A96B] text-xs md:text-sm font-bold">
            Get In Touch
          </p>

          <h1 className="text-4xl md:text-7xl font-extrabold mt-5 md:mt-6 leading-tight">
            Contact The Libas Studio
          </h1>

          <p className="mt-5 md:mt-8 text-base md:text-xl text-[#5f5a52] max-w-4xl mx-auto leading-8 md:leading-9">
            We are always here to help you with orders, premium lawn
            collections, product details, and customer support.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-24 px-5 md:px-8 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-start">

          <div className="bg-white p-6 md:p-12 rounded-2xl md:rounded-[2rem] shadow-xl border border-[#C8A96B]/20">
            <p className="uppercase tracking-[0.25em] md:tracking-[0.35em] text-[#C8A96B] text-xs md:text-sm font-bold">
              Contact Information
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold mt-4 md:mt-5 leading-tight">
              Let’s Talk Fashion
            </h2>

            <p className="mt-5 md:mt-8 text-[#5f5a52] leading-8 md:leading-9 text-base md:text-lg">
              Contact The Libas Studio for premium lawn collections,
              pricing details, latest arrivals, and WhatsApp orders.
            </p>

            <div className="mt-8 md:mt-14 space-y-4 md:space-y-8">

              <div className="flex items-center gap-4 md:gap-6 bg-[#FAF7F2] p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-sm border border-[#C8A96B]/20">
                <div className="bg-white h-14 w-14 md:h-16 md:w-16 rounded-2xl flex items-center justify-center text-2xl md:text-3xl shadow border border-[#C8A96B]/20">
                  📱
                </div>

                <div>
                  <h3 className="text-lg md:text-2xl font-bold">
                    WhatsApp
                  </h3>

                  <p className="mt-1 md:mt-2 text-[#5f5a52] text-sm md:text-lg">
                    03057792102
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-6 bg-[#FAF7F2] p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-sm border border-[#C8A96B]/20">
                <div className="bg-white h-14 w-14 md:h-16 md:w-16 rounded-2xl flex items-center justify-center text-2xl md:text-3xl shadow border border-[#C8A96B]/20">
                  📧
                </div>

                <div>
                  <h3 className="text-lg md:text-2xl font-bold">
                    Email Address
                  </h3>

                  <p className="mt-1 md:mt-2 text-[#5f5a52] text-sm md:text-lg break-all">
                    afshaanhaider264@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-6 bg-[#FAF7F2] p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-sm border border-[#C8A96B]/20">
                <div className="bg-white h-14 w-14 md:h-16 md:w-16 rounded-2xl flex items-center justify-center text-2xl md:text-3xl shadow border border-[#C8A96B]/20">
                  ⏰
                </div>

                <div>
                  <h3 className="text-lg md:text-2xl font-bold">
                    Business Hours
                  </h3>

                  <p className="mt-1 md:mt-2 text-[#5f5a52] text-sm md:text-lg">
                    Monday - Saturday
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/923057792102"
              target="_blank"
              className="inline-block mt-8 md:mt-12 bg-green-600 text-white px-8 md:px-12 py-4 md:py-5 rounded-full hover:bg-green-700 transition duration-300 text-sm md:text-lg shadow-xl font-semibold"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="bg-white p-6 md:p-12 rounded-2xl md:rounded-[2rem] shadow-xl border border-[#C8A96B]/20">
            <p className="uppercase tracking-[0.25em] md:tracking-[0.35em] text-[#C8A96B] text-xs md:text-sm font-bold">
              Send Message
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold mt-4 md:mt-5 leading-tight">
              We’d Love To Hear From You
            </h2>

            <p className="mt-5 md:mt-6 text-[#5f5a52] leading-8 text-base md:text-lg">
              Fill the form below and our team will contact you soon.
            </p>

            <div className="space-y-4 md:space-y-6 mt-8 md:mt-12">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-[#C8A96B]/20 bg-[#FAF7F2] p-4 md:p-5 rounded-2xl outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-[#C8A96B]/20 bg-[#FAF7F2] p-4 md:p-5 rounded-2xl outline-none"
              />

              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full border border-[#C8A96B]/20 bg-[#FAF7F2] p-4 md:p-5 rounded-2xl outline-none resize-none"
              ></textarea>

              <button className="w-full bg-[#1E1E1E] text-white py-4 md:py-5 rounded-full hover:bg-[#C8A96B] hover:text-[#1E1E1E] transition duration-300 text-sm md:text-lg font-semibold shadow-lg">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-24 px-5 md:px-8 bg-[#F1E7D8]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">

          {[
            ["🚚", "Fast Delivery"],
            ["💎", "Premium Quality"],
            ["✨", "Luxury Fashion"],
            ["🛒", "Easy Ordering"],
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl md:rounded-[2rem] p-6 md:p-8 text-center shadow-lg border border-[#C8A96B]/20"
            >
              <div className="text-4xl">{item[0]}</div>

              <h3 className="mt-4 text-lg md:text-2xl font-extrabold leading-snug">
                {item[1]}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl md:hidden">
        <div className="grid grid-cols-4 text-center text-xs font-semibold text-[#1E1E1E]">

          <Link href="/" className="py-3">
            <div className="text-2xl">⌂</div>
            Home
          </Link>

          <Link href="/products" className="py-3">
            <div className="text-2xl">▦</div>
            Shop
          </Link>

          <a href="https://wa.me/923057792102" target="_blank" className="py-3">
            <div className="text-2xl">🛒</div>
            Order
          </a>

          <Link href="/contact" className="py-3">
            <div className="text-2xl">⌕</div>
            Help
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}