import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/Navigation/ResponsiveNav";

const barlow_Condensed = Barlow_Condensed({ 
  weight: ['300', '400', '500', '700', '800'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Thuê Nhà Malaysia",
  description: "Nơi bạn có thể tìm thông tin liên hệ để thuê nhà ở Malaysia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={barlow_Condensed.className}>
        <ResponsiveNav/>
        {children}
        </body>
    </html>
  );
}
