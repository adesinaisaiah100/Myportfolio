"use client"

import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center relative">
          {/* Social Links - Absolute Left on Desktop */}
          <div className="flex items-center gap-6 mb-4 md:mb-0 md:absolute md:left-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>

          {/* Copyright - Centered */}
          <div className="text-sm text-muted-foreground text-center">
            © {currentYear} Isaiah Adesina. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
