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
  const [imageFile2, setImageFile2] = useState<File | null>(null);
  const [imageFile3, setImageFile3] = useState<File | null>(null);
  const [imageFile4, setImageFile4] = useState<File | null>(null);

  const [preview, setPreview] = useState("");
  const [preview2, setPreview2] = useState("");
  const [preview3, setPreview3] = useState("");
  const [preview4, setPreview4] = useState("");

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

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFile: any,
    setPreviewImage: any
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFile(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const uploadImage = async (file: File | null) => {
    if (!file) return "";

    const cleanName = file.name
      .toLowerCase()
      .replaceAll(" ", "-")
      .replaceAll("_", "-");

    const fileName = `${Date.now()}-${Math.random()
      .toString(36)
      .substring(2)}-${cleanName}`;

    const { error } = await supabase.storage
      .from("products")
      .upload(fileName, file);

    if (error) {
      throw new Error(error.message);
    }

    const { data } = supabase.storage.from("products").getPublicUrl(fileName);

    return data.publicUrl;
  };

  const addProduct = async () => {
    if (!name || !productCode || !price || !imageFile) {
      alert("Product name, product code, price and main image are required");
      return;
    }

    try {
      setLoading(true);

      const mainImageUrl = await uploadImage(imageFile);
      const imageUrl2 = await uploadImage(imageFile2);
      const imageUrl3 = await uploadImage(imageFile3);
      const imageUrl4 = await uploadImage(imageFile4);

      const { error } = await supabase.from("products").insert({
        name: name.trim(),
        product_code: productCode.trim(),
        brand: brand.trim(),
        price: price.trim(),
        old_price: oldPrice.trim(),
        description: description.trim(),
        badge: badge.trim(),
        image_url: mainImageUrl,
        image_2: imageUrl2,
        image_3: imageUrl3,
        image_4: imageUrl4,
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
        setImageFile2(null);
        setImageFile3(null);
        setImageFile4(null);

        setPreview("");
        setPreview2("");
        setPreview3("");
        setPreview4("");
      }
    } catch (err: any) {
      alert(err.message || "Something went wrong");
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

              <h1 className="text-5xl md:text-6xl font-extrabold mt-4">
                The Libas Studio
              </h1>

              <p className="mt-5 text-[#5f5a52] text-lg">
                Add products with main image and extra gallery images.
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
              Upload product details with multiple images.
            </p>
          </div>

          <div className="p-10 space-y-7">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
              />

              <input
                type="text"
                placeholder="Product Code e.g TLS-2P-001"
                value={productCode}
                onChange={(e) => setProductCode(e.target.value)}
                className={inputClass}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Brand Name e.g Bin Saeed"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className={inputClass}
              />

              <input
                type="text"
                placeholder="Category e.g 3 Piece Lawn"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className={inputClass}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Price e.g Rs. 3,200"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className={inputClass}
              />

              <input
                type="text"
                placeholder="Old Price e.g Rs. 3,800"
                value={oldPrice}
                onChange={(e) => setOldPrice(e.target.value)}
                className={inputClass}
              />
            </div>

            <input
              type="text"
              placeholder="Badge e.g New Arrival / Best Seller"
              value={badge}
              onChange={(e) => setBadge(e.target.value)}
              className={inputClass}
            />

            <textarea
              placeholder="Write product description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
              className={inputClass}
            />

            <div className="border-2 border-dashed border-[#C8A96B]/50 rounded-[2rem] p-8 bg-[#FAF7F2]">
              <h3 className="text-2xl font-bold mb-6">
                Product Images
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-3 font-semibold">
                    Main Image *
                  </label>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      handleImageChange(e, setImageFile, setPreview)
                    }
                    className="w-full text-[#1E1E1E]"
                  />

                  {preview && (
                    <img
                      src={preview}
                      alt="Main Preview"
                      className="mt-5 h-[350px] w-full object-cover rounded-2xl shadow-lg"
                    />
                  )}
                </div>

                <div>
                  <label className="block mb-3 font-semibold">
                    Second Image
                  </label>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      handleImageChange(e, setImageFile2, setPreview2)
                    }
                    className="w-full text-[#1E1E1E]"
                  />

                  {preview2 && (
                    <img
                      src={preview2}
                      alt="Second Preview"
                      className="mt-5 h-[350px] w-full object-cover rounded-2xl shadow-lg"
                    />
                  )}
                </div>

                <div>
                  <label className="block mb-3 font-semibold">
                    Third Image
                  </label>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      handleImageChange(e, setImageFile3, setPreview3)
                    }
                    className="w-full text-[#1E1E1E]"
                  />

                  {preview3 && (
                    <img
                      src={preview3}
                      alt="Third Preview"
                      className="mt-5 h-[350px] w-full object-cover rounded-2xl shadow-lg"
                    />
                  )}
                </div>

                <div>
                  <label className="block mb-3 font-semibold">
                    Fourth Image
                  </label>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      handleImageChange(e, setImageFile4, setPreview4)
                    }
                    className="w-full text-[#1E1E1E]"
                  />

                  {preview4 && (
                    <img
                      src={preview4}
                      alt="Fourth Preview"
                      className="mt-5 h-[350px] w-full object-cover rounded-2xl shadow-lg"
                    />
                  )}
                </div>
              </div>
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