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
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link 
          href="/" 
          className="font-serif text-xl font-medium tracking-tight hover:text-accent transition-colors"
        >
          {siteConfig.name}
        </Link>
        
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {siteConfig.nav.map((item) => {
              const isActive = item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-sm transition-colors link-underline ${
                      isActive
                        ? "text-accent"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            ))}
          </ul>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-card transition-colors"
            aria-label={mounted && resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {mounted ? (
              resolvedTheme === "dark" ? (
                <SunIcon className="w-5 h-5" />
              ) : (
                <MoonIcon className="w-5 h-5" />
              )
            ) : (
              <div className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}

