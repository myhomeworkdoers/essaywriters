import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAProps {
  keyword?: string;
  heroCta?: {
    primaryText: string;
    secondaryText: string;
  };
  startingPrice?: number;
}

export default function CTA({ keyword, heroCta, startingPrice = 11.99 }: CTAProps) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border/80 p-8 sm:p-14 bg-gradient-to-br from-primary/10 via-background to-emerald-500/10 shadow-xl">
        {/* Subtle decorative grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20 dark:opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20px 20px, currentColor 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1 text-xs font-bold text-primary mb-4 border border-primary/20">
            <ShieldCheck className="size-3.5" /> 100% Zero-AI • Turnitin Authenticity Guaranteed
          </div>

          <h2 className="font-extrabold text-2xl tracking-tight sm:text-4xl lg:text-5xl text-foreground">
            Ready to {keyword ? <Link href="/" className="hover:underline underline-offset-4 decoration-primary">{keyword}</Link> : "Achieve Academic Excellence"}?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Collaborate directly with native Master’s and PhD scholars. Get custom research, strict adherence to course rubrics, and guaranteed on-time delivery starting from <strong className="text-foreground">${startingPrice}/page</strong>.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400" /> Free Turnitin Report
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400" /> 14-30 Days Free Revisions
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400" /> 256-Bit SSL Encrypted
            </span>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <Link
              href="/"
              className={cn(buttonVariants({ size: "lg" }), "rounded-full px-8 font-bold shadow-lg shadow-primary/25")}
            >
              {heroCta?.primaryText || "Order Your Paper Now"} <ArrowRight className="ml-2 size-4" />
            </Link>
            <a
              href="#how-it-works"
              className={cn(buttonVariants({ size: "lg", variant: "outline" }), "rounded-full font-semibold")}
            >
              {heroCta?.secondaryText || "Review 4-Step Process"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
