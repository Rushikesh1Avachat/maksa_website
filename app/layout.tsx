import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Maska Butter - Chocolate Salvation",
  description: "Static product page concept with creative review layouts, social proof, and customer comments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full bg-[#f7f0e8] text-[#1d1410]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
