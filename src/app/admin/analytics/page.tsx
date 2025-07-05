import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  AreaChart,
  Area,
} from "recharts";
import {
  TrendingUp,
  Users,
  Eye,
  MessageSquare,
  FileText,
  Calendar,
  Target,
  Activity,
  Globe,
  Clock,
} from "lucide-react";

const COLORS = [
  "#3B82F6",
  "#8B5CF6",
  "#F97316",
  "#06B6D4",
  "#10B981",
  "#F59E0B",
];

export default function AdminAnalytics() {
  // Static analytics data
  const analytics = {
    pageViews: 12542,
    uniqueVisitors: 4521,
    totalProjects: 8,
    totalMessages: 24,
  };

  // Static projects data
  const projects = [
    {
      id: "1",
      title: "E-Commerce Dashboard",
      technologies: ["React", "TypeScript", "Tailwind"],
      featured: true,
    },
    {
      id: "2",
      title: "Task Manager App",
      technologies: ["Vue", "Firebase"],
      featured: false,
    },
    {
      id: "3",
      title: "Portfolio Website",
      technologies: ["Next.js", "Framer Motion"],
      featured: true,
    },
    {
      id: "4",
      title: "Weather App",
      technologies: ["React", "OpenWeather API"],
      featured: false,
    },
    {
      id: "5",
      title: "Blog Platform",
      technologies: ["Node.js", "MongoDB"],
      featured: true,
    },
    {
      id: "6",
      title: "Fitness Tracker",
      technologies: ["React Native", "GraphQL"],
      featured: false,
    },
  ];

  // Mock data for charts
  const monthlyData = [
    { month: "Jan", views: 420, visitors: 180, projects: 2, posts: 1 },
    { month: "Feb", views: 380, visitors: 190, projects: 3, posts: 2 },
    { month: "Mar", views: 520, visitors: 240, projects: 2, posts: 1 },
    { month: "Apr", views: 460, visitors: 210, projects: 4, posts: 3 },
    { month: "May", views: 680, visitors: 290, projects: 2, posts: 2 },
    { month: "Jun", views: 590, visitors: 270, projects: 1, posts: 1 },
  ];

  const trafficSources = [
    { name: "Direct", value: 35, color: "#3B82F6" },
    { name: "Search", value: 28, color: "#8B5CF6" },
    { name: "Social", value: 20, color: "#F97316" },
    { name: "Referral", value: 17, color: "#06B6D4" },
  ];

  const topProjects = projects
    .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    .slice(0, 5);

  const recentActivity = [
    {
      type: "project",
      title: "E-Commerce Dashboard",
      action: "created",
      time: "2 hours ago",
    },
    {
      type: "message",
      title: "New contact from Sarah",
      action: "received",
      time: "4 hours ago",
    },
    {
      type: "blog",
      title: "React Best Practices",
      action: "published",
      time: "1 day ago",
    },
    {
      type: "project",
      title: "Task Manager App",
      action: "updated",
      time: "2 days ago",
    },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "project":
        return <FileText className="h-4 w-4" />;
      case "message":
        return <MessageSquare className="h-4 w-4" />;
      case "blog":
        return <FileText className="h-4 w-4" />;
      default:
        return <Activity className="h-4 w-4" />;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case "project":
        return "from-blue-500 to-purple-500";
      case "message":
        return "from-orange-500 to-red-500";
      case "blog":
        return "from-green-500 to-teal-500";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  return (
    <>
      <div className="space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold gradient-text">Analytics</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Track your portfolio performance and visitor insights
          </p>
        </motion.div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="glass-effect hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                      Total Page Views
                    </p>
                    <p className="text-3xl font-bold gradient-text">
                      {analytics.pageViews.toLocaleString()}
                    </p>
                    <p className="text-sm text-green-500 mt-2">
                      +15% from last month
                    </p>
                  </div>
                  <div className="p-3 rounded-full bg-blue-50 dark:bg-blue-900/20">
                    <Eye className="h-6 w-6 text-blue-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="glass-effect hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                      Unique Visitors
                    </p>
                    <p className="text-3xl font-bold gradient-text">
                      {analytics.uniqueVisitors.toLocaleString()}
                    </p>
                    <p className="text-sm text-green-500 mt-2">
                      +12% from last month
                    </p>
                  </div>
                  <div className="p-3 rounded-full bg-purple-50 dark:bg-purple-900/20">
                    <Users className="h-6 w-6 text-purple-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="glass-effect hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                      Total Projects
                    </p>
                    <p className="text-3xl font-bold gradient-text">
                      {analytics.totalProjects}
                    </p>
                    <p className="text-sm text-green-500 mt-2">+2 this month</p>
                  </div>
                  <div className="p-3 rounded-full bg-orange-50 dark:bg-orange-900/20">
                    <FileText className="h-6 w-6 text-orange-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="glass-effect hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                      Messages Received
                    </p>
                    <p className="text-3xl font-bold gradient-text">
                      {analytics.totalMessages}
                    </p>
                    <p className="text-sm text-green-500 mt-2">+8 this month</p>
                  </div>
                  <div className="p-3 rounded-full bg-teal-50 dark:bg-teal-900/20">
                    <MessageSquare className="h-6 w-6 text-teal-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="gradient-text">Monthly Traffic</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="views"
                      stroke="#3B82F6"
                      fill="url(#colorViews)"
                    />
                    <Area
                      type="monotone"
                      dataKey="visitors"
                      stroke="#8B5CF6"
                      fill="url(#colorVisitors)"
                    />
                    <defs>
                      <linearGradient
                        id="colorViews"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#3B82F6"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#3B82F6"
                          stopOpacity={0}
                        />
                      </linearGradient>
                      <linearGradient
                        id="colorVisitors"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#8B5CF6"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#8B5CF6"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="gradient-text">Traffic Sources</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={trafficSources}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) =>
                        `${name} ${(percent ? percent * 100 : 0).toFixed(0)}%`
                      }
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {trafficSources.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Additional Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Top Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="gradient-text">Top Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topProjects.map((project, index) => (
                    <div
                      key={project.id}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{project.title}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-xs text-gray-500">
                            {project.technologies.slice(0, 2).join(", ")}
                          </span>
                          {project.featured && (
                            <Badge variant="secondary" className="text-xs">
                              Featured
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="gradient-text">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div
                        className={`w-8 h-8 bg-gradient-to-r ${getActivityColor(
                          activity.type
                        )} rounded-full flex items-center justify-center`}
                      >
                        {getActivityIcon(activity.type)}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{activity.title}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-xs text-gray-500 capitalize">
                            {activity.action}
                          </span>
                          <span className="text-xs text-gray-400">•</span>
                          <span className="text-xs text-gray-500">
                            {activity.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Performance Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="gradient-text">Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Globe className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">Average Load Time</span>
                    </div>
                    <span className="text-sm font-medium">1.2s</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Target className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Bounce Rate</span>
                    </div>
                    <span className="text-sm font-medium">32%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-orange-500" />
                      <span className="text-sm">Avg. Session</span>
                    </div>
                    <span className="text-sm font-medium">3m 45s</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-purple-500" />
                      <span className="text-sm">Growth Rate</span>
                    </div>
                    <span className="text-sm font-medium text-green-500">
                      +12%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
}
