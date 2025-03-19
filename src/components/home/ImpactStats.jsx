"use client"
import { motion } from "framer-motion"
import AnimatedSection from "../common/AnimatedSection"
import { Heart, Users, Globe, Home } from "lucide-react"

const ImpactStats = () => {
  const stats = [
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      value: "$2.5M+",
      label: "Donations Raised",
      description: "Funds directed to critical programs and initiatives",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      value: "50,000+",
      label: "Lives Impacted",
      description: "Direct beneficiaries of our programs worldwide",
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      value: "25+",
      label: "Countries Reached",
      description: "Global presence with local impact",
    },
    {
      icon: <Home className="w-8 h-8 text-primary" />,
      value: "120+",
      label: "Projects Completed",
      description: "Sustainable initiatives creating lasting change",
    },
  ]

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Through the generosity of our donors and the dedication of our volunteers, we've made significant progress
            in our mission to uplift communities.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection key={index} delay={index * 0.1} direction="up">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-background rounded-lg p-6 shadow-sm border border-border"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="font-medium text-foreground mb-2">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImpactStats

