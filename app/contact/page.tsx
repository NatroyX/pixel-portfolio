"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "contact@example.com",
    link: "mailto:contact@example.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "San Francisco, CA",
    link: "https://maps.google.com/?q=San+Francisco,+CA",
  },
]

const socialLinks = [
  {
    icon: Github,
    title: "GitHub",
    link: "https://github.com",
  },
  {
    icon: Twitter,
    title: "Twitter",
    link: "https://twitter.com",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    link: "https://linkedin.com",
  },
]

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      form.reset()
    }, 2000)
  }

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 pt-20 md:pt-8">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 pixel-text text-center neon-glow">Get in Touch</h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="relative group">
              <div className="absolute inset-0 rounded-xl border-2 border-white/20 group-hover:border-primary/50 transition-colors"></div>
              <div className="absolute inset-[3px] rounded-lg border-2 border-white/20 group-hover:border-primary/50 transition-colors"></div>
              <CardContent className="relative p-6">
                <h2 className="text-2xl font-bold mb-6 pixel-text">Send a Message</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Name" className="pixel-borders" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Your Email" className="pixel-borders" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Subject" className="pixel-borders" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Your Message" className="pixel-borders" rows={6} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full pixel-borders pixel-hover" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="relative group">
                <div className="absolute inset-0 rounded-xl border-2 border-white/20 group-hover:border-primary/50 transition-colors"></div>
                <div className="absolute inset-[3px] rounded-lg border-2 border-white/20 group-hover:border-primary/50 transition-colors"></div>
                <CardContent className="relative p-6">
                  <h2 className="text-2xl font-bold mb-6 pixel-text">Contact Information</h2>
                  <div className="space-y-6">
                    {contactInfo.map((info) => (
                      <motion.a
                        key={info.title}
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 bg-card hover:bg-primary/10 pixel-borders transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <info.icon className="h-6 w-6 text-primary" />
                        <div>
                          <p className="font-bold pixel-text">{info.title}</p>
                          <p className="text-muted-foreground">{info.value}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="relative group">
                <div className="absolute inset-0 rounded-xl border-2 border-white/20 group-hover:border-primary/50 transition-colors"></div>
                <div className="absolute inset-[3px] rounded-lg border-2 border-white/20 group-hover:border-primary/50 transition-colors"></div>
                <CardContent className="relative p-6">
                  <h2 className="text-2xl font-bold mb-6 pixel-text">Connect</h2>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.title}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-card hover:bg-primary/10 pixel-borders transition-colors"
                        whileHover={{ y: -5 }}
                      >
                        <social.icon className="h-6 w-6 text-primary" />
                        <span className="sr-only">{social.title}</span>
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="relative group">
                <div className="absolute inset-0 rounded-xl border-2 border-white/20 group-hover:border-primary/50 transition-colors"></div>
                <div className="absolute inset-[3px] rounded-lg border-2 border-white/20 group-hover:border-primary/50 transition-colors"></div>
                <CardContent className="relative p-6">
                  <h2 className="text-2xl font-bold mb-6 pixel-text">Office Hours</h2>
                  <div className="space-y-2">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

