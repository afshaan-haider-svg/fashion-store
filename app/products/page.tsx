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
    <main className="min-h-screen bg-[#FAF7F2] text-[#1E1E1E]">
      <Navbar />

      <section className="py-24 px-8 text-center bg-[#F1E7D8]">
        <p className="uppercase tracking-[0.35em] text-[#C8A96B] text-sm font-bold">
          Premium Boutique Collection
        </p>

        <h1 className="text-6xl font-extrabold mt-5">
          Our Products
        </h1>
      </section>

      <section className="px-8 py-20">
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-[#C8A96B]/25"
            >
              <img
                src={item.image_url}
                alt={item.name}
                className="h-[450px] w-full object-cover"
              />

              <div className="p-7">
                <p className="text-sm uppercase tracking-[0.3em] text-[#C8A96B] font-bold">
                  {item.brand || "The Libas Studio"}
                </p>

                <h3 className="mt-3 text-3xl font-extrabold">
                  {item.name}
                </h3>

                <p className="mt-3 text-sm text-[#5f5a52]">
                  Code: {item.product_code || "N/A"}
                </p>

                <p className="mt-4 text-[#6b665f] leading-7">
                  {item.description}
                </p>

                <div className="mt-5 flex items-center">
                  <span className="text-3xl font-extrabold">
                    {item.price}
                  </span>

                  <span className="ml-4 text-gray-400 line-through">
                    {item.old_price}
                  </span>
                </div>

                <div className="mt-8 flex flex-col gap-3">
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
    </main>
  );
}