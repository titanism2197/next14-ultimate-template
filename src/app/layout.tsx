// styles
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
// next
import type { Metadata } from "next";
// utils
import { cn } from "@/lib/utils";
// components
import { Providers } from "@/components/provider";

export const fonts = cn(
  GeistSans.variable,
  GeistMono.variable,
  "touch-manipulation font-sans antialiased"
);

export const metadata: Metadata = {
  title: "next14-supabase-template",
  description: "next.js와 supabase를 사용한 템플릿",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={fonts}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
