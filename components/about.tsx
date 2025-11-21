"use client"

import { motion } from "framer-motion"
import { GraduationCap, Briefcase } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 relative">
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
          <h2 className="text-3xl md:text-4xl font-bold text-center">About Me</h2>
          <div className="h-[1px] w-12 md:w-24 bg-border" />
        </motion.div>

        <div className="flex flex-col items-center max-w-6xl mx-auto">
          {/* Avatar
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="relative w-40 h-40 md:w-48 md:h-48 overflow-hidden rounded-full border-4 border-primary/10 bg-muted/50 shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center bg-secondary/30 text-5xl">
                👨‍💻
              </div>
              {/* <Image src="/about-image.jpg" alt="About Me" fill className="object-cover" /> */}
            {/* </div>
          </motion.div> */} 

          <div className="grid md:grid-cols-2 gap-45  w-full">
            {/* Left Column: Bio & Stats */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-4 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-semibold">
                  A Passionate Frontend Developer
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I am a dedicated frontend developer with a keen eye for detail and a passion for creating user-centric digital experiences. My journey in web development started with a curiosity about how things work on the internet, which quickly turned into a career.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I specialize in building responsive, accessible, and performant web and ai applications using modern technologies like React, Next.js, and TypeScript. I believe in writing clean, maintainable code and constantly learning new tools to improve my craft.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-background/30 backdrop-blur-lg border-primary/10">
                  <CardContent className="p-6 text-center space-y-2">
                    <h3 className="text-4xl font-bold text-primary">4+</h3>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </CardContent>
                </Card>
                <Card className="bg-background/30 backdrop-blur-lg border-primary/10">
                  <CardContent className="p-6 text-center space-y-2">
                    <h3 className="text-4xl font-bold text-primary">20+</h3>
                    <p className="text-sm text-muted-foreground">Projects Completed</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Right Column: Education & Experience */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h4 className="text-xl font-semibold flex items-center gap-2">
                  <Briefcase className="text-primary" /> Experience
                </h4>
                <div className="border-l-2 border-border pl-6 space-y-6 relative">
                  <div className="relative">
                    <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-primary" />
                    <h5 className="font-medium">Senior Frontend Developer</h5>
                    <p className="text-sm text-muted-foreground">Bond Startup • 2023 - 2023</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Leading the frontend team in building scalable web applications.
                    </p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-muted border-2 border-primary" />
                    <h5 className="font-medium">Frontend Developer Intern</h5>
                    <p className="text-sm text-muted-foreground">Letem • 2022 - 2023</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-xl font-semibold flex items-center gap-2">
                  <GraduationCap className="text-primary" /> Education
                </h4>
                <div className="border-l-2 border-border pl-6 space-y-6 relative">
                  <div className="relative">
                    <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-primary" />
                    <h5 className="font-medium">Bachelor of Technology In Automotive Engineering</h5>
                    <p className="text-sm text-muted-foreground">University of Ibadan • 2022 - Present</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
