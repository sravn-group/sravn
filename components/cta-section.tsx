"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbz6URBku_HU2Cc4RGLFlVd_Y3IBpzT8QP7edk1dEi7DlzivMbmQhSjXz5Aptv7jqDqO6Q/exec"

export function CTASection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [enquiryType, setEnquiryType] = useState("")
  const formRef = useRef<HTMLFormElement>(null)

  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form")
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || "",
      enquiryType: enquiryType || "Not specified",
      message: (formData.get("message") as string) || "",
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to submit")
      }

      setIsSubmitted(true)
      form.reset()
      setEnquiryType("")
    } catch (err) {
      setError("Something went wrong. Please try again or email us directly at sravninfo@gmail.com.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium uppercase tracking-wider text-primary mb-4 block">Get Started</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight mb-6 text-balance">
              Enabling Safe and Dignified Pilgrimages for Elders
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
              Whether you are a family seeking support for a loved one, an institution exploring partnership
              opportunities, or a government body looking for reliable elder care solutions, we are here to help.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={scrollToForm}
              >
                Request Information
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent" onClick={scrollToForm}>
                Explore Partnership
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isSubmitted ? (
              <div className="p-8 rounded-lg bg-card border border-border text-center">
                <div className="flex justify-center mb-4">
                  <CheckCircle className="h-16 w-16 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Thank You!</h3>
                <p className="text-muted-foreground mb-4">
                  Thank you for contacting SRAVN. Our team will reach out shortly.
                </p>
                <Button className="mt-6 bg-transparent" variant="outline" onClick={() => setIsSubmitted(false)}>
                  Submit Another Inquiry
                </Button>
              </div>
            ) : (
              <form
                id="contact-form"
                ref={formRef}
                onSubmit={handleSubmit}
                className="p-8 rounded-lg bg-card border border-border"
              >
                <h3 className="text-xl font-semibold mb-6 text-foreground">Contact Us</h3>

                {error && (
                  <div className="mb-4 p-3 bg-destructive/10 border border-destructive/20 rounded-md text-sm text-destructive">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" name="firstName" placeholder="Enter first name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" name="lastName" placeholder="Enter last name" required />
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="Enter email address" required />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="Enter phone number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="enquiryType">Enquiry Type</Label>
                    <Select onValueChange={setEnquiryType} name="enquiryType">
                      <SelectTrigger id="enquiryType">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Individual / Family">Individual / Family</SelectItem>
                        <SelectItem value="Institution">Institution</SelectItem>
                        <SelectItem value="CSR Partnership">CSR Partnership</SelectItem>
                        <SelectItem value="Government Body">Government Body</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Tell us about your requirements" rows={4} />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
