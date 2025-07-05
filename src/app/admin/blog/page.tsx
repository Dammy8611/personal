import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { formatDate, slugify, generateExcerpt } from "@/lib/utils";
import { Plus, Edit, Trash2, Eye, FileText, Calendar } from "lucide-react";

const blogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  image: z
    .union([z.string().url("Must be a valid URL"), z.literal("")])
    .optional(),
  published: z.boolean(),
});

type BlogFormData = {
  title: string;
  content: string;
  image?: string;
  published: boolean;
};

// Define the BlogPost type
type BlogPost = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image?: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
};

// Initial static data
const initialPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with React",
    slug: "getting-started-with-react",
    excerpt: "Learn the basics of React and how to create your first component",
    content: "This is a comprehensive guide to getting started with React...",
    image: "https://example.com/react.jpg",
    published: true,
    createdAt: "2023-01-15T10:30:00Z",
    updatedAt: "2023-01-20T14:45:00Z",
  },
  {
    id: 2,
    title: "Advanced TypeScript Patterns",
    slug: "advanced-typescript-patterns",
    excerpt: "Explore advanced design patterns in TypeScript",
    content: "TypeScript offers powerful features that enable...",
    published: false,
    createdAt: "2023-02-10T09:15:00Z",
    updatedAt: "2023-02-12T11:20:00Z",
  },
];

export default function AdminBlog() {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<BlogFormData>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      published: false,
    },
  });

  const handleCreate = (data: BlogFormData) => {
    const newId =
      posts.length > 0 ? Math.max(...posts.map((p) => p.id)) + 1 : 1;
    const newPost: BlogPost = {
      id: newId,
      ...data,
      slug: slugify(data.title),
      excerpt: generateExcerpt(data.content),
      image: data.image || undefined,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setPosts([...posts, newPost]);
    toast({
      title: "Blog post created successfully!",
      description: "Your blog post has been added.",
    });
    setIsDialogOpen(false);
    reset();
  };

  const handleUpdate = (data: BlogFormData) => {
    if (!selectedPost) return;

    const updatedPosts = posts.map((post) => {
      if (post.id === selectedPost.id) {
        return {
          ...post,
          ...data,
          slug: slugify(data.title),
          excerpt: generateExcerpt(data.content),
          image: data.image || undefined,
          updatedAt: new Date().toISOString(),
        };
      }
      return post;
    });

    setPosts(updatedPosts);
    toast({
      title: "Blog post updated successfully!",
      description: "Your changes have been saved.",
    });
    setIsDialogOpen(false);
    setSelectedPost(null);
    reset();
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      setPosts(posts.filter((post) => post.id !== id));
      toast({
        title: "Blog post deleted successfully!",
        description: "The blog post has been removed.",
      });
    }
  };

  const onSubmit = (data: BlogFormData) => {
    if (selectedPost) {
      handleUpdate(data);
    } else {
      handleCreate(data);
    }
  };

  const openEditDialog = (post: BlogPost) => {
    setSelectedPost(post);
    reset({
      title: post.title,
      content: post.content,
      image: post.image || "",
      published: post.published || false,
    });
    setIsDialogOpen(true);
  };

  const openCreateDialog = () => {
    setSelectedPost(null);
    reset({
      title: "",
      content: "",
      image: "",
      published: false,
    });
    setIsDialogOpen(true);
  };

  return (
    <>
      <div className="space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between"
        >
          <div>
            <h1 className="text-3xl font-bold gradient-text">Blog Posts</h1>
            <p className="text-gray-600 dark:text-gray-300">
              Manage your blog content
            </p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={openCreateDialog} className="gradient-bg">
                <Plus className="h-4 w-4 mr-2" />
                New Post
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>
                  {selectedPost ? "Edit Blog Post" : "Create New Blog Post"}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="title">Post Title</Label>
                    <Input
                      id="title"
                      {...register("title")}
                      className={errors.title ? "border-red-500" : ""}
                    />
                    {errors.title && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.title.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="image">Featured Image URL (optional)</Label>
                    <Input
                      id="image"
                      {...register("image")}
                      className={errors.image ? "border-red-500" : ""}
                    />
                    {errors.image && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.image.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    {...register("content")}
                    rows={15}
                    className={errors.content ? "border-red-500" : ""}
                    placeholder="Write your blog post content here..."
                  />
                  {errors.content && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.content.message}
                    </p>
                  )}
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="published"
                    checked={watch("published")}
                    onCheckedChange={(checked) =>
                      setValue("published", !!checked)
                    }
                  />
                  <Label htmlFor="published">Publish immediately</Label>
                </div>

                <div className="flex space-x-2 pt-4">
                  <Button type="submit" className="gradient-bg">
                    {selectedPost ? "Update Post" : "Create Post"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </motion.div>

        {/* Blog Posts Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle>All Blog Posts ({posts.length})</CardTitle>
            </CardHeader>
            <CardContent>
              {posts.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Post</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead>Updated</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {posts.map((post) => (
                      <TableRow key={post.id}>
                        <TableCell>
                          <div className="flex items-center space-x-4">
                            {post.image ? (
                              <img
                                src={post.image}
                                alt={post.title}
                                className="w-16 h-16 rounded-lg object-cover"
                              />
                            ) : (
                              <div className="w-16 h-16 rounded-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                                <FileText className="h-8 w-8 text-gray-400" />
                              </div>
                            )}
                            <div>
                              <div className="font-medium">{post.title}</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                {post.excerpt}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={post.published ? "default" : "secondary"}
                            className={
                              post.published ? "bg-green-500" : "bg-yellow-500"
                            }
                          >
                            {post.published ? "Published" : "Draft"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-gray-400" />
                            <span className="text-sm">
                              {formatDate(post.createdAt)}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            {formatDate(post.updatedAt)}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => openEditDialog(post)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" asChild>
                              <a
                                href={`/blog/${post.slug}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Eye className="h-4 w-4" />
                              </a>
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDelete(post.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">✍️</div>
                  <h3 className="text-lg font-semibold mb-2">
                    No blog posts yet
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    Start sharing your thoughts and experiences
                  </p>
                  <Button onClick={openCreateDialog} className="gradient-bg">
                    <Plus className="h-4 w-4 mr-2" />
                    Write Your First Post
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </>
  );
}
