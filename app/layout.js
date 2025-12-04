import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "finova",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en" className={`${inter.className}`} data-theme="light">
      <body>
        <Header/>
        <main className="min-h-screen">
        {children}</main>
      </body>
    </html>
    </ClerkProvider>
  );
}
