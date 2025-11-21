"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Send, User, Type, MessageSquare } from "lucide-react"

import { useActionState } from "react"
import { sendEmail } from "@/app/actions"
import { Loader2 } from "lucide-react"

const initialState = {
  message: "",
  success: false,
}

export function Contact() {
  const [state, formAction, isPending] = useActionState(sendEmail, initialState)

  return (
    <section id="contact" className="py-20 relative">
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
          <h2 className="text-3xl md:text-4xl font-bold text-center">Get in Touch</h2>
          <div className="h-[1px] w-12 md:w-24 bg-border" />
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="border-primary/10 bg-background/30 backdrop-blur-lg shadow-2xl">
              <CardHeader className="text-center space-y-2">
                <CardTitle className="text-2xl">Send me a message</CardTitle>
                <CardDescription>
                  Have a project in mind or just want to say hi? I will get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" action={formAction}>
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium flex items-center gap-2 text-muted-foreground">
                      <User className="w-4 h-4" /> Name
                    </label>
                    <Input 
                      id="name" 
                      name="name"
                      placeholder="Your name" 
                      required
                      className="bg-background/50 border-primary/10 focus:border-primary/30 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="title" className="text-sm font-medium flex items-center gap-2 text-muted-foreground">
                      <Type className="w-4 h-4" /> Title
                    </label>
                    <Input 
                      id="title" 
                      name="title"
                      placeholder="What is this regarding?" 
                      required
                      className="bg-background/50 border-primary/10 focus:border-primary/30 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="description" className="text-sm font-medium flex items-center gap-2 text-muted-foreground">
                      <MessageSquare className="w-4 h-4" /> Description
                    </label>
                    <Textarea 
                      id="description" 
                      name="description"
                      placeholder="Tell me more about your project or inquiry..." 
                      required
                      className="min-h-[150px] bg-background/50 border-primary/10 focus:border-primary/30 transition-colors resize-none"
                    />
                  </div>

                  {state.message && (
                    <div className={`text-sm text-center p-2 rounded ${state.success ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                      {state.message}
                    </div>
                  )}

                  <Button className="w-full group" size="lg" disabled={isPending}>
                    {isPending ? (
                      <>
                        Sending...
                        <Loader2 className="w-4 h-4 ml-2 animate-spin" />
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
