import { motion } from "motion/react";
import Link from "next/link";
import { BlogPost } from "@/types/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { formatDate, formatRelativeTime } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      viewport={{ once: true }}
    >
      <Card className="glass-effect hover-lift overflow-hidden h-full">
        {post.image && (
          <div className="relative">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-4 left-4">
              {post.published ? (
                <Badge className="bg-green-500 text-white">Published</Badge>
              ) : (
                <Badge className="bg-yellow-500 text-white">Draft</Badge>
              )}
            </div>
          </div>
        )}

        <CardHeader>
          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300 mb-2">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(post.createdAt || new Date())}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{formatRelativeTime(post.createdAt || new Date())}</span>
            </div>
          </div>
          <CardTitle className="gradient-text line-clamp-2">
            {post.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
            {post.excerpt}
          </p>

          <Button asChild className="w-full gradient-bg">
            <Link href={`/blog/${post.slug}`}>
              <span>Read More</span>
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
