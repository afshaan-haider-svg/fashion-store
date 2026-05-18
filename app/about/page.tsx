import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#1E1E1E] pb-20 md:pb-0">
      <Navbar />

      <section className="relative py-16 md:py-28 px-5 flex items-center justify-center overflow-hidden bg-[#F1E7D8] border-b border-[#C8A96B]/20">
        <div className="absolute top-0 left-0 w-60 md:w-80 h-60 md:h-80 bg-white/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-60 md:w-80 h-60 md:h-80 bg-[#C8A96B]/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <p className="uppercase tracking-[0.25em] md:tracking-[0.35em] text-[#C8A96B] text-xs md:text-sm font-bold">
            Luxury Fashion Brand
          </p>

          <h1 className="text-4xl md:text-7xl font-extrabold mt-5 md:mt-6 leading-tight">
            About The Libas Studio
          </h1>

          <p className="mt-5 md:mt-8 text-base md:text-xl text-[#5f5a52] max-w-4xl mx-auto leading-8 md:leading-9">
            The Libas Studio is a modern fashion brand offering elegant two
            piece and three piece lawn collections for women who love luxury,
            comfort, and timeless beauty.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-24 px-5 md:px-8 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <div className="hidden md:block absolute -top-5 -left-5 w-full h-full border-2 border-[#C8A96B] rounded-[2rem]"></div>

            <img
              src="/categories/luxury.jpg"
              alt="Luxury Fashion"
              className="relative rounded-2xl md:rounded-[2rem] shadow-xl md:shadow-2xl h-[430px] md:h-[650px] w-full object-cover"
            />
          </div>

          <div className="order-1 md:order-2">
            <p className="uppercase tracking-[0.25em] md:tracking-[0.35em] text-[#C8A96B] text-xs md:text-sm font-bold">
              Our Story
            </p>

            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mt-4 md:mt-5">
              Luxury Fashion For Modern Women
            </h2>

            <p className="mt-5 md:mt-8 text-[#5f5a52] leading-8 md:leading-9 text-base md:text-lg">
              We believe fashion should feel premium, elegant, and comfortable.
              Our collections are carefully selected to bring timeless lawn
              designs with soft fabric and graceful style.
            </p>

            <p className="mt-5 md:mt-6 text-[#5f5a52] leading-8 md:leading-9 text-base md:text-lg">
              From casual lawn wear to luxury collections, The Libas Studio
              focuses on delivering quality products with affordable pricing and
              an elegant shopping experience.
            </p>

            <div className="grid grid-cols-2 gap-3 md:gap-6 mt-8 md:mt-12">
              <div className="bg-white p-5 md:p-8 rounded-2xl md:rounded-3xl shadow-lg border border-[#C8A96B]/25">
                <h3 className="text-3xl md:text-5xl font-extrabold text-[#C8A96B]">
                  100%
                </h3>

                <p className="mt-3 md:mt-4 text-[#5f5a52] leading-6 md:leading-7 text-sm md:text-base">
                  Premium Fabric Quality
                </p>
              </div>

              <div className="bg-white p-5 md:p-8 rounded-2xl md:rounded-3xl shadow-lg border border-[#C8A96B]/25">
                <h3 className="text-3xl md:text-5xl font-extrabold text-[#C8A96B]">
                  Fast
                </h3>

                <p className="mt-3 md:mt-4 text-[#5f5a52] leading-6 md:leading-7 text-sm md:text-base">
                  WhatsApp Ordering Service
                </p>
              </div>
            </div>

            <Link
              href="/products"
              className="inline-block mt-8 bg-[#1E1E1E] text-white px-8 py-4 rounded-full font-semibold"
            >
              Explore Collection
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-24 px-5 md:px-8 bg-[#F1E7D8]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
          {[
            ["✨", "Elegant Designs"],
            ["🚚", "Fast Delivery"],
            ["💎", "Premium Fabric"],
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

      <section className="py-16 md:py-28 bg-[#1E1E1E] text-white text-center px-5 md:px-6">
        <p className="uppercase tracking-[0.25em] md:tracking-[0.35em] text-[#C8A96B] text-xs md:text-sm font-bold">
          Premium Collection
        </p>

        <h2 className="text-4xl md:text-6xl font-extrabold mt-5 md:mt-6 leading-tight">
          Fashion That Defines Elegance
        </h2>

        <p className="mt-5 md:mt-8 text-gray-300 text-base md:text-xl max-w-4xl mx-auto leading-8 md:leading-9">
          Explore our premium lawn collections and experience modern fashion
          designed with elegance, comfort, confidence, and feminine luxury.
        </p>

        <a
          href="https://wa.me/923057792102"
          target="_blank"
          className="inline-block mt-8 md:mt-12 bg-green-600 text-white px-8 md:px-12 py-4 md:py-5 rounded-full hover:bg-green-700 transition duration-300 text-sm md:text-lg shadow-2xl font-semibold"
        >
          Shop on WhatsApp
        </a>
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