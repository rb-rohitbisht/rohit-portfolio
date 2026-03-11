import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rohit Bisht — Frontend Developer",
  description:
    "Portfolio of Rohit Bisht — Senior Frontend Developer specialising in React, Next.js and TypeScript with 3+ years of experience building scalable web applications.",
  keywords: ["Rohit Bisht", "Frontend Developer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Rohit Bisht", url: "https://linkedin.com/in/rohit-bisht-010580181" }],
  openGraph: {
    title: "Rohit Bisht — Frontend Developer",
    description: "3+ years crafting performant, scalable web applications with React & Next.js.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
