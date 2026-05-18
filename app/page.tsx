"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { supabase } from "../lib/supabase";
import Link from "next/link";
import Footer from "../components/Footer";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    "/banners/hero-banner.jpg",
    "/categories/lawn.jpg",
    "/categories/luxury.jpg",
  ];

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .limit(6);

    if (data) setProducts(data);
    if (error) console.log(error);
  };

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#1E1E1E] pb-20 md:pb-0">
      <Navbar />

      <section className="relative bg-[#FAF7F2] overflow-hidden">
  <div className="relative">
    <img
      src="/banners/hero-banner.jpg"
      alt="The Libas Studio"
      className="w-full h-auto block"
    />

    <div className="absolute bottom-5 left-5 md:bottom-12 md:left-10 flex flex-col gap-3 md:gap-4">
      <Link
        href="/products"
        className="bg-[#C8A96B] text-[#1E1E1E] px-7 md:px-10 py-4 md:py-5 rounded-full text-sm md:text-lg font-bold shadow-xl"
      >
        Shop Collection
      </Link>

      <a
        href="https://wa.me/923057792102"
        target="_blank"
        className="bg-green-600 text-white px-7 md:px-10 py-4 md:py-5 rounded-full text-sm md:text-lg font-bold shadow-xl"
      >
        WhatsApp Order
      </a>
    </div>
  </div>
