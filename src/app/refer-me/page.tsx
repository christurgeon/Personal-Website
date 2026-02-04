import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { ArrowRightIcon } from "@/components/Icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Referred to Point72",
  description: `Instructions for getting referred to Point72 by ${siteConfig.name}`,
  robots: "noindex, nofollow",
};

export default function ReferMePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <header className="animate-fade-in mb-12">
        <h1 className="mb-4 font-serif text-4xl font-medium tracking-tight md:text-5xl">
          Get Referred to Point72
        </h1>
        <p className="text-muted text-lg">
          Thanks for your interest in working at Point72! Here&apos;s how I can help.
        </p>
      </header>

      <div className="prose prose-lg animate-fade-in-delay-1 mb-12 max-w-none">
        <h2>How It Works</h2>
        <p>
          Employee referrals are a great way to get your application noticed. If you&apos;re
          interested in a role at Point72, I&apos;m happy to submit a referral on your behalf.
        </p>

        <h2>Steps to Get Referred</h2>
        <ol>
          <li>
            <strong>Browse open positions</strong> — Head over to the{" "}
            <Link href="https://careers.point72.com/" target="_blank" rel="noopener noreferrer">
              Point72 Careers page
            </Link>{" "}
            and find one or more roles that match your background and interests.
          </li>
          <li>
            <strong>Send me your details</strong> — Reach out to me with:
            <ul>
              <li>The specific role(s) you&apos;re interested in (job title and/or link)</li>
              <li>Your resume (PDF preferred)</li>
              <li>Your phone number</li>
              <li>Your email address</li>
              <li>A brief note about why you&apos;re excited about the role</li>
            </ul>
          </li>
          <li>
            <strong>I&apos;ll submit the referral</strong> — Once I have your info, I&apos;ll submit
            the referral through our internal system.
          </li>
        </ol>

        <h2>A Few Notes</h2>
        <ul>
          <li>
            I&apos;m happy to refer anyone who meets the criteria for the role, but a referral is not a guarantee of an interview or
            offer — it simply helps get your resume in front of the right people.
          </li>
          <li>
            The more specific you are about which role(s) you want, the better I can tailor the
            referral.
          </li>
          <li>
            If we haven&apos;t spoken in a while, feel free to include a quick intro so I can write
            a more personalized note.
          </li>
        </ul>
      </div>

      <div className="bg-card border-border animate-fade-in-delay-2 rounded-xl border p-8">
        <h3 className="mb-3 font-serif text-2xl font-medium">Ready to get started?</h3>
        <p className="text-muted mb-4">
          Find a role that excites you, then reach out to me with your resume and the position
          details.
        </p>
        <a
          href="https://careers.point72.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-accent-hover inline-flex items-center gap-2 transition-colors"
        >
          Browse Point72 Careers
          <ArrowRightIcon className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
