import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";
import type { SVGProps } from "react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { StatItem } from "@/lib/types";
import { cn } from "@/lib/utils";

interface HeroProps {
  keyword: string;
  h1: string;
  subheading: string;
  badge: string;
  heroCta: {
    primaryText: string;
    secondaryText: string;
  };
  stats: StatItem[];
  startingPrice?: number;
}

export default function Hero({
  keyword,
  h1,
  subheading,
  badge,
  heroCta,
  stats,
  startingPrice = 11.99,
}: HeroProps) {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden px-4 pt-12 pb-16 sm:px-6 lg:px-8">
      <DreamyBackground className="pointer-events-none absolute inset-0 -z-10 m-auto opacity-70 dark:opacity-40" />

      <div className="relative isolate mx-auto max-w-4xl text-center">
        {/* Breadcrumb / Home keyword hyperlink */}
        <div className="mb-4 flex items-center justify-center gap-2 text-xs font-medium text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-foreground hover:underline">
            Home
          </Link>
          <span>/</span>
          <Link href="/" className="text-foreground font-semibold hover:underline capitalize">
            {keyword}
          </Link>
        </div>

        {/* Dynamic Badge */}
        <div className="flex justify-center">
          <Link href="/">
            <Badge 
              className="rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur-lg hover:bg-primary/20 transition-all border border-primary/20 flex items-center gap-1.5" 
              variant="secondary"
            >
              <Sparkles className="size-3.5 text-amber-500 fill-amber-500" />
              <span>{badge || "Verified Academic Excellence • 2026 Edition"}</span>
            </Badge>
          </Link>
        </div>

        {/* Dynamic H1 */}
        <h1 className="mx-auto mt-6 max-w-3xl font-bold text-3xl tracking-tight sm:text-5xl lg:text-6xl text-foreground">
          {h1}
        </h1>

        {/* Dynamic Subheading with keyword hyperlink to home */}
        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground text-lg sm:text-xl leading-relaxed">
          {subheading.includes(keyword) ? (
            subheading.split(new RegExp(`(${keyword})`, 'gi')).map((part, i) => 
              part.toLowerCase() === keyword.toLowerCase() ? (
                <Link key={i} href="/" className="font-semibold text-foreground underline decoration-primary/50 underline-offset-4 hover:decoration-primary">
                  {part}
                </Link>
              ) : (
                part
              )
            )
          ) : (
            <>
              {subheading}{" "}
              <Link href="/" className="font-medium text-foreground underline decoration-primary/40 hover:decoration-primary">
                Learn more about {keyword} on our home platform.
              </Link>
            </>
          )}
        </p>

        {/* Key Trust Signals */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400" />
            Zero-AI & 100% Turnitin Verified
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400" />
            Master&apos;s & PhD Degree Writers
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400" />
            Starting at ${startingPrice}/page
          </span>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pricing"
            className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto rounded-full px-8 font-semibold shadow-lg shadow-primary/20")}
          >
            {heroCta?.primaryText || "Calculate Your Price"} <ArrowRight className="ml-2 size-4" />
          </a>
          <a
            href="#how-it-works"
            className={cn(buttonVariants({ size: "lg", variant: "outline" }), "w-full sm:w-auto rounded-full font-medium")}
          >
            {heroCta?.secondaryText || "View Step-by-Step Process"}
          </a>
        </div>
      </div>

      {/* Dynamic Stats Grid */}
      {stats && stats.length > 0 && (
        <div className="mx-auto mt-14 w-full max-w-5xl">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center rounded-2xl border border-border/60 bg-card/60 p-4 sm:p-5 text-center shadow-xs backdrop-blur-xs transition-transform hover:-translate-y-0.5"
              >
                <span className="font-extrabold text-2xl sm:text-3xl text-foreground tracking-tight">
                  {stat.value}
                </span>
                <span className="mt-1 text-xs sm:text-sm font-medium text-foreground/90">
                  {stat.label}
                </span>
                {stat.description && (
                  <span className="mt-1 text-[11px] text-muted-foreground leading-snug">
                    {stat.description}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

function DreamyBackground(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      viewBox="0 0 1226 1065"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_f_0_1)">
        <path
          d="M291.402 416.77C291.402 346.77 244.735 285.603 221.402 263.77C111.902 141.27 448.902 207.27 636.402 359.77C823.902 512.27 618.902 613.27 448.902 740.27C278.902 867.27 291.402 504.27 291.402 416.77Z"
          fill="url(#paint0_linear_0_1)"
        />
      </g>
      <g filter="url(#filter1_f_0_1)">
        <path
          d="M811.933 441.279C881.694 435.492 938.793 383.929 958.623 358.87C1071.65 239.618 1033.74 580.921 897.259 780.386C760.781 979.851 643.18 783.902 502.561 624.983C361.942 466.063 724.733 448.512 811.933 441.279Z"
          fill="url(#paint1_linear_0_1)"
        />
      </g>
      <defs>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="966.944"
          id="filter0_f_0_1"
          width="910.974"
          x="0"
          y="0"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            mode="normal"
            result="shape"
          />
          <feGaussianBlur
            result="effect1_foregroundBlur_0_1"
            stdDeviation="100"
          />
        </filter>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="930.619"
          id="filter1_f_0_1"
          width="954.625"
          x="270.534"
          y="134.203"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            mode="normal"
            result="shape"
          />
          <feGaussianBlur
            result="effect1_foregroundBlur_0_1"
            stdDeviation="100"
          />
        </filter>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_0_1"
          x1="155.902"
          x2="592.902"
          y1="200.271"
          y2="696.271"
        >
          <stop stopColor="#10b981" stopOpacity="0.25" />
          <stop offset="1" stopColor="#059669" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint1_linear_0_1"
          x1="1016.49"
          x2="558.314"
          y1="288.346"
          y2="764.853"
        >
          <stop stopColor="#3b82f6" stopOpacity="0.2" />
          <stop offset="1" stopColor="#6366f1" stopOpacity="0.15" />
        </linearGradient>
      </defs>
    </svg>
  );
}
