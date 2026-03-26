"use client";

import { useState, useCallback } from "react";
import { XTwitterIcon, LinkedInIcon } from "@/components/Icons";

interface ShareButtonsProps {
  title: string;
  slug: string;
}

export function ShareButtons({ title, slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const url = `https://christurgeon.com/blog/${slug}`;

  const copyLink = useCallback(async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [url]);

  const shareToX = () => {
    window.open(
      `https://x.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const shareToLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className="border-border mt-16 border-t pt-8">
      <div className="flex items-center gap-1">
          <button
            onClick={copyLink}
            className="text-muted hover:text-accent group relative flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors"
            aria-label="Copy link to clipboard"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              {copied ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              )}
            </svg>
            <span className="transition-opacity duration-200">{copied ? "Copied" : "Copy link"}</span>
          </button>

          <span className="text-border">·</span>

          <button
            onClick={shareToX}
            className="text-muted hover:text-accent flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors"
            aria-label="Share on X"
          >
            <XTwitterIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Post</span>
          </button>

          <span className="text-border">·</span>

          <button
            onClick={shareToLinkedIn}
            className="text-muted hover:text-accent flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors"
            aria-label="Share on LinkedIn"
          >
            <LinkedInIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Share</span>
          </button>
      </div>
    </div>
  );
}
