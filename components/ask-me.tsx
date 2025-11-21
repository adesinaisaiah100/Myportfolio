"use client"

import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from 'ai';
import { useState } from 'react';
import { motion } from "framer-motion"
import { Send, Bot, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

export function AskMe() {
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
    }),
  });
  const [input, setInput] = useState('');
  const isLoading = status === 'submitted' || status === 'streaming';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage({ text: input });
      setInput('');
    }
  };

  return (
    <section id="ask-me" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <div className="h-[1px] w-12 md:w-24 bg-border" />
          <h2 className="text-3xl md:text-4xl font-bold text-center">Ask AI About Me</h2>
          <div className="h-[1px] w-12 md:w-24 bg-border" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="h-[600px] flex flex-col border-primary/10 shadow-xl bg-background/50 backdrop-blur-sm">
            <CardHeader className="border-b border-border/50">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Bot className="w-5 h-5 text-primary" />
                Isaiah&apos;s AI Assistant
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col p-0 overflow-auto">
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.length === 0 && (
                    <div className="text-center text-muted-foreground py-10">
                      <p>Hi! I&apos;m an AI trained to answer questions about Isaiah.</p>
                      <p className="text-sm mt-2">Try asking: &quot;What are his skills?&quot; or &quot;Tell me about his projects.&quot;</p>
                    </div>
                  )}
                  
                  {messages.map((m) => (
                    <div
                      key={m.id}
                      className={`flex gap-3 ${
                        m.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`flex gap-3 max-w-[80%] ${
                          m.role === "user" ? "flex-row-reverse" : "flex-row"
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                            m.role === "user"
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {m.role === "user" ? <User size={16} /> : <Bot size={16} />}
                        </div>
                        <div
                          className={`p-3 rounded-lg text-sm ${
                            m.role === "user"
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted"
                          }`}
                        >
                          {m.parts.map((part, index) =>
                            part.type === 'text' ? <span key={index}>{part.text}</span> : null
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {isLoading && (
                    <div className="flex gap-3 justify-start">
                      <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center shrink-0">
                        <Bot size={16} />
                      </div>
                      <div className="bg-muted p-3 rounded-lg text-sm flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-foreground/50 rounded-full animate-bounce" />
                        <span className="w-1.5 h-1.5 bg-foreground/50 rounded-full animate-bounce delay-75" />
                        <span className="w-1.5 h-1.5 bg-foreground/50 rounded-full animate-bounce delay-150" />
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>

              <div className="p-4  z-10">
                <form onSubmit={handleSubmit} className="flex gap-2 relative items-center">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask something about Isaiah..."
                    className="flex-1 bg-secondary/50 border-primary/10 focus-visible:ring-primary/30 h-12 pl-4 pr-12 text-base shadow-inner rounded-full transition-all focus:bg-background"
                    disabled={status !== 'ready' && status !== 'submitted' && status !== 'streaming' && status !== 'error'} 
                  />
                  <Button 
                    type="submit" 
                    size="icon" 
                    disabled={isLoading || !input.trim()}
                    className="absolute right-1.5 h-9 w-9 rounded-full shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
