"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { MainNav } from "@/components/main-nav"
import { Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle the form submission here
    setFormSubmitted(true)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold text-primary">
            TechInsight
          </Link>
          <MainNav />
          <button className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      <main className="flex-1">
        <div className="container px-4 py-12 md:px-6">
          <div className="flex flex-col items-start gap-4 md:gap-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
              <p className="text-muted-foreground md:text-xl">
                Get in touch with our team. We'd love to hear from you!
              </p>
            </div>
          </div>

          <div className="grid gap-8 mt-8 md:grid-cols-2">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {formSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <div className="rounded-full bg-primary/10 p-3 mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6 text-primary"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. We'll respond to your inquiry shortly.
                      </p>
                      <Button className="mt-4" onClick={() => setFormSubmitted(false)}>
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid gap-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="first-name">First name</Label>
                            <Input id="first-name" placeholder="John" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="last-name">Last name</Label>
                            <Input id="last-name" placeholder="Doe" required />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" placeholder="john.doe@example.com" type="email" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Select>
                            <SelectTrigger id="subject">
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">General Inquiry</SelectItem>
                              <SelectItem value="support">Technical Support</SelectItem>
                              <SelectItem value="feedback">Feedback</SelectItem>
                              <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                              <SelectItem value="press">Press Inquiry</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            placeholder="Please provide details about your inquiry..."
                            className="min-h-[120px]"
                            required
                          />
                        </div>
                      </div>
                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Here are the different ways you can reach us.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm text-muted-foreground">contact@techinsight.com</p>
                      <p className="text-sm text-muted-foreground">support@techinsight.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-sm text-muted-foreground">Mon-Fri, 9:00 AM - 5:00 PM EST</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Office</h3>
                      <p className="text-sm text-muted-foreground">123 Tech Avenue</p>
                      <p className="text-sm text-muted-foreground">San Francisco, CA 94107</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Follow Us</CardTitle>
                  <CardDescription>Stay connected with us on social media.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <Link href="#" className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                      <span>Twitter</span>
                    </Link>
                    <Link href="#" className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                      <span>LinkedIn</span>
                    </Link>
                    <Link href="#" className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                      <span>GitHub</span>
                    </Link>
                    <Link href="#" className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                        <path d="m10 15 5-3-5-3z" />
                      </svg>
                      <span>YouTube</span>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
          <p className="text-sm text-muted-foreground">&copy; 2025 TechInsight. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Twitter
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              LinkedIn
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              GitHub
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              YouTube
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
