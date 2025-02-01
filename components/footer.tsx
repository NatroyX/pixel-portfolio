"use client"

import { Github, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
]

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-background/90 backdrop-blur-sm border-t border-border">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Left section - Copyright */}
          <div className="flex flex-col items-center md:items-start space-y-1">
            <p className="text-sm text-foreground/70">Built with Next.js and Tailwind CSS</p>
            <p className="text-xs text-foreground/50">© {currentYear} Your Company. All rights reserved.</p>
          </div>

          {/* Middle section - Navigation */}
          <nav className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-foreground/70 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right section - Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <motion.div
                key={social.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <div className="absolute inset-0 rounded-xl border-2 border-border group-hover:border-primary/50 transition-colors"></div>
                <div className="absolute inset-[3px] rounded-lg border-2 border-border group-hover:border-primary/50 transition-colors"></div>
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center w-12 h-12 rounded-lg text-foreground/70 hover:text-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                  <span className="sr-only">{social.label}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

