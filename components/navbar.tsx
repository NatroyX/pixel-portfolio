"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"
import { cn } from "@/lib/utils"
import { HomeIcon, UserIcon, FolderIcon, MailIcon } from 'lucide-react'
import { useState } from "react"

const navItems = [
  { name: "Home", path: "/", icon: HomeIcon },
  { name: "About", path: "/about", icon: UserIcon },
  { name: "Projects", path: "/projects", icon: FolderIcon },
  { name: "Contact", path: "/contact", icon: MailIcon },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed left-0 top-0 h-screen w-20 flex flex-col items-center justify-between py-8 bg-background/90 backdrop-blur-sm z-50 border-r border-border">
      <div className="flex flex-col items-center space-y-6">
        {navItems.map((item) => {
          const isActive = pathname === item.path
          const Icon = item.icon
          return (
            <Link key={item.path} href={item.path} className={cn("relative group", isActive && "text-primary")}>
              <div className="absolute inset-0 rounded-xl border-2 border-border group-hover:border-primary/50 transition-colors"></div>
              <div className="absolute inset-[3px] rounded-lg border-2 border-border group-hover:border-primary/50 transition-colors"></div>
              <div
                className={cn(
                  "relative w-12 h-12 flex items-center justify-center rounded-lg transition-colors",
                  isActive ? "text-primary" : "text-foreground/70 hover:text-primary",
                )}
              >
                <Icon className="w-5 h-5" />
              </div>
            </Link>
          )
        })}
      </div>
      <div className="relative group">
        <div className="absolute inset-0 rounded-xl border-2 border-border group-hover:border-primary/50 transition-colors"></div>
        <div className="absolute inset-[3px] rounded-lg border-2 border-border group-hover:border-primary/50 transition-colors"></div>
        <div className="relative w-12 h-12 flex items-center justify-center">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
