import type { Metadata } from "next";
import { Inter, Outfit, Titillium_Web } from "next/font/google";
import "./globals.css";
import Header from "./_components/(home)/header";
import Socials from "./_components/(global)/Socials";
import { Analytics } from "@vercel/analytics/react";
import CardContextWrapper from "./contexts/CardContext";
import HeaderMenuContextProvider from "./contexts/HeaderMenuContext";
const inter = Outfit({ subsets: ["latin"] });
const til = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
});
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
      <body className={`${til.className} bg-zinc-50 dark:bg-zinc-800`}>
        <CardContextWrapper>
          <HeaderMenuContextProvider>
            {children}
            <Header />
            <Socials />
          </HeaderMenuContextProvider>
        </CardContextWrapper>

        <Analytics mode="production" />
      </body>
    </html>
  );
}
