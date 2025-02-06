import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StockHorizon",
  description: "your E-Commerce Inventory Manegement App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
