import { siteConfig } from "@/lib/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referrals",
  description: `Services and products ${siteConfig.name} personally uses and recommends`,
};

interface Referral {
  name: string;
  description: string;
  bonus?: string;
  href: string;
}

interface Category {
  name: string;
  description: string;
  referrals: Referral[];
}

const categories: Category[] = [
  {
    name: "Finance",
    description: "Credit cards, banks, and investing apps I use",
    referrals: [
      {
        name: "Capital One Venture X",
        description: "My go-to travel rewards credit card with great points flexibility",
        bonus: "Earn XXX bonus points after XXX spend in 3 months",
        href: "https://example.com/capital-one",
      },
      {
        name: "Robinhood",
        description: "Blah blah blah",
        bonus: "Blah blah blah",
        href: "https://example.com/capital-one",
      },
    ],
  },
  {
    name: "Travel",
    description: "Airlines, hostels, and travel services I recommend",
    referrals: [
      {
        name: "Marriott Bonvoy",
        description: "Something something",
        bonus: "Something blah",
        href: "https://example.com/capital-one",
      },
    ],
  },
];

export default function ReferralsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      {/* Header */}
      <header className="animate-fade-in mb-12">
        <h1 className="mb-4 font-serif text-4xl font-medium tracking-tight md:text-5xl">
          Referrals
        </h1>
        <p className="text-muted text-lg">
          Services and products I personally use and recommend. Use these links and we both benefit.
        </p>
      </header>
      {/* Categories */}
      <div className="space-y-12">
        {categories.map((category, categoryIndex) => (
          <section
            key={category.name}
            className="animate-fade-in"
            style={{ animationDelay: `${(categoryIndex + 1) * 100}ms`, opacity: 0 }}
          >
            {/* Category Header */}
            <div className="mb-6">
              <h2 className="font-serif text-2xl font-medium tracking-tight">{category.name}</h2>
              <p className="text-muted mt-1">{category.description}</p>
            </div>

            {/* Referral Cards */}
            <div className="space-y-4">
              {category.referrals.map((referral, index) => (
                <a
                  key={referral.name}
                  href={referral.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card border-border hover:border-accent/50 hover:shadow-accent/5 group block rounded-xl border p-5 transition-all duration-300 hover:shadow-lg"
                  style={{
                    animationDelay: `${(categoryIndex + 1) * 100 + (index + 1) * 50}ms`,
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="group-hover:text-accent font-medium transition-colors">
                        {referral.name}
                      </h3>
                      <p className="text-muted mt-1 text-sm">{referral.description}</p>
                      {referral.bonus && (
                        <p className="text-accent mt-2 text-sm font-medium">🎁 {referral.bonus}</p>
                      )}
                    </div>
                    <svg
                      className="text-muted group-hover:text-accent mt-1 h-4 w-4 flex-shrink-0 transition-all group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Footer Note */}
      <p
        className="text-muted animate-fade-in mt-16 text-center text-sm"
        style={{ animationDelay: `${(categories.length + 1) * 150}ms`, opacity: 0 }}
      >
        Have questions about any of these? Feel free to reach out.
      </p>
    </div>
  );
}
