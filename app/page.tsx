import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  FileCheck,
  GraduationCap,
  Layers,
  Link2,
  Percent,
  Search,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Zap,
} from "lucide-react";
import { allKeywordsData } from "@/lib/data";
import { generateHomepageJsonLd } from "@/lib/seo-schema";
import Navbar from "@/components/navbar";
import Features from "@/components/features";
import Timeline from "@/components/timeline";
import PricingTable from "@/components/pricing-table";
import NoAiGuarantee from "@/components/no-ai-guarantee";
import RegionalStandards from "@/components/regional-standards";
import Reviews from "@/components/reviews";
import FAQ from "@/components/faq";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "EssayWriters | Zero-AI & 100% Turnitin-Safe Custom Academic Papers (US, UK, CA, AU)",
  description:
    "Headquartered in Los Angeles, USA. Connect with vetted US, UK, Australian & Canadian Master's and PhD academic writers. 100% human-researched, Turnitin-verified, 0% AI, and 24/7 direct scholar chat. Starting at $9.99/page.",
  keywords: [
    "essay writing service",
    "pay someone to write my essay",
    "hire essay writer",
    "zero AI essay",
    "Turnitin safe papers",
    "custom research paper",
    "term paper writing",
    "thesis writing help",
    "essay writing service USA",
    "essay writing service UK",
    "essay writing service Canada",
    "essay writing service Australia",
    "Los Angeles essay writing service",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "EssayWriters | Premier Zero-AI Academic Writing & Research Platform",
    description:
      "Order custom essays, term papers, and dissertations from verified PhD scholars. 100% Turnitin similarity and CopyLeaks AI-free certification across US, UK, Canada & Australia.",
    type: "website",
    url: "/",
    siteName: "EssayWriters",
  },
  twitter: {
    card: "summary_large_image",
    title: "EssayWriters | Zero-AI Academic Research Platform (2026)",
    description:
      "Vetted native English Master's and PhD academic writers. 100% human scholarship, Turnitin-verified across US, UK, CA, and AU.",
  },
};

