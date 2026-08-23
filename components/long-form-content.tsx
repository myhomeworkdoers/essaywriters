import Link from "next/link";
import { BookOpen, CheckCircle2, ListFilter, Sparkles } from "lucide-react";
import { ContentSection } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

interface LongFormContentProps {
  longFormContent?: {
    tableOfContents: { id: string; title: string }[];
    sections: ContentSection[];
  };
  keyword?: string;
}

export default function LongFormContent({ longFormContent, keyword }: LongFormContentProps) {
  if (!longFormContent || !longFormContent.sections || longFormContent.sections.length === 0) {
    return null;
  }

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 border-t border-border/40">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="rounded-full px-3 py-1 text-xs font-semibold text-primary border-primary/20 mb-3">
            <BookOpen className="size-3.5 mr-1" /> In-Depth Academic Guide
          </Badge>
          <h2 className="font-bold text-2xl tracking-tight sm:text-4xl text-foreground">
            Complete Research Guide & Methodology for{" "}
            <Link href="/" className="hover:underline underline-offset-4 decoration-primary/50 capitalize">
              {keyword || "Custom Academic Writing"}
            </Link>
          </h2>
          <p className="mt-3 text-muted-foreground text-base sm:text-lg">
            Essential criteria, Turnitin anti-plagiarism standards, and peer-reviewed sourcing guidelines.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-12">
          {/* Table of Contents Sidebar */}
          {longFormContent.tableOfContents && longFormContent.tableOfContents.length > 0 && (
            <aside className="lg:col-span-4">
              <div className="sticky top-24 rounded-2xl border border-border/70 bg-card p-6 shadow-xs">
                <h3 className="font-bold text-base text-foreground mb-4 flex items-center gap-2">
                  <ListFilter className="size-4 text-primary" /> Table of Contents
                </h3>
                <nav className="space-y-2 text-xs">
                  {longFormContent.tableOfContents.map((item, idx) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block py-1.5 px-2.5 rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground line-clamp-2"
                    >
                      <span className="font-semibold text-primary/70 mr-1.5">{idx + 1}.</span>
                      {item.title}
                    </a>
                  ))}
                </nav>

                <div className="mt-6 pt-4 border-t border-border/40 text-xs text-muted-foreground">
                  Need custom assistance? Explore our{" "}
                  <Link href="/" className="font-semibold text-primary underline hover:text-foreground">
                    home writing service
                  </Link>{" "}
                  for 24/7 support.
                </div>
              </div>
            </aside>
          )}

          {/* Long Form Sections */}
          <div className={longFormContent.tableOfContents ? "lg:col-span-8 space-y-12" : "lg:col-span-12 space-y-12 max-w-4xl mx-auto"}>
            {longFormContent.sections.map((section, index) => (
              <article
                key={section.id || index}
                id={section.id}
                className="scroll-mt-24 rounded-2xl border border-border/60 bg-card p-6 sm:p-8 shadow-xs"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-primary px-2.5 py-0.5 rounded-full bg-primary/10">
                    Section {index + 1}
                  </span>
                </div>

                <h3 className="font-bold text-xl sm:text-2xl text-foreground tracking-tight">
                  {section.heading}
                </h3>

                {section.subheading && (
                  <p className="mt-1.5 text-sm font-medium text-muted-foreground">
                    {section.subheading}
                  </p>
                )}

                {/* Main Content HTML */}
                <div
                  className="mt-6 text-sm sm:text-base leading-relaxed text-foreground/90 prose prose-zinc dark:prose-invert max-w-none [&_a]:text-primary [&_a]:font-semibold [&_a]:underline [&_a]:underline-offset-2 [&_p]:mb-4 [&_table]:my-6 [&_th]:p-3 [&_td]:p-3"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />

                {/* Key Takeaways Box */}
                {section.keyTakeaways && section.keyTakeaways.length > 0 && (
                  <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4 sm:p-5">
                    <h4 className="font-semibold text-xs uppercase tracking-wider text-primary mb-3 flex items-center gap-1.5">
                      <Sparkles className="size-3.5" /> Key Takeaways
                    </h4>
                    <ul className="space-y-2">
                      {section.keyTakeaways.map((takeaway, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/90">
                          <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
