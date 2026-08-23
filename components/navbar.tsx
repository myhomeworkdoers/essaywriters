import Link from "next/link";
import { GraduationCap, ShieldCheck, Sparkles } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavbarProps {
  keyword?: string;
}

export default function Navbar({ keyword }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo & Home Link */}
        <Link 
          href="/" 
          className="flex items-center gap-2.5 group transition-opacity hover:opacity-90"
          title="EssayWriters - Zero-AI Academic Writing Platform"
        >
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
            <GraduationCap className="size-6 transition-transform group-hover:scale-110" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-none tracking-tight">
              Essay<span className="text-primary font-black">Writers</span>
            </span>
            <span className="text-[11px] text-muted-foreground font-medium flex items-center gap-1 mt-0.5">
              <ShieldCheck className="size-3 text-emerald-600 dark:text-emerald-400" />
              100% Zero-AI Verified
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <a href="#how-it-works" className="transition-colors hover:text-foreground">
            How It Works
          </a>
          <a href="#pricing" className="transition-colors hover:text-foreground">
            Pricing
          </a>
          <a href="#zero-ai-guarantee" className="transition-colors hover:text-foreground flex items-center gap-1 text-foreground">
            <Sparkles className="size-3.5 text-amber-500" />
            Zero-AI
          </a>
          <a href="#regional-standards" className="transition-colors hover:text-foreground">
            Regional Standards
          </a>
          <a href="#reviews" className="transition-colors hover:text-foreground">
            Reviews
          </a>
          <a href="#faqs" className="transition-colors hover:text-foreground">
            FAQs
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="hidden sm:inline-flex text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20"
          >
            ● 24/7 Expert Online
          </Link>
          <a
            href="#pricing"
            className={cn(buttonVariants({ size: "sm" }), "rounded-full shadow-sm font-semibold")}
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
