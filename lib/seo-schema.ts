import { KeywordData } from "./types";

// ==========================================
// COMPREHENSIVE MULTI-COUNTRY AREAS SERVED
// ==========================================

export const US_AREAS_SERVED = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming", "District of Columbia", "Puerto Rico", "Guam", "U.S. Virgin Islands", "American Samoa"
];

export const UK_AREAS_SERVED = [
  "London", "Manchester", "Birmingham", "Edinburgh", "Glasgow", "Oxford", "Cambridge",
  "Bristol", "Leeds", "Liverpool", "Sheffield", "Newcastle upon Tyne", "Cardiff", "Belfast",
  "Nottingham", "Southampton", "Exeter", "York", "Leicester", "Coventry", "Brighton",
  "Aberdeen", "Dundee", "Norwich", "Plymouth", "Bath", "Durham", "St Andrews", "Warwick",
  "Reading", "Hull", "Swansea", "Portsmouth", "Bournemouth", "Derby", "Stoke-on-Trent"
];

export const CANADA_AREAS_SERVED = [
  // Provinces & Territories
  "Ontario", "Quebec", "British Columbia", "Alberta", "Manitoba", "Saskatchewan",
  "Nova Scotia", "New Brunswick", "Newfoundland and Labrador", "Prince Edward Island",
  "Northwest Territories", "Yukon", "Nunavut",
  // Major Academic Cities
  "Toronto", "Montreal", "Vancouver", "Calgary", "Edmonton", "Ottawa", "Winnipeg",
  "Quebec City", "Hamilton", "Kitchener-Waterloo", "London (ON)", "Halifax", "Victoria",
  "Saskatoon", "Regina", "St. John's", "Kingston", "Guelph", "Windsor"
];

export const AUSTRALIA_AREAS_SERVED = [
  // States & Territories
  "New South Wales", "Victoria", "Queensland", "Western Australia", "South Australia",
  "Tasmania", "Australian Capital Territory", "Northern Territory",
  // Major Academic Cities
  "Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Gold Coast", "Canberra",
  "Newcastle", "Wollongong", "Hobart", "Geelong", "Townsville", "Cairns", "Darwin",
  "Toowoomba", "Ballarat", "Bendigo", "Launceston"
];

// Combine all areas formatted as Schema.org AdministrativeArea / City objects
export const ALL_AREAS_SERVED_SCHEMA = [
  {
    "@type": "Country",
    "name": "United States",
    "alternateName": "USA"
  },
  {
    "@type": "Country",
    "name": "United Kingdom",
    "alternateName": "UK"
  },
  {
    "@type": "Country",
    "name": "Canada",
    "alternateName": "CA"
  },
  {
    "@type": "Country",
    "name": "Australia",
    "alternateName": "AU"
  },
  // All 54 US States & Territories
  ...US_AREAS_SERVED.map((state) => ({
    "@type": "AdministrativeArea",
    "name": state,
    "containedInPlace": {
      "@type": "Country",
      "name": "United States"
    }
  })),
  // All Major UK Cities & Educational Hubs
  ...UK_AREAS_SERVED.map((city) => ({
    "@type": "City",
    "name": city,
    "containedInPlace": {
      "@type": "Country",
      "name": "United Kingdom"
    }
  })),
  // Canadian Provinces & Cities
  ...CANADA_AREAS_SERVED.map((area) => ({
    "@type": "AdministrativeArea",
    "name": area,
    "containedInPlace": {
      "@type": "Country",
      "name": "Canada"
    }
  })),
  // Australian States & Cities
  ...AUSTRALIA_AREAS_SERVED.map((area) => ({
    "@type": "AdministrativeArea",
    "name": area,
    "containedInPlace": {
      "@type": "Country",
      "name": "Australia"
    }
  }))
];

// ==========================================
// CORE BUSINESS & HQ ENTITY (LOS ANGELES, USA)
// ==========================================

export const HEADQUARTERS_INFO = {
  name: "EssayWriters",
  legalName: "EssayWriters Academic Research & Model Writing Services LLC",
  telephone: "+1 (800) 932-8149",
  email: "support@essaywriters.org",
  address: {
    "@type": "PostalAddress",
    streetAddress: "633 W 5th St, Floor 28",
    addressLocality: "Los Angeles",
    addressRegion: "CA",
    postalCode: "90071",
    addressCountry: "US"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.0518,
    longitude: -118.2548
  },
  openingHours: "Mo-Su 00:00-24:00",
  priceRange: "$$"
};

