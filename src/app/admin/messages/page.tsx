"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { formatDate, formatRelativeTime } from "@/lib/utils";
import {
  Mail,
  MailOpen,
  Trash2,
  Search,
  Reply,
  User,
  Clock,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";

// Define the Message type
type Message = {
  id: number;
  name: string;
  email: string;
  message: string;
  read: boolean;
  createdAt: string;
};

// Add static messages data
const STATIC_MESSAGES: Message[] = [
  {
    id: 1,
    name: "Alice Smith",
    email: "alice@example.com",
    message: "Hello, I have a question about your services.",
    read: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
  },
  {
    id: 2,
    name: "Bob Johnson",
    email: "bob@example.com",
    message: "Can you help me with my account?",
    read: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
  },
  {
    id: 3,
    name: "Carol Lee",
    email: "carol@example.com",
    message: "Thanks for your quick response!",
    read: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 10).toISOString(),
  },
];

export default function AdminMessages() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Use local state for messages
  const [messages, setMessages] = useState<Message[]>(STATIC_MESSAGES);

  // Compute unread messages from local state
  const unreadMessages = messages.filter((msg) => !msg.read);

  // Mark as read by updating local state
  const markAsRead = (id: number) => {
    setMessages((prev) =>
      prev.map((msg) => (msg.id === id ? { ...msg, read: true } : msg))
    );
  };

  // Delete by updating local state
  const deleteMessage = (id: number) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
    // If dialog is open for this message, close it
    if (selectedMessage?.id === id) {
      setIsDialogOpen(false);
      setSelectedMessage(null);
    }
  };

  const filteredMessages = messages.filter((message) => {
    const matchesSearch =
      message.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.message.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const handleMessageClick = (message: Message) => {
    setSelectedMessage(message);
    setIsDialogOpen(true);

    // Mark as read if unread
    if (!message.read) {
      markAsRead(message.id);
    }
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      deleteMessage(id);
    }
  };

  const handleReply = (email: string) => {
    window.open(`mailto:${email}`, "_blank");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold gradient-text">Messages</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Manage your contact form messages
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search messages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
          {unreadMessages.length > 0 && (
            <Badge className="bg-red-500">{unreadMessages.length} unread</Badge>
          )}
        </div>
      </motion.div>

      {/* Messages Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="glass-effect">
          <CardHeader>
            <CardTitle>All Messages ({filteredMessages.length})</CardTitle>
          </CardHeader>
          <CardContent>
            {filteredMessages.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Sender</TableHead>
                    <TableHead>Message</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Received</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredMessages.map((message) => (
                    <TableRow
                      key={message.id}
                      className={`cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 ${
                        !message.read ? "bg-blue-50 dark:bg-blue-900/20" : ""
                      }`}
                      onClick={() => handleMessageClick(message)}
                    >
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-semibold">
                              {message.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div>
                            <div className="font-medium">{message.name}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              {message.email}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="max-w-xs">
                          <p className="text-sm truncate">{message.message}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          {message.read ? (
                            <Badge
                              variant="secondary"
                              className="bg-green-100 text-green-800"
                            >
                              <MailOpen className="h-3 w-3 mr-1" />
                              Read
                            </Badge>
                          ) : (
                            <Badge className="bg-blue-500">
                              <Mail className="h-3 w-3 mr-1" />
                              Unread
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-gray-400" />
                          <span className="text-sm">
                            {formatRelativeTime(
                              message.createdAt || new Date()
                            )}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleReply(message.email);
                            }}
                          >
                            <Reply className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDelete(message.id);
                            }}
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
                <div className="text-6xl mb-4">📬</div>
                <h3 className="text-lg font-semibold mb-2">No messages yet</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  {searchQuery
                    ? "No messages match your search criteria"
                    : "You haven't received any messages yet"}
                </p>
                <MessageSquare className="h-8 w-8 text-gray-400 mx-auto" />
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {/* Message Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Message Details</DialogTitle>
          </DialogHeader>
          {selectedMessage && (
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">
                    {selectedMessage.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    {selectedMessage.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {selectedMessage.email}
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Received on{" "}
                  {formatDate(selectedMessage.createdAt || new Date())}
                </p>
                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                  {selectedMessage.message}
                </p>
              </div>

              <div className="flex space-x-2">
                <Button
                  onClick={() => handleReply(selectedMessage.email)}
                  className="gradient-bg"
                >
                  <Reply className="h-4 w-4 mr-2" />
                  Reply
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
