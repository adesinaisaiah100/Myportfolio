"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import heroImage from "./myimageforlandingpage.png"
import { useRef } from "react"

const headingWords = ["Frontend", "Web", "Developer"]

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-20 left-[15%] w-20 h-20 border border-primary/20 rounded-xl rotate-12"
          animate={{ y: [0, -30, 0], rotate: [12, -5, 12] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-[20%] w-16 h-16 bg-primary/10 rounded-full"
          animate={{ y: [0, 25, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-32 left-[10%] w-12 h-12 border border-primary/15 rounded-full"
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute bottom-40 right-[15%] w-24 h-24 border border-primary/10 rounded-2xl rotate-45"
          animate={{ y: [0, -15, 0], rotate: [45, 50, 45] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/2 w-8 h-8 bg-primary/15 rounded-md rotate-12"
          animate={{ y: [0, 20, 0], rotate: [12, -12, 12] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>

      <motion.div
        style={{ y, opacity, scale }}
        className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center"
      >
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for work
            </span>
          </motion.div>

          {/* Heading with staggered animation */}
          <div className="space-y-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-muted-foreground font-medium"
            >
              Hi, I&apos;m Isaiah
            </motion.p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9]">
              {headingWords.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.15, ease: [0.25, 0.4, 0.25, 1] }}
                  className={`block ${i === 2 ? 'text-gradient' : ''}`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="text-lg text-muted-foreground max-w-md leading-relaxed"
          >
            I craft beautiful, performant web experiences with modern technologies.
            Passionate about pixel-perfect, accessible interfaces.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <Link href="#projects">
              <Button size="lg" className="rounded-full h-12 px-8 text-base group">
                View Projects <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="#contact">
              <Button variant="outline" size="lg" className="rounded-full h-12 px-8 text-base border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-all duration-300">
                Contact Me
              </Button>
            </Link>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex items-center gap-4 pt-4"
          >
            {[
              { icon: Github, href: "https://github.com/adesinaisaiah100", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/oluwatimileyinadesina", label: "LinkedIn" },
              { icon: Twitter, href: "https://x.com/WIGOH_EP", label: "Twitter" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/social p-3 rounded-xl border border-border hover:border-primary/30 hover:bg-primary/5 text-muted-foreground hover:text-primary transition-all duration-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative flex justify-center"
        >
          <div className="relative">
            {/* Glow behind */}
            <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full scale-75" />

            {/* Image container */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-3xl overflow-hidden border border-primary/10 shadow-2xl shadow-primary/10">
                <Image
                  src={heroImage}
                  alt="Isaiah Adesina"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/40 via-transparent to-transparent" />
              </div>

              {/* Decorative badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-card px-4 py-2 rounded-xl border border-border shadow-lg"
              >
                <span className="text-sm font-medium text-primary">4+ Years</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                className="absolute -top-4 -right-4 bg-card px-4 py-2 rounded-xl border border-border shadow-lg"
              >
                <span className="text-sm font-medium text-primary">20+ Projects</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
