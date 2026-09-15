import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Usama Iftikhar · Senior Software Engineer",
  description:
    "Project-focused portfolio of Usama Iftikhar, Senior Software Engineer based in the UAE.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
