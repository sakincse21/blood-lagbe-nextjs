import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/Header";


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
    <html lang="en">
      <body
        className={`antialiased rounded w-screen h-screen mx-auto`}
      >
        <div className="h-full flex flex-col justify-start items-center ">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
