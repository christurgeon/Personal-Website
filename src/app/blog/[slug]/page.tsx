import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import { mdxComponents } from "@/components/mdx";
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
    <article className="mx-auto max-w-3xl px-6 py-16">
      <header className="animate-fade-in mb-12">
        <Link href="/blog" className="text-muted hover:text-accent mb-8 inline-flex items-center gap-1 text-sm transition-colors">
          <ArrowRightIcon className="h-4 w-4 rotate-180" />
          Back to Blog
        </Link>

        {post.tags && post.tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="bg-accent/10 text-accent rounded-full px-2.5 py-1 text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
        )}

        <h1 className="mb-6 font-serif text-4xl font-medium tracking-tight md:text-5xl">{post.title}</h1>

        <div className="text-muted flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <CalendarIcon className="h-4 w-4" />
            {format(new Date(post.date), "MMMM d, yyyy")}
          </span>
          <span className="flex items-center gap-1.5">
            <ClockIcon className="h-4 w-4" />
            {post.readingTime}
          </span>
        </div>
      </header>

      {post.coverImage && (
        <div className="animate-fade-in-delay-1 relative mb-12 aspect-[16/9] overflow-hidden rounded-xl">
          <Image src={post.coverImage} alt={post.title} fill className="object-cover" priority />
        </div>
      )}

      <div className="prose prose-lg animate-fade-in-delay-2 max-w-none">
        <MDXRemote source={post.content} options={{ mdxOptions: { rehypePlugins: [rehypeSlug] } }} components={mdxComponents} />
      </div>
    </article>
  );
}
