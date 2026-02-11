"use client"

import { motion } from "framer-motion"
import { GraduationCap, Briefcase, Code2 } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-6xl mx-auto"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">About</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            A bit about <span className="text-gradient">me</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {/* Bio - spans 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/20 transition-colors duration-500"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">A Passionate Frontend Developer</h3>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am a dedicated frontend developer with a keen eye for detail and a passion for creating user-centric digital experiences. My journey in web development started with a curiosity about how things work on the internet, which quickly turned into a career.
              </p>
              <p>
                I specialize in building responsive, accessible, and performant web and AI applications using modern technologies like React, Next.js, and TypeScript. I believe in writing clean, maintainable code and constantly learning new tools to improve my craft.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/20 transition-all duration-500 flex flex-col items-center justify-center"
            >
              <span className="text-5xl font-bold text-gradient">4+</span>
              <span className="text-sm text-muted-foreground mt-2">Years Experience</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex-1 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/20 transition-all duration-500 flex flex-col items-center justify-center"
            >
              <span className="text-5xl font-bold text-gradient">20+</span>
              <span className="text-sm text-muted-foreground mt-2">Projects Completed</span>
            </motion.div>
          </div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/20 transition-colors duration-500"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Experience</h3>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary shrink-0 mt-1.5" />
                  <div className="w-px flex-1 bg-border" />
                </div>
                <div className="pb-6">
                  <h5 className="font-medium">Senior Frontend Developer</h5>
                  <p className="text-sm text-muted-foreground">Bond Startup &bull; 2023</p>
                  <p className="text-sm text-muted-foreground mt-2">Leading the frontend team in building scalable web applications.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full border-2 border-primary bg-background shrink-0 mt-1.5" />
                </div>
                <div>
                  <h5 className="font-medium">Frontend Developer Intern</h5>
                  <p className="text-sm text-muted-foreground">Letem &bull; 2022 - 2023</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/20 transition-colors duration-500"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-primary shrink-0 mt-1.5" />
              </div>
              <div>
                <h5 className="font-medium text-sm">B.Tech Automotive Engineering</h5>
                <p className="text-sm text-muted-foreground">University of Ibadan &bull; 2022 - Present</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
