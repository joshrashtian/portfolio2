import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/(home)/header";
import Socials from "./_components/(global)/Socials";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joshua Rashtian",
  description: "Computer Scientist, Creative.",
  openGraph: {
    title: "Hub of Joshua Rashtian",
    description: "Computer Scientist, Creative.",
    images: ["./assets/joshrashtian.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-50 dark:bg-zinc-800`}>
        <Header />
        {children}
        <Socials />
      </body>
    </html>
  );
}