</section>

      <section className="py-8 md:py-24 bg-[#F1E7D8]">
        <div className="max-w-7xl mx-auto px-3 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
          {[
            ["🚚", "Fast Delivery"],
            ["✨", "Luxury Lawn"],
            ["💎", "Premium Quality"],
            ["💖", "Elegant Fashion"],
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl md:rounded-[2rem] p-6 md:p-10 text-center shadow-sm md:shadow-lg border border-[#C8A96B]/20"
            >
              <div className="text-4xl md:text-5xl">{item[0]}</div>

              <h3 className="mt-4 md:mt-5 text-lg md:text-2xl font-extrabold leading-snug">
                {item[1]}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 md:py-28 px-3 md:px-8">
        <div className="text-center mb-8 md:mb-16">
          <p className="uppercase tracking-[0.25em] md:tracking-[0.35em] text-[#C8A96B] text-xs md:text-sm font-bold">
            Fashion Categories
          </p>

          <h2 className="text-4xl md:text-6xl font-extrabold mt-4 md:mt-5">
            Shop By Category
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-10 max-w-7xl mx-auto">
          {[
            [
              "/categories/lawn.jpg",
              "Luxury Lawn",
              "Elegant lawn collections.",
            ],
            [
              "/categories/luxury.jpg",
              "Premium Wear",
              "Luxury outfits.",
            ],
            [
              "/categories/new-arrivals.jpg",
              "New Arrivals",
              "Latest designs.",
            ],
            [
              "/banners/hero-banner.jpg",
              "Best Sellers",
              "Top collections.",
            ],
          ].map((item, index) => (
            <Link
              href="/products"
              key={index}
              className="group relative overflow-hidden rounded-xl md:rounded-[2rem] shadow-lg md:shadow-2xl"
            >
              <img
                src={item[0]}
                alt={item[1]}
                className="h-[250px] md:h-[550px] w-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/35"></div>

              <div className="absolute bottom-4 md:bottom-10 left-4 md:left-8 right-4 md:right-8">
                <h3 className="text-xl md:text-4xl font-extrabold text-white">
                  {item[1]}
                </h3>

                <p className="mt-2 md:mt-4 text-gray-200 text-xs md:text-lg leading-5 md:leading-7">
                  {item[2]}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-12 md:py-28 bg-[#F1E7D8] px-3 md:px-8">
        <div className="text-center mb-8 md:mb-16">
          <p className="uppercase tracking-[0.25em] md:tracking-[0.35em] text-[#C8A96B] text-xs md:text-sm font-bold">
            Best Selling Collection
          </p>

          <h2 className="text-4xl md:text-6xl font-extrabold mt-4 md:mt-5">
            Featured Products
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-10 max-w-7xl mx-auto">
          {products.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl md:rounded-[2rem] overflow-hidden shadow-sm md:shadow-lg border border-[#C8A96B]/20 hover:-translate-y-1 md:hover:-translate-y-3 hover:shadow-2xl transition duration-500"
            >
              <div className="relative overflow-hidden">
                <div className="absolute top-2 left-2 bg-[#1E1E1E] text-white text-[10px] md:text-xs px-2 md:px-4 py-1 md:py-2 rounded-full z-10">
                  {item.badge || "New"}
                </div>

                <Link href={`/products/${item.id}`}>
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="h-[240px] sm:h-[300px] md:h-[450px] w-full object-cover group-hover:scale-105 transition duration-700"
                  />
                </Link>

                <div className="absolute right-2 bottom-2 flex flex-col gap-2 md:hidden">
                  <Link
                    href={`/products/${item.id}`}
                    className="h-10 w-10 rounded-full bg-white shadow-lg flex items-center justify-center"
                  >
                    👁
                  </Link>

                  <a
                    href={`https://wa.me/923057792102?text=Hello, I want to order:%0AProduct: ${item.name}%0ACode: ${item.product_code || "N/A"}%0ABrand: ${item.brand || "The Libas Studio"}%0APrice: ${item.price}`}
                    target="_blank"
                    className="h-10 w-10 rounded-full bg-green-600 text-white shadow-lg flex items-center justify-center"
                  >
                    🛒
                  </a>
                </div>
              </div>

              <div className="p-3 md:p-7 text-center md:text-left">
                <p className="text-[10px] md:text-sm uppercase tracking-[0.18em] md:tracking-[0.3em] text-[#C8A96B] font-bold truncate">
                  {item.brand || "The Libas Studio"}
                </p>

                <h3 className="mt-2 text-sm md:text-3xl font-extrabold leading-snug line-clamp-2 min-h-[40px] md:min-h-0">
                  {item.name}
                </h3>

                <p className="mt-2 text-[11px] md:text-sm text-[#5f5a52]">
                  Code: {item.product_code || "N/A"}
                </p>

                <div className="mt-3 md:mt-5 flex flex-col md:flex-row md:items-center justify-center md:justify-start">
                  <span className="text-lg md:text-3xl font-extrabold">
                    {item.price}
                  </span>

                  {item.old_price && (
                    <span className="md:ml-4 text-xs md:text-base text-gray-400 line-through">
                      {item.old_price}
                    </span>
                  )}
                </div>

                <div className="hidden md:flex mt-8 flex-col gap-3">
                  <a
                    href={`https://wa.me/923057792102?text=Hello, I want to order:%0AProduct: ${item.name}%0ACode: ${item.product_code || "N/A"}%0ABrand: ${item.brand || "The Libas Studio"}%0APrice: ${item.price}`}
                    target="_blank"
                    className="w-full text-center bg-green-600 text-white px-6 py-4 rounded-full hover:bg-green-700 transition font-semibold"
                  >
                    Order on WhatsApp
                  </a>

                  <Link
                    href={`/products/${item.id}`}
                    className="w-full text-center bg-[#1E1E1E] text-white px-6 py-4 rounded-full hover:bg-[#C8A96B] hover:text-[#1E1E1E] transition font-semibold"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-16">
          <Link
            href="/products"
            className="inline-block bg-[#C8A96B] text-[#1E1E1E] px-8 md:px-12 py-4 md:py-5 rounded-full text-sm md:text-lg font-bold shadow-xl"
          >
            View All Products
          </Link>
        </div>
      </section>

      <section className="py-14 md:py-28 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-20 items-center">
          <div>
            <p className="uppercase tracking-[0.25em] md:tracking-[0.35em] text-[#C8A96B] text-xs md:text-sm font-bold">
              About Brand
            </p>

            <h2 className="text-4xl md:text-6xl font-extrabold mt-4 md:mt-5 leading-tight">
              Fashion Designed For Elegant Women
            </h2>

            <p className="mt-5 md:mt-8 text-[#5f5a52] text-base md:text-lg leading-8 md:leading-9">
              The Libas Studio combines premium lawn fabrics, feminine designs,
              and modern luxury aesthetics to create outfits that feel elegant,
              graceful, and timeless.
            </p>

            <Link
              href="/about"
              className="inline-block mt-8 md:mt-10 bg-[#1E1E1E] text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-sm md:text-lg font-semibold"
            >
              Learn More
            </Link>
          </div>

          <div className="relative">
            <img
              src="/categories/luxury.jpg"
              alt="Luxury Fashion"
              className="rounded-2xl md:rounded-[2rem] shadow-xl md:shadow-2xl h-[430px] md:h-[700px] w-full object-cover"
            />

            <div className="hidden md:block absolute -bottom-10 -left-10 bg-white p-8 rounded-[2rem] shadow-2xl border border-[#C8A96B]/20">
              <h3 className="text-5xl font-extrabold text-[#C8A96B]">
                Premium
              </h3>

              <p className="mt-3 text-[#5f5a52] leading-7">
                Luxury lawn collections crafted with elegance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-28 bg-[#1E1E1E] text-white text-center px-5 md:px-6">
        <p className="uppercase tracking-[0.25em] md:tracking-[0.35em] text-[#C8A96B] text-xs md:text-sm font-bold">
          Premium Fashion Boutique
        </p>

        <h2 className="text-4xl md:text-6xl font-extrabold mt-5 md:mt-6 leading-tight">
          Elevate Your Style With Elegance
        </h2>

        <p className="mt-5 md:mt-8 text-gray-300 text-base md:text-xl max-w-4xl mx-auto leading-8 md:leading-9">
          Explore premium lawn collections inspired by modern femininity,
          sophistication, and timeless luxury.
        </p>

        <a
          href="https://wa.me/923057792102"
          target="_blank"
          className="inline-block mt-8 md:mt-12 bg-green-600 text-white px-8 md:px-12 py-4 md:py-5 rounded-full text-sm md:text-lg shadow-2xl font-semibold"
        >
          Order On WhatsApp
        </a>
      </section>

      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl md:hidden">
        <div className="grid grid-cols-4 text-center text-xs font-semibold">
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