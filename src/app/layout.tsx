import "@/utils/styles/globals.css";
import { metaInfo } from "@/utils/metadata";
import { Metadata } from "next";
import { NT_SOMIC } from "@/assets/fonts/fonts";
import { Header } from "@/components";

export const metadata: Metadata = {
  title: metaInfo.en.title,
  description: metaInfo.en.description,
  keywords: metaInfo.en.keywords,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${NT_SOMIC.variable} font-sans container mx-auto lg:flex lg:justify-between lg:gap-4`}>
        <Header />
        {children}
        <div id="modal"></div>
      </body>
    </html>
  );
}
