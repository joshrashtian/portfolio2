import type { Metadata } from "next";
import {
  Figtree,
  Inter,
  Merriweather,
  Merriweather_Sans,
  Outfit,
  Titillium_Web,
} from "next/font/google";
import "./globals.css";
import Header from "./_components/(home)/header";
import Socials from "./_components/(global)/Socials";
import { Analytics } from "@vercel/analytics/react";
import CardContextWrapper from "./contexts/CardContext";
import HeaderMenuContextProvider from "./contexts/HeaderMenuContext";
import { getVersion } from "./utils/version";
import DarkModeProvider from "./contexts/DarkModeContext";
import { GeneralProvider } from "./_components/(home)/General";
import CustomCursor from "./contexts/CustomCursor";
const inter = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jrtechscv.com"),
  title: "Joshua Rashtian",
  description: "Computer Scientist, Creative.",
  category: "portfolio",
  icons: {
    icon: "./(assets)/jjr.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshua Rashtian",
    description: "Computer Scientist, Creative.",
    creator: "@joshrashtian",
    images: ["./(assets)/joshrashtian.png"],
  },
  openGraph: {
    siteName: "Joshua Rashtian",
    type: "website",
    title: "Hub of Joshua Rashtian",
    description: "Computer Scientist, Creative.",
    images: "./assets/joshrashtian.png",
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
        <CustomCursor>
          <CardContextWrapper>
            <DarkModeProvider>
              <HeaderMenuContextProvider>
                <GeneralProvider>
                  {children}
                  <Header />
                  <Socials />
                </GeneralProvider>
              </HeaderMenuContextProvider>
            </DarkModeProvider>
          </CardContextWrapper>

          <Analytics mode="production" />
        </CustomCursor>
      </body>
    </html>
  );
}