// ==========================================
// HOMEPAGE SCHEMA BUILDER
// ==========================================

export function generateHomepageJsonLd(baseUrl: string = "https://essaywriters.org") {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "url": baseUrl,
        "name": "EssayWriters",
        "description": "Premier Zero-AI academic research, editing, and custom model essay writing platform.",
        "inLanguage": ["en-US", "en-GB", "en-CA", "en-AU"],
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${baseUrl}/{q}`,
          "query-input": "required name=q"
        }
      },
      {
        "@type": ["LocalBusiness", "EducationalOrganization", "ProfessionalService"],
        "@id": `${baseUrl}/#organization`,
        "name": HEADQUARTERS_INFO.name,
        "legalName": HEADQUARTERS_INFO.legalName,
        "url": baseUrl,
        "logo": `${baseUrl}/favicon.ico`,
        "image": `${baseUrl}/favicon.ico`,
        "telephone": HEADQUARTERS_INFO.telephone,
        "email": HEADQUARTERS_INFO.email,
        "priceRange": HEADQUARTERS_INFO.priceRange,
        "address": HEADQUARTERS_INFO.address,
        "geo": HEADQUARTERS_INFO.geo,
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          }
        ],
        "areaServed": ALL_AREAS_SERVED_SCHEMA,
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.94",
          "bestRating": "5.0",
          "worstRating": "1.0",
          "ratingCount": "18200",
          "reviewCount": "18200"
        },
        "knowsAbout": [
          "Academic Essay Writing",
          "Research Paper Methodology",
          "Turnitin Plagiarism Verification",
          "Zero-AI Human Authorship Certification",
          "APA 7th Edition",
          "MLA 9th Edition",
          "Chicago & Turabian 17th Edition",
          "Harvard Referencing Style (UK)",
          "AGLC4 Australian Guide to Legal Citations",
          "OSCOLA Oxford Standard for Citation of Legal Authorities"
        ]
      }
    ]
  };
}

// ==========================================
// DYNAMIC KEYWORD PAGE SCHEMA BUILDER
// ==========================================

export function generateKeywordPageJsonLd(data: KeywordData, baseUrl: string = "https://essaywriters.org") {
  const pageUrl = `${baseUrl}/${data.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "url": baseUrl,
        "name": "EssayWriters"
      },
      {
        "@type": ["LocalBusiness", "EducationalOrganization", "ProfessionalService"],
        "@id": `${baseUrl}/#organization`,
        "name": HEADQUARTERS_INFO.name,
        "legalName": HEADQUARTERS_INFO.legalName,
        "url": baseUrl,
        "logo": `${baseUrl}/favicon.ico`,
        "telephone": HEADQUARTERS_INFO.telephone,
        "email": HEADQUARTERS_INFO.email,
        "address": HEADQUARTERS_INFO.address,
        "geo": HEADQUARTERS_INFO.geo,
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          }
        ],
        "areaServed": ALL_AREAS_SERVED_SCHEMA
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}/#service`,
        "name": data.title,
        "serviceType": "Academic Writing & Research Service",
        "description": data.metaDescription,
        "url": pageUrl,
        "provider": {
          "@id": `${baseUrl}/#organization`
        },
        "areaServed": ALL_AREAS_SERVED_SCHEMA,
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": `Pricing Tiers for ${data.keyword}`,
          "itemListElement": data.pricing.tiers.map((tier, idx) => ({
            "@type": "Offer",
            "position": idx + 1,
            "itemOffered": {
              "@type": "Service",
              "name": `${tier.academicLevel} Level - ${data.keyword}`,
              "description": `Custom ${tier.academicLevel} academic research and writing tailored to US, UK, CA, and AU university guidelines with a ${tier.deliveryTime} turnaround.`
            },
            "price": tier.pricePerPage.toFixed(2),
            "priceCurrency": "USD",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": tier.pricePerPage.toFixed(2),
              "priceCurrency": "USD",
              "unitCode": "PAGE",
              "unitText": "Per 275-word Academic Page"
            },
            "availability": "https://schema.org/InStock",
            "validFrom": "2026-01-01"
          }))
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.94",
          "bestRating": "5.0",
          "worstRating": "1.0",
          "ratingCount": "18200",
          "reviewCount": "18200"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}/#faq`,
        "mainEntity": data.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": baseUrl
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": data.keyword,
            "item": pageUrl
          }
        ]
      }
    ]
  };
}
