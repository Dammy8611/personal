"use client";
import { useState } from "react";
import { motion } from "motion/react";
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
import { formatDate } from "@/lib/utils";
import { Plus, Edit, Trash2, ExternalLink, Github, Star } from "lucide-react";

const projectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  longDescription: z.string().optional(),
  image: z.string().url("Must be a valid URL"),
  technologies: z.string().min(1, "At least one technology is required"),
  githubUrl: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  liveUrl: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  featured: z.boolean(),
});

type ProjectFormData = z.infer<typeof projectSchema>;

type Project = {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  createdAt?: string | Date;
};

const STATIC_PROJECTS: Project[] = [
  {
    id: 1,
    title: "Personal Portfolio",
    description: "A modern portfolio website built with Next.js.",
    longDescription:
      "A full-featured portfolio with blog, projects, and contact form.",
    image: "https://placehold.co/128x128",
    technologies: ["Next.js", "React", "TypeScript"],
    githubUrl: "https://github.com/example/portfolio",
    liveUrl: "https://portfolio.example.com",
    featured: true,
    createdAt: new Date(),
  },
  {
    id: 2,
    title: "Task Manager",
    description: "A simple task management app.",
    longDescription: "Manage your daily tasks efficiently.",
    image: "https://placehold.co/128x128",
    technologies: ["React", "Redux", "TailwindCSS"],
    githubUrl: "",
    liveUrl: "",
    featured: false,
    createdAt: new Date(),
  },
];

export default function AdminProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [projects, setProjects] = useState<Project[]>(STATIC_PROJECTS);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      featured: false,
    },
  });

  const onSubmit = (data: ProjectFormData) => {
    if (selectedProject) {
      // Update
      setProjects((prev) =>
        prev.map((p) =>
          p.id === selectedProject.id
            ? {
                ...p,
                ...data,
                technologies: data.technologies.split(",").map((t) => t.trim()),
              }
            : p
        )
      );
      toast({
        title: "Project updated successfully!",
        description: "Your changes have been saved.",
      });
    } else {
      // Create
      setProjects((prev) => [
        ...prev,
        {
          id: prev.length ? Math.max(...prev.map((p) => p.id)) + 1 : 1,
          ...data,
          technologies: data.technologies.split(",").map((t) => t.trim()),
          createdAt: new Date(),
        },
      ]);
      toast({
        title: "Project created successfully!",
        description: "Your project has been added to the portfolio.",
      });
    }
    setIsDialogOpen(false);
    setSelectedProject(null);
    reset();
  };

  const openEditDialog = (project: Project) => {
    setSelectedProject(project);
    reset({
      title: project.title,
      description: project.description,
      longDescription: project.longDescription || "",
      image: project.image,
      technologies: project.technologies.join(", "),
      githubUrl: project.githubUrl || "",
      liveUrl: project.liveUrl || "",
      featured: project.featured || false,
    });
    setIsDialogOpen(true);
  };

  const openCreateDialog = () => {
    setSelectedProject(null);
    reset({
      title: "",
      description: "",
      longDescription: "",
      image: "",
      technologies: "",
      githubUrl: "",
      liveUrl: "",
      featured: false,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      setProjects((prev) => prev.filter((p) => p.id !== id));
      toast({
        title: "Project deleted successfully!",
        description: "The project has been removed from your portfolio.",
      });
    }
  };

  return (
    // <AdminLayout>
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold gradient-text">Projects</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Manage your portfolio projects
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openCreateDialog} className="gradient-bg">
              <Plus className="h-4 w-4 mr-2" />
              Add Project
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                {selectedProject ? "Edit Project" : "Create New Project"}
              </DialogTitle>
            </DialogHeader>
            <form
              onSubmit={handleSubmit(onSubmit as (data: any) => void)}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Project Title</Label>
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
                  <Label htmlFor="image">Image URL</Label>
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
                <Label htmlFor="description">Short Description</Label>
                <Textarea
                  id="description"
                  {...register("description")}
                  rows={2}
                  className={errors.description ? "border-red-500" : ""}
                />
                {errors.description && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.description.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="longDescription">Long Description</Label>
                <Textarea
                  id="longDescription"
                  {...register("longDescription")}
                  rows={4}
                />
              </div>

              <div>
                <Label htmlFor="technologies">
                  Technologies (comma-separated)
                </Label>
                <Input
                  id="technologies"
                  {...register("technologies")}
                  placeholder="React, Next.js, TypeScript"
                  className={errors.technologies ? "border-red-500" : ""}
                />
                {errors.technologies && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.technologies.message}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="githubUrl">GitHub URL (optional)</Label>
                  <Input
                    id="githubUrl"
                    {...register("githubUrl")}
                    className={errors.githubUrl ? "border-red-500" : ""}
                  />
                  {errors.githubUrl && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.githubUrl.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="liveUrl">Live URL (optional)</Label>
                  <Input
                    id="liveUrl"
                    {...register("liveUrl")}
                    className={errors.liveUrl ? "border-red-500" : ""}
                  />
                  {errors.liveUrl && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.liveUrl.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="featured"
                  checked={watch("featured")}
                  onCheckedChange={(checked) => setValue("featured", !!checked)}
                />
                <Label htmlFor="featured">Featured Project</Label>
              </div>

              <div className="flex space-x-2 pt-4">
                <Button type="submit" className="gradient-bg">
                  {selectedProject ? "Update Project" : "Create Project"}
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

      {/* Projects Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="glass-effect">
          <CardHeader>
            <CardTitle>All Projects ({projects?.length || 0})</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="space-y-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <div className="skeleton h-16 w-16 rounded"></div>
                    <div className="flex-1 space-y-2">
                      <div className="skeleton h-4 w-3/4"></div>
                      <div className="skeleton h-3 w-1/2"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : projects && projects.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Project</TableHead>
                    <TableHead>Technologies</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {projects.map((project) => (
                    <TableRow key={project.id}>
                      <TableCell>
                        <div className="flex items-center space-x-4">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                          <div>
                            <div className="font-medium">{project.title}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              {project.description}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{project.technologies.length - 3}
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          {project.featured && (
                            <Badge className="bg-yellow-100 text-yellow-800">
                              <Star className="h-3 w-3 mr-1" />
                              Featured
                            </Badge>
                          )}
                          <Badge variant="outline">Active</Badge>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          {formatDate(project.createdAt || new Date())}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => openEditDialog(project)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          {project.liveUrl && (
                            <Button variant="ghost" size="sm" asChild>
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            </Button>
                          )}
                          {project.githubUrl && (
                            <Button variant="ghost" size="sm" asChild>
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="h-4 w-4" />
                              </a>
                            </Button>
                          )}
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(project.id)}
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
                <div className="text-6xl mb-4">📁</div>
                <h3 className="text-lg font-semibold mb-2">No projects yet</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  Create your first project to get started
                </p>
                <Button onClick={openCreateDialog} className="gradient-bg">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Your First Project
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
    // </AdminLayout>
  );
}
