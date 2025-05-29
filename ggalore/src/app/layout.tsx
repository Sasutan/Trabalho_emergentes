import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

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
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
