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
    name: "Credit Cards",
    description: "My go-to credit cards for maximizing rewards, travel perks, and cash back",
    referrals: [
      {
        name: "Capital One Venture X",
        description: "My go-to travel rewards credit card with great points flexibility",
        bonus: "Earn 100,000 bonus miles after spending $10,000 on purchases in the first 6 months",
        href: "https://i.capitalone.com/JrMpDJrTQ",
      },
      {
        name: "REI Co-Op Mastercard",
        description: "Outdoor rewards card - 5% back at REI, 1.5% back everywhere else, no annual fee",
        bonus: "Earn a $100 REI gift card after your first purchase outside of REI within 60 days of account opening",
        href: "https://i.capitalone.com/JjtDtWZgs",
      },
      {
        name: "Chase Freedom Flex",
        description: "No-annual-fee cash back card with rotating 5% bonus categories and solid everyday rewards",
        bonus: "Earn $200 or $300 cash back after spending $500 on purchases in the first 3 months",
        href: "https://www.referyourchasecard.com/18d/CSJO5XQRI3",
      },
      {
        name: "Venmo",
        description: "No-annual-fee card with 3% cash back on all purchases",
        bonus: "Earn $100 cash back after spending $500 on purchases in the first 3 months",
        href: "https://get.venmo.com/7xWaniQM3Zb",
      },
    ],
  },
  {
    name: "Finance",
    description: "Financial tools I use",
    referrals: [
      {
        name: "Charles Schwab",
        description: "One of the reasons I choose Schwab is their debit card has no ATM fees, domestically or internationally",
        bonus: "Get up to $1,000 through this referral depending on your initial funding amount",
        href: "https://www.schwab.com/client-referral?refrid=REFEREUE4TERM",
      },
      {
        name: "SoFi",
        description: "An online bank that offers checking and savings accounts with no account fees or minimum balance requirements",
        bonus:
          "You'll get a $25 bonus when you open a SoFi Checking and Savings account, and either $50 or $300 when you set up eligible direct deposit of $1,000 or more. Terms apply.",
        href: "https://urldefense.com/v3/__https://www.sofi.com/invite/money?gcp=03e69213-cfcd-4cf5-a7ae-c3d01fc8fb4a&isAliasGcp=false__;!!K_TC0FI_KA!vYcVZSr7zEqiiSoYvQp4K-J_Rvr6qNUzUoAgkmOssBToWw3VByPocooO0x5if3pAj3ZK_fyqoLvOl09lAnnbb7mTHEZO$",
      },
    ],
  },
  {
    name: "Lifestyle",
    description: "Apps and tools I use in my everyday life",
    referrals: [
      {
        name: "Beli",
        description: "An app I use to save restaurants, write reviews, share recommendations, and remember where I want to eat",
        href: "https://beliapp.co/IAPVrHgmeLb?utm_source=in__s",
      },
    ],
  },
];

export default function ReferralsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      {/* Header */}
      <header className="animate-fade-in mb-12">
        <h1 className="mb-4 font-serif text-4xl font-medium tracking-tight md:text-5xl">Referrals</h1>
        <p className="text-muted text-lg">Services and products I personally use and recommend.</p>
      </header>
      {/* Categories */}
      <div className="space-y-12">
        {categories.map((category, categoryIndex) => (
          <section key={category.name} className="animate-fade-in" style={{ animationDelay: `${(categoryIndex + 1) * 100}ms`, opacity: 0 }}>
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
                      <h3 className="group-hover:text-accent font-medium transition-colors">{referral.name}</h3>
                      <p className="text-muted mt-1 text-sm">{referral.description}</p>
                      {referral.bonus && <p className="text-accent mt-2 text-sm font-medium">🎁 {referral.bonus}</p>}
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
