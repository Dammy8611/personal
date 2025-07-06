"use client";
// import { useParams, Link } from "wouter";
import { motion } from "motion/react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AnimatedSection from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ExternalLink, Github, Calendar, Clock } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { staticProjects } from "../../data/static-data";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();

  const project = staticProjects.find((p) => p.id === parseInt(id || "0"));

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <div className="pt-20 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center">
              <div className="text-6xl mb-4">😔</div>
              <h1 className="text-3xl font-bold text-gray-600 dark:text-gray-300 mb-2">
                Project Not Found
              </h1>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                The project you're looking for doesn't exist or has been
                removed.
              </p>
              <Button asChild className="gradient-bg">
                <Link href="/projects">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Projects
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
              <Link href="/projects">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Projects
              </Link>
            </Button>
          </AnimatedSection>

          {/* Project Header */}
          <AnimatedSection delay={0.1}>
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <h1 className="text-4xl md:text-5xl font-bold gradient-text">
                  {project.title}
                </h1>
                {project.featured && (
                  <Badge className="bg-yellow-100 text-yellow-800">
                    Featured
                  </Badge>
                )}
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {project.description}
              </p>
            </div>
          </AnimatedSection>

          {/* Project Image */}
          <AnimatedSection delay={0.2}>
            <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-4">
                  {project.liveUrl && (
                    <Button
                      asChild
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      asChild
                      variant="outline"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Source Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Project Details */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="md:col-span-2">
              <AnimatedSection delay={0.3}>
                <Card className="glass-effect">
                  <CardHeader>
                    <CardTitle className="gradient-text">
                      About This Project
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>

            <div className="space-y-6">
              <AnimatedSection delay={0.4}>
                <Card className="glass-effect">
                  <CardHeader>
                    <CardTitle className="gradient-text-secondary">
                      Technologies
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.5}>
                <Card className="glass-effect">
                  <CardHeader>
                    <CardTitle className="gradient-text-accent">
                      Project Info
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        Created: {formatDate(new Date())}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        Updated: {formatDate(new Date())}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>

          {/* Action Buttons */}
          <AnimatedSection delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {project.liveUrl && (
                <Button
                  asChild
                  size="lg"
                  className="gradient-bg text-white hover:shadow-lg transition-all"
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    View Live Project
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    View Source Code
                  </a>
                </Button>
              )}
            </div>
          </AnimatedSection>

          <Separator className="my-12" />

          {/* Related Projects */}
          <AnimatedSection delay={0.7}>
            <div className="text-center">
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Explore More Projects
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Check out my other work and see what I've been building
              </p>
              <Button asChild size="lg" className="gradient-bg">
                <Link href="/projects">View All Projects</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <Footer />
    </div>
  );
}
