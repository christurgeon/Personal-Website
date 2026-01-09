import { ThemeProvider } from "@/components/ThemeProvider";

export default function LinksLayout({ children }: { children: React.ReactNode }) {
  // Standalone layout with header/footer
  return <ThemeProvider>{children}</ThemeProvider>;
}
