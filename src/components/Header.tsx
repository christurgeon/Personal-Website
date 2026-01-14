"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/config";
import { SunIcon, MoonIcon } from "@/components/Icons";

export function Header() {
  const pathname = usePathname();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by only rendering theme toggle after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className="bg-background/80 border-border sticky top-0 z-50 border-b backdrop-blur-md">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link href="/" className="hover:text-accent hidden font-serif text-xl font-medium tracking-tight transition-colors md:block">
          {siteConfig.name}
        </Link>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {siteConfig.nav.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`link-underline text-sm transition-colors ${isActive ? "text-accent" : "text-muted hover:text-foreground"}`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            onClick={toggleTheme}
            className="text-muted hover:text-foreground hover:bg-card rounded-lg p-2 transition-colors"
            aria-label={mounted && resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {mounted ? resolvedTheme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" /> : <div className="h-5 w-5" />}
          </button>
        </div>
      </nav>
    </header>
  );
}
