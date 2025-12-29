"use client"

import { motion } from "framer-motion"
import { Heart, Shield, Eye, Scale, HandHeart } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Dignity & Respect",
    description: "Every senior citizen is treated with the utmost dignity and respect they deserve.",
  },
  {
    icon: Shield,
    title: "Safety & Security",
    description: "Uncompromising focus on the safety and security of our beneficiaries.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Clear, transparent operations with regular communication and accountability.",
  },
  {
    icon: Scale,
    title: "Ethical Conduct",
    description: "Highest standards of ethical service delivery in all our operations.",
  },
  {
    icon: HandHeart,
    title: "Social Responsibility",
    description: "Deep commitment to social welfare and community service.",
  },
]

export function ValuesSection() {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium uppercase tracking-wider text-primary mb-4 block">Our Foundation</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight mb-6 text-balance">
            Values & Governance
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Our operations are guided by principles that ensure the highest standards of care and accountability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-4 mx-auto inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                <value.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
