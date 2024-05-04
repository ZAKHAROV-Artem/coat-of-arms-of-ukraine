import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Intro } from "@/components/intro";
import { cn } from "@/lib/utils";

const eUkraine = localFont({
  src: "../../../public/e-UkraineHead-Regular.otf",
  display: "swap",
});
export const metadata: Metadata = {
  title: "Державний Герб України",
  description:
    "Чи ти знаєш все про власний герб? Сайт, де ти зможеш дізнатися все про герб України та подивитися різні його варіанти, відредагувати їх та завантажити.",
  applicationName: "Державний Герб України",
  authors: [
    { name: "Zakharov Artem", url: "https://zakharov-artem.vercel.app/" },
  ],
  generator: "Next.js",
  keywords: [
    "Державний Герб України",
    "Герб України",
    "Завантажити",
    "Тризуб",
    "Coat of arms of Ukraine",
    "Download",
    "Trident",
  ],
  icons: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon/favicon-16x16.png",
    },
  ],
  manifest: "/site.webmanifest",
  creator: "Zakharov Artem",
  publisher: "Zakharov Artem",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://coat-of-arms-of-ukraine.vercel.app/",
    title: "Державний Герб України",
    description:
      "Чи ти знаєш все про власний герб? Сайт, де ти зможеш дізнатися все про герб України та подивитися різні його варіанти, відредагувати їх та завантажити.",
    siteName: "Державний Герб України",
    images: [
      {
        url: "https://coat-of-arms-of-ukraine.vercel.app/imgs/banner.jpg",
      },
    ],
  },
  twitter: {
    title: "Державний Герб України",
    description:
      "Чи ти знаєш все про власний герб? Сайт, де ти зможеш дізнатися все про герб України та подивитися різні його варіанти, відредагувати їх та завантажити.",
    card: "summary_large_image",
    site: "@szakharovartem",
    creator: "@szakharovartem",
    images: "https://coat-of-arms-of-ukraine.vercel.app/imgs/banner.jpg",
  },
  category: "SaaS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("flex min-h-screen flex-col", eUkraine.className)}>
        <Intro />

        <Navbar />
        {children}
      </body>
    </html>
  );
}
