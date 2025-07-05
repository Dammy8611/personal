"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AnimatedSection from "@/components/animated-section";
import BlogCard from "@/components/blog-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, BookOpen, PenTool, Filter } from "lucide-react";
import { staticBlogPosts } from "../../data/static-data";

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showPublishedOnly, setShowPublishedOnly] = useState(true);

  const posts = staticBlogPosts.filter(
    (post) => !showPublishedOnly || post.status === "published"
  );

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <AnimatedSection className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <BookOpen className="h-12 w-12 text-brand-blue" />
              <h1 className="text-4xl md:text-6xl font-bold gradient-text">
                Blog
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Thoughts, tutorials, and insights from my journey as a developer
            </p>
          </AnimatedSection>

          {/* Search and Filters */}
          <AnimatedSection delay={0.2}>
            <Card className="glass-effect mb-8">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search blog posts..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant={showPublishedOnly ? "default" : "outline"}
                      size="sm"
                      onClick={() => setShowPublishedOnly(true)}
                    >
                      Published
                    </Button>
                    <Button
                      variant={!showPublishedOnly ? "default" : "outline"}
                      size="sm"
                      onClick={() => setShowPublishedOnly(false)}
                    >
                      All Posts
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Blog Posts */}
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          ) : (
            <AnimatedSection className="text-center py-12">
              <div className="text-6xl mb-4">
                {posts.length === 0 ? "✍️" : "🔍"}
              </div>
              <h3 className="text-2xl font-bold text-gray-600 dark:text-gray-300 mb-2">
                {posts.length === 0 ? "No blog posts yet" : "No posts found"}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                {posts.length === 0
                  ? "I'm working on creating amazing content for you. Check back soon!"
                  : "Try adjusting your search criteria"}
              </p>
              {posts.length === 0 && (
                <div className="flex items-center justify-center gap-4 mt-8">
                  <PenTool className="h-6 w-6 text-brand-purple" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Articles coming soon...
                  </span>
                </div>
              )}
            </AnimatedSection>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
