"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();

  const [checkingAuth, setCheckingAuth] = useState(true);

  const [name, setName] = useState("");
  const [productCode, setProductCode] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [description, setDescription] = useState("");
  const [badge, setBadge] = useState("");
  const [category, setCategory] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  const inputClass =
    "w-full border border-[#C8A96B]/25 bg-[#FAF7F2] p-5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C8A96B] text-[#1E1E1E] placeholder:text-gray-400";

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
  };

  const logout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const addProduct = async () => {
    if (!name || !productCode || !price || !imageFile) {
      alert("Product name, product code, price and image are required");
      return;
    }

    setLoading(true);

    const cleanName = imageFile.name
      .toLowerCase()
      .replaceAll(" ", "-")
      .replaceAll("_", "-");

    const fileName = `${Date.now()}-${cleanName}`;

    const { error: uploadError } = await supabase.storage
      .from("products")
      .upload(fileName, imageFile);

    if (uploadError) {
      alert(uploadError.message);
      setLoading(false);
      return;
    }

    const { data } = supabase.storage.from("products").getPublicUrl(fileName);

    const { error } = await supabase.from("products").insert({
      name: name.trim(),
      product_code: productCode.trim(),
      brand: brand.trim(),
      price: price.trim(),
      old_price: oldPrice.trim(),
      description: description.trim(),
      badge: badge.trim(),
      image_url: data.publicUrl,
      category: category.trim(),
      in_stock: true,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Product added successfully");

      setName("");
      setProductCode("");
      setBrand("");
      setPrice("");
      setOldPrice("");
      setDescription("");
      setBadge("");
      setCategory("");
      setImageFile(null);
      setPreview("");
    }

    setLoading(false);
  };

  if (checkingAuth) {
    return (
      <main className="min-h-screen bg-[#FAF7F2] flex items-center justify-center text-3xl font-bold text-[#1E1E1E]">
        Checking admin login...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FAF7F2] py-16 px-6 text-[#1E1E1E]">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#F1E7D8] rounded-[2rem] p-10 mb-12 border border-[#C8A96B]/20 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="uppercase tracking-[0.35em] text-[#C8A96B] text-sm font-bold">
                Admin Dashboard
              </p>

              <h1 className="text-6xl font-extrabold mt-4">
                The Libas Studio
              </h1>

              <p className="mt-5 text-[#5f5a52] text-lg">
                Add new products with product code, image, brand, price and category.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/admin/products"
                className="bg-[#1E1E1E] text-white px-8 py-4 rounded-full hover:bg-[#C8A96B] hover:text-[#1E1E1E] transition font-semibold text-center"
              >
                Manage Products
              </Link>

              <button
                onClick={logout}
                className="bg-red-600 text-white px-8 py-4 rounded-full hover:bg-red-700 transition font-semibold"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[2rem] shadow-2xl border border-[#C8A96B]/20 overflow-hidden">
          <div className="bg-[#1E1E1E] px-10 py-8">
            <h2 className="text-4xl font-extrabold text-white">
              Add New Product
            </h2>

            <p className="mt-3 text-gray-300 text-lg">
              Upload boutique lawn collection with product code for WhatsApp orders.
            </p>
          </div>

          <div className="p-10 space-y-7">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} className={inputClass} />
              <input type="text" placeholder="Product Code e.g TLS-2P-001" value={productCode} onChange={(e) => setProductCode(e.target.value)} className={inputClass} />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Brand Name e.g Bin Saeed" value={brand} onChange={(e) => setBrand(e.target.value)} className={inputClass} />
              <input type="text" placeholder="Category e.g Lawn Collection" value={category} onChange={(e) => setCategory(e.target.value)} className={inputClass} />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Price e.g Rs. 1,700" value={price} onChange={(e) => setPrice(e.target.value)} className={inputClass} />
              <input type="text" placeholder="Old Price e.g Rs. 2,000" value={oldPrice} onChange={(e) => setOldPrice(e.target.value)} className={inputClass} />
            </div>

            <input type="text" placeholder="Badge e.g New Arrival / Best Seller" value={badge} onChange={(e) => setBadge(e.target.value)} className={inputClass} />

            <textarea placeholder="Write product description..." value={description} onChange={(e) => setDescription(e.target.value)} rows={5} className={inputClass} />

            <div className="border-2 border-dashed border-[#C8A96B]/50 rounded-[2rem] p-10 bg-[#FAF7F2] text-center">
              <input type="file" accept="image/*" onChange={handleImageChange} className="w-full text-[#1E1E1E]" />

              {preview && (
                <img src={preview} alt="Preview" className="mt-8 h-[450px] w-full object-cover rounded-[2rem] shadow-xl" />
              )}
            </div>

            <button
              onClick={addProduct}
              disabled={loading}
              className="w-full bg-[#C8A96B] text-[#1E1E1E] py-5 rounded-2xl hover:bg-[#1E1E1E] hover:text-white transition duration-300 text-xl font-extrabold shadow-xl"
            >
              {loading ? "Uploading Product..." : "Add Product"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}