"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Compass,
  Globe,
  GraduationCap,
  MapPin,
  School,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { RegionalStandard } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  US_AREAS_SERVED,
  UK_AREAS_SERVED,
  CANADA_AREAS_SERVED,
  AUSTRALIA_AREAS_SERVED,
  HEADQUARTERS_INFO,
} from "@/lib/seo-schema";

interface RegionalStandardsProps {
  standards?: RegionalStandard[];
  keyword?: string;
}

const REGIONAL_DETAILS = {
  US: {
    flag: "🇺🇸",
    name: "United States",
    subtitle: "50 States + DC & US Territories • Headquartered in Los Angeles, CA",
    overview:
      "All custom papers adhere to US higher education rubrics, Title IV institutional standards, and strict academic integrity benchmarks. Custom-written by verified Master's & PhD researchers from top American institutions (Ivy League, Big Ten, UC System, ACC, and State Universities).",
    citations: ["APA 7th Edition", "MLA 9th Edition", "Chicago / Turabian 17th", "IEEE", "CSE"],
    gradingScale: "4.0 GPA Grading Scale (A / A+ Distinction Benchmark, 93-100%)",
    institutions: "Harvard, Stanford, UCLA, UC Berkeley, NYU, UT Austin, Michigan, Columbia, USC",
    regions: US_AREAS_SERVED,
    coverageLabel: "All 54 States & Territories Covered",
  },
  UK: {
    flag: "🇬🇧",
    name: "United Kingdom",
    subtitle: "England, Scotland, Wales & Northern Ireland • All University Cities",
    overview:
      "Precision-crafted British English academic writing adhering to QAA benchmarks, Russell Group institutional rubrics, and UK higher education standards. Formatted for First-Class (70%+) and Upper Second-Class (2:1, 60-69%) honours level.",
    citations: ["Harvard (Cite Them Right)", "OSCOLA (Legal)", "MHRA", "Oxford / Cambridge", "APA 7th UK"],
    gradingScale: "First-Class Honours (1st / 70%+) & Upper Second-Class (2:1 / 60-69%)",
    institutions: "Oxford, Cambridge, Imperial College, UCL, LSE, Edinburgh, Manchester, King's College",
    regions: UK_AREAS_SERVED,
    coverageLabel: "All Major UK University Cities Covered",
  },
  CA: {
    flag: "🇨🇦",
    name: "Canada",
    subtitle: "10 Provinces & 3 Territories • Major Academic Hubs",
    overview:
      "Tailored to Canadian higher education standards, U15 Group of Canadian Research Universities, and provincial curriculum frameworks. Incorporates Canadian English orthography, localized statistical data, and tri-council ethical standards.",
    citations: ["Canadian APA 7th", "MLA 9th", "Chicago Notes & Bibliography", "McGill Guide (Legal)"],
    gradingScale: "4.33 / 4.0 / Percentage Scale (A+ Distinction 90-100%, A Grade 85-89%)",
    institutions: "Univ of Toronto, McGill, UBC, Waterloo, McMaster, Alberta, Montreal, Queen's",
    regions: CANADA_AREAS_SERVED,
    coverageLabel: "All 13 Provinces, Territories & Academic Hubs",
  },
  AU: {
    flag: "🇦🇺",
    name: "Australia",
    subtitle: "8 States & Territories • Group of Eight (Go8) Hubs",
    overview:
      "Strictly aligned with the Australian Qualifications Framework (AQF Levels 7-10), TEQSA standards, and Group of Eight (Go8) university guidelines. Incorporates Australian English conventions and empirical literature requirements.",
    citations: ["AGLC4 (Australian Guide to Legal Citations)", "APA 7th AU", "Harvard AGPS", "Vancouver"],
    gradingScale: "High Distinction (HD / 85%+) & Distinction (D / 75-84%) Benchmarks",
    institutions: "Univ of Melbourne, Sydney, ANU, UNSW, Queensland (UQ), Monash, UWA, Adelaide",
    regions: AUSTRALIA_AREAS_SERVED,
    coverageLabel: "All 8 States, Territories & Capital Hubs",
  },
};

