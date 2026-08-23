import Link from "next/link";
import { ArrowRight, Compass, Link2 } from "lucide-react";
import { RelatedKeywordLink } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

interface RelatedKeywordsProps {
  relatedKeywords?: RelatedKeywordLink[];
  currentKeyword?: string;
}

export default function RelatedKeywords({ relatedKeywords, currentKeyword }: RelatedKeywordsProps) {
  if (!relatedKeywords || relatedKeywords.length === 0) return null;

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 border-t border-border/40 bg-muted/20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <Badge variant="outline" className="rounded-full px-3 py-1 text-xs font-semibold text-primary border-primary/20 mb-3">
            <Compass className="size-3.5 mr-1" /> Related Academic Topics
          </Badge>
          <h2 className="font-bold text-2xl tracking-tight sm:text-3xl text-foreground">
            Explore Related Academic Research & Writing Services
          </h2>
          <p className="mt-2 text-muted-foreground text-sm sm:text-base">
            Discover comprehensive guides, pricing tables, and expert assistance across specialized disciplines.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {relatedKeywords.map((item, index) => (
            <Link
              key={index}
              href={`/${item.slug}`}
              className="group flex flex-col justify-between rounded-2xl border border-border/70 bg-card p-5 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-bold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
                    <Link2 className="size-3.5 text-primary/70 shrink-0" />
                    {item.anchorText || item.keyword}
                  </span>
                  <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold text-primary hover:bg-primary/10 transition-colors"
          >
            ← Return to Main EssayWriters Platform (Home)
          </Link>
        </div>
      </div>
    </section>
  );
}
