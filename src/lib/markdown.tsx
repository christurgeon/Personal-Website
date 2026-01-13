import React from "react";

/**
 * Parses markdown links in a string and converts them to React elements
 * @param text - The text containing markdown links like [text](url)
 * @returns An array of React elements (strings and anchor tags)
 */
export function parseMarkdownLinks(text: string): React.ReactNode[] {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = linkRegex.exec(text)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    // Add the link
    const linkText = match[1];
    const linkUrl = match[2];
    parts.push(
      <a
        key={key++}
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:text-accent-hover underline transition-colors"
      >
        {linkText}
      </a>
    );

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text after the last link
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  // If no links were found, return the original text
  if (parts.length === 0) {
    return [text];
  }

  return parts;
}
