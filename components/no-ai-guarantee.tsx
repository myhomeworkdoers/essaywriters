import Link from "next/link";
import { CheckCircle, FileCheck, Shield, Sparkles, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface NoAiGuaranteeProps {
  noAiGuarantee?: {
    title: string;
    statement: string;
    pillars: {
      title: string;
      description: string;
    }[];
    verificationWorkflow: string[];
  };
  keyword?: string;
}

export default function NoAiGuarantee({ noAiGuarantee, keyword }: NoAiGuaranteeProps) {
  if (!noAiGuarantee) return null;

  return (
    <section id="zero-ai-guarantee" className="px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-emerald-950/5 to-background border-t border-border/40">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="rounded-full px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 border-emerald-500/30 bg-emerald-500/10 mb-3">
            <Shield className="size-3.5 mr-1" /> Turnitin & CopyLeaks Certified Safe
          </Badge>
          <h2 className="font-bold text-2xl tracking-tight sm:text-4xl text-foreground">
            {noAiGuarantee.title}
          </h2>
          <p className="mt-3 text-muted-foreground text-base sm:text-lg">
            {noAiGuarantee.statement}{" "}
            <Link href="/" className="font-medium text-foreground underline hover:decoration-primary">
              Learn how our human writers handle {keyword || "custom academic papers"} with zero AI.
            </Link>
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid gap-6 sm:grid-cols-3">
          {noAiGuarantee.pillars.map((pillar, index) => (
            <div
              key={index}
              className="flex flex-col rounded-2xl border border-emerald-500/20 bg-card p-6 shadow-xs relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-full pointer-events-none" />
              <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-4">
                <Sparkles className="size-5" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Verification Workflow */}
        <div className="mt-12 rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-xs">
          <h3 className="font-bold text-lg sm:text-xl text-foreground mb-4 flex items-center gap-2">
            <FileCheck className="size-5 text-emerald-600 dark:text-emerald-400" />
            Mandatory 4-Tier Verification Workflow Before Release
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {noAiGuarantee.verificationWorkflow.map((step, idx) => (
              <div key={idx} className="flex items-start gap-3 rounded-xl border border-border/60 bg-muted/20 p-4">
                <span className="flex size-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-bold shrink-0">
                  {idx + 1}
                </span>
                <p className="text-xs sm:text-sm text-foreground/90 leading-snug">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
