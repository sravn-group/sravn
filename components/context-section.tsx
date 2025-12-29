"use client"

import { motion } from "framer-motion"
import { Heart, Users, MapPin } from "lucide-react"

const challenges = [
  {
    icon: Heart,
    title: "Health & Mobility Constraints",
    description:
      "Many senior citizens wish to complete pilgrimages but face mobility, health, or logistical constraints that make independent travel challenging.",
  },
  {
    icon: Users,
    title: "Family Limitations",
    description:
      "Families may be unable to accompany elders due to professional commitments, geographic distances, or other personal limitations.",
  },
  {
    icon: MapPin,
    title: "Lack of Elder-Focused Support",
    description:
      "Existing pilgrimage arrangements often lack dedicated elder-focused support, leaving seniors without proper care during their spiritual journey.",
  },
]

export function ContextSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <img
                src="/sravn-caretakers-helping-seniors-at-indian-temple.jpg"
                alt="SRAVN caretakers helping senior citizens at pilgrimage"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-sm font-medium uppercase tracking-wider text-primary mb-4 block">
              Understanding the Need
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight mb-6 text-balance">
              Why SRAVN Exists
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              SRAVN is positioned as a support system, not a tour operator. We address the institutional and social gaps
              that prevent our elders from fulfilling their spiritual aspirations.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 rounded-lg bg-background border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <challenge.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{challenge.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{challenge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
