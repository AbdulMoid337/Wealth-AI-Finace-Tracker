import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welth",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo-sm.png" sizes="any" type="image/png"  />
        </head>
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          <footer className="bg-beige dark:bg-charcoal py-12">
            <div className="container mx-auto px-4 text-center text-blackish dark:text-tan">
              <p>Made with 💗 by Abdul Moid</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}