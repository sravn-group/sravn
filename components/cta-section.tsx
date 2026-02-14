"use client"

import { useEffect, useState, FormEvent } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function CTASection() {
    const [loading, setLoading] = useState(false)
    //const [enquiryType, setEnquiryType] = useState("")
    const [status, setStatus] = useState<"" | "success" | "error">("")
    const [timeline, setTimeline] = useState("")

    
    useEffect(() => {
      if (status) {
        const timer = setTimeout(() => setStatus(""), 2500)
        return () => clearTimeout(timer)
      }
    }, [status])
    
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setLoading(true)
      
      const form = e.currentTarget
      const formData = new FormData(form)
      console.log("Form Data:", Object.fromEntries(formData.entries()))
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
      if(!accessKey){
        console.error("Web3Forms access key is not set in environment variables.");
      }
      formData.append(
        "access_key",
        accessKey as string
      )
      
      //formData.append("enquiryType", enquiryType)
      formData.append("timeline", timeline)

      formData.append("subject", "New Contact Form Submission")
      
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        })
        
        const data = await res.json()
        console.log("Response from Web3Forms:", data)
      if (data.success) {
        setStatus("success")
        form.reset()
        //setEnquiryType("")
        setTimeline("")

      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }

    setLoading(false)
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
              <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                Request Information
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent">
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
                        <form
              onSubmit={handleSubmit}
              className="p-8 rounded-lg bg-card border border-border"
            >
              <h3 className="text-xl font-semibold mb-6 text-foreground">
                Contact Us
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    name="firstName"
                    id="firstName"
                    placeholder="Enter first name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    name="lastName"
                    id="lastName"
                    placeholder="Enter last name"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Enter email address"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    name="phone"
                    id="phone"
                    type="tel"
                    placeholder="Enter phone number"
                    required
                  />
                </div>

                {/* <div className="space-y-2">
                  <Label>Enquiry Type</Label>
                  <Select value={enquiryType} onValueChange={setEnquiryType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="individual">
                        Individual / Family
                      </SelectItem>
                      <SelectItem value="institution">
                        Institution
                      </SelectItem>
                      <SelectItem value="csr">
                        CSR Partnership
                      </SelectItem>
                      <SelectItem value="government">
                        Government Body
                      </SelectItem>
                      <SelectItem value="other">
                        Other
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div> */}
              </div>
              <div className="space-y-2 mb-4">
                <Label>When are you planning the pilgrimage?</Label>
                <Select value={timeline} onValueChange={setTimeline}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="within_1_month">
                      Within 1 Month
                    </SelectItem>
                    <SelectItem value="within_3_months">
                      Within 3 Months
                    </SelectItem>
                    <SelectItem value="just_exploring">
                      Just Exploring
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>


              <div className="space-y-2 mb-6">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  name="message"
                  id="message"
                  placeholder="Tell us about your requirements"
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit Inquiry"}
              </Button>

              {/* Status Messages */}
              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 text-green-500 text-sm font-medium"
                >
                  ✅ Inquiry submitted successfully!
                </motion.p>
              )}

              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 text-red-500 text-sm font-medium"
                >
                  ❌ Failed to submit. Please try again.
                </motion.p>
              )}
            </form>
        </motion.div>
        </div>
      </div>
    </section>
  )
}
