# TODO

Tasks to complete before launching the personal website.

---

## 1. Generate Favicon
- [x] Create a unique favicon (initials "CT" or custom design)
- [x] Options: [Favicon.io](https://favicon.io/), [Canva](https://canva.com), or commission on Fiverr
- [x] Replace `src/app/favicon.ico`

## 2. Get a Website Name
- [x] Decide on domain name (e.g., christurgeon.com, christurgeon.dev)
- [x] Check availability on [Namecheap](https://namecheap.com), [Porkbun](https://porkbun.com), or [Google Domains](https://domains.google)
- [x] Purchase domain

## 3. Populate Blogs
- [x] Write at least 2 blog posts to start
- [x] Add posts to `content/posts/` as `.mdx` files
- [ ] Add cover images to `public/images/blog/` (optional)

## 4. Photo Gallery
- [ ] Curate photography images
- [ ] Add images to `public/images/`
- [ ] Create a new `/photos` or `/gallery` page
- [ ] Build gallery component

## 5. Hosting
- [x] Decide on hosting platform:
  - ✅ **Vercel** (recommended for Next.js) — Free tier, automatic deploys from GitHub
  - **GitHub Pages** — Free, but requires static export
  - **Netlify** — Free tier, good alternative to Vercel
  - **Cloudflare Pages** — Free, fast global CDN
- [x] Connect GitHub repo to hosting platform
- [x] Configure custom domain
- [x] Set up SSL certificate (usually automatic)

---

## Nice to Have
- [ ] Add analytics (Vercel Analytics, Plausible, or Umami)
- [ ] Set up Open Graph images for social sharing
- [ ] Add RSS feed for blog

- All static pages + images in /public served via Vercel's global CDN
- <Image> optimizations automatically applied
- Free tier handles small/medium traffic easily
