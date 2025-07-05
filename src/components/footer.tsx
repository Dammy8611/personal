import { motion } from "framer-motion";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  MapPin,
} from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/dtechy", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/dtechy", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/dtechy", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/dtechy", label: "Instagram" },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

const services = [
  "Web Development",
  "Frontend Development",
  "React Applications",
  "API Integration",
];

export default function Footer() {
  return (
    <footer className="footer-section bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold gradient-text-rainbow mb-4">
              Dtechy
            </h3>
            <p className="text-gray-400 mb-4">
              Student developer passionate about creating digital experiences
              with modern web technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-brand-blue">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <motion.a
                      whileHover={{ x: 5 }}
                      className="hover:text-white transition-colors cursor-pointer"
                    >
                      {link.label}
                    </motion.a>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-brand-purple">Services</h4>
            <ul className="space-y-2 text-gray-400">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-brand-orange">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Ajayi Crowther University</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Oyo State, Nigeria</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>dtechy@student.acu.edu.ng</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
        >
          <p>&copy; 2024 Dtechy (Otele Damiloal David). All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
