"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Code2 } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with cart functionality, payment processing, and user authentication.",
    tags: ["Next.js", "TypeScript", "Stripe"],
    liveUrl: "#",
    repoUrl: "#",
    gradient: "from-blue-500/20 to-purple-500/20"
  },
  {
    title: "Task Management App",
    description: "A collaborative task manager with real-time updates, drag-and-drop interface, and team features.",
    tags: ["React", "Firebase", "Tailwind"],
    liveUrl: "#",
    repoUrl: "#",
    gradient: "from-emerald-500/20 to-teal-500/20"
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather tracking application with detailed forecasts and location-based services.",
    tags: ["Vue.js", "OpenWeather API"],
    liveUrl: "#",
    repoUrl: "#",
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and Framer Motion.",
    tags: ["Next.js", "Framer Motion"],
    liveUrl: "#",
    repoUrl: "#",
    gradient: "from-pink-500/20 to-rose-500/20"
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for tracking social media performance across multiple platforms.",
    tags: ["React", "D3.js", "Node.js"],
    liveUrl: "#",
    repoUrl: "#",
    gradient: "from-violet-500/20 to-indigo-500/20"
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <div className="h-[1px] w-12 md:w-24 bg-border" />
          <h2 className="text-3xl md:text-4xl font-bold text-center">Featured Projects</h2>
          <div className="h-[1px] w-12 md:w-24 bg-border" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group border-primary/10 bg-background/30 backdrop-blur-lg hover:shadow-xl transition-all duration-300">
                {/* Image Area */}
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  {/* Placeholder Gradient / Image */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} group-hover:scale-110 transition-transform duration-500 flex items-center justify-center`}>
                    <Code2 className="w-12 h-12 text-muted-foreground/20" />
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-background/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 p-6 text-center">
                    <p className="text-sm font-medium text-foreground/90 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex gap-3">
                      <Button size="sm" variant="default" asChild className="h-8">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3.5 h-3.5 mr-2" /> Preview
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild className="h-8">
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3.5 h-3.5 mr-2" /> Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <CardContent className="p-5">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary/80 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
