import { useState } from "react";
import { motion } from "framer-motion";
import AdminSidebar from "./sidebar";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Menu, Sun, Moon, Bell } from "lucide-react";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      <AdminSidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      <div className="flex-1 md:ml-0">
        {/* Header */}
        <motion.header
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen(true)}
                className="md:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Admin Panel
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Manage your portfolio
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Bell className="h-5 w-5" />
              </Button>

              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">D</span>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Main Content */}
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-6"
        >
          {children}
        </motion.main>
      </div>
    </div>
  );
}
