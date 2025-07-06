"use client";
// import { useParams, Link } from "wouter";
import { motion } from "motion/react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AnimatedSection from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Calendar, Clock, Share2, BookOpen } from "lucide-react";
import { formatDate, formatRelativeTime } from "@/lib/utils";
import { staticBlogPosts } from "../../data/static-data";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();

  const post = staticBlogPosts.find((p) => p.slug === slug);

  const handleShare = async () => {
    if (navigator.share && post) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <div className="pt-20 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              <div className="skeleton h-8 w-32 rounded"></div>
              <div className="skeleton h-12 w-3/4 rounded"></div>
              <div className="skeleton h-6 w-1/2 rounded"></div>
              <div className="skeleton h-64 w-full rounded-lg"></div>
              <div className="skeleton h-4 w-full rounded"></div>
              <div className="skeleton h-4 w-full rounded"></div>
              <div className="skeleton h-4 w-2/3 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <div className="pt-20 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center">
              <div className="text-6xl mb-4">📄</div>
              <h1 className="text-3xl font-bold text-gray-600 dark:text-gray-300 mb-2">
                Blog Post Not Found
              </h1>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                The blog post you're looking for doesn't exist or has been
                removed.
              </p>
              <Button asChild className="gradient-bg">
                <Link href="/blog">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Blog
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

      <div className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <AnimatedSection>
            <Button asChild variant="ghost" className="mb-6">
              <Link href="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </AnimatedSection>

          {/* Blog Header */}
          <AnimatedSection delay={0.1}>
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <h1 className="text-4xl md:text-5xl font-bold gradient-text">
                  {post.title}
                </h1>
                {post.publishedAt ? (
                  <Badge className="bg-green-500 text-white">Published</Badge>
                ) : (
                  <Badge className="bg-yellow-500 text-white">Draft</Badge>
                )}
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
                {post.excerpt}
              </p>

              {/* Meta Information */}
              <div className="flex items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(new Date())}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{formatRelativeTime(new Date())}</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleShare}
                  className="flex items-center gap-2"
                >
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>
          </AnimatedSection>

          {/* Featured Image */}
          {post.image && (
            <AnimatedSection delay={0.2}>
              <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </AnimatedSection>
          )}

          {/* Blog Content */}
          <AnimatedSection delay={0.3}>
            <Card className="glass-effect">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <div
                    className="text-gray-700 dark:text-gray-300 leading-relaxed"
                    style={{ whiteSpace: "pre-wrap" }}
                  >
                    {post.content}
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          <Separator className="my-12" />

          {/* Call to Action */}
          <AnimatedSection delay={0.4}>
            <Card className="glass-effect">
              <CardContent className="p-8 text-center">
                <BookOpen className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  Enjoyed this article?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Check out more of my thoughts and insights on web development
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="gradient-bg">
                    <Link href="/blog">Read More Posts</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/#contact">Get In Touch</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>

      <Footer />
    </div>
  );
}
