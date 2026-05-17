"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "../../../lib/supabase";
import { useRouter } from "next/navigation";

export default function AdminProductsPage() {
  const router = useRouter();

  const [checkingAuth, setCheckingAuth] = useState(true);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    checkAdminSession();
  }, []);

  const checkAdminSession = async () => {
    const { data } = await supabase.auth.getSession();

    if (!data.session) {
      router.push("/admin/login");
      return;
    }

    setCheckingAuth(false);
    fetchProducts();
  };

  const fetchProducts = async () => {
    const { data } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });

    setProducts(data || []);
  };

  const logout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  const deleteProduct = async (id: number) => {
    const confirmDelete = confirm("Delete this product?");

    if (!confirmDelete) return;

    const { error } = await supabase
      .from("products")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    fetchProducts();
  };

  if (checkingAuth) {
    return (
      <main className="min-h-screen bg-[#FAF7F2] flex items-center justify-center text-3xl font-bold text-[#1E1E1E]">
        Checking admin login...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FAF7F2] p-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">
          <h1 className="text-5xl font-extrabold text-[#1E1E1E]">
            Admin Products
          </h1>

          <div className="flex gap-4">
            <Link
              href="/admin"
              className="bg-black text-white px-6 py-3 rounded-full"
            >
              Add Product
            </Link>

            <button
              onClick={logout}
              className="bg-red-600 text-white px-6 py-3 rounded-full"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[2rem] overflow-hidden shadow-lg"
            >
              <img
                src={item.image_url}
                alt={item.name}
                className="h-[350px] w-full object-cover"
              />

              <div className="p-6">
                <p className="text-sm text-[#C8A96B] uppercase font-bold">
                  {item.brand}
                </p>

                <h2 className="text-3xl font-extrabold mt-3">
                  {item.name}
                </h2>

                <p className="mt-2 text-gray-500">
                  Code: {item.product_code || "N/A"}
                </p>

                <div className="mt-4 flex gap-3">
                  <Link
                    href={`/admin/products/${item.id}`}
                    className="flex-1 text-center bg-black text-white py-3 rounded-full"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => deleteProduct(item.id)}
                    className="flex-1 bg-red-500 text-white py-3 rounded-full"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}