export default function HomePage() {
  const primaryData = allKeywordsData[0];

  // Group all keywords into helpful SEO topic categories
  const categories = [
    {
      title: "Core Essay Writing Services",
      description: "Direct collaboration with verified subject specialists for custom coursework and essays.",
      keywords: allKeywordsData.filter((k) =>
        k.slug.includes("essay") && !k.slug.includes("reddit") && !k.slug.includes("scholarship") && !k.slug.includes("extended")
      ),
    },
    {
      title: "Research Papers & Term Papers",
      description: "Comprehensive empirical methodology, peer-reviewed citations, and rigorous literature reviews.",
      keywords: allKeywordsData.filter(
        (k) => (k.slug.includes("paper") || k.slug.includes("term-paper") || k.slug.includes("research-paper")) && !k.slug.includes("reddit")
      ),
    },
    {
      title: "Thesis, Dissertation & Advanced Editing",
      description: "Graduate-level statistical modeling, chapters, literature reviews, and proofreading.",
      keywords: allKeywordsData.filter(
        (k) => k.slug.includes("thesis") || k.slug.includes("proofread") || k.slug.includes("extended") || k.slug.includes("scholarship")
      ),
    },
    {
      title: "Community-Reviewed & Student Guides",
      description: "Independent student evaluations, platform comparisons, and integrity guidelines.",
      keywords: allKeywordsData.filter((k) => k.slug.includes("reddit")),
    },
  ];

  // Schema.org Structured Data with full 54 US states, UK cities, Canada, Australia & LA HQ
  const homeJsonLd = generateHomepageJsonLd("https://essaywriters.org");

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />

      {/* Main Navigation */}
      <Navbar keyword="custom essay writing" />

      <main className="flex-1">
        {/* Master Hero Section */}
        <section className="relative flex flex-col items-center justify-center overflow-hidden px-4 pt-14 pb-20 sm:px-6 lg:px-8">
          <div className="relative isolate mx-auto max-w-5xl text-center">
            {/* Top Badge */}
            <div className="flex justify-center mb-6">
              <Badge
                className="rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur-lg border border-primary/20 flex items-center gap-1.5"
                variant="secondary"
              >
                <Sparkles className="size-3.5 text-amber-500 fill-amber-500" />
                <span>Zero-AI • 100% Turnitin-Verified Human Scholarship (2026)</span>
              </Badge>
            </div>

            {/* Main H1 */}
            <h1 className="mx-auto max-w-4xl font-extrabold text-3xl tracking-tight sm:text-5xl lg:text-6xl text-foreground leading-[1.15]">
              Premier Custom Academic Writing & Research Platform
            </h1>

            {/* Subheading */}
            <p className="mx-auto mt-6 max-w-3xl text-muted-foreground text-lg sm:text-xl leading-relaxed">
              Connect with accredited Master’s and PhD subject specialists across US, UK, Australian, and Canadian universities. Guaranteed 0% AI detection, Turnitin authenticity certificates, and 24/7 direct scholar chat.
            </p>

            {/* Key Trust Signals */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-xs sm:text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5 font-medium text-foreground">
                <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400" />
                100% Original Human Research
              </span>
              <span className="flex items-center gap-1.5 font-medium text-foreground">
                <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400" />
                Turnitin & CopyLeaks Zero-AI Certified
              </span>
              <span className="flex items-center gap-1.5 font-medium text-foreground">
                <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400" />
                Starting from $9.99/page
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#all-topics"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full sm:w-auto rounded-full px-8 font-bold shadow-lg shadow-primary/20"
                )}
              >
                Explore All 36+ Services <ArrowRight className="ml-2 size-4" />
              </a>
              <a
                href="#pricing"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "w-full sm:w-auto rounded-full font-medium"
                )}
              >
                View Transparent Pricing Matrix
              </a>
            </div>

            {/* Trust Stats Counter */}
            <div className="mx-auto mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {primaryData.stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center rounded-2xl border border-border/70 bg-card p-4 sm:p-5 text-center shadow-xs"
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
        </section>

        {/* Master Categorized Keyword & Topic Directory (SEO Authority Hub) */}
        <section id="all-topics" className="px-4 py-16 sm:px-6 lg:px-8 border-t border-border/40 bg-muted/20">
          <div className="mx-auto max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <Badge
                variant="outline"
                className="rounded-full px-3 py-1 text-xs font-semibold text-primary border-primary/20 mb-3"
              >
                <BookOpen className="size-3.5 mr-1" /> Comprehensive Service Directory
              </Badge>
              <h2 className="font-bold text-2xl tracking-tight sm:text-4xl text-foreground">
                All Specialized Academic Writing Services & Topics
              </h2>
              <p className="mt-3 text-muted-foreground text-base sm:text-lg">
                Browse every custom writing service tailored to exact academic disciplines, educational rubrics, and turnaround deadlines.
              </p>
            </div>

            {/* Category Blocks */}
            <div className="space-y-12">
              {categories.map((cat, idx) => (
                <div key={idx} className="rounded-3xl border border-border/80 bg-card p-6 sm:p-8 shadow-xs">
                  <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/40 pb-4">
                    <div>
                      <h3 className="font-bold text-xl sm:text-2xl text-foreground flex items-center gap-2">
                        <Layers className="size-5 text-primary" />
                        {cat.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                        {cat.description}
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-primary/80 bg-primary/10 px-3 py-1 rounded-full self-start sm:self-auto">
                      {cat.keywords.length} Specialized Topics
                    </span>
                  </div>

                  {/* Keywords Grid with internal links to each page */}
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {cat.keywords.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/${item.slug}`}
                        className="group flex flex-col justify-between rounded-2xl border border-border/60 bg-background p-4 sm:p-5 transition-all duration-200 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="font-bold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5 capitalize">
                              <Link2 className="size-3.5 text-primary/70 shrink-0" />
                              {item.keyword}
                            </span>
                            <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary shrink-0" />
                          </div>
                          <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                            {item.metaDescription}
                          </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between text-[11px] font-medium text-muted-foreground">
                          <span>From ${item.pricing.startingPrice}/page</span>
                          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                            {item.pricing.discountPercentage}% Discount
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features / Benefits */}
        <Features features={primaryData.features} keyword="custom academic writing" />

        {/* Process Timeline */}
        <Timeline
          steps={primaryData.howItWorks}
          vettingSteps={primaryData.writerVettingProcess}
          keyword="custom essay writing"
        />

        {/* Dynamic Pricing Matrix */}
        <PricingTable pricing={primaryData.pricing} keyword="academic paper writing" />

        {/* Zero-AI & Turnitin Safety */}
        <NoAiGuarantee noAiGuarantee={primaryData.noAiGuarantee} keyword="custom essay writing" />

        {/* Regional Academic Standards */}
        <RegionalStandards
          standards={primaryData.regionalStandards}
          keyword="academic writing"
        />

        {/* Verified Student Reviews */}
        <Reviews reviews={primaryData.reviews} keyword="essay writing" />

        {/* FAQ Section */}
        <FAQ faqs={primaryData.faqs} keyword="essay writing service" />

        {/* Master Bottom CTA */}
        <CTA
          keyword="custom academic writing"
          heroCta={primaryData.heroCta}
          startingPrice={primaryData.pricing.startingPrice}
        />
      </main>

      {/* Footer with all links */}
      <Footer keyword="custom essay writing" slug="" />
    </div>
  );
}
