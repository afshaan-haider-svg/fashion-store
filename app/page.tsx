"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { supabase } from "../lib/supabase";
import Link from "next/link";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .limit(6);

    if (data) setProducts(data);
    if (error) console.log(error);
  };

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#1E1E1E]">
      <Navbar />

      <section
  className="relative min-h-[95vh] bg-cover bg-center flex items-end"
  style={{ backgroundImage: "url('/banners/hero-banner.jpg')" }}
>
  <div className="absolute inset-0 bg-black/10"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-8 w-full pb-8">
    <div className="flex flex-wrap gap-5">
      <Link
        href="/products"
        className="bg-[#C8A96B] text-[#1E1E1E] px-10 py-5 rounded-full hover:bg-[#d6b87a] transition duration-300 text-lg font-bold shadow-2xl"
      >
        Explore Collection
      </Link>

      <a
        href="https://wa.me/923057792102"
        target="_blank"
        className="bg-green-600 text-white px-10 py-5 rounded-full hover:bg-green-700 transition duration-300 text-lg font-semibold shadow-2xl"
      >
        WhatsApp Order
      </a>
    </div>
  </div>
</section>

      <section className="py-24 bg-[#F1E7D8]">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-8">
          {[
            ["🚚", "Fast Delivery"],
            ["✨", "Luxury Lawn"],
            ["💎", "Premium Quality"],
            ["💖", "Elegant Fashion"],
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[2rem] p-10 text-center shadow-lg border border-[#C8A96B]/20 hover:-translate-y-2 transition duration-300"
            >
              <div className="text-5xl">{item[0]}</div>

              <h3 className="mt-5 text-2xl font-extrabold text-[#1E1E1E]">
                {item[1]}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section className="py-28 px-8">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.35em] text-[#C8A96B] text-sm font-bold">
            Fashion Categories
          </p>

          <h2 className="text-6xl font-extrabold mt-5 text-[#1E1E1E]">
            Shop By Category
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            ["/categories/lawn.jpg", "Luxury Lawn", "Elegant lawn collections for every season."],
            ["/categories/luxury.jpg", "Premium Wear", "Luxury outfits designed with sophistication."],
            ["/categories/new-arrivals.jpg", "New Arrivals", "Latest trendy designs for modern women."],
          ].map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[2rem] shadow-2xl"
            >
              <img
                src={item[0]}
                alt={item[1]}
                className="h-[550px] w-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/35"></div>

              <div className="absolute bottom-10 left-8 right-8">
                <h3 className="text-4xl font-extrabold text-white">
                  {item[1]}
                </h3>

                <p className="mt-4 text-gray-200 text-lg leading-7">
                  {item[2]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-28 bg-[#F1E7D8] px-8">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.35em] text-[#C8A96B] text-sm font-bold">
            Best Selling Collection
          </p>

          <h2 className="text-6xl font-extrabold mt-5 text-[#1E1E1E]">
            Featured Products
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {products.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-500 border border-[#C8A96B]/20"
            >
              <div className="relative overflow-hidden">
                <div className="absolute top-4 left-4 bg-[#1E1E1E] text-white text-xs px-4 py-2 rounded-full z-10">
                  {item.badge || "New"}
                </div>

                <img
                  src={item.image_url}
                  alt={item.name}
                  className="h-[450px] w-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-7">
                <p className="text-sm uppercase tracking-[0.3em] text-[#C8A96B] font-bold">
                  {item.brand || "The Libas Studio"}
                </p>

                <h3 className="mt-3 text-3xl font-extrabold text-[#1E1E1E]">
                  {item.name}
                </h3>

                <div className="mt-5 flex items-center">
                  <span className="text-[#1E1E1E] text-3xl font-extrabold">
                    {item.price}
                  </span>

                  <span className="ml-4 text-gray-400 line-through">
                    {item.old_price}
                  </span>
                </div>

                <Link
                  href={`/products/${item.id}`}
                  className="inline-block mt-8 bg-[#1E1E1E] text-white px-8 py-4 rounded-full hover:bg-[#C8A96B] hover:text-[#1E1E1E] transition duration-300 font-semibold"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/products"
            className="inline-block bg-[#C8A96B] text-[#1E1E1E] px-12 py-5 rounded-full hover:bg-[#d6b87a] transition duration-300 text-lg font-bold shadow-xl"
          >
            View All Products
          </Link>
        </div>
      </section>

      <section className="py-28 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="uppercase tracking-[0.35em] text-[#C8A96B] text-sm font-bold">
              About Brand
            </p>

            <h2 className="text-6xl font-extrabold mt-5 leading-tight text-[#1E1E1E]">
              Fashion Designed For Elegant Women
            </h2>

            <p className="mt-8 text-[#5f5a52] text-lg leading-9">
              The Libas Studio combines premium lawn fabrics, feminine designs,
              and modern luxury aesthetics to create outfits that feel elegant,
              graceful, and timeless.
            </p>

            <Link
              href="/about"
              className="inline-block mt-10 bg-[#1E1E1E] text-white px-10 py-5 rounded-full hover:bg-[#C8A96B] hover:text-[#1E1E1E] transition duration-300 text-lg font-semibold"
            >
              Learn More
            </Link>
          </div>

          <div className="relative">
            <img
              src="/categories/luxury.jpg"
              alt="Luxury Fashion"
              className="rounded-[2rem] shadow-2xl h-[700px] w-full object-cover"
            />

            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2rem] shadow-2xl border border-[#C8A96B]/20">
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

      <section className="py-28 bg-[#1E1E1E] text-white text-center px-6">
        <p className="uppercase tracking-[0.35em] text-[#C8A96B] text-sm font-bold">
          Premium Fashion Boutique
        </p>

        <h2 className="text-6xl font-extrabold mt-6 leading-tight">
          Elevate Your Style With Elegance
        </h2>

        <p className="mt-8 text-gray-300 text-xl max-w-4xl mx-auto leading-9">
          Explore premium lawn collections inspired by modern femininity,
          sophistication, and timeless luxury.
        </p>

        <a
          href="https://wa.me/923057792102"
          target="_blank"
          className="inline-block mt-12 bg-green-600 text-white px-12 py-5 rounded-full hover:bg-green-700 transition duration-300 text-lg shadow-2xl font-semibold"
        >
          Order On WhatsApp
        </a>
      </section>
    </main>
  );
}