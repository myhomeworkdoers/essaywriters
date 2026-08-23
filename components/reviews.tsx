import Link from "next/link";
import { CheckCircle2, Star } from "lucide-react";
import { ReviewItem } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

interface ReviewsProps {
  reviews?: ReviewItem[];
  keyword?: string;
}

export default function Reviews({ reviews, keyword }: ReviewsProps) {
  if (!reviews || reviews.length === 0) return null;

  return (
    <section id="reviews" className="px-4 py-16 sm:px-6 lg:px-8 border-t border-border/40 bg-muted/10">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="rounded-full px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 border-emerald-500/30 bg-emerald-500/10 mb-3">
            <Star className="size-3.5 mr-1 fill-amber-400 text-amber-400" /> 4.94 / 5.0 Average Student Rating
          </Badge>
          <h2 className="font-bold text-2xl tracking-tight sm:text-4xl text-foreground">
            Verified Reviews from Students Who Used Our{" "}
            <Link href="/" className="hover:underline underline-offset-4 decoration-primary/50 capitalize">
              {keyword || "Essay Writing"}
            </Link>{" "}
            Services
          </h2>
          <p className="mt-3 text-muted-foreground text-base sm:text-lg">
            Real feedback from undergraduate and postgraduate scholars across top universities.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-2xl border border-border/70 bg-card p-6 shadow-xs transition-all hover:border-primary/40 hover:shadow-md"
            >
              <div>
                {/* Rating stars & verified status */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`size-4 ${
                          i < Math.floor(review.rating)
                            ? "fill-amber-400 text-amber-400"
                            : "text-muted-foreground/30"
                        }`}
                      />
                    ))}
                    <span className="ml-1 font-bold text-xs text-foreground">
                      {review.rating.toFixed(1)}
                    </span>
                  </div>

                  {review.verified && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                      <CheckCircle2 className="size-3" /> Verified Order
                    </span>
                  )}
                </div>

                <p className="text-sm text-foreground/90 italic leading-relaxed mb-4">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-border/40 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-foreground block">{review.author}</span>
                  <span className="text-muted-foreground">{review.paperType} • {review.academicLevel}</span>
                </div>
                <span className="text-muted-foreground text-[11px]">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
