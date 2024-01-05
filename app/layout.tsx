import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "NextJs Template",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey={process.env.THEME_STORAGE_KEY || "nextjs-template-theme"}
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}