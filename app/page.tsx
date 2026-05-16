import Navbar from "../components/Navbar";

const products = [
  {
    name: "2 Piece Lawn Suit",
    price: "Rs. 1,700",
    oldPrice: "Rs. 1,900",
    description: "Soft premium lawn fabric with elegant design.",
    badge: "Best Seller",
    image: "/images/two-piece-lawn.jpg",
  },

  {
    name: "3 Piece Lawn Suit",
    price: "Rs. 3,000",
    oldPrice: "Rs. 3,500",
    description: "Premium three piece suit with graceful modern style.",
    badge: "Premium",
    image: "/images/three-piece-lawn.jpg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      {/* HERO SECTION */}
      <section
        className="relative min-h-[90vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/banners/hero-banner.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 text-center px-6">
          <a
            href="#stock"
            className="inline-block mt-[500px] bg-pink-600 text-white px-10 py-4 rounded-full hover:bg-pink-700 transition duration-300 text-lg shadow-2xl"
          >
            Explore Collection
          </a>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-8">
          <div className="text-center">
            <div className="text-5xl mb-4">🚚</div>

            <h4 className="text-xl font-semibold">
              Free Delivery
            </h4>

            <p className="text-gray-500 mt-2">
              Fast and reliable delivery service.
            </p>
          </div>

          <div className="text-center">
            <div className="text-5xl mb-4">✨</div>

            <h4 className="text-xl font-semibold">
              Premium Quality
            </h4>

            <p className="text-gray-500 mt-2">
              High quality luxury lawn fabrics.
            </p>
          </div>

          <div className="text-center">
            <div className="text-5xl mb-4">💖</div>

            <h4 className="text-xl font-semibold">
              Latest Fashion
            </h4>

            <p className="text-gray-500 mt-2">
              Trendy designs for modern women.
            </p>
          </div>

          <div className="text-center">
            <div className="text-5xl mb-4">🔒</div>

            <h4 className="text-xl font-semibold">
              Trusted Brand
            </h4>

            <p className="text-gray-500 mt-2">
              Safe shopping with customer support.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORY SECTION */}
      <section className="py-20 bg-pink-50">
        <div className="max-w-6xl mx-auto px-8">
          <h3 className="text-4xl font-bold text-center mb-14">
            Shop By Category
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative rounded-3xl overflow-hidden group cursor-pointer">
              <img
                src="/categories/lawn.jpg"
                alt="Lawn Collection"
                className="h-[450px] w-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/30"></div>

              <div className="absolute bottom-10 left-8 text-white">
                <h4 className="text-3xl font-bold">
                  Lawn Collection
                </h4>

                <p className="mt-2 text-lg">
                  Elegant summer styles
                </p>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden group cursor-pointer">
              <img
                src="/categories/luxury.jpg"
                alt="Luxury Wear"
                className="h-[450px] w-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/30"></div>

              <div className="absolute bottom-10 left-8 text-white">
                <h4 className="text-3xl font-bold">
                  Luxury Wear
                </h4>

                <p className="mt-2 text-lg">
                  Premium designer outfits
                </p>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden group cursor-pointer">
              <img
                src="/categories/new-arrivals.jpg"
                alt="New Arrivals"
                className="h-[450px] w-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/30"></div>

              <div className="absolute bottom-10 left-8 text-white">
                <h4 className="text-3xl font-bold">
                  New Arrivals
                </h4>

                <p className="mt-2 text-lg">
                  Trending fashion collection
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <h3 className="text-4xl font-bold text-center mb-16">
            What Our Customers Say
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-pink-50 p-8 rounded-3xl shadow-sm">
              <div className="text-yellow-500 text-2xl mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-600 leading-7">
                Amazing quality lawn suits. Fabric is so soft and elegant.
              </p>

              <h4 className="mt-6 text-xl font-semibold">
                Ayesha Khan
              </h4>
            </div>

            <div className="bg-pink-50 p-8 rounded-3xl shadow-sm">
              <div className="text-yellow-500 text-2xl mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-600 leading-7">
                Fast delivery and premium stitching quality.
              </p>

              <h4 className="mt-6 text-xl font-semibold">
                Sana Malik
              </h4>
            </div>

            <div className="bg-pink-50 p-8 rounded-3xl shadow-sm">
              <div className="text-yellow-500 text-2xl mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-600 leading-7">
                Beautiful collection with modern designs.
              </p>

              <h4 className="mt-6 text-xl font-semibold">
                Hira Ahmed
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 bg-pink-50">
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl font-bold mb-6">
              About M.A Premium Wear
            </h3>

            <p className="text-gray-600 leading-8 text-lg">
              M.A Premium Wear brings elegant two piece and three piece lawn suits
              designed for modern women.
            </p>

            <p className="text-gray-600 leading-8 text-lg mt-4">
              We aim to provide quality fashion at affordable prices.
            </p>

            <a
              href="https://wa.me/923057792102"
              target="_blank"
              className="inline-block mt-8 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
            >
              Contact Us
            </a>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-lg">
            <h4 className="text-2xl font-bold mb-6">
              Why Choose Us?
            </h4>

            <ul className="space-y-4 text-gray-600">
              <li>✓ Premium lawn fabric</li>
              <li>✓ Two piece & three piece suits</li>
              <li>✓ Affordable pricing</li>
              <li>✓ WhatsApp order facility</li>
              <li>✓ Modern women fashion collection</li>
            </ul>
          </div>
        </div>
      </section>

      {/* OFFER SECTION */}
      <section className="py-20 bg-black text-white text-center px-6">
        <h3 className="text-4xl font-bold">
          Get Latest Collection Updates
        </h3>

        <p className="mt-4 text-gray-300 text-lg">
          Contact us on WhatsApp for new arrivals, prices, and available stock.
        </p>

        <a
          href="https://wa.me/923057792102"
          target="_blank"
          className="inline-block mt-8 bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition"
        >
          Message on WhatsApp
        </a>
      </section>

      {/* STOCK SECTION */}
      <section id="stock" className="px-8 py-20 bg-gray-50">
        <h3 className="text-4xl font-bold text-center mb-14">
          Available Stock
        </h3>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {products.map((item) => (
            <div
              key={item.name}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-500 relative"
            >
              <div className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1 rounded-full z-10">
                {item.badge}
              </div>

              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full z-10 cursor-pointer hover:bg-pink-100 transition">
                ❤️
              </div>

              <img
                src={item.image}
                alt={item.name}
                className="h-[500px] w-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="p-6">
                <h4 className="text-3xl font-semibold">
                  {item.name}
                </h4>

                <p className="mt-2 text-gray-500 leading-6">
                  {item.description}
                </p>

                <div className="mt-3 flex items-center">
                  <span className="text-pink-600 text-3xl font-bold">
                    {item.price}
                  </span>

                  <span className="ml-4 text-gray-400 line-through text-lg">
                    {item.oldPrice}
                  </span>
                </div>

                <a
                  href={`https://wa.me/923057792102?text=Hello, I want to order ${item.name} price ${item.price}`}
                  target="_blank"
                  className="inline-block mt-6 bg-green-600 text-white px-7 py-3 rounded-full hover:bg-green-700 transition duration-300"
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-12 px-6">
        <h3 className="text-3xl font-bold">
          M.A Premium Wear
        </h3>

        <p className="mt-4 text-gray-300">
          Premium Lawn Suits | Two Piece & Three Piece Collection
        </p>

        <p className="mt-3 text-gray-300">
          WhatsApp: 03057792102
        </p>

        <p className="text-gray-300">
          Email: afshaanhaider264@gmail.com
        </p>

        <p className="mt-6 text-sm text-gray-400">
          © 2026 M.A Premium Wear. All rights reserved.
        </p>
      </footer>
    </main>
  );
}