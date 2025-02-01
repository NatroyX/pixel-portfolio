"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Github, ExternalLink, Monitor, Palette, Code } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"


const recentProjects = [
  {
    title: "Pixel RPG Game",
    description: "A retro-style RPG built with React and Canvas",
    tags: ["React", "Canvas", "TypeScript"],
    image: "/placeholder.svg?height=200&width=300&text=RPG+Game",
    demo: "#",
    github: "#",
  },
  {
    title: "Weather Pixels",
    description: "Weather app with pixel art animations",
    tags: ["Next.js", "API", "Animation"],
    image: "/placeholder.svg?height=200&width=300&text=Weather+App",
    demo: "#",
    github: "#",
  },
]

const skills = [
  {
    icon: Monitor,
    title: "Web Development",
    description: "Creating responsive and performant web applications using Next.js and React.",
    items: ["Next.js", "React", "TypeScript", "Node.js"],
  },
  {
    icon: Palette,
    title: "Pixel Art & Design",
    description: "Crafting unique pixel art assets and UI elements for distinctive digital experiences.",
    items: ["UI/UX Design", "Pixel Art", "Animation", "Illustration"],
  },
  {
    icon: Code,
    title: "Full Stack Development",
    description: "Building complete web solutions from frontend to backend.",
    items: ["API Development", "Database Design", "Authentication", "Cloud Services"],
  },
]

const testimonials = [
  {
    text: "Amazing pixel art style and modern functionality!",
    author: "Jane Doe",
    role: "Art Director",
  },
  {
    text: "The perfect blend of retro and contemporary design.",
    author: "John Smith",
    role: "Tech Lead",
  },
]

export default function Home() {
  return (
    <div className="space-y-32 pt-20 md:pt-0">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center relative">
        <div className="absolute inset-0 bg-grid-small-primary/20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[50vh] w-[50vh] bg-primary/30 rounded-full filter blur-[100px] animate-pulse"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-center px-4"
        >
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 rounded-xl border-2 border-border"></div>
            <div className="absolute inset-[3px] rounded-lg border-2 border-border"></div>
            <img
              src="/placeholder.svg?height=120&width=120"
              alt="Avatar"
              className="w-24 h-24 md:w-30 md:h-30 rounded-lg relative"
            />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold pixel-text mb-6">
            Crafting <span className="text-primary neon-glow pixel-glitch">Pixel</span> Perfect Digital Experiences
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto mb-8 pixel-cursor">
            Full-stack developer specializing in pixel art aesthetics and modern web technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="relative group">
                <Link href="/projects">
                  <div className="absolute inset-0 rounded-xl border-2 border-primary/50 group-hover:border-primary transition-colors"></div>
                  <div className="absolute inset-[3px] rounded-lg border-2 border-primary/50 group-hover:border-primary transition-colors"></div>
                  <span className="relative">
                    Explore Projects <ArrowRight className="ml-2 h-4 w-4 inline-block" />
                  </span>
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" asChild size="lg" className="relative group">
                <Link href="/contact">
                  <div className="absolute inset-0 rounded-xl border-2 border-border group-hover:border-primary/50 transition-colors"></div>
                  <div className="absolute inset-[3px] rounded-lg border-2 border-border group-hover:border-primary/50 transition-colors"></div>
                  <span className="relative">Get in Touch</span>
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="relative px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 pixel-text text-center neon-glow">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="relative group h-full">
                  <div className="absolute inset-0 rounded-xl border-2 border-border group-hover:border-primary/50 transition-colors"></div>
                  <div className="absolute inset-[3px] rounded-lg border-2 border-border group-hover:border-primary/50 transition-colors"></div>
                  <CardContent className="relative p-6">
                    <div className="mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <skill.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 pixel-text">{skill.title}</h3>
                    <p className="text-foreground/70 mb-4">{skill.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <Badge key={item} variant="outline" className="relative group/badge">
                          <div className="absolute inset-0 rounded-xl border border-border group-hover/badge:border-primary/50 transition-colors"></div>
                          <span className="relative">{item}</span>
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Recent Projects */}
      <section className="relative px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold pixel-text mb-4 sm:mb-0 neon-glow">Recent Projects</h2>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="outline" className="relative group">
                <Link href="/projects">
                  <div className="absolute inset-0 rounded-xl border-2 border-border group-hover:border-primary/50 transition-colors"></div>
                  <div className="absolute inset-[3px] rounded-lg border-2 border-border group-hover:border-primary/50 transition-colors"></div>
                  <span className="relative">View All Projects</span>
                </Link>
              </Button>
            </motion.div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {recentProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="relative group overflow-hidden">
                  <div className="absolute inset-0 rounded-xl border-2 border-border group-hover:border-primary/50 transition-colors"></div>
                  <div className="absolute inset-[3px] rounded-lg border-2 border-border group-hover:border-primary/50 transition-colors"></div>
                  <CardContent className="relative p-0">
                    <div className="aspect-video relative">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 pixel-text">{project.title}</h3>
                      <p className="text-foreground/70 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="relative group/badge">
                            <div className="absolute inset-0 rounded-xl border border-border group-hover/badge:border-primary/50 transition-colors"></div>
                            <span className="relative">{tag}</span>
                          </Badge>
                        ))}
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button asChild size="sm" className="relative group">
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <div className="absolute inset-0 rounded-xl border-2 border-primary/50 group-hover:border-primary transition-colors"></div>
                              <div className="absolute inset-[3px] rounded-lg border-2 border-primary/50 group-hover:border-primary transition-colors"></div>
                              <span className="relative">
                                <ExternalLink className="mr-2 h-4 w-4 inline-block" /> Live Demo
                              </span>
                            </a>
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button asChild size="sm" variant="outline" className="relative group">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <div className="absolute inset-0 rounded-xl border-2 border-border group-hover:border-primary/50 transition-colors"></div>
                              <div className="absolute inset-[3px] rounded-lg border-2 border-border group-hover:border-primary/50 transition-colors"></div>
                              <span className="relative">
                                <Github className="mr-2 h-4 w-4 inline-block" /> Source
                              </span>
                            </a>
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="relative px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 pixel-text text-center neon-glow">What People Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="relative group h-full">
                  <div className="absolute inset-0 rounded-xl border-2 border-border group-hover:border-primary/50 transition-colors"></div>
                  <div className="absolute inset-[3px] rounded-lg border-2 border-border group-hover:border-primary/50 transition-colors"></div>
                  <CardContent className="relative p-6">
                    <p className="text-lg italic mb-4 text-foreground/70">{testimonial.text}</p>
                    <div>
                      <p className="font-bold pixel-text">{testimonial.author}</p>
                      <p className="text-foreground/50">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}

