"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { supabase } from "../../lib/supabase";
import Footer from "../../components/Footer";

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.log(error);
      return;
    }

    setProducts(data || []);
  };

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#1E1E1E] pb-20 md:pb-0">
      <Navbar />

      <section className="py-10 md:py-24 px-5 md:px-8 text-center bg-[#F1E7D8] border-b border-[#C8A96B]/20">
        <p className="uppercase tracking-[0.25em] md:tracking-[0.35em] text-[#C8A96B] text-xs md:text-sm font-bold">
          Premium Boutique Collection
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold mt-4">
          Our Products
        </h1>

        <p className="mt-4 text-[#5f5a52] text-sm md:text-lg max-w-2xl mx-auto leading-7">
          Explore elegant 2 piece and 3 piece lawn suits with easy WhatsApp
          ordering.
        </p>
      </section>

      <section className="sticky top-[96px] md:hidden z-40 bg-white border-b border-gray-200 px-5 py-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">Showing</p>
            <h2 className="font-bold text-[#1E1E1E]">
              {products.length} Products
            </h2>
          </div>

          <Link
            href="/contact"
            className="text-sm bg-[#1E1E1E] text-white px-5 py-3 rounded-full"
          >
            Help
          </Link>
        </div>
      </section>

      <section className="px-3 md:px-8 py-6 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-10 max-w-7xl mx-auto">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl md:rounded-[2rem] overflow-hidden shadow-sm md:shadow-lg border border-[#C8A96B]/20 relative"
            >
              <div className="relative">
                <Link href={`/products/${item.id}`}>
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="h-[255px] sm:h-[320px] md:h-[450px] w-full object-cover"
                  />
                </Link>

                {item.badge && (
                  <span className="absolute top-2 right-2 bg-[#1E1E1E] text-white text-[10px] md:text-xs px-2 md:px-4 py-1 md:py-2 rounded-full">
                    {item.badge}
                  </span>
                )}

                <div className="absolute right-2 bottom-2 flex flex-col gap-2">
                  <Link
                    href={`/products/${item.id}`}
                    className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-white shadow-lg flex items-center justify-center text-lg"
                    title="View Details"
                  >
                    👁
                  </Link>

                  <a
                    href={`https://wa.me/923057792102?text=Hello, I want to order:%0AProduct: ${item.name}%0ACode: ${item.product_code || "N/A"}%0ABrand: ${item.brand || "The Libas Studio"}%0APrice: ${item.price}`}
                    target="_blank"
                    className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-green-600 text-white shadow-lg flex items-center justify-center text-lg"
                    title="Order on WhatsApp"
                  >
                    🛒
                  </a>
                </div>
              </div>

              <div className="p-3 md:p-7 text-center md:text-left">
                <p className="text-[10px] md:text-sm uppercase tracking-[0.18em] md:tracking-[0.3em] text-[#C8A96B] font-bold truncate">
                  {item.brand || "The Libas Studio"}
                </p>

                <h3 className="mt-2 text-base md:text-3xl font-extrabold leading-snug line-clamp-2 min-h-[48px] md:min-h-0">
                  {item.name}
                </h3>

                <p className="mt-2 text-[11px] md:text-sm text-[#5f5a52]">
                  Code: {item.product_code || "N/A"}
                </p>

                <p className="hidden md:block mt-4 text-[#6b665f] leading-7 line-clamp-3">
                  {item.description}
                </p>

                <div className="mt-3 md:mt-5 flex flex-col md:flex-row md:items-center justify-center md:justify-start">
                  <span className="text-lg md:text-3xl font-extrabold text-[#1E1E1E]">
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