"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { supabase } from "../../lib/supabase";
import Footer from "../../components/Footer";

type Product = {
  id: number | string;
  name?: string;
  product_code?: string;
  category?: string;
  image_url?: string;
  badge?: string;
  brand?: string;
  price?: string;
  old_price?: string;
  description?: string;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.log(error);
      setLoading(false);
      return;
    }

    setProducts(data || []);
    setLoading(false);
  };

  const filteredProducts = useMemo(() => {
  return products.filter((item) => {
    const searchText = `${item.name || ""} ${item.product_code || ""} ${
      item.brand || ""
    } ${item.category || ""}`.toLowerCase();

    const matchesSearch = searchText.includes(search.toLowerCase());

    const categoryText = `${item.name || ""} ${item.category || ""}`.toLowerCase();

    const matchesCategory =
      category === "All" ||
      (category === "2 Piece" &&
        (categoryText.includes("2 piece") ||
          categoryText.includes("2piece") ||
          categoryText.includes("2 pice") ||
          categoryText.includes("2piece"))) ||
      (category === "3 Piece" &&
        (categoryText.includes("3 piece") ||
          categoryText.includes("3piece") ||
          categoryText.includes("3 pice") ||
          categoryText.includes("3piece")));

    return matchesSearch && matchesCategory;
  });
}, [products, search, category]);

  const reviews = [
    {
      name: "Ayesha Khan",
      text: "Fabric quality bohat achi thi aur delivery bhi fast mili. Highly recommended.",
    },
    {
      name: "Maham Ali",
      text: "Designs elegant hain aur WhatsApp ordering process bohat easy hai.",
    },
    {
      name: "Sana Noor",
      text: "Suit ka color aur quality bilkul pictures jaisi thi. Loved it.",
    },
  ];

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

      <section className="sticky top-[82px] md:top-[90px] z-40 bg-white border-b border-[#C8A96B]/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 md:px-8 py-4 flex flex-col md:flex-row gap-4 md:items-center justify-between">
          <input
            type="text"
            placeholder="Search product or code..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-[350px] border border-[#C8A96B]/20 bg-[#FAF7F2] px-5 py-4 rounded-full outline-none text-sm md:text-base"
          />

          <div className="flex gap-3 overflow-x-auto pb-1">
            {["All", "2 Piece", "3 Piece"].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-5 py-3 rounded-full text-sm font-semibold whitespace-nowrap transition ${
                  category === cat
                    ? "bg-[#1E1E1E] text-white"
                    : "bg-[#F1E7D8] text-[#1E1E1E]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-3 md:px-8 py-6 md:py-20">
        <div className="max-w-7xl mx-auto mb-5 md:mb-10 flex items-center justify-between">
          <div>
            <p className="text-xs md:text-sm text-[#5f5a52]">Showing</p>
            <h2 className="font-bold text-lg md:text-2xl text-[#1E1E1E]">
              {loading ? "Loading..." : `${filteredProducts.length} Products`}
            </h2>
          </div>

          <Link
            href="/contact"
            className="text-sm bg-[#1E1E1E] text-white px-5 py-3 rounded-full hover:bg-[#C8A96B] hover:text-[#1E1E1E] transition"
          >
            Need Help?
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-10 max-w-7xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl md:rounded-[2rem] overflow-hidden shadow-sm md:shadow-lg border border-[#C8A96B]/20 animate-pulse"
              >
                <div className="h-[255px] sm:h-[320px] md:h-[450px] bg-[#F1E7D8]"></div>

                <div className="p-3 md:p-7">
                  <div className="h-3 md:h-4 w-20 md:w-32 bg-[#F1E7D8] rounded-full mx-auto md:mx-0"></div>
                  <div className="h-5 md:h-8 w-full bg-[#F1E7D8] rounded-full mt-4"></div>
                  <div className="h-4 md:h-5 w-24 bg-[#F1E7D8] rounded-full mt-4 mx-auto md:mx-0"></div>
                  <div className="h-6 md:h-8 w-28 bg-[#F1E7D8] rounded-full mt-5 mx-auto md:mx-0"></div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="bg-white rounded-[2rem] shadow-xl p-12 text-center max-w-3xl mx-auto border border-[#C8A96B]/20">
            <h2 className="text-3xl font-extrabold text-[#1E1E1E]">
              No Products Found
            </h2>

            <p className="mt-4 text-[#5f5a52]">
              Try another product name, code, or category.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
              className="mt-6 bg-[#1E1E1E] text-white px-8 py-4 rounded-full"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-10 max-w-7xl mx-auto">
            {filteredProducts.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-xl md:rounded-[2rem] overflow-hidden shadow-sm md:shadow-lg border border-[#C8A96B]/20 relative hover:-translate-y-1 md:hover:-translate-y-3 hover:shadow-2xl transition duration-500"
              >
                <div className="relative overflow-hidden">
                  <Link href={`/products/${item.id}`}>
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="h-[255px] sm:h-[320px] md:h-[450px] w-full object-cover group-hover:scale-105 transition duration-700"
                    />
                  </Link>

                  {item.badge && (
                    <span className="absolute top-2 right-2 bg-[#1E1E1E] text-white text-[10px] md:text-xs px-2 md:px-4 py-1 md:py-2 rounded-full">
                      {item.badge}
                    </span>
                  )}

                  <div className="absolute right-2 bottom-2 flex flex-col gap-2">

                    <a
                      href={`https://wa.me/923057792102?text=Hello, I want to order:%0AProduct: ${item.name}%0ACode: ${item.product_code || "N/A"}%0ABrand: ${item.brand || "The Libas Studio"}%0APrice: ${item.price}`}
                      target="_blank"
                      className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-green-600 text-white shadow-lg flex items-center justify-center text-lg hover:bg-green-700 transition"
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
                  
                  <Link
  href={`/products/${item.id}`}
  className="mt-4 inline-block w-full text-center bg-[#1E1E1E] text-white py-3 rounded-full font-semibold hover:bg-[#C8A96B] transition"
>
  View Detail
</Link>

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
        )}
      </section>

      <section className="px-5 md:px-8 py-14 md:py-24 bg-[#F1E7D8]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-[#C8A96B] text-xs md:text-sm font-bold">
            Customer Reviews
          </p>

          <h2 className="text-4xl md:text-6xl font-extrabold mt-4 text-[#1E1E1E]">
            Loved By Customers
          </h2>

          <div className="grid md:grid-cols-3 gap-5 md:gap-8 mt-10 md:mt-14">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-[2rem] p-7 md:p-10 shadow-lg border border-[#C8A96B]/20"
              >
                <div className="text-[#C8A96B] text-2xl">★★★★★</div>

                <p className="mt-5 text-[#5f5a52] leading-8">
                  “{review.text}”
                </p>

                <h3 className="mt-6 text-xl font-extrabold text-[#1E1E1E]">
                  {review.name}
                </h3>

                <p className="text-sm text-[#C8A96B] mt-1">
                  Verified Customer
                </p>
              </div>
            ))}
          </div>
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