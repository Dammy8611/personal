import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
// import { QueryProvider } from "@/components/query-provider";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dtechy - Full Stack Developer Portfolio",
  description:
    "Portfolio website of Otele Damiloal David (Dtechy), a passionate Full Stack Developer specializing in JavaScript, React, and Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <QueryProvider> */}
          {children}
          <Toaster />
          {/* </QueryProvider> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
