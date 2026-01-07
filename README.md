# Personal Website

A modern personal website and blog built with Next.js, Tailwind CSS, and MDX.

## Tech Stack

- [Next.js 16](https://nextjs.org/) - React framework with App Router
- [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS
- [MDX](https://mdxjs.com/) - Markdown with JSX
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [mise](https://mise.jdx.dev/) - Development environment management

---

## Development Setup with mise

This project uses [mise](https://mise.jdx.dev/) to manage development tools and ensure consistent environments across machines.

### Prerequisites

Install mise on your system:

```bash
# macOS (Homebrew)
brew install mise

# Or with curl (works on macOS and Linux)
curl https://mise.run | sh
```

After installation, activate mise in your shell. Add this to your `~/.zshrc` or `~/.bashrc`:

```bash
eval "$(mise activate zsh)"   # for zsh
# or
eval "$(mise activate bash)"  # for bash
```

### Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/christurgeon/Personal-Website.git personal-website
   cd personal-website
   ```

2. **Trust and install mise tools**

   ```bash
   mise trust
   mise install
   ```

   This installs the exact versions of Node.js and pnpm specified in `.mise.toml`.

3. **Install dependencies**

   ```bash
   pnpm install
   ```

4. **Start the development server**

   ```bash
   pnpm dev
   ```

5. **Open your browser**

   Visit [http://localhost:3000](http://localhost:3000)

### What mise Manages

The `.mise.toml` file configures:

```toml
[tools]
node = "22"    # Node.js version
pnpm = "9"     # pnpm package manager

[env]
NODE_ENV = "development"
```

When you enter the project directory, mise automatically activates these tool versions.

---

## Project Structure

```
├── content/
│   └── posts/           # Blog posts (MDX files)
├── public/
│   └── images/          # Static images
├── src/
│   ├── app/             # Next.js App Router pages
│   │   ├── blog/        # Blog pages
│   │   └── about/       # About page
│   ├── components/      # React components
│   └── lib/             # Utility functions
├── .mise.toml           # mise configuration
└── package.json
```

## Configuration

### Site Configuration

Edit `src/lib/config.ts` to customize:

- Your name and site description
- Social media links (GitHub, LinkedIn, SoundCloud, Email, etc.)
- Navigation links

```typescript
export const siteConfig = {
  name: "Your Name",
  title: "Personal Website",
  description: "Your description here",
  socials: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    // ...
  },
};
```

## Writing Blog Posts

Create a new `.mdx` file in `content/posts/`:

```markdown
---
title: "My Post Title"
date: "2026-01-07"
excerpt: "A brief description of the post"
tags: ["tag1", "tag2"]
coverImage: "/images/blog/my-image.jpg"  # Optional
---

Your content here in Markdown...
```

### Frontmatter Fields

| Field        | Required | Description                        |
| ------------ | -------- | ---------------------------------- |
| `title`      | Yes      | Post title                         |
| `date`       | Yes      | Publication date (YYYY-MM-DD)      |
| `excerpt`    | Yes      | Brief description for previews     |
| `tags`       | No       | Array of tag strings               |
| `coverImage` | No       | Path to cover image in `/public`   |

### Adding Images

1. Place images in `public/images/blog/`
2. Reference them in your MDX:

```markdown
![Alt text](/images/blog/my-image.jpg)
```

## Scripts

```bash
pnpm dev      # Start development server
pnpm build    # Build for production
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

---

## License

Copyright © 2026 Chris Turgeon. All Rights Reserved. See [LICENSE.md](LICENSE.md) for details.
