import Link from "next/link";
import { CheckCircle2, FileText, Sparkles, UserCheck, ShieldCheck, Download } from "lucide-react";
import { HowItWorksStep, WriterVettingStep } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

interface TimelineProps {
  steps?: HowItWorksStep[];
  vettingSteps?: WriterVettingStep[];
  keyword?: string;
}

const stepIcons = [FileText, UserCheck, Sparkles, Download];

export default function Timeline({ steps, vettingSteps, keyword }: TimelineProps) {
  if (!steps || steps.length === 0) return null;

  return (
    <section id="how-it-works" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="rounded-full px-3 py-1 text-xs font-semibold text-primary border-primary/20 mb-3">
            Simple 4-Step Process
          </Badge>
          <h2 className="font-bold text-2xl tracking-tight sm:text-4xl text-foreground">
            How Our{" "}
            <Link href="/" className="hover:underline underline-offset-4 decoration-primary/50 capitalize">
              {keyword || "Essay Writing"}
            </Link>{" "}
            Process Works
          </h2>
          <p className="mt-3 text-muted-foreground text-base sm:text-lg">
            From initial syllabus submission to Turnitin-verified paper download in four transparent steps.
          </p>
        </div>

        {/* Timeline Line & Steps */}
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute top-6 bottom-6 left-6 sm:left-8 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-emerald-500" />

          <div className="space-y-8 sm:space-y-10">
            {steps.map((stepItem, index) => {
              const StepIcon = stepIcons[index % stepIcons.length] || CheckCircle2;
              return (
                <div key={index} className="relative flex items-start gap-4 sm:gap-6 group">
                  {/* Step Icon / Dot */}
                  <div className="relative z-10 flex size-12 sm:size-16 shrink-0 items-center justify-center rounded-2xl border-2 border-primary bg-background shadow-md transition-transform group-hover:scale-105">
                    <StepIcon className="size-6 sm:size-7 text-primary" />
                    <span className="absolute -top-2 -right-2 flex size-5 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
                      {stepItem.step || index + 1}
                    </span>
                  </div>

                  {/* Step Card Content */}
                  <div className="flex-1 rounded-2xl border border-border/70 bg-card p-5 sm:p-6 shadow-xs transition-all group-hover:border-primary/40 group-hover:shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-bold text-lg sm:text-xl text-foreground">
                        {stepItem.title}
                      </h3>
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Step 0{stepItem.step || index + 1}
                      </span>
                    </div>
                    <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {stepItem.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Writer Vetting Timeline (Extra Value) */}
        {vettingSteps && vettingSteps.length > 0 && (
          <div className="mt-16 rounded-2xl border border-border/80 bg-muted/30 p-6 sm:p-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
                <ShieldCheck className="size-4" /> Top 2% Writer Acceptance Rate
              </span>
              <h3 className="font-bold text-xl sm:text-2xl text-foreground">
                Our 5-Stage Scholar Vetting Protocol
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Before any academic handles your {keyword ? <Link href="/" className="underline hover:text-foreground">{keyword}</Link> : "orders"}, they undergo rigorous background and timed subject testing.
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {vettingSteps.map((vStep) => (
                <div key={vStep.stepNumber} className="rounded-xl border border-border/60 bg-card p-4">
                  <div className="flex items-center gap-2 font-semibold text-sm text-primary mb-1.5">
                    <span className="flex size-5 items-center justify-center rounded-full bg-primary/10 text-xs">
                      {vStep.stepNumber}
                    </span>
                    {vStep.title}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {vStep.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
