"use client"

import { motion } from "framer-motion"
import { User, Home, Building2, Landmark, Building } from "lucide-react"

const stakeholders = [
  {
    icon: User,
    title: "Senior Citizens",
    description: "Elders seeking safe, dignified pilgrimage experiences with professional support.",
  },
  {
    icon: Home,
    title: "Families & Caregivers",
    description: "Family members seeking reliable care solutions for their elderly loved ones.",
  },
  {
    icon: Building2,
    title: "CSR Foundations",
    description: "Corporate entities looking to support elder welfare through meaningful initiatives.",
  },
  {
    icon: Landmark,
    title: "Government Bodies",
    description: "Welfare departments and government agencies focused on elder citizen programs.",
  },
  {
    icon: Building,
    title: "Religious Institutions",
    description: "Trusts and religious organizations facilitating pilgrimages for devotees.",
  },
]

export function StakeholdersSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium uppercase tracking-wider text-primary mb-4 block">Who We Serve</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight mb-6 text-balance">
            Beneficiaries & Stakeholders
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            SRAVN serves a diverse range of stakeholders united by a common goal: enabling dignified pilgrimages for
            senior citizens.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {stakeholders.map((stakeholder, index) => (
            <motion.div
              key={stakeholder.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-lg bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="mb-4 mx-auto inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <stakeholder.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{stakeholder.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{stakeholder.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
