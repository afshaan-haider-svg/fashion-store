"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "../../../lib/supabase";
import { useRouter } from "next/navigation";

export default function AdminProductsPage() {
  const router = useRouter();

  const [checkingAuth, setCheckingAuth] = useState(true);
  const [products, setProducts] = useState<any[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(true);

  useEffect(() => {
    checkAdminSession();
  }, []);

  const checkAdminSession = async () => {
    const {
  data: { user },
} = await supabase.auth.getUser();

if (!user) {
  router.push("/admin/login");
  return;
}

    setCheckingAuth(false);
    fetchProducts();
  };

  const fetchProducts = async () => {
    setLoadingProducts(true);

    const { data } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });

    setProducts(data || []);
    setLoadingProducts(false);
  };

  const logout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  const deleteProduct = async (id: number) => {
    const confirmDelete = confirm("Delete this product?");

    if (!confirmDelete) return;

    const { error } = await supabase.from("products").delete().eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    fetchProducts();
  };

  if (checkingAuth) {
    return (
      <main className="min-h-screen bg-[#FAF7F2] flex items-center justify-center px-6">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 rounded-full border-4 border-[#C8A96B]/30 border-t-[#C8A96B] animate-spin"></div>
          <h1 className="mt-6 text-3xl font-extrabold text-[#1E1E1E]">
            Checking admin login...
          </h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FAF7F2] p-5 md:p-10">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#F1E7D8] border border-[#C8A96B]/20 rounded-[2rem] p-6 md:p-10 shadow-xl mb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <p className="uppercase tracking-[0.35em] text-[#C8A96B] text-xs md:text-sm font-bold">
                Admin Dashboard
              </p>

              <h1 className="text-4xl md:text-5xl font-extrabold text-[#1E1E1E] mt-3">
                Admin Products
              </h1>

              <p className="mt-3 text-[#5f5a52]">
                Manage products, images, prices, codes and inventory.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/admin"
                className="bg-black text-white px-6 py-3 rounded-full text-center font-semibold"
              >
                Add Product
              </Link>

              <button
                onClick={logout}
                className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        {loadingProducts ? (
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-white rounded-[2rem] overflow-hidden shadow-lg animate-pulse"
              >
                <div className="h-[350px] w-full bg-[#F1E7D8]"></div>

                <div className="p-6">
                  <div className="h-4 w-28 bg-[#F1E7D8] rounded-full"></div>
                  <div className="h-8 w-48 bg-[#F1E7D8] rounded-full mt-4"></div>
                  <div className="h-4 w-32 bg-[#F1E7D8] rounded-full mt-4"></div>

                  <div className="mt-6 flex gap-3">
                    <div className="h-12 flex-1 bg-[#F1E7D8] rounded-full"></div>
                    <div className="h-12 flex-1 bg-[#F1E7D8] rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : products.length === 0 ? (
          <div className="bg-white rounded-[2rem] shadow-xl p-12 text-center">
            <h2 className="text-3xl font-extrabold text-[#1E1E1E]">
              No products found
            </h2>

            <p className="mt-3 text-gray-500">
              Add your first product from admin panel.
            </p>

            <Link
              href="/admin"
              className="inline-block mt-6 bg-[#1E1E1E] text-white px-8 py-4 rounded-full"
            >
              Add Product
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-[#C8A96B]/20"
              >
                <img
                  src={item.image_url}
                  alt={item.name}
                  className="h-[350px] w-full object-cover"
                />

                <div className="p-6">
                  <p className="text-sm text-[#C8A96B] uppercase font-bold tracking-[0.2em]">
                    {item.brand}
                  </p>

                  <h2 className="text-3xl font-extrabold mt-3 text-[#1E1E1E]">
                    {item.name}
                  </h2>

                  <p className="mt-2 text-gray-500">
                    Code: {item.product_code || "N/A"}
                  </p>

                  <p className="mt-2 text-2xl font-extrabold text-[#1E1E1E]">
                    {item.price}
                  </p>

                  <div className="mt-5 flex gap-3">
                    <Link
                      href={`/admin/products/${item.id}`}
                      className="flex-1 text-center bg-black text-white py-3 rounded-full font-semibold"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => deleteProduct(item.id)}
                      className="flex-1 bg-red-500 text-white py-3 rounded-full font-semibold"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}