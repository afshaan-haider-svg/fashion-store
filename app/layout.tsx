import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "M.A Premium Wear | Ladies Lawn Collection",
  description:
    "Premium two piece and three piece ladies lawn suits with WhatsApp ordering.",
  keywords: [
    "M.A Premium Wear",
    "Ladies Lawn Suits",
    "Two Piece Lawn",
    "Three Piece Lawn",
    "Pakistan Fashion",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}