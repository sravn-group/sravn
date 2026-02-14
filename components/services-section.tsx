"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Accessibility, UserCheck, Users2, Luggage, Phone, MapPinned, Clock, HeartPulse } from "lucide-react"

const services = [
  {
    title: "Assisted Mobility",
    description: "On-ground physical support for walking, wheelchair assistance, and navigating difficult terrains.",
    icon: Accessibility,
  },
  {
    title: "Dedicated Companionship",
    description: "Constant supervision and emotional support throughout the entire pilgrimage journey.",
    icon: UserCheck,
  },
  {
    title: "Queue Management",
    description: "Expert navigation through crowds and queue management at temple sites.",
    icon: Users2,
  },
  {
    title: "Luggage Assistance",
    description: "Complete handling of luggage and daily essentials during travel.",
    icon: Luggage,
  },
  {
    title: "Family Coordination",
    description: "Regular updates and communication with family members and organizers.",
    icon: Phone,
  },
  {
    title: "Route Planning",
    description: "Optimized route planning considering elder-friendly paths and rest stops.",
    icon: MapPinned,
  },
  {
    title: "Schedule Management",
    description: "Flexible scheduling with adequate rest periods and medical breaks.",
    icon: Clock,
  },
  {
    title: "Health Monitoring",
    description: "Basic health monitoring and emergency response coordination.",
    icon: HeartPulse,
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium uppercase tracking-wider text-primary mb-4 block">What We Offer</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight mb-6 text-balance">
            Comprehensive Support Services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Our services are designed to provide complete care and support, ensuring every aspect of the pilgrimage is
            handled with professionalism.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10">
          {services.map((service, index) => (
            <Feature key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Feature({
  title,
  description,
  icon: Icon,
  index,
}: {
  title: string
  description: string
  icon: React.ElementType
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={cn(
        "flex flex-col py-10 relative group/feature border-border",
        "lg:border-r",
        (index === 0 || index === 4) && "lg:border-l",
        index < 4 && "lg:border-b",
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-linear-to-t from-muted to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-linear-to-b from-muted to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-muted-foreground">
        <Icon className="h-6 w-6" />
      </div>
      <div className="text-lg font-semibold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-border group-hover/feature:bg-primary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-foreground">
          {title}
        </span>
      </div>
      <p className="text-sm text-muted-foreground max-w-xs relative z-10 px-10 leading-relaxed">{description}</p>
    </motion.div>
  )
}
