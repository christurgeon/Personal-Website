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
      className={`group relative bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      {post.coverImage && (
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
        </div>
      )}

      <div className={`p-6 ${post.coverImage ? "-mt-12 relative" : ""}`}>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-2.5 py-1 bg-accent/10 text-accent rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <Link href={`/blog/${post.slug}`}>
          <h3
            className={`font-serif font-medium tracking-tight mb-3 group-hover:text-accent transition-colors ${
              featured ? "text-2xl md:text-3xl" : "text-xl"
            }`}
          >
            {post.title}
          </h3>
        </Link>

        <p className="text-muted mb-4 line-clamp-2">{post.excerpt}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-muted">
            <span className="flex items-center gap-1.5">
              <CalendarIcon className="w-4 h-4" />
              {format(new Date(post.date), "MMM d, yyyy")}
            </span>
            <span className="flex items-center gap-1.5">
              <ClockIcon className="w-4 h-4" />
              {post.readingTime}
            </span>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
          >
            Read
            <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}

