"use client"
import { motion } from "framer-motion"
import { Users, ArrowRight } from "lucide-react"
import AnimatedSection from "../common/AnimatedSection"
import Button from "../common/Button"

const VolunteerCTA = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-muted opacity-50" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative z-10 rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Volunteers working together"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-accent/30 rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-2xl -z-10" />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" className="space-y-6">
            <div className="inline-flex items-center space-x-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Users size={16} />
              <span>Join Our Community</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Become a Volunteer and Make a <span className="gradient-text">Real Difference</span>
            </h2>
            <p className="text-muted-foreground">
              Our volunteers are the heart of our organization. By contributing your time and skills, you can help
              create meaningful change in communities that need it most. Whether you have a few hours or a few days,
              your contribution matters.
            </p>
            <ul className="space-y-3">
              {[
                "Flexible volunteering opportunities to fit your schedule",
                "Use your unique skills to contribute to meaningful projects",
                "Connect with like-minded individuals passionate about change",
                "Gain valuable experience while making a positive impact",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            <div className="pt-4">
              <Button to="/volunteer" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
                Become a Volunteer
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default VolunteerCTA

