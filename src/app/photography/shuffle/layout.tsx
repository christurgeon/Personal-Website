import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shuffled Gallery",
  description: "A randomized selection of photographs from all collections.",
  alternates: { canonical: "/photography/shuffle" },
};

export default function ShuffleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
