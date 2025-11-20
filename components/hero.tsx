"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center md:px-5  justify-center pt-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/30 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            Available for work
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Frontend Web <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Developer
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
            I create beautiful and stunning web experiences with modern technologies. 
            Passionate about building accessible, pixel-perfect, and performant web applications.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="rounded-full h-12 px-8 text-base">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full h-12 px-8 text-base">
              Contact Me
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-8 text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors"><Github size={24} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Linkedin size={24} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Twitter size={24} /></a>
          </div>
        </motion.div>

        {/* Avatar / Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative z-10"
          >
            <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-4 border-background shadow-2xl">
              {/* Placeholder for user avatar - using a high quality gradient/abstract fallback or placeholder service */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-400 dark:from-slate-800 dark:to-slate-950 flex items-center justify-center">
                 <span className="text-6xl">👨‍💻</span>
              </div>
              {/* If you have a real image, uncomment below */}
              {/* <Image 
                src="/avatar-placeholder.jpg" 
                alt="Avatar" 
                fill 
                className="object-cover"
              /> */}
            </div>
            
            {/* Floating Cards/Elements for decoration */}
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -left-8 top-20 bg-card p-4 rounded-xl shadow-lg border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">R</div>
                <div>
                  <p className="text-sm font-bold">React</p>
                  <p className="text-xs text-muted-foreground">Expert</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              className="absolute -right-4 bottom-20 bg-card p-4 rounded-xl shadow-lg border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">UI</div>
                <div>
                  <p className="text-sm font-bold">Design</p>
                  <p className="text-xs text-muted-foreground">Creative</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Glow behind avatar */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-purple-700/20 blur-[80px] -z-10 transform scale-80" />
        </motion.div>
      </div>
    </section>
  )
}
