"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";
import { useParams } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
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
      setSelectedImage(data.image_url || "");
    }

    setLoading(false);
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-[#FAF7F2] flex items-center justify-center px-6">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 rounded-full border-4 border-[#C8A96B]/30 border-t-[#C8A96B] animate-spin"></div>
          <h1 className="mt-6 text-2xl font-extrabold text-[#1E1E1E]">
            Loading Product...
          </h1>
        </div>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#FAF7F2] text-center px-6">
        <div>
          <h1 className="text-3xl font-bold">Product Not Found</h1>

          <Link
            href="/products"
            className="inline-block mt-6 bg-black text-white px-8 py-3 rounded-full"
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
    <main className="min-h-screen bg-[#FAF7F2] text-[#1E1E1E] pb-24 md:pb-0">
      <Navbar />

      <section className="px-4 md:px-8 py-6 md:py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 md:gap-16 items-start">
          <div>
            <div className="bg-white rounded-2xl md:rounded-[2rem] overflow-hidden shadow-lg md:shadow-2xl border border-[#C8A96B]/20">
              <img
                src={selectedImage || product.image_url}
                alt={product.name}
                className="h-[520px] md:h-[720px] w-full object-cover"
              />
            </div>

            {galleryImages.length > 1 && (
              <div className="grid grid-cols-4 gap-3 mt-4">
                {galleryImages.map((img: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    className={`rounded-xl md:rounded-2xl overflow-hidden border-2 transition ${
                      selectedImage === img
                        ? "border-[#C8A96B]"
                        : "border-transparent"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Product image ${index + 1}`}
                      className="h-24 md:h-32 w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white rounded-2xl md:rounded-[2rem] shadow-lg md:shadow-xl p-5 md:p-10 border border-[#C8A96B]/20">
            <div className="flex flex-wrap gap-2 md:gap-3 mb-5 md:mb-6">
              <span className="bg-[#1E1E1E] text-white px-4 py-2 rounded-full text-xs md:text-sm">
                {product.badge || "New"}
              </span>

              <span className="bg-[#F1E7D8] text-[#8b6f47] px-4 py-2 rounded-full text-xs md:text-sm font-semibold">
                Code: {product.product_code || "N/A"}
              </span>
            </div>

            <p className="text-[#C8A96B] uppercase tracking-[0.25em] md:tracking-[0.3em] text-xs md:text-sm font-bold">
              {product.brand || "The Libas Studio"}
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold mt-4 md:mt-5 leading-tight">
              {product.name}
            </h1>

            <p className="mt-5 md:mt-6 text-[#5f5a52] text-base md:text-lg leading-8 md:leading-9">
              {product.description}
            </p>

            <div className="mt-7 md:mt-8 flex flex-wrap items-center gap-4">
              <span className="text-4xl md:text-5xl font-extrabold">
                {product.price}
              </span>

              {product.old_price && (
                <span className="text-xl md:text-2xl text-gray-400 line-through">
                  {product.old_price}
                </span>
              )}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
              <div className="bg-[#FAF7F2] rounded-2xl p-4 border border-[#C8A96B]/20">
                ✅ Premium Fabric
              </div>

              <div className="bg-[#FAF7F2] rounded-2xl p-4 border border-[#C8A96B]/20">
                🚚 Fast Delivery
              </div>

              <div className="bg-[#FAF7F2] rounded-2xl p-4 border border-[#C8A96B]/20">
                🛒 WhatsApp Order
              </div>

              <div className="bg-[#FAF7F2] rounded-2xl p-4 border border-[#C8A96B]/20">
                💎 Luxury Wear
              </div>
            </div>

            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/923057792102?text=Hello, I want to order:%0AProduct: ${product.name}%0ACode: ${product.product_code || "N/A"}%0ABrand: ${product.brand || "The Libas Studio"}%0APrice: ${product.price}`}
                target="_blank"
                className="flex-1 text-center bg-green-600 text-white px-8 py-5 rounded-full hover:bg-green-700 transition font-semibold shadow-lg"
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

      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl md:hidden">
        <div className="grid grid-cols-3 text-center text-xs font-semibold text-[#1E1E1E]">
          <Link href="/products" className="py-3">
            <div className="text-2xl">▦</div>
            Shop
          </Link>

          <a
            href={`https://wa.me/923057792102?text=Hello, I want to order:%0AProduct: ${product.name}%0ACode: ${product.product_code || "N/A"}%0ABrand: ${product.brand || "The Libas Studio"}%0APrice: ${product.price}`}
            target="_blank"
            className="py-3 text-green-600"
          >
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