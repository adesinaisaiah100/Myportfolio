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
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl mx-auto text-center"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Get in <span className="text-gradient">Touch</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="border-border bg-card/50 backdrop-blur-sm shadow-xl hover:border-primary/20 transition-colors duration-500">
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
                      className="bg-card/50 border-border focus:border-primary/30 transition-colors"
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
                      className="bg-card/50 border-border focus:border-primary/30 transition-colors"
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
                      className="min-h-[150px] bg-card/50 border-border focus:border-primary/30 transition-colors resize-none"
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
