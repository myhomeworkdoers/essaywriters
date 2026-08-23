import Link from "next/link";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaqItem } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

interface FAQProps {
  faqs?: FaqItem[];
  keyword?: string;
}

export default function FAQ({ faqs, keyword }: FAQProps) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section id="faqs" className="px-4 py-16 sm:px-6 lg:px-8 border-t border-border/40">
      <div className="mx-auto max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="rounded-full px-3 py-1 text-xs font-semibold text-primary border-primary/20 mb-3">
            <HelpCircle className="size-3.5 mr-1" /> Got Questions?
          </Badge>
          <h2 className="font-bold text-2xl tracking-tight sm:text-4xl text-foreground">
            Frequently Asked Questions About{" "}
            <Link href="/" className="hover:underline underline-offset-4 decoration-primary/50 capitalize">
              {keyword || "Essay Writing"}
            </Link>
          </h2>
          <p className="mt-3 text-muted-foreground text-base sm:text-lg">
            Everything you need to know about safety, Turnitin compliance, payment, and revisions.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion defaultValue={["faq-0"]} className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="rounded-2xl border border-border/70 bg-card px-5 py-1 shadow-xs"
              >
                <AccordionTrigger className="text-left font-semibold text-base sm:text-lg text-foreground hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-4 pt-1">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 text-center text-xs sm:text-sm text-muted-foreground">
            Have a question not listed here? Visit our{" "}
            <Link href="/" className="font-semibold text-primary underline hover:text-foreground">
              home support center
            </Link>{" "}
            for 24/7 live assistance.
          </div>
        </div>
      </div>
    </section>
  );
}
