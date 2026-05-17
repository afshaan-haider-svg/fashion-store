import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#1E1E1E]">
      <Navbar />

      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden bg-[#F1E7D8] border-b border-[#C8A96B]/20">
        <div className="absolute top-0 left-0 w-80 h-80 bg-white/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#C8A96B]/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 text-center px-6">
          <p className="uppercase tracking-[0.35em] text-[#C8A96B] text-sm font-bold">
            Luxury Fashion Brand
          </p>

          <h1 className="text-7xl font-extrabold mt-6 text-[#1E1E1E] leading-tight">
            About The Libas Studio
          </h1>

          <p className="mt-8 text-xl text-[#5f5a52] max-w-4xl mx-auto leading-9">
            The Libas Studio is a modern fashion brand offering elegant
            two piece and three piece lawn collections for women who love
            luxury, comfort, and timeless beauty.
          </p>
        </div>
      </section>

      <section className="py-24 px-8 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-5 -left-5 w-full h-full border-2 border-[#C8A96B] rounded-[2rem]"></div>

            <img
              src="/categories/luxury.jpg"
              alt="Luxury Fashion"
              className="relative rounded-[2rem] shadow-2xl h-[650px] w-full object-cover"
            />
          </div>

          <div>
            <p className="uppercase tracking-[0.35em] text-[#C8A96B] text-sm font-bold">
              Our Story
            </p>

            <h2 className="text-6xl font-extrabold leading-tight mt-5 text-[#1E1E1E]">
              Luxury Fashion For Modern Women
            </h2>

            <p className="mt-8 text-[#5f5a52] leading-9 text-lg">
              We believe fashion should feel premium, elegant, and comfortable.
              Our collections are carefully selected to bring timeless lawn
              designs with soft fabric and graceful style.
            </p>

            <p className="mt-6 text-[#5f5a52] leading-9 text-lg">
              From casual lawn wear to luxury collections, The Libas Studio
              focuses on delivering quality products with affordable pricing
              and an elegant shopping experience.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-[#C8A96B]/25 hover:-translate-y-2 transition duration-300">
                <h3 className="text-5xl font-extrabold text-[#C8A96B]">
                  100%
                </h3>

                <p className="mt-4 text-[#5f5a52] leading-7">
                  Premium Fabric Quality
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg border border-[#C8A96B]/25 hover:-translate-y-2 transition duration-300">
                <h3 className="text-5xl font-extrabold text-[#C8A96B]">
                  Fast
                </h3>

                <p className="mt-4 text-[#5f5a52] leading-7">
                  WhatsApp Ordering Service
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-[#1E1E1E] text-white text-center px-6">
        <p className="uppercase tracking-[0.35em] text-[#C8A96B] text-sm font-bold">
          Premium Collection
        </p>

        <h2 className="text-6xl font-extrabold mt-6">
          Fashion That Defines Elegance
        </h2>

        <p className="mt-8 text-gray-300 text-xl max-w-4xl mx-auto leading-9">
          Explore our premium lawn collections and experience modern fashion
          designed with elegance, comfort, confidence, and feminine luxury.
        </p>

        <a
          href="https://wa.me/923057792102"
          target="_blank"
          className="inline-block mt-12 bg-green-600 text-white px-12 py-5 rounded-full hover:bg-green-700 transition duration-300 text-lg shadow-2xl font-semibold"
        >
          Shop on WhatsApp
        </a>
      </section>
    </main>
  );
}