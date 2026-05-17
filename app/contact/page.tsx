import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#1E1E1E]">
      <Navbar />

      <section className="relative py-32 bg-[#F1E7D8] text-center overflow-hidden border-b border-[#C8A96B]/20">
        <div className="absolute top-0 left-0 w-80 h-80 bg-white/40 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#C8A96B]/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 px-6">
          <p className="uppercase tracking-[0.35em] text-[#C8A96B] text-sm font-bold">
            Get In Touch
          </p>

          <h1 className="text-7xl font-extrabold mt-6 text-[#1E1E1E]">
            Contact The Libas Studio
          </h1>

          <p className="mt-8 text-xl text-[#5f5a52] max-w-4xl mx-auto leading-9">
            We are always here to help you with orders, premium lawn
            collections, product details, and customer support.
          </p>
        </div>
      </section>

      <section className="py-28 px-8 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="bg-white p-12 rounded-[2rem] shadow-2xl border border-[#C8A96B]/20">
            <p className="uppercase tracking-[0.35em] text-[#C8A96B] text-sm font-bold">
              Contact Information
            </p>

            <h2 className="text-5xl font-extrabold mt-5 text-[#1E1E1E]">
              Let’s Talk Fashion
            </h2>

            <p className="mt-8 text-[#5f5a52] leading-9 text-lg">
              Contact The Libas Studio for premium lawn collections,
              pricing details, latest arrivals, and WhatsApp orders.
            </p>

            <div className="mt-14 space-y-8">
              <div className="flex items-center gap-6 bg-[#FAF7F2] p-6 rounded-3xl shadow-sm border border-[#C8A96B]/20 hover:-translate-y-1 transition duration-300">
                <div className="bg-white h-16 w-16 rounded-2xl flex items-center justify-center text-3xl shadow border border-[#C8A96B]/20">
                  📱
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#1E1E1E]">
                    WhatsApp
                  </h3>

                  <p className="mt-2 text-[#5f5a52] text-lg">
                    03057792102
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 bg-[#FAF7F2] p-6 rounded-3xl shadow-sm border border-[#C8A96B]/20 hover:-translate-y-1 transition duration-300">
                <div className="bg-white h-16 w-16 rounded-2xl flex items-center justify-center text-3xl shadow border border-[#C8A96B]/20">
                  📧
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#1E1E1E]">
                    Email Address
                  </h3>

                  <p className="mt-2 text-[#5f5a52] text-lg break-all">
                    afshaanhaider264@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 bg-[#FAF7F2] p-6 rounded-3xl shadow-sm border border-[#C8A96B]/20 hover:-translate-y-1 transition duration-300">
                <div className="bg-white h-16 w-16 rounded-2xl flex items-center justify-center text-3xl shadow border border-[#C8A96B]/20">
                  ⏰
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#1E1E1E]">
                    Business Hours
                  </h3>

                  <p className="mt-2 text-[#5f5a52] text-lg">
                    Monday - Saturday | 10 AM - 8 PM
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/923057792102"
              target="_blank"
              className="inline-block mt-12 bg-green-600 text-white px-12 py-5 rounded-full hover:bg-green-700 transition duration-300 text-lg shadow-2xl font-semibold"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="bg-white p-12 rounded-[2rem] shadow-2xl border border-[#C8A96B]/20">
            <p className="uppercase tracking-[0.35em] text-[#C8A96B] text-sm font-bold">
              Send Message
            </p>

            <h2 className="text-5xl font-extrabold mt-5 text-[#1E1E1E]">
              We’d Love To Hear From You
            </h2>

            <p className="mt-6 text-[#5f5a52] leading-8 text-lg">
              Fill the form below and our team will contact you soon.
            </p>

            <div className="space-y-6 mt-12">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-[#C8A96B]/20 bg-[#FAF7F2] p-5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C8A96B]"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-[#C8A96B]/20 bg-[#FAF7F2] p-5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C8A96B]"
              />

              <textarea
                rows={6}
                placeholder="Write Your Message..."
                className="w-full border border-[#C8A96B]/20 bg-[#FAF7F2] p-5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C8A96B]"
              ></textarea>

              <button className="w-full bg-[#1E1E1E] text-white py-5 rounded-2xl hover:bg-[#C8A96B] hover:text-[#1E1E1E] transition duration-300 text-lg font-semibold shadow-xl">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#1E1E1E] text-white text-center px-6">
        <p className="uppercase tracking-[0.35em] text-[#C8A96B] text-sm font-bold">
          Premium Fashion Boutique
        </p>

        <h3 className="text-5xl font-extrabold mt-6">
          Get Latest Collection Updates
        </h3>

        <p className="mt-6 text-gray-300 text-xl max-w-3xl mx-auto leading-9">
          Contact us on WhatsApp for new arrivals, prices, and available stock.
        </p>

        <a
          href="https://wa.me/923057792102"
          target="_blank"
          className="inline-block mt-10 bg-green-600 text-white px-10 py-5 rounded-full hover:bg-green-700 transition duration-300 text-lg shadow-2xl font-semibold"
        >
          Message on WhatsApp
        </a>
      </section>

      <footer className="bg-[#111111] text-white text-center py-12 px-6 border-t border-[#C8A96B]/20">
        <h3 className="text-4xl font-extrabold">
          The Libas Studio
        </h3>

        <p className="mt-4 text-[#C8A96B] tracking-[0.25em] uppercase text-sm">
          Luxury Lawn Wear
        </p>

        <p className="mt-6 text-gray-300">
          Premium Lawn Suits | Two Piece & Three Piece Collection
        </p>

        <p className="mt-3 text-gray-300">
          WhatsApp: 03057792102
        </p>

        <p className="text-gray-300">
          Email: afshaanhaider264@gmail.com
        </p>

        <p className="mt-6 text-sm text-gray-500">
          © 2026 The Libas Studio. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
<Footer />