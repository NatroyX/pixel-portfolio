"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Pixel RPG Game",
    category: "Game",
    description: "A retro-style RPG built with React and Canvas",
    longDescription:
      "An immersive pixel art RPG featuring turn-based combat, character customization, and procedurally generated dungeons.",
    technologies: ["React", "Canvas", "TypeScript", "Node.js"],
    image: "/placeholder.svg?height=300&width=500&text=RPG+Game",
    demo: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Weather Pixels",
    category: "Web App",
    description: "Weather app with pixel art animations",
    longDescription:
      "A weather application featuring unique pixel art animations for different weather conditions and time of day.",
    technologies: ["Next.js", "API", "Animation", "TypeScript"],
    image: "/placeholder.svg?height=300&width=500&text=Weather+App",
    demo: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Pixel Art Editor",
    category: "Tool",
    description: "Online pixel art creation tool",
    longDescription: "A full-featured pixel art editor with layers, animation support, and export options.",
    technologies: ["React", "Canvas", "TypeScript", "WebGL"],
    image: "/placeholder.svg?height=300&width=500&text=Pixel+Editor",
    demo: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Retro Chat",
    category: "Web App",
    description: "Real-time chat app with a retro interface",
    longDescription: "A nostalgic chat application with real-time messaging, emojis, and customizable pixel avatars.",
    technologies: ["Next.js", "Socket.io", "MongoDB", "TypeScript"],
    image: "/placeholder.svg?height=300&width=500&text=Retro+Chat",
    demo: "#",
    github: "#",
  },
]

const categories = ["All", "Game", "Web App", "Tool"]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 pt-20 md:pt-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 pixel-text text-center neon-glow">My Projects</h1>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.div key={category} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="relative group"
              >
                <div className="absolute inset-0 rounded-xl border-2 border-white/20 group-hover:border-primary/50 transition-colors"></div>
                <div className="absolute inset-[3px] rounded-lg border-2 border-white/20 group-hover:border-primary/50 transition-colors"></div>
                <span className="relative">{category}</span>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <Card className="relative group overflow-hidden h-full">
                  <div className="absolute inset-0 rounded-xl border-2 border-white/20 group-hover:border-primary/50 transition-colors"></div>
                  <div className="absolute inset-[3px] rounded-lg border-2 border-white/20 group-hover:border-primary/50 transition-colors"></div>
                  <CardContent className="relative p-0">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="text-center p-4">
                          <h3 className="text-xl font-bold mb-2 pixel-text text-primary">{project.title}</h3>
                          <p className="text-sm text-foreground/80 mb-4">{project.description}</p>
                          <div className="flex justify-center space-x-4">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                              <Button asChild size="sm" className="relative group">
                                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                  <div className="absolute inset-0 rounded-xl border-2 border-primary/50 group-hover:border-primary transition-colors"></div>
                                  <div className="absolute inset-[3px] rounded-lg border-2 border-primary/50 group-hover:border-primary transition-colors"></div>
                                  <span className="relative">
                                    <ExternalLink className="mr-2 h-4 w-4 inline-block" /> Demo
                                  </span>
                                </a>
                              </Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                              <Button asChild size="sm" variant="outline" className="relative group">
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                  <div className="absolute inset-0 rounded-xl border-2 border-white/20 group-hover:border-primary/50 transition-colors"></div>
                                  <div className="absolute inset-[3px] rounded-lg border-2 border-white/20 group-hover:border-primary/50 transition-colors"></div>
                                  <span className="relative">
                                    <Github className="mr-2 h-4 w-4 inline-block" /> Code
                                  </span>
                                </a>
                              </Button>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 pixel-text">{project.title}</h3>
                      <p className="text-foreground/70 mb-4">{project.longDescription}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="relative group/badge">
                            <div className="absolute inset-0 rounded-xl border border-white/20 group-hover/badge:border-primary/50 transition-colors"></div>
                            <span className="relative">{tech}</span>
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

