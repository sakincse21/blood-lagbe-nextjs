import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/ui/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import ThemeProvider from "@/providers/ThemeProvider";
import Header2 from "@/components/ui/Header2";


export const metadata: Metadata = {
  title: "Blood Lagbe",
  description: "One Stop Solution for Blood ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <ThemeProvider>
        <html>
          <body className={`rounded w-full h-auto min-h-screen bg-base-300 m-0 p-0`}>
            <div className="h-auto min-h-screen w-full flex flex-col justify-between items-center">
              <Header2 />
              {children}
              <Footer />
            </div>
          </body>
        </html>
      </ThemeProvider>
    </ClerkProvider>
  );
}
