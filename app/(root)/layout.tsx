import type { Metadata } from "next";
import Navbar from "@/components/shared/navbar/navbar";
import "../globals.css";



export const metadata: Metadata = {
  title: "Heaven Agency",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="flex flex-col items-center justify-between p-8">
          <Navbar />
          <section className="flex flex-col items-center justify-center w-full h-screen">
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}