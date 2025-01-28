import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { ClerkProvider } from "@clerk/nextjs";


export const metadata: Metadata = {
  title: "Blood Lagbe",
  description: "One Stop Solution for Emergency Blood",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`antialiased rounded w-screen h-screen mx-auto`}
        >
          <div className="h-screen flex flex-col justify-between items-center ">
            <Header />
            {children}
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
