// import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
// import AdminLayout from "@/components/admin/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";
import {
  TrendingUp,
  Users,
  MessageSquare,
  FileText,
  Eye,
  Calendar,
  Clock,
  Activity,
} from "lucide-react";
import { formatDate, formatRelativeTime } from "@/lib/utils";
// import type { Analytics, Project, BlogPost, Message } from "@shared/schema";

const COLORS = ["#3B82F6", "#8B5CF6", "#F97316", "#06B6D4"];

export default function AdminDashboard() {
  const analytics = {
    totalProjects: 5,
    totalPosts: 8,
    totalMessages: 12,
    pageViews: 1500,
  };

  const unreadMessages = [
    {
      id: "m1",
      name: "Alice",
      message: "Hi, I love your portfolio!",
      read: false,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    },
    {
      id: "m2",
      name: "Bob",
      message: "Can we collaborate on a project?",
      read: false,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5), // 5 hours ago
    },
  ];

  const recentMessages = [
    ...unreadMessages,
    {
      id: "m3",
      name: "Charlie",
      message: "Great work on your latest post.",
      read: true,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    },
  ];

  const recentPosts = [
    {
      id: "p1",
      title: "How I Built My Portfolio",
      published: true,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
    },
    {
      id: "p2",
      title: "React vs Next.js: My Thoughts",
      published: false,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5), // 5 days ago
    },
  ];

  const recentProjects = [
    {
      id: "pr1",
      title: "Personal Portfolio",
      featured: true,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10), // 10 days ago
    },
    {
      id: "pr2",
      title: "E-commerce Dashboard",
      featured: false,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 20), // 20 days ago
    },
  ];

  const statsData = [
    {
      title: "Total Projects",
      value: 0,
      change: "+12%",
      icon: FileText,
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      title: "Blog Posts",
      value: 0,
      change: "+8%",
      icon: FileText,
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
    {
      title: "Messages",
      value: 0,
      change: "+24%",
      icon: MessageSquare,
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
    },
    {
      title: "Page Views",
      value: 0,
      change: "+15%",
      icon: Eye,
      color: "text-teal-500",
      bgColor: "bg-teal-50 dark:bg-teal-900/20",
    },
  ];

  const chartData = [
    { name: "Jan", visits: 400, projects: 12 },
    { name: "Feb", visits: 300, projects: 15 },
    { name: "Mar", visits: 500, projects: 18 },
    { name: "Apr", visits: 280, projects: 20 },
    { name: "May", visits: 590, projects: 22 },
    { name: "Jun", visits: 320, projects: 25 },
  ];

  const pieData = [
    { name: "React", value: 40 },
    { name: "Next.js", value: 30 },
    { name: "Node.js", value: 20 },
    { name: "Python", value: 10 },
  ];

  return (
    <>
      <div className="space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold gradient-text">
            Dashboard Overview
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Welcome back! Here's what's happening with your portfolio.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-effect hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                        {stat.title}
                      </p>
                      <p className="text-3xl font-bold gradient-text">
                        {stat.value}
                      </p>
                      <p className="text-sm text-green-500 mt-2">
                        {stat.change} from last month
                      </p>
                    </div>
                    <div className={`p-3 rounded-full ${stat.bgColor}`}>
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="gradient-text">Monthly Traffic</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="visits" fill="#3B82F6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="gradient-text">
                  Technology Usage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) =>
                        `${name} ${((percent ?? 0) * 100).toFixed(0)}%`
                      }
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="gradient-text">Recent Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentProjects?.map((project) => (
                    <div
                      key={project.id}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <FileText className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{project.title}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {formatRelativeTime(project.createdAt || new Date())}
                        </p>
                      </div>
                      {project.featured && (
                        <Badge variant="secondary" className="text-xs">
                          Featured
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Blog Posts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="gradient-text">
                  Recent Blog Posts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentPosts?.map((post) => (
                    <div key={post.id} className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-orange-500 rounded-lg flex items-center justify-center">
                        <FileText className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{post.title}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {formatRelativeTime(post.createdAt || new Date())}
                        </p>
                      </div>
                      <Badge
                        variant={post.published ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {post.published ? "Published" : "Draft"}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Messages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Card className="glass-effect">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="gradient-text">
                    Recent Messages
                  </CardTitle>
                  {unreadMessages && unreadMessages.length > 0 && (
                    <Badge className="bg-red-500">
                      {unreadMessages.length} new
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentMessages?.map((message) => (
                    <div
                      key={message.id}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-teal-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">
                          {message.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{message.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                          {message.message}
                        </p>
                      </div>
                      {!message.read && (
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
}
