import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import DarkModeToggle from "@/components/DarkModeToggle";

export const metadata: Metadata = {
  title: "Shinobi",
  description: "Modern design system with custom themes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="flex justify-between items-center p-4 bg-surface border-b border-border">
          <Link href="/" className="text-foreground hover:text-primary">
            <h1 className="text-3xl font-semibold m-0 text-foreground">
              Shinobi
            </h1>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/about" className="text-foreground hover:text-primary">About</Link>
            <DarkModeToggle />
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
