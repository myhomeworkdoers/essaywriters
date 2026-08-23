export interface FeatureItem {
  icon?: string;
  title: string;
  description: string;
}

export interface ReviewItem {
  author: string;
  rating: number;
  date: string;
  verified: boolean;
  paperType: string;
  academicLevel: string;
  comment: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
}

export interface PricingTier {
  academicLevel: string;
  pricePerPage: number;
  originalPricePerPage: number;
  deliveryTime: string;
}

export interface StatItem {
  value: string;
  label: string;
  description?: string;
}

export interface ContentSection {
  id: string;
  heading: string;
  subheading?: string;
  content: string; // Markdown or HTML rich content with <a> links to internal routes
  keyTakeaways?: string[];
}

export interface RegionalStandard {
  country: string;
  countryCode: 'US' | 'UK' | 'AU' | 'CA';
  title: string;
  description: string;
  citationStyles: string[];
  gradingStandards: string;
  universityRequirements: string;
}

export interface PricingMatrixRow {
  academicLevel: string;
  deadline14Days: number;
  deadline7Days: number;
  deadline3Days: number;
  deadline24Hours: number;
  deadline6Hours: number;
}

export interface WriterVettingStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface ScholarlySource {
  title: string;
  type: string;
  description: string;
  citationUrl?: string;
}

export interface RelatedKeywordLink {
  keyword: string;
  slug: string;
  anchorText: string;
  description: string;
}

export interface KeywordData {
  slug: string;
  keyword: string;
  title: string;
  metaDescription: string;
  h1: string;
  subheading: string;
  badge: string;
  wordCount: number;
  heroCta: {
    primaryText: string;
    secondaryText: string;
  };
  stats: StatItem[];
  features: FeatureItem[];
  pricing: {
    startingPrice: number;
    discountPercentage: number;
    tiers: PricingTier[];
    matrix: PricingMatrixRow[];
    costDrivers: string[];
  };
  howItWorks: HowItWorksStep[];
  writerVettingProcess: WriterVettingStep[];
  noAiGuarantee: {
    title: string;
    statement: string;
    pillars: {
      title: string;
      description: string;
    }[];
    verificationWorkflow: string[];
  };
  regionalStandards: RegionalStandard[];
  longFormContent: {
    tableOfContents: { id: string; title: string }[];
    sections: ContentSection[];
  };
  scholarlySources: ScholarlySource[];
  relatedKeywords: RelatedKeywordLink[];
  reviews: ReviewItem[];
  faqs: FaqItem[];
  guarantees: string[];
  paperTypesOffered: string[];
}
