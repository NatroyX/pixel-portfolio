"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const skills = [
  { name: "React/Next.js", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Pixel Art", level: 80 },
  { name: "UI/UX Design", level: 75 },
  { name: "Node.js", level: 70 },
]

const experience = [
  {
    title: "Senior Frontend Developer",
    company: "Pixel Perfect Studios",
    period: "2021 - Present",
    description: "Leading the frontend development team and implementing pixel-perfect designs.",
  },
  {
    title: "UI Developer",
    company: "Digital Crafts Inc",
    period: "2019 - 2021",
    description: "Created responsive web applications and maintained pixel art design system.",
  },
  {
    title: "Junior Developer",
    company: "Tech Startups Ltd",
    period: "2017 - 2019",
    description: "Developed and maintained various web applications using React and Node.js.",
  },
]

const education = [
  {
    degree: "Master of Computer Science",
    school: "Tech University",
    year: "2017",
  },
  {
    degree: "Bachelor of Digital Arts",
    school: "Creative Institute",
    year: "2015",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 pt-20 md:pt-8">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 pixel-text text-center neon-glow">About Me</h1>

          <Card className="relative group mb-12">
            <div className="absolute inset-0 rounded-xl border-2 border-white/20 group-hover:border-primary/50 transition-colors"></div>
            <div className="absolute inset-[3px] rounded-lg border-2 border-white/20 group-hover:border-primary/50 transition-colors"></div>
            <CardContent className="relative p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative group">
                  <div className="absolute inset-0 rounded-xl border-2 border-white/20 group-hover:border-primary/50 transition-colors"></div>
                  <div className="absolute inset-[3px] rounded-lg border-2 border-white/20 group-hover:border-primary/50 transition-colors"></div>
                  <img
                    src="/placeholder.svg?height=400&width=400&text=Profile"
                    alt="Profile"
                    className="w-full rounded relative"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-lg">
                    Hi! I'm a passionate developer and pixel artist with over 5 years of experience in creating unique
                    digital experiences. I combine modern web technologies with retro-inspired designs to build
                    memorable and functional applications.
                  </p>
                  <p className="text-lg">
                    My journey began with a love for classic video games and pixel art, which naturally evolved into web
                    development. Today, I help businesses and individuals bring their digital visions to life with a
                    distinctive pixel art aesthetic.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <h2 className="text-2xl md:text-3xl font-bold mb-6 pixel-text neon-glow">Skills</h2>
          <Card className="relative group mb-12">
            <div className="absolute inset-0 rounded-xl border-2 border-white/20 group-hover:border-primary/50 transition-colors"></div>
            <div className="absolute inset-[3px] rounded-lg border-2 border-white/20 group-hover:border-primary/50 transition-colors"></div>
            <CardContent className="relative p-6">
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-bold pixel-text">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full h-4 bg-muted relative rounded-full overflow-hidden">
                      <div className="absolute inset-0 rounded-full border border-white/20"></div>
                      <motion.div
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Experience */}
          <h2 className="text-2xl md:text-3xl font-bold mb-6 pixel-text neon-glow">Experience</h2>
          <Card className="relative group mb-12">
            <div className="absolute inset-0 rounded-xl border-2 border-white/20 group-hover:border-primary/50 transition-colors"></div>
            <div className="absolute inset-[3px] rounded-lg border-2 border-white/20 group-hover:border-primary/50 transition-colors"></div>
            <CardContent className="relative p-6">
              <div className="space-y-8">
                {experience.map((job, index) => (
                  <motion.div
                    key={job.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-8 border-l-2 border-primary"
                  >
                    <div className="absolute w-3 h-3 bg-primary left-[-7px] top-2 rounded-full"></div>
                    <h3 className="text-xl font-bold pixel-text">{job.title}</h3>
                    <p className="text-primary">{job.company}</p>
                    <p className="text-muted-foreground">{job.period}</p>
                    <p className="mt-2">{job.description}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <h2 className="text-2xl md:text-3xl font-bold mb-6 pixel-text neon-glow">Education</h2>
          <Card className="relative group">
            <div className="absolute inset-0 rounded-xl border-2 border-white/20 group-hover:border-primary/50 transition-colors"></div>
            <div className="absolute inset-[3px] rounded-lg border-2 border-white/20 group-hover:border-primary/50 transition-colors"></div>
            <CardContent className="relative p-6">
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <h3 className="text-xl font-bold pixel-text">{edu.degree}</h3>
                    <p className="text-primary">{edu.school}</p>
                    <p className="text-muted-foreground">{edu.year}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

