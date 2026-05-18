"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-xl border-b border-[#C8A96B]/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-[82px] flex items-center justify-between">

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-4xl text-[#1E1E1E]"
          >
            ☰
          </button>

          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-3 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
          >
            <img
              src="/logo.png"
              alt="The Libas Studio"
              className="h-10 w-10 md:h-14 md:w-14 object-contain"
            />

            <div className="leading-tight">
              <h1 className="text-lg md:text-3xl font-extrabold tracking-wide text-[#1E1E1E]">
                The Libas Studio
              </h1>

              <p className="hidden md:block text-xs tracking-[0.35em] uppercase text-[#C8A96B] mt-1 font-semibold">
                Luxury Lawn Wear
              </p>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-10 text-sm font-semibold text-[#1E1E1E]">
            <li>
              <Link href="/" className="hover:text-[#C8A96B] transition">
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/products"
                className="hover:text-[#C8A96B] transition"
              >
                Collection
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="hover:text-[#C8A96B] transition"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="hover:text-[#C8A96B] transition"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">

            {/* MOBILE SEARCH */}
            <button className="md:hidden text-2xl">
              ⌕
            </button>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/923057792102"
              target="_blank"
              className="hidden md:flex bg-green-600 text-white px-7 py-3 rounded-full shadow-lg hover:bg-green-700 hover:scale-105 transition duration-300 font-semibold"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </nav>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-[85%] bg-white z-[999] shadow-2xl transform transition duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold">Menu</h2>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-4xl"
          >
            ×
          </button>
        </div>

        <div className="flex flex-col text-lg font-medium">

          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="px-6 py-5 border-b hover:bg-[#F8F4EE]"
          >
            Home
          </Link>

          <Link
            href="/products"
            onClick={() => setMenuOpen(false)}
            className="px-6 py-5 border-b hover:bg-[#F8F4EE]"
          >
            Shop Collection
          </Link>

          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="px-6 py-5 border-b hover:bg-[#F8F4EE]"
          >
            About Brand
          </Link>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="px-6 py-5 border-b hover:bg-[#F8F4EE]"
          >
            Contact
          </Link>

          <a
            href="https://wa.me/923057792102"
            target="_blank"
            className="mx-6 mt-8 text-center bg-green-600 text-white py-4 rounded-full font-semibold"
          >
            WhatsApp Order
          </a>
        </div>
      </div>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 z-[998]"
        />
      )}
    </>
  );
}