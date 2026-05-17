import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Libas Studio | Luxury Lawn Wear",
  description:
    "Explore premium two piece and three piece lawn collections with elegant Pakistani fashion and WhatsApp ordering.",

  keywords: [
    "The Libas Studio",
    "Luxury Lawn Wear",
    "Pakistani Fashion",
    "2 Piece Lawn Suit",
    "3 Piece Lawn Suit",
    "Ladies Boutique",
    "Designer Lawn Collection",
  ],

  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#FAF7F2] text-[#1E1E1E]">
        {children}
      </body>
    </html>
  );
}