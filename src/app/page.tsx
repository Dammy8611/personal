// @ts-nocheck
"use client";
import { motion } from "motion/react";
// import { Link } from "nex";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollSnapContainer from "@/components/scroll-snap-container";
import AnimatedSection from "@/components/animated-section";
import ContactForm from "@/components/contact-form";
import ProjectCard from "@/components/project-card";
import SkillBar from "@/components/skill-bar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChevronDown,
  Code,
  Zap,
  Users,
  Target,
  ArrowRight,
} from "lucide-react";
import { staticProjects, staticSkills } from "../data/static-data";
import Link from "next/link";

export default function Home() {
  const projects = staticProjects.filter((p) => p.featured);
  const skills = staticSkills;

  return (
    <div className="min-h-screen">
      <Navbar />

      <ScrollSnapContainer>
        {/* Hero Section */}
        <section className="scroll-snap-section min-h-screen flex items-center justify-center gradient-bg-rainbow relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 float-animation">
            <div className="w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm" />
          </div>
          <div className="absolute top-40 right-20 float-animation-delay">
            <div className="w-12 h-12 bg-white/10 rounded-full backdrop-blur-sm" />
          </div>
          <div className="absolute bottom-40 left-20 float-animation">
            <div className="w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm" />
          </div>

          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <motion.h1
                className="text-6xl md:text-8xl font-bold mb-6"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
              >
                <span className="block">Hello, I'm</span>
                <span className="block text-white">Dtechy</span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Student Developer crafting digital experiences with React,
                Next.js, and Python
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="px-8 py-3 bg-white text-gray-900 hover:bg-gray-100 transition-colors"
                >
                  <Link href="/projects">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-colors"
                >
                  <a href="#contact">Get In Touch</a>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="text-white text-2xl" />
          </motion.div>
        </section>

        {/* About Section */}
        <section className="scroll-snap-section min-h-screen py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                My Journey
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                From curious student to passionate developer, here's my story
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection direction="left" delay={0.2}>
                <div className="space-y-6">
                  <Card className="glass-effect">
                    <CardHeader>
                      <CardTitle className="gradient-text">About Me</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        I'm <strong>Otele Damiloal David</strong>, but you can
                        call me <strong>Dtechy</strong>. I'm a passionate
                        student developer currently studying at{" "}
                        <strong>Ajayi Crowther University</strong>
                        in Nigeria, where I'm honing my skills in modern web
                        development.
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        My journey in tech revolves around JavaScript and its
                        ecosystem, with expertise in React and Next.js. I also
                        dabble in Python, though JavaScript remains my primary
                        focus.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="glass-effect">
                    <CardHeader>
                      <CardTitle className="gradient-text-secondary">
                        Education
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="timeline-item">
                        <h4 className="font-semibold text-lg">
                          Ajayi Crowther University
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          Computer Science Student
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Nigeria • 2021 - Present
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.4}>
                <div className="space-y-6">
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                      alt="Modern developer workspace"
                      className="w-full h-80 object-cover"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Card className="glass-effect text-center">
                      <CardContent className="p-4">
                        <div className="text-3xl font-bold gradient-text">
                          12+
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          Projects Completed
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="glass-effect text-center">
                      <CardContent className="p-4">
                        <div className="text-3xl font-bold gradient-text">
                          3+
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          Years Learning
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="scroll-snap-section min-h-screen py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                Featured Projects
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Showcasing my best work in web development and beyond
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {projects?.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>

            <AnimatedSection className="text-center">
              <Button
                asChild
                size="lg"
                className="gradient-bg text-white hover:shadow-lg transition-all"
              >
                <Link href="/projects">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </section>

        {/* Skills Section */}
        <section className="scroll-snap-section min-h-screen py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                Skills & Technologies
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                My technical toolkit and proficiency levels
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-12">
              <AnimatedSection direction="left" delay={0.2}>
                <h3 className="text-2xl font-bold gradient-text mb-6">
                  Technical Skills
                </h3>
                <div className="space-y-4">
                  {skills?.map((skill, index) => (
                    <SkillBar key={skill.id} skill={skill} index={index} />
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.4}>
                <h3 className="text-2xl font-bold gradient-text mb-6">
                  What I Offer
                </h3>
                <div className="space-y-4">
                  <Card className="glass-effect">
                    <CardContent className="p-4 flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                        <Code className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Clean Code</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Well-structured, maintainable code following best
                          practices
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-effect">
                    <CardContent className="p-4 flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full">
                        <Zap className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Performance</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Optimized applications with lightning-fast load times
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-effect">
                    <CardContent className="p-4 flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-orange-500 to-teal-500 rounded-full">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold">User Experience</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Intuitive interfaces that users love to interact with
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-effect">
                    <CardContent className="p-4 flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full">
                        <Target className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Problem Solving</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Creative solutions to complex technical challenges
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="scroll-snap-section min-h-screen py-20 bg-gray-50 dark:bg-gray-800"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Let's collaborate on something amazing together
              </p>
            </AnimatedSection>

            <ContactForm />
          </div>
        </section>

        {/* Footer as final scroll-snap section */}
        <Footer />
      </ScrollSnapContainer>
    </div>
  );
}
