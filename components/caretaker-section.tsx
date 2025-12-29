"use client"

import { motion } from "framer-motion"
import { Shield, Award, Target, Heart } from "lucide-react"

const qualities = [
  {
    icon: Shield,
    title: "Discipline & Training",
    description: "Extensive training in discipline, responsibility, and structured conduct from military service.",
  },
  {
    icon: Target,
    title: "Crisis Management",
    description: "Experience in managing challenging environments and quick decision-making under pressure.",
  },
  {
    icon: Award,
    title: "Integrity & Accountability",
    description: "High standards of integrity, accountability, and ethical conduct ingrained through service.",
  },
  {
    icon: Heart,
    title: "Elder Care Aptitude",
    description: "Natural suitability for elder support roles with patience, respect, and empathy.",
  },
]

export function CaretakerSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="grid grid-cols-2 gap-4">
              {qualities.map((quality, index) => (
                <motion.div
                  key={quality.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-lg bg-card border border-border"
                >
                  <div className="mb-3 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                    <quality.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold mb-2 text-foreground">{quality.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{quality.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="text-sm font-medium uppercase tracking-wider text-primary mb-4 block">Our Caretakers</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight mb-6 text-balance">
              Ex-Army Personnel as Trained Companions
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
              Our caretakers are primarily ex-Army personnel, chosen for their exceptional training, discipline, and
              integrity. Their military background makes them uniquely qualified to provide reliable, respectful, and
              professional support to senior citizens during their pilgrimage.
            </p>

            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-muted">
              <img
                src="/indian-caretakers-wearing-olive-green-polo-shirts-w.jpg"
                alt="Professional SRAVN caretaker assisting senior during pilgrimage"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
