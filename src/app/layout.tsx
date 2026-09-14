import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Senior Software Engineer · Portfolio",
  description:
    "A project-focused portfolio for a Senior Software Engineer based in the UAE.",
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
