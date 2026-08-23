import Link from "next/link";
import { Check, Clock, DollarSign, Percent } from "lucide-react";
import { PricingMatrixRow, PricingTier } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PricingTableProps {
  pricing?: {
    startingPrice: number;
    discountPercentage: number;
    tiers: PricingTier[];
    matrix: PricingMatrixRow[];
    costDrivers: string[];
  };
  keyword?: string;
}

export default function PricingTable({ pricing, keyword }: PricingTableProps) {
  if (!pricing) return null;

  return (
    <section id="pricing" className="px-4 py-16 sm:px-6 lg:px-8 border-t border-border/40 bg-muted/10">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="rounded-full px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 border-emerald-500/30 bg-emerald-500/10 mb-3">
            <Percent className="size-3 mr-1" /> {pricing.discountPercentage}% New Student Discount Applied
          </Badge>
          <h2 className="font-bold text-2xl tracking-tight sm:text-4xl text-foreground">
            Transparent Pricing for{" "}
            <Link href="/" className="hover:underline underline-offset-4 decoration-primary/50 capitalize">
              {keyword || "Academic Writing"}
            </Link>
          </h2>
          <p className="mt-3 text-muted-foreground text-base sm:text-lg">
            No hidden charges. Starting at <strong className="text-foreground">${pricing.startingPrice} / page</strong> with free title page, bibliography, and Turnitin similarity certification.
          </p>
        </div>

        {/* Pricing Tiers Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pricing.tiers.map((tier, index) => {
            const isPopular = index === 1; // Undergraduate
            return (
              <div
                key={tier.academicLevel}
                className={`relative flex flex-col rounded-2xl border p-6 transition-all ${
                  isPopular
                    ? "border-primary bg-card shadow-lg ring-2 ring-primary/20 scale-[1.02]"
                    : "border-border/70 bg-card/60 shadow-xs hover:border-primary/40"
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-[11px] font-bold tracking-wide text-primary-foreground shadow-xs">
                    MOST POPULAR
                  </div>
                )}

                <div className="mb-4">
                  <h3 className="font-bold text-lg text-foreground">{tier.academicLevel}</h3>
                  <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="size-3.5" /> From {tier.deliveryTime} delivery
                  </div>
                </div>

                <div className="my-4 flex items-baseline gap-2">
                  <span className="font-extrabold text-3xl sm:text-4xl text-foreground">
                    ${tier.pricePerPage}
                  </span>
                  <span className="text-xs text-muted-foreground">/ page</span>
                  {tier.originalPricePerPage && (
                    <span className="text-xs text-muted-foreground line-through">
                      ${tier.originalPricePerPage}
                    </span>
                  )}
                </div>

                <ul className="my-6 space-y-2.5 text-xs text-muted-foreground">
                  <li className="flex items-center gap-2 text-foreground font-medium">
                    <Check className="size-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    100% Human-Written Research
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    Free Turnitin Similarity Report
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    Free APA / MLA / Harvard Formatting
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    14-30 Days Free Revisions
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    Direct Writer Messaging
                  </li>
                </ul>

                <div className="mt-auto pt-2">
                  <Link
                    href="/"
                    className={cn(
                      buttonVariants({
                        variant: isPopular ? "default" : "secondary",
                      }),
                      "w-full rounded-xl font-semibold"
                    )}
                  >
                    Order {tier.academicLevel}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Deadline Price Matrix Table */}
        {pricing.matrix && pricing.matrix.length > 0 && (
          <div className="mt-14 rounded-2xl border border-border/80 bg-card p-6 shadow-xs overflow-hidden">
            <h3 className="font-bold text-lg sm:text-xl text-foreground mb-2">
              Turnaround Urgency Rate Matrix ($ / page)
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-6">
              Standard double-spaced academic page (275 words). All rates include free bibliography and title page.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border/80 bg-muted/40 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    <th className="p-3.5">Academic Level</th>
                    <th className="p-3.5">14+ Days (Value)</th>
                    <th className="p-3.5">7 Days</th>
                    <th className="p-3.5">3 Days</th>
                    <th className="p-3.5">24 Hours</th>
                    <th className="p-3.5">6 Hours (Emergency)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {pricing.matrix.map((row) => (
                    <tr key={row.academicLevel} className="hover:bg-muted/20 transition-colors">
                      <td className="p-3.5 font-semibold text-foreground">{row.academicLevel}</td>
                      <td className="p-3.5 font-bold text-emerald-600 dark:text-emerald-400">${row.deadline14Days.toFixed(2)}</td>
                      <td className="p-3.5 text-foreground">${row.deadline7Days.toFixed(2)}</td>
                      <td className="p-3.5 text-foreground">${row.deadline3Days.toFixed(2)}</td>
                      <td className="p-3.5 text-foreground">${row.deadline24Hours.toFixed(2)}</td>
                      <td className="p-3.5 font-semibold text-primary">${row.deadline6Hours.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Cost Drivers */}
        {pricing.costDrivers && pricing.costDrivers.length > 0 && (
          <div className="mt-8 rounded-xl border border-border/60 bg-muted/20 p-5">
            <h4 className="font-semibold text-sm text-foreground mb-2 flex items-center gap-1.5">
              <DollarSign className="size-4 text-primary" /> Key Cost Determinants
            </h4>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 text-xs text-muted-foreground">
              {pricing.costDrivers.map((driver, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-primary shrink-0" />
                  {driver}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
