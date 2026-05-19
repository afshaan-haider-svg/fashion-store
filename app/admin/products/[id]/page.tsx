"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../../lib/supabase";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function EditProductPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;

  const [checkingAuth, setCheckingAuth] = useState(true);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [name, setName] = useState("");
  const [productCode, setProductCode] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [description, setDescription] = useState("");
  const [badge, setBadge] = useState("");
  const [category, setCategory] = useState("");

  const [imageUrl, setImageUrl] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageFile2, setImageFile2] = useState<File | null>(null);
  const [imageFile3, setImageFile3] = useState<File | null>(null);
  const [imageFile4, setImageFile4] = useState<File | null>(null);

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
    fetchProduct();
  };

  const fetchProduct = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      alert(error.message);
      setLoading(false);
      return;
    }

    setName(data.name || "");
    setProductCode(data.product_code || "");
    setBrand(data.brand || "");
    setPrice(data.price || "");
    setOldPrice(data.old_price || "");
    setDescription(data.description || "");
    setBadge(data.badge || "");
    setCategory(data.category || "");

    setImageUrl(data.image_url || "");
    setImage2(data.image_2 || "");
    setImage3(data.image_3 || "");
    setImage4(data.image_4 || "");

    setLoading(false);
  };

  const uploadImage = async (file: File | null) => {
    if (!file) return "";

    const cleanName = file.name.toLowerCase().replaceAll(" ", "-");
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

  const updateProduct = async () => {
    try {
      setSaving(true);

      const newImageUrl = imageFile ? await uploadImage(imageFile) : imageUrl;
      const newImage2 = imageFile2 ? await uploadImage(imageFile2) : image2;
      const newImage3 = imageFile3 ? await uploadImage(imageFile3) : image3;
      const newImage4 = imageFile4 ? await uploadImage(imageFile4) : image4;

      const { error } = await supabase
        .from("products")
        .update({
          name: name.trim(),
          product_code: productCode.trim(),
          brand: brand.trim(),
          price: price.trim(),
          old_price: oldPrice.trim(),
          description: description.trim(),
          badge: badge.trim(),
          category: category.trim(),
          image_url: newImageUrl,
          image_2: newImage2,
          image_3: newImage3,
          image_4: newImage4,
        })
        .eq("id", id);

      if (error) {
        alert(error.message);
      } else {
        alert("Product updated successfully");
        router.push("/admin/products");
      }
    } catch (err: any) {
      alert(err.message || "Image update failed");
    }

    setSaving(false);
  };

  if (checkingAuth || loading) {
    return (
      <main className="min-h-screen bg-[#FAF7F2] flex items-center justify-center text-3xl font-bold text-[#1E1E1E]">
        Checking admin login...
      </main>
    );
  }

  const ImageBox = ({
    title,
    image,
    setFile,
  }: {
    title: string;
    image: string;
    setFile: any;
  }) => (
    <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#C8A96B]/20">
      <h3 className="font-bold mb-3">{title}</h3>

      {image && (
        <img
          src={image}
          alt={title}
          className="h-56 w-full object-cover rounded-2xl shadow mb-4"
        />
      )}

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="w-full"
      />
    </div>
  );

  return (
    <main className="min-h-screen bg-[#FAF7F2] py-20 px-6 text-[#1E1E1E]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.35em] text-[#C8A96B] text-sm font-bold">
            Admin Dashboard
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold mt-5">
            Edit Product
          </h1>
        </div>

        <div className="bg-white rounded-[2rem] shadow-2xl border border-[#C8A96B]/20 overflow-hidden">
          <div className="bg-[#F1E7D8] px-10 py-8 border-b border-[#C8A96B]/20">
            <h2 className="text-4xl font-extrabold">Product Information</h2>
          </div>

          <div className="p-10 space-y-6">
            <input
              type="text"
              placeholder="Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClass}
            />

            <input
              type="text"
              placeholder="Product Code"
              value={productCode}
              onChange={(e) => setProductCode(e.target.value)}
              className={inputClass}
            />

            <input
              type="text"
              placeholder="Brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className={inputClass}
            />

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className={inputClass}
              />

              <input
                type="text"
                placeholder="Old Price"
                value={oldPrice}
                onChange={(e) => setOldPrice(e.target.value)}
                className={inputClass}
              />
            </div>

            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
              className={inputClass}
            />

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Badge"
                value={badge}
                onChange={(e) => setBadge(e.target.value)}
                className={inputClass}
              />

              <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className={inputClass}
              />
            </div>

            <div className="pt-4">
              <h2 className="text-3xl font-extrabold mb-6">
                Update Product Images
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <ImageBox title="Main Image" image={imageUrl} setFile={setImageFile} />
                <ImageBox title="Second Image" image={image2} setFile={setImageFile2} />
                <ImageBox title="Third Image" image={image3} setFile={setImageFile3} />
                <ImageBox title="Fourth Image" image={image4} setFile={setImageFile4} />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                onClick={updateProduct}
                disabled={saving}
                className="flex-1 bg-[#1E1E1E] text-white py-5 rounded-full hover:bg-[#C8A96B] hover:text-[#1E1E1E] transition text-lg font-semibold shadow-xl"
              >
                {saving ? "Updating..." : "Update Product"}
              </button>

              <Link
                href="/admin/products"
                className="flex-1 text-center bg-[#F1E7D8] text-[#1E1E1E] py-5 rounded-full hover:bg-[#C8A96B] transition text-lg font-semibold"
              >
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}