import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { PostMeta } from "@/lib/blog";
import { CalendarIcon, ClockIcon, ArrowRightIcon } from "./Icons";

interface PostCardProps {
  post: PostMeta;
  featured?: boolean;
}

export function PostCard({ post, featured = false }: PostCardProps) {
  return (
    <article
      className={`group bg-card border-border hover:border-accent/30 hover:shadow-accent/5 relative overflow-hidden rounded-xl border transition-all duration-300 hover:shadow-lg ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      {post.coverImage && (
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image src={post.coverImage} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="from-card/80 absolute inset-0 bg-gradient-to-t to-transparent" />
        </div>
      )}

      <div className={`p-6 ${post.coverImage ? "relative -mt-12" : ""}`}>
        {post.tags && post.tags.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="bg-accent/10 text-accent rounded-full px-2.5 py-1 text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
        )}

        <Link href={`/blog/${post.slug}`}>
          <h3
            className={`group-hover:text-accent mb-3 font-serif font-medium tracking-tight transition-colors ${
              featured ? "text-2xl md:text-3xl" : "text-xl"
            }`}
          >
            {post.title}
          </h3>
        </Link>

        <p className="text-muted mb-4 line-clamp-2">{post.excerpt}</p>

        <div className="flex items-center justify-between">
          <div className="text-muted flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1.5">
              <CalendarIcon className="h-4 w-4" />
              {format(new Date(post.date), "MMM d, yyyy")}
            </span>
            <span className="flex items-center gap-1.5">
              <ClockIcon className="h-4 w-4" />
              {post.readingTime}
            </span>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="text-accent hover:text-accent-hover flex items-center gap-1 text-sm font-medium transition-colors"
          >
            Read
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
