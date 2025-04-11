import type { Metadata } from "next";
import "./globals.css";
import Header2 from "@/components/Header2";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gun's Galore",
  description: "Best gun shop in the wild wild west",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="bg-background-gray">
        <Header2 />
        {children}
        <Footer />
      </body>
    </html>
  );
}
