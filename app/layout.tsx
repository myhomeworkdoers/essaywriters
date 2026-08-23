import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://essaywriters.homeworkdoers.help"),
  title: {
    default: "EssayWriters | Zero-AI & 100% Plagiarism-Free Academic Writing Platform",
    template: "%s | EssayWriters",
  },
  description:
    "Headquartered in Los Angeles, USA. Connect with vetted US, UK, Australian & Canadian Master's and PhD academic writers. 100% human-researched, Turnitin-verified, 0% AI, and 24/7 direct scholar chat.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
