import Link from "next/link";
import {
  GraduationCap,
  Lock,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Globe,
  Clock,
  Sparkles,
} from "lucide-react";
import {
  HEADQUARTERS_INFO,
  US_AREAS_SERVED,
  UK_AREAS_SERVED,
  CANADA_AREAS_SERVED,
  AUSTRALIA_AREAS_SERVED,
} from "@/lib/seo-schema";

interface FooterProps {
  keyword?: string;
  slug?: string;
}

export default function Footer({ keyword, slug }: FooterProps) {
  return (
    <footer className="border-t border-border/40 bg-card text-card-foreground">
      {/* Top Location & Local SEO Highlights Bar */}
      <div className="border-b border-border/40 bg-muted/20 py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Headquarters Card */}
            <div className="flex items-start gap-3 rounded-2xl border border-border/60 bg-card p-4 shadow-xs">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="size-5" />
              </div>
              <div className="space-y-1">
                <span className="font-bold text-xs uppercase tracking-wider text-primary block">
                  Global Headquarters (USA)
                </span>
                <p className="font-bold text-sm text-foreground">
                  {HEADQUARTERS_INFO.name} LLC
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {HEADQUARTERS_INFO.address.streetAddress}, {HEADQUARTERS_INFO.address.addressLocality}, {HEADQUARTERS_INFO.address.addressRegion} {HEADQUARTERS_INFO.address.postalCode}, United States
                </p>
              </div>
            </div>

            {/* Direct Support Card */}
            <div className="flex items-start gap-3 rounded-2xl border border-border/60 bg-card p-4 shadow-xs">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <Phone className="size-5" />
              </div>
              <div className="space-y-1">
                <span className="font-bold text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block">
                  24/7 Scholar Support
                </span>
                <p className="font-bold text-sm text-foreground">
                  {HEADQUARTERS_INFO.telephone}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed flex items-center gap-1.5">
                  <Mail className="size-3.5 text-muted-foreground" /> {HEADQUARTERS_INFO.email}
                </p>
              </div>
            </div>

            {/* Turnaround & Operational Hours */}
            <div className="flex items-start gap-3 rounded-2xl border border-border/60 bg-card p-4 shadow-xs">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                <Clock className="size-5" />
              </div>
              <div className="space-y-1">
                <span className="font-bold text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400 block">
                  24/7 Operations & Direct Chat
                </span>
                <p className="font-bold text-sm text-foreground">
                  Open 24 Hours • 365 Days
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Fastest delivery: 3 hours • Zero-AI Certified
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Col */}
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg text-foreground">
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <GraduationCap className="size-5" />
              </div>
              <span>Essay<span className="text-primary font-black">Writers</span></span>
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Premier academic research, editing, and custom model essay writing platform headquartered in Los Angeles, California. Zero AI generation, 100% Turnitin-safe original scholarship by vetted Master&apos;s and PhD subject specialists.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
              <ShieldCheck className="size-4" /> 256-Bit SSL Encrypted & Confidential
            </div>
          </div>

          {/* Academic Services Links */}
          <div>
            <h4 className="font-bold text-sm text-foreground mb-3">Academic Writing Services</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Custom Essay Writing
                </Link>
              </li>
              <li>
                <Link href="/pay-someone-to-write-your-research-paper" className="hover:text-foreground transition-colors">
                  Research Paper Assistance
                </Link>
              </li>
              <li>
                <Link href="/pay-someone-to-write-my-term-paper" className="hover:text-foreground transition-colors">
                  Term Paper Support
                </Link>
              </li>
              <li>
                <Link href="/pay-someone-to-write-my-thesis" className="hover:text-foreground transition-colors">
                  Thesis & Dissertation Writing
                </Link>
              </li>
              <li>
                <Link href="/pay-someone-to-proofread-my-paper" className="hover:text-foreground transition-colors">
                  Academic Proofreading & Editing
                </Link>
              </li>
              <li>
                <Link href="/pay-someone-to-write-scholarship-essay" className="hover:text-foreground transition-colors">
                  Scholarship & Admissions Essays
                </Link>
              </li>
            </ul>
          </div>

          {/* Global Formatting & Legal Frameworks */}
          <div>
            <h4 className="font-bold text-sm text-foreground mb-3">Formatting & Citations</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>APA 7th Edition (US, CA, AU)</li>
              <li>MLA 9th Edition (Humanities)</li>
              <li>Chicago / Turabian 17th Edition</li>
              <li>Harvard Referencing (UK & Commonwealth)</li>
              <li>OSCOLA (Oxford Legal Citation)</li>
              <li>AGLC4 (Australian Legal Citation)</li>
              <li>IEEE / CSE (Engineering & Sciences)</li>
            </ul>
          </div>

          {/* Ethical Use & Mission */}
          <div>
            <h4 className="font-bold text-sm text-foreground mb-3">Ethical Model Paper Use</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              All custom papers delivered by EssayWriters are reference models engineered for educational guidance, research assistance, and citation benchmarking in compliance with university academic integrity codes.
            </p>
            <div className="mt-4 pt-4 border-t border-border/40 text-xs">
              <Link href="/" className="font-semibold text-primary underline hover:text-foreground">
                Visit EssayWriters Main Hub →
              </Link>
            </div>
          </div>
        </div>

        {/* Global Areas Served Local SEO Tag Cloud */}
        <div className="mt-12 pt-8 border-t border-border/40 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground">
            <Globe className="size-3.5 text-primary" /> International & Local SEO Areas Served
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-xs">
            {/* US States */}
            <div className="space-y-1">
              <span className="font-bold text-foreground">United States (All 54 States & Territories):</span>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                California, New York, Texas, Florida, Illinois, Pennsylvania, Ohio, Georgia, North Carolina, Michigan, Washington, Massachusetts, Virginia, and all 50 US States + DC, PR, Guam.
              </p>
            </div>

            {/* UK Cities */}
            <div className="space-y-1">
              <span className="font-bold text-foreground">United Kingdom (All Cities):</span>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                London, Oxford, Cambridge, Manchester, Edinburgh, Birmingham, Glasgow, Bristol, Leeds, Liverpool, Sheffield, Newcastle, Cardiff, Belfast, Nottingham, Southampton.
              </p>
            </div>

            {/* Canada Provinces & Cities */}
            <div className="space-y-1">
              <span className="font-bold text-foreground">Canada (All Provinces & Hubs):</span>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                Ontario, Quebec, British Columbia, Alberta, Manitoba, Saskatchewan, Nova Scotia, Toronto, Montreal, Vancouver, Calgary, Ottawa, Edmonton, Winnipeg, Halifax.
              </p>
            </div>

            {/* Australia States & Cities */}
            <div className="space-y-1">
              <span className="font-bold text-foreground">Australia (All States & Cities):</span>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                New South Wales, Victoria, Queensland, Western Australia, South Australia, ACT, Tasmania, Sydney, Melbourne, Brisbane, Perth, Adelaide, Canberra, Gold Coast.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright & Policy Links */}
        <div className="mt-8 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} EssayWriters LLC (Los Angeles, CA). All rights reserved. Zero-AI Certified.</p>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span>•</span>
            <Link href="/" className="hover:underline">Privacy Policy</Link>
            <span>•</span>
            <Link href="/" className="hover:underline">Terms of Service</Link>
            <span>•</span>
            <Link href="/" className="hover:underline">Academic Integrity Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
