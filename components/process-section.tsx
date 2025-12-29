"use client"

import { motion } from "framer-motion"
import { ClipboardList, Route, UserCheck, Plane, FileText } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Requirement Assessment",
    description: "Understanding elder's needs, health status, and pilgrimage preferences.",
  },
  {
    step: "02",
    icon: Route,
    title: "Journey Planning",
    description: "Detailed itinerary planning with family coordination and logistics.",
  },
  {
    step: "03",
    icon: UserCheck,
    title: "Caretaker Allocation",
    description: "Assigning trained personnel based on requirements and compatibility.",
  },
  {
    step: "04",
    icon: Plane,
    title: "Pilgrimage Execution",
    description: "On-ground assistance throughout the journey with regular updates.",
  },
  {
    step: "05",
    icon: FileText,
    title: "Post-Journey Report",
    description: "Feedback collection and detailed reporting to families and institutions.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium uppercase tracking-wider text-primary mb-4 block">Our Process</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight mb-6 text-balance">
            How SRAVN Works
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            A transparent, step-by-step process ensuring quality and accountability.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center"
              >
                <div className="relative z-10 mx-auto mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-background border-2 border-primary text-primary">
                  <step.icon className="h-7 w-7" />
                </div>
                <span className="text-xs font-medium text-primary mb-2 block">{step.step}</span>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
