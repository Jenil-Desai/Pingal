import Navbar from "@/components/global/navigationbar/Navbar";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/global/footer/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Pingal - Decentralized Uptime Monitoring",
  description: "Monitor your services with a decentralized network of nodes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen flex flex-col`}>
        <ClerkProvider>
          <Navbar />
          <Toaster />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ClerkProvider>
      </body>
    </html>
  );
}
