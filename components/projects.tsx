"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"

import chefClaudeImg from "./chefclaude.png"
import eazyNoteImg from "./eazynote.png"
import mojitoImg from "./mojito.png"
import technestImg from "./Technest.png"
import studyBuddyImg from "./studybuddy.png"
import corecvImg from "./corecvproject.png"

const projects = [
  {
    title: "CoreCV",
    description: "An intelligent resume builder that helps you create, manage, and update resumes with ease. Build a master profile once, paste a job description, and get a tailored resume generated in seconds.",
    tags: ["Next.js", "TypeScript", "Tailwind css", "Ai sdk"],
    liveUrl: "https://corecv.vercel.app",
    repoUrl: "https://corecv.vercel.app",
    image: corecvImg
  },
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
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-6xl mx-auto"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden bg-card/50 border border-border hover:border-primary/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-card via-card/20 to-transparent" />

                  {/* Hover overlay with links */}
                  <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-card border border-border text-foreground hover:scale-110 transition-transform"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
