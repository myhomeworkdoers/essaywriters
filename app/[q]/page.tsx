import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllKeywordSlugs, getOrCreateKeywordData } from "@/lib/data";
import { generateKeywordPageJsonLd } from "@/lib/seo-schema";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Timeline from "@/components/timeline";
import PricingTable from "@/components/pricing-table";
import NoAiGuarantee from "@/components/no-ai-guarantee";
import RegionalStandards from "@/components/regional-standards";
import LongFormContent from "@/components/long-form-content";
import Reviews from "@/components/reviews";
import FAQ from "@/components/faq";
import RelatedKeywords from "@/components/related-keywords";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

interface PageProps {
  params: Promise<{ q: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateStaticParams() {
  const slugs = getAllKeywordSlugs();
  return slugs.map((slug) => ({
    q: slug,
  }));
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const { q } = await params;
  const search = await searchParams;
  const queryKeyword = typeof search?.keyword === "string" ? search.keyword : undefined;

  const data = getOrCreateKeywordData(q, queryKeyword);

  return {
    title: `${data.title} | Zero-AI & 100% Turnitin-Safe (US, UK, CA, AU)`,
    description: `${data.metaDescription} Headquartered in Los Angeles, USA. Serving students across all 54 US states & territories, UK cities, Canada, and Australia.`,
    keywords: [
      data.keyword,
      "essay writing service",
      "custom essay writing",
      "zero AI essay",
      "Turnitin safe papers",
      "academic research help",
      "hire essay writer",
      "PhD academic writers",
      "essay writing USA",
      "essay writing UK",
      "essay writing Canada",
      "essay writing Australia",
      "Los Angeles academic research",
    ],
    alternates: {
      canonical: `/${data.slug}`,
    },
    openGraph: {
      title: data.title,
      description: data.metaDescription,
      type: "article",
      siteName: "EssayWriters",
      url: `/${data.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.metaDescription,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function DynamicKeywordPage({ params, searchParams }: PageProps) {
  const { q } = await params;
  const search = await searchParams;
  const queryKeyword = typeof search?.keyword === "string" ? search.keyword : undefined;

  const data = getOrCreateKeywordData(q, queryKeyword);

  if (!data) {
    notFound();
  }

  // JSON-LD Structured Data with full 54 US States, UK Cities, Canada, Australia & LA HQ
  const jsonLd = generateKeywordPageJsonLd(data, "https://essaywriters.org");

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation */}
      <Navbar keyword={data.keyword} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Dynamic Hero with keyword in H1, badge, stats, and / link */}
        <Hero
          keyword={data.keyword}
          h1={data.h1}
          subheading={data.subheading}
          badge={data.badge}
          heroCta={data.heroCta}
          stats={data.stats}
          startingPrice={data.pricing?.startingPrice}
        />

        {/* Features / Benefits */}
        <Features features={data.features} keyword={data.keyword} />

        {/* Process Timeline (How It Works & Writer Vetting) */}
        <Timeline
          steps={data.howItWorks}
          vettingSteps={data.writerVettingProcess}
          keyword={data.keyword}
        />

        {/* Dynamic Pricing Matrix & Tiers */}
        <PricingTable pricing={data.pricing} keyword={data.keyword} />

        {/* Zero-AI & Turnitin Safety Guarantee */}
        <NoAiGuarantee noAiGuarantee={data.noAiGuarantee} keyword={data.keyword} />

        {/* Regional Academic Standards (US, UK, AU, CA) */}
        <RegionalStandards
          standards={data.regionalStandards}
          keyword={data.keyword}
        />

        {/* Long-Form Academic Guide with Sticky Table of Contents */}
        <LongFormContent
          longFormContent={data.longFormContent}
          keyword={data.keyword}
        />

        {/* Verified Student Reviews */}
        <Reviews reviews={data.reviews} keyword={data.keyword} />

        {/* FAQs with Accordion */}
        <FAQ faqs={data.faqs} keyword={data.keyword} />

        {/* Related Search Keywords Hub */}
        <RelatedKeywords
          relatedKeywords={data.relatedKeywords}
          currentKeyword={data.keyword}
        />

        {/* Final Conversion CTA */}
        <CTA
          keyword={data.keyword}
          heroCta={data.heroCta}
          startingPrice={data.pricing?.startingPrice}
        />
      </main>

      {/* Footer with rich SEO links */}
      <Footer keyword={data.keyword} slug={data.slug} />
    </div>
  );
}
