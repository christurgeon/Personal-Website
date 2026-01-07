import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { CalendarIcon, ClockIcon, ArrowRightIcon } from "@/components/Icons";
import type { Metadata } from "next";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <header className="mb-12 animate-fade-in">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-muted hover:text-accent transition-colors mb-8"
        >
          <ArrowRightIcon className="w-4 h-4 rotate-180" />
          Back to Blog
        </Link>

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-2.5 py-1 bg-accent/10 text-accent rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <h1 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-6">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-muted">
          <span className="flex items-center gap-1.5">
            <CalendarIcon className="w-4 h-4" />
            {format(new Date(post.date), "MMMM d, yyyy")}
          </span>
          <span className="flex items-center gap-1.5">
            <ClockIcon className="w-4 h-4" />
            {post.readingTime}
          </span>
        </div>
      </header>

      {post.coverImage && (
        <div className="relative aspect-[16/9] mb-12 rounded-xl overflow-hidden animate-fade-in-delay-1">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="prose prose-lg max-w-none animate-fade-in-delay-2">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}