export default function RegionalStandards({ standards, keyword }: RegionalStandardsProps) {
  const [selectedRegion, setSelectedRegion] = useState<"US" | "UK" | "CA" | "AU">("US");
  const [showAllAreas, setShowAllAreas] = useState<boolean>(false);

  const currentDetails = REGIONAL_DETAILS[selectedRegion];

  return (
    <section id="regional-standards" className="px-4 py-16 sm:px-6 lg:px-8 border-t border-border/40 bg-muted/15">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge
            variant="outline"
            className="rounded-full px-3.5 py-1 text-xs font-semibold text-primary border-primary/20 mb-3 inline-flex items-center gap-1.5"
          >
            <Globe className="size-3.5 text-primary" />
            <span>Global Academic Standards & Local SEO Coverage</span>
          </Badge>
          <h2 className="font-extrabold text-2xl tracking-tight sm:text-4xl text-foreground">
            Tailored for US, UK, Canadian & Australian Universities
          </h2>
          <p className="mt-3 text-muted-foreground text-base sm:text-lg">
            Our subject specialists customize vocabulary, localized spelling, regional grading rubrics, and citation frameworks for your exact institution when you{" "}
            <Link href="/" className="font-medium text-foreground underline hover:decoration-primary">
              order {keyword || "custom academic writing"}
            </Link>.
          </p>
        </div>

        {/* Global HQ Trust Banner */}
        <div className="mb-10 rounded-2xl border border-primary/20 bg-primary/5 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold shadow-xs">
              <MapPin className="size-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm sm:text-base text-foreground">
                  Global Operations & Editorial Headquarters
                </h3>
                <Badge className="bg-emerald-600 text-white hover:bg-emerald-600 text-[10px] py-0 px-2">
                  Los Angeles, CA • USA
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">
                {HEADQUARTERS_INFO.address.streetAddress}, {HEADQUARTERS_INFO.address.addressLocality}, {HEADQUARTERS_INFO.address.addressRegion} {HEADQUARTERS_INFO.address.postalCode} • Serving all 54 US states, UK cities, Canada & Australia 24/7.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0 text-xs font-semibold text-primary">
            <ShieldCheck className="size-4" /> 100% Turnitin-Safe Guaranteed
          </div>
        </div>

        {/* Region Switcher Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-8">
          {(["US", "UK", "CA", "AU"] as const).map((regionKey) => {
            const region = REGIONAL_DETAILS[regionKey];
            const isSelected = selectedRegion === regionKey;
            return (
              <button
                key={regionKey}
                onClick={() => {
                  setSelectedRegion(regionKey);
                  setShowAllAreas(false);
                }}
                className={cn(
                  "flex flex-col items-center justify-center p-3.5 sm:p-4 rounded-2xl border transition-all text-center cursor-pointer",
                  isSelected
                    ? "border-primary bg-card shadow-md ring-2 ring-primary/20 text-foreground"
                    : "border-border/60 bg-card/60 hover:bg-card hover:border-border text-muted-foreground"
                )}
              >
                <span className="text-2xl mb-1">{region.flag}</span>
                <span className="font-bold text-sm sm:text-base text-foreground">{region.name}</span>
                <span className="text-[11px] text-muted-foreground mt-0.5">{region.coverageLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Region Detailed Panel */}
        <div className="rounded-3xl border border-border/80 bg-card p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-border/40">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-3xl">{currentDetails.flag}</span>
                <div>
                  <h3 className="font-extrabold text-xl sm:text-2xl text-foreground">
                    {currentDetails.name} Academic Standards & Rubrics
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-primary">
                    {currentDetails.subtitle}
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-2">
                {currentDetails.overview}
              </p>
            </div>
            <div className="shrink-0 bg-muted/40 rounded-2xl p-4 border border-border/60 min-w-[260px]">
              <span className="text-xs font-bold text-foreground block mb-1">
                Target Benchmark:
              </span>
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold block mb-3">
                {currentDetails.gradingScale}
              </span>
              <span className="text-xs font-bold text-foreground block mb-1">
                Top Institutions Served:
              </span>
              <span className="text-[11px] text-muted-foreground leading-snug block">
                {currentDetails.institutions}
              </span>
            </div>
          </div>

          {/* Citation Frameworks & Rubrics Grid */}
          <div className="grid gap-6 sm:grid-cols-2 pt-6">
            <div>
              <h4 className="font-bold text-sm text-foreground mb-3 flex items-center gap-2">
                <BookOpen className="size-4 text-primary" /> Supported Citation Frameworks
              </h4>
              <div className="flex flex-wrap gap-2">
                {currentDetails.citations.map((style) => (
                  <span
                    key={style}
                    className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-xs font-semibold text-foreground/90 border border-border/60"
                  >
                    <CheckCircle2 className="size-3 text-emerald-600 dark:text-emerald-400 mr-1.5" />
                    {style}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm text-foreground mb-3 flex items-center gap-2">
                <School className="size-4 text-primary" /> Regional Compliance Highlights
              </h4>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Native {currentDetails.name} terminology, spelling & academic phrasing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Zero-AI verification with Turnitin and CopyLeaks reports</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Peer-reviewed regional databases (JSTOR, PubMed, Scopus, HeinOnline)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Specific Areas Served / Cities / States Directory */}
          <div className="mt-8 pt-6 border-t border-border/40">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-sm text-foreground flex items-center gap-2">
                <MapPin className="size-4 text-primary" /> Local Areas & Universities Served ({currentDetails.regions.length} Regions/Cities)
              </h4>
              <button
                type="button"
                onClick={() => setShowAllAreas(!showAllAreas)}
                className="text-xs font-semibold text-primary hover:underline"
              >
                {showAllAreas ? "Show Less" : `View All ${currentDetails.regions.length} Areas →`}
              </button>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {(showAllAreas ? currentDetails.regions : currentDetails.regions.slice(0, 18)).map((area) => (
                <span
                  key={area}
                  className="rounded-md bg-muted/60 px-2.5 py-1 text-[11px] font-medium text-foreground/80 border border-border/40 hover:bg-muted transition-colors"
                >
                  {area}
                </span>
              ))}
              {!showAllAreas && currentDetails.regions.length > 18 && (
                <button
                  type="button"
                  onClick={() => setShowAllAreas(true)}
                  className="rounded-md bg-primary/10 px-2.5 py-1 text-[11px] font-bold text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                >
                  +{currentDetails.regions.length - 18} More Areas
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
