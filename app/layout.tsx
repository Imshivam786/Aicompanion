import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Companion.ai",
  description: "An AI SaaS Platform where you can create your favorite personality as your companion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body className={cn('bg-secondary', inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
        <Toaster/>
        </ThemeProvider>
        </body>
    </html>
    </ClerkProvider>
  );
}
