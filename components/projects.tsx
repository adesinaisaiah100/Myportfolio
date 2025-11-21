"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"

import chefClaudeImg from "./chefclaude.png"
import eazyNoteImg from "./eazynote.png"
import mojitoImg from "./mojito.png"
import technestImg from "./Technest.png"
import studyBuddyImg from "./studybuddy.png"

const projects = [
  {
    title: "An Ai Chef Platform ",
    description: "A platform that allows users to upload their available ingedients and get best recipe suggestions using AI.",
    tags: ["Next.js", "TypeScript", "Tailwind css"],
    liveUrl: "https://chefclaude-black.vercel.app/",
    repoUrl: "https://github.com/adesinaisaiah100/AI_Recipe",
    image: chefClaudeImg
  },
  {
    title: "Eazy notes App",
    description: "Eazy notes is a note taking application that allows users to create, edit, and organize their notes seamlessly using ai to help summarize and find note ",
    tags: ["Next js", "Mongodb", "Tailwind"],
    liveUrl: "https://eazy-notes.vercel.app/",
    repoUrl: "https://github.com/adesinaisaiah100/Notes_App",
    image: eazyNoteImg
  },
  {
    title: "Mojito's Website Clone",
    description: "A mojito's website clone built with React.js, featuring a modern and sleek design with responsive layout and interactive elements.",
    tags: ["React js", "Gsap"],
    liveUrl: "https://mojitos-app.vercel.app/",
    repoUrl: "https://github.com/adesinaisaiah100/mojito-s-app",
    image: mojitoImg
  },
  {
    title: "Technest",
    description: "A blog that shares insights, tutorials, and the latest trends in technology, web development, and programming.",
    tags: ["Next.js", "Framer motion"],
    liveUrl: "https://tblog-ivory.vercel.app/",
    repoUrl: "https://github.com/adesinaisaiah100/Tblog",
    image: technestImg
  },
  {
    title: "Study Buddy",
    description: "Study buddy is an ai platform that helps students to organize their study materials, generate quizzes, and provide personalized study plans to enhance learning efficiency.",
    tags: ["Next js", "Tailwind css", "Ai sdk"],
    liveUrl: "https://study-buddy-prototype.vercel.app/",
    repoUrl: "https://github.com/adesinaisaiah100/StudyBuddy_Prototype",
    image: studyBuddyImg
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
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
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
