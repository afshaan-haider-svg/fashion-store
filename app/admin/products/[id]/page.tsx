"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../../lib/supabase";
import { useParams } from "next/navigation";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import Link from "next/link";

export default function ProductDetailPage() {
  const params = useParams();
  const id = params.id;

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState("");

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
      setSelectedImage(data.image_url);
    }

    setLoading(false);
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#FAF7F2] text-2xl md:text-3xl font-bold">
        Loading Product...
      </main>
    );
  }

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#FAF7F2] text-center px-6">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold">
            Product Not Found
          </h1>

          <Link
            href="/products"
            className="inline-block mt-6 bg-black text-white px-8 py-4 rounded-full"
          >
            Back to Products
          </Link>
        </div>
      </main>
    );
  }

  const galleryImages = [
    product.image_url,
    product.image_2,
    product.image_3,
    product.image_4,
  ].filter(Boolean);

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#1E1E1E]">
      <Navbar />

      <section className="py-8 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-16 items-start">

          {/* LEFT SIDE */}
          <div>

            {/* MAIN IMAGE */}
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-[#C8A96B]/20">
              <img
                src={selectedImage}
                alt={product.name}
                className="h-[420px] md:h-[720px] w-full object-cover transition duration-300"
              />
            </div>

            {/* GALLERY */}
            <div className="grid grid-cols-4 gap-3 mt-4 md:mt-6">
              {galleryImages.map((img: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(img)}
                  className={`rounded-2xl overflow-hidden border-2 transition ${
                    selectedImage === img
                      ? "border-[#C8A96B]"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={img}
                    className="h-24 md:h-32 w-full object-cover hover:scale-105 transition"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white rounded-[2rem] shadow-xl p-6 md:p-10 border border-[#C8A96B]/20 sticky top-24">

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-[#1E1E1E] text-white px-4 py-2 rounded-full text-xs md:text-sm">
                {product.badge || "New"}
              </span>

              <span className="bg-[#F1E7D8] text-[#8b6f47] px-4 py-2 rounded-full text-xs md:text-sm font-semibold">
                Code: {product.product_code || "N/A"}
              </span>
            </div>

            <p className="text-[#C8A96B] uppercase tracking-[0.25em] text-xs md:text-sm font-bold">
              {product.brand || "The Libas Studio"}
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold mt-4 md:mt-5 leading-tight">
              {product.name}
            </h1>

            <p className="mt-5 md:mt-6 text-[#5f5a52] text-base md:text-lg leading-8">
              {product.description}
            </p>

            {/* PRICE */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className="text-4xl md:text-5xl font-extrabold text-[#1E1E1E]">
                {product.price}
              </span>

              {product.old_price && (
                <span className="text-xl md:text-2xl text-gray-400 line-through">
                  {product.old_price}
                </span>
              )}
            </div>

            {/* FEATURES */}
            <div className="mt-8 space-y-4 text-sm md:text-base">
              <div className="flex items-center gap-3">
                <span>✅</span>
                <p>Premium Quality Fabric</p>
              </div>

              <div className="flex items-center gap-3">
                <span>🚚</span>
                <p>Fast Delivery Across Pakistan</p>
              </div>

              <div className="flex items-center gap-3">
                <span>💎</span>
                <p>Luxury Designer Collection</p>
              </div>

              <div className="flex items-center gap-3">
                <span>📦</span>
                <p>Cash on Delivery Available</p>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-col gap-4">

              <a
                href={`https://wa.me/923057792102?text=Hello, I want to order:%0A%0AProduct: ${product.name}%0ACode: ${product.product_code || "N/A"}%0ABrand: ${product.brand || "The Libas Studio"}%0APrice: ${product.price}%0A%0AProduct Link: ${window.location.href}`}
                target="_blank"
                className="w-full text-center bg-green-600 text-white px-8 py-5 rounded-full hover:bg-green-700 transition font-bold text-lg shadow-lg"
              >
                Order on WhatsApp
              </a>

              <Link
                href="/products"
                className="w-full text-center bg-[#1E1E1E] text-white px-8 py-5 rounded-full hover:bg-[#C8A96B] hover:text-[#1E1E1E] transition font-bold text-lg"
              >
                Back to Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}