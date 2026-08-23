import Link from "next/link";
import {
  Award,
  BookOpen,
  CheckCircle,
  Clock,
  FileCheck,
  Globe,
  GraduationCap,
  Lock,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { FeatureItem } from "@/lib/types";

interface FeaturesProps {
  features?: FeatureItem[];
  keyword?: string;
}

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Clock,
  GraduationCap,
  Globe,
  Lock,
  RefreshCw,
  FileCheck,
  BookOpen,
  Award,
  Zap,
  CheckCircle,
  Sparkles,
};

export default function Features({ features, keyword }: FeaturesProps) {
  if (!features || features.length === 0) return null;

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 border-t border-border/40 bg-muted/20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary border border-primary/20 mb-3">
            <Award className="size-3.5" />
            <span>Institutional Quality Standards</span>
          </div>
          <h2 className="font-bold text-2xl tracking-tight sm:text-4xl text-foreground">
            Why Students Trust Our{" "}
            <Link href="/" className="hover:underline underline-offset-4 decoration-primary/50 capitalize">
              {keyword || "Academic Writing"}
            </Link>{" "}
            Services
          </h2>
          <p className="mt-3 text-muted-foreground text-base sm:text-lg">
            Every paper is backed by academic rigor, absolute confidentiality, and our unconditional Zero-AI pledge.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const IconComponent = (feature.icon && iconMap[feature.icon]) ? iconMap[feature.icon] : ShieldCheck;
            return (
              <div
                key={index}
                className="group relative flex flex-col rounded-2xl border border-border/70 bg-card p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
              >
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <IconComponent className="size-6" />
                </div>
                <h3 className="font-semibold text-lg text-foreground tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
