# Personal Website

A modern personal website and blog built with Next.js, Tailwind CSS, and MDX.

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework with App Router
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
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

## Configuration

### Site Configuration

Edit `src/lib/config.ts` to customize:

- Your name and site description
- Social media links (GitHub, LinkedIn, SoundCloud, Beli, etc.)
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

### Adding Images

1. Place images in `public/images/blog/`
2. Reference them in MDX:

```markdown
![Alt text](/images/blog/my-image.jpg)
```

### Google Analytics

The site supports Google Analytics via an environment variable. To enable:

1. Get a Measurement ID from [Google Analytics](https://analytics.google.com) (starts with `G-`)
2. Set the environment variable:
   - **Vercel**: Add `NEXT_PUBLIC_GA_MEASUREMENT_ID` in Project Settings → Environment Variables
   - **Local**: Create a `.env.local` file with `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`

Analytics only loads when the environment variable is set.

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
