"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";
import { useParams } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Link from "next/link";

export default function ProductDetailPage() {
  const params = useParams();
  const id = params.id;

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.log(error);
    } else {
      setProduct(data);
    }

    setLoading(false);
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#FAF7F2] text-3xl font-bold">
        Loading Product...
      </main>
    );
  }

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#FAF7F2] text-center">
        <div>
          <h1 className="text-4xl font-bold">Product Not Found</h1>
          <Link href="/products" className="inline-block mt-6 bg-black text-white px-8 py-3 rounded-full">
            Back to Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#1E1E1E]">
      <Navbar />

      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-[#C8A96B]/20">
            <img
              src={product.image_url}
              alt={product.name}
              className="h-[720px] w-full object-cover"
            />
          </div>

          <div className="bg-white rounded-[2rem] shadow-xl p-10 border border-[#C8A96B]/20">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-[#1E1E1E] text-white px-4 py-2 rounded-full text-sm">
                {product.badge || "New"}
              </span>

              <span className="bg-[#F1E7D8] text-[#8b6f47] px-4 py-2 rounded-full text-sm font-semibold">
                Code: {product.product_code || "N/A"}
              </span>
            </div>

            <p className="text-[#C8A96B] uppercase tracking-[0.3em] text-sm font-bold">
              {product.brand || "The Libas Studio"}
            </p>

            <h1 className="text-6xl font-extrabold mt-5">
              {product.name}
            </h1>

            <p className="mt-6 text-[#5f5a52] text-lg leading-9">
              {product.description}
            </p>

            <div className="mt-8 flex items-center">
              <span className="text-5xl font-extrabold">
                {product.price}
              </span>

              <span className="ml-5 text-2xl text-gray-400 line-through">
                {product.old_price}
              </span>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/923057792102?text=Hello, I want to order:%0AProduct: ${product.name}%0ACode: ${product.product_code || "N/A"}%0ABrand: ${product.brand || "The Libas Studio"}%0APrice: ${product.price}`}
                target="_blank"
                className="flex-1 text-center bg-green-600 text-white px-8 py-5 rounded-full hover:bg-green-700 transition font-semibold"
              >
                Order on WhatsApp
              </a>

              <Link
                href="/products"
                className="flex-1 text-center bg-[#1E1E1E] text-white px-8 py-5 rounded-full hover:bg-[#C8A96B] hover:text-[#1E1E1E] transition font-semibold"
              >
                Back to Collection
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}