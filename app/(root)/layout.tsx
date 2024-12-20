
import type { Metadata } from "next";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/shared/navbar/navbar";
import "../globals.css";
import "@/components/layout/style.scss"
import Curve from "@/components/layout/curve";
import NaveMenu from "@/components/shared/navbar/navMenu/navMenu";
import { MenuProvider } from "@/context/menuContext";

export const metadata: Metadata = {
  title: "Heaven Agency",
  description: "Heaven Agency Website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <MenuProvider>
          <main className="flex flex-col items-center justify-between">
            <Navbar />
            <NaveMenu />
            <section className="relative min-h-screen w-full">
              <AnimatePresence mode='wait'>
                <Curve>
                  {children}
                </Curve>
              </AnimatePresence>
            </section>
          </main>
        </MenuProvider>
      </body>
    </html>
  );
}
