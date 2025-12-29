"use client"

import { motion } from "framer-motion"
import { Shield, Users, ClipboardCheck, HeartHandshake } from "lucide-react"

const approaches = [
  {
    icon: Users,
    title: "Trained Caretakers",
    description: "Assigned trained caretakers for personalized assistance and supervision throughout the journey.",
  },
  {
    icon: Shield,
    title: "Safety & Dignity",
    description: "Unwavering focus on safety, dignity, and responsible conduct at every step.",
  },
  {
    icon: ClipboardCheck,
    title: "Clear Processes",
    description: "Transparent processes and accountability measures during the entire journey.",
  },
  {
    icon: HeartHandshake,
    title: "Family Coordination",
    description: "Seamless coordination with families and institutions for peace of mind.",
  },
]

export function ApproachSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium uppercase tracking-wider text-primary mb-4 block">Our Approach</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight mb-6 text-balance">
              A Structured Model for Elder Care
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
              SRAVN operates at the intersection of elder welfare, spiritual well-being, and responsible service
              delivery. Our structured model ensures every senior citizen experiences their pilgrimage with complete
              peace of mind.
            </p>

            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-muted">
              <img
                src="/elderly-person-praying-at-temple-with-peaceful-exp.jpg"
                alt="Senior citizen at pilgrimage site"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {approaches.map((approach, index) => (
              <div
                key={approach.title}
                className="p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                  <approach.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{approach.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{approach.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